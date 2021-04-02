const fetch = require("node-fetch");
const fs = require("fs").promises;
const base64 = require("base-64");
//const resolved = process.env.LAMBDA_TASK_ROOT ? path.resolve(process.env.LAMBDA_TASK_ROOT, file) : path.resolve(__dirname, file);
const endpoint = "https://api.github.com/repos/tannerdolby/angular-node-blog-template/contents/dist/blog-client/pages";

const findAndRead = async (apiUrl) => {
    try {
        let file = await fetch(`${apiUrl}`)
            .then(response => response.json())
            .then(json => json)
            .catch(err => console.error(err + " ITS HAPPENING in findAndRead"));
        let decoded = base64.decode(file.content);
        return decoded;
    } catch (err) {
        return err;
    }
}

const extract = (p) => {
    let data = p
            .then(response => response)
            .then(data => data)
            .catch(err => err);
    return data;
}

// hit the post metadata endpoint to merge data together
const fetchMetaData = (url) => {
    return fetch(url, { headers: {
        'Accept': 'application/json',
        'Allow': 'application/vnd.github.v3+json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS'
    }});
}

function slugify(str) {
    let regex = new RegExp(/\W+/, 'gm');
    let slug = str.replace(regex, " ").toLowerCase().split(" ").join("-");
    return slug;
}

exports.handler = async (event, context) => {
    const postName = event.queryStringParameters.name;
    
    // Fetch directory of blog post files from GitHub API
    return fetch(endpoint, { headers: { 
        'Accept': 'application/json',
        'Allow': 'application/vnd.github.v3+json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS'
        } 
    })
        .then((response) => response.json())
        .then(async (data) => {
            try {
                let meta = await fetchMetaData("https://api.github.com/repos/tannerdolby/angular-node-blog-template/contents/dist/blog-client/assets/blog.json")
                        .then(response => response.json())
                        .then(json => json)
                        .catch(err => console.error(err + "THIS IS WHERE ITS FAILING"));
                let metadata = JSON.parse(base64.decode(meta.content))
                        .filter(d => {
                            return slugify(d.title) === postName;
                        })
        
                metadata[0].slug = slugify(metadata[0].title);

                let file = data.filter(f => {
                    return f.name === metadata[0].template;
                });

                // assuming some-url?ref=master (just slicing off the branch reference)
                const apiUrl = file[0].url.slice(0, file[0].url.length - 11);
                
                // use filtered file object url in function to hit GitHub API
                let content = await extract(findAndRead(apiUrl));
                
                return {
                    statusCode: 200,
                    body: JSON.stringify({ contents: content, metadata: metadata })
                }
            } catch (err) {
                console.error(err, "OR HERE");
            }
        })
        .catch(error => ({ statusCode: 422, body: String(error) }))
};