# Why build it?
I built this blog template as a way to practice using Angular and Node.js/Express for a side project. It showcases Angular Material, GitHub REST API, Netlify lambda functions and Netlify for hosting.

# How does it work?
Coming from a background of using Static Site Generators (Eleventy), I've been craving being able to write a bunch of blog posts and put their contents in a *single* post template where each of the blog posts can live when they are fetched to be read. Sort of like a CMS would work, you write your posts and then pull in that data to your application. 

With Angular, I thought it wouldn't make much sense to create a component for every blog post, that just seems like unecessary work as the only part that really matters is the Markup or `name.component.html` template file. 

The `/assets/pages` directory is where all the blog post `.html` files are stored and the `/assets/blog.json` file is where all post metadata lives.

The `pages` directory will hold every blog posts `.html` file. If I was thinking about writing a new post, I would first create the file in `/assets/pages` as `some-new-post.html` and give the file some content,

```html
<h1>Welcome to my post!</h1>
<p>This is some text</p>
```

and provide metadata for that post in `/assets/blog.json` by creating a new post object:

```json
[
    {
        "title": "Some New Post",
        "date": "3/29/2021",
        "tags": [
            "mongodb",
            "nosql"
        ],
        "template": "some-post.html",
        "image": "./assets/images/mongodb.jpeg",
        "preview": "Some post preview"
    }
]

```

Now you can sit back and let Node.js do the work of reading the blog post files in `/assets/pages` to extract their content and then send the metadata and post HTML to the Angular service to be rendered on the page. The GitHub REST API is utilized to grab the `blog.json` metadata file and blog posts in the `/pages` directory. This file reading job was originally handled by the File System Module but since Netlify lambda functions don't bring along static assets with them in the `functions` folder, I was forced to fallback to fetching files and their contents using the GitHub API endpoints.

# Closing remarks
When you deploy your own site using this template on Netlify, you must update the `/assets/endpoints.ts` file which holds all of the API endpoint URLs. The `prod` fields take the highest priority where the other two can be left out in terms of the app running in production after deployment.

The GitHub REST API does have a limited rate for hitting the endpoints (1500 requests per hour). This causes a small problem as the app relies on the REST API's endpoints for fetching file data. The rate is relatively high per hour but if your site was quite busy this would lead to a problem. I think one way around this is caching the first API requests for metadata and the posts directory then simply reuse that data throughout the app. Making only 1-2 API calls no matter the traffic instead of a call for everytime a new page is navigated too.

Netlify starter accounts provide really great features for hosting your own website or blog. I've usually only used [Netlify](https://netlify.com) for hosting static sites, but since they introduced [Netlify Lambda functions](), which are essentially AWS Lambda functions. We are now able to host full stack applications through Netlify. The netlify functions we create are deployed as API endpoints which is really cool.

[Pricing is metered](https://www.netlify.com/blog/2018/03/20/netlifys-aws-lambda-functions-bring-the-backend-to-your-frontend-workflow/) for the Netlify Lambda functions so keep that in mind if you choose to host this full stack app with Netlify. Unless you expect alot of site traffic, the Netlify starter account limits are plenty for a personal website.

You can find more detail about this project [here](https://tannerdolby.com/writing/creating-a-blog-template-with-angular-and-node.js/). 

Thanks for reading! 🚀