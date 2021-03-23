# angular-node-blog-template
A starter site for creating your own blog with Angular and Node.js.

## Getting Started
To get the project running locally on your machine:
1. Fork this repository
2. Clone `git clone git@github.com:tannerdolby/angular-node-blog-template.git`
3. Install dependencies `npm install` (in both `blog-client` and `node-app` directories)
4. Serve locally `npm run dev` in `node-app` (you can also optionally run the angular client with `ng serve`)

## Features
- Home page with recent posts
- Blog page with all blog posts
- Post page with the specific blog post
- About me page
- Contact me page

## Usage
All blog posts will be stored in the `blog-client/src/app/pages` directory in the angular client. To add a new blog post, simply create a new HTML file, `new-post.html` in the `/pages` directory and write your post.

After creating your blog post in the `/pages` directory, update the `blog-client/src/assets/blog.json` file with the post metadata.

```json
[
    {
        "title": "Learn about Collections in MongoDB",
        "date": "3/22/2021",
        "tags": [
            "mongodb",
            "nosql"
        ],
        "template": "learn-mongo-db.html",
        "image": "./assets/images/mongodb.jpeg",
        "preview": "MongoDB is becoming one the most versatile and popular databases. I personally really enjoy working with NoSQL databases like MongoDB because I prefer using JSON to store data rather than columns and rows (vanilla SQL)."
    }
]
```

Now all of your blog posts in the `/pages` directory and metadata in `/assets/blog.json` will be read by an API endpoint that's utilizing the [File System](https://nodejs.org/api/fs.html) module. Each post will be accessible via `/blog/some-post` where `some-post` represents the `title` keys in `blog.json` with the value slugified, (ie `title: "My Post"` would be accessed at `/blog/my-post`). You can view all blog posts via `/blog`. 

## Improvements
- Add deployment options to Netlify

## Contributing
Feel free to contribute to this project by suggesting a new feature or modification. I built this template for others to use and personalize, so don't hesitate to let me know what you'd like to see added/modified.

- Open an [issue](https://github.com/tannerdolby/angular-node-blog-template/issues) for any features/modifications you would like too see.
- Have a look at the contributing guidelines before submitting a PR.

## Maintainer
[@tannerdolby](https://github.com/tannerdolby)

## License
This project is under the [MIT](https://github.com/tannerdolby/angular-node-blog-template/blob/master/LICENSE.md) license.