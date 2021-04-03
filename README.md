# angular-node-blog-template
A starter site for creating your own blog with Angular and Node.js. Angular Material was used for UI components and Express.js as the Node framework.

## Getting Started
To get the project running locally on your machine:
1. Click the "Use this template" button or fork this repository
2. Clone `git clone git@github.com:your-username/angular-node-blog-template.git`
3. Install dependencies `npm install` (in both `blog-client` and `node-app` directories)
4. Serve locally `npm run dev` in `node-app` (you can also optionally run the Angular `blog-client` with `ng serve`)

## Features
- Home page with recent posts
- Blog page with all blog posts
- Post page with the specific blog post
- About me page
- Contact me page

## Hosting

You can headover to [Netlify](https://www.netlify.com/) to create an account if you don't already have one. Once you have setup the project locally, ie you clicked "Use this template" button or forked the repository. Next, simply login to your Netlify account and click "New site from git" then choose the repository in your users organization where this template is and your site will be deployed! 

Once your site is deployed on Netlify, make sure to take note of the sites URL. You will need to update the API endpoints located in `blog-client/assets/endpoints.ts`. This makes sure the right endpoints are being hit when making API calls. See [Notes](https://github.com/tannerdolby/angular-node-blog-template/blob/master/NOTES.md) for more.

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
        "preview": "MongoDB is becoming a popular choice when choosing a database. I personally really enjoy working with NoSQL databases like MongoDB because I prefer using JSON to store data rather than columns and rows."
    }
]
```

Now all of your blog posts in the `/pages` directory and post metadata in `/assets/blog.json` will be read by an API endpoint that's utilizing the [GitHub REST API](https://docs.github.com/en/rest) to fetch a files contents. The `contents` key when using the GitHub API endpoints for retreiving a file contains the files contents base64 encoded. There are options for getting the raw text but for the sake of this project, I just imported `base64` and used `.decode()` to get the decoded base64 file contents.

I originally used the [File System](https://nodejs.org/api/fs.html) module when developing locally but the lambda functions didn't play nicely with bringing other static files with them to aws, therefore the GitHub REST API allows us to fetch a file and read it's contents.

Each post will be accessible via `/blog/some-post` where the title `some-post` represents the `title` keys in `blog.json` with the value slugified, (ie `title: "My Post"` would be accessed at `/blog/my-post`). You can view all blog posts via `/blog` and the most recent posts on the homepage. 

## Making changes

Once your local project is running and checked into Netlify, everytime you push changes to that repository Netlify will trigger a build and redeploy the site. If you write any new blog posts in the `/pages` directory and update `/blog.json` with post metadata. Make sure to run `npm run build` from the projects root directory. This creates the Angular production build files and also builds the Lambda functions. Now you can simply commit and push your changes. After Netlify builds and redeploys the site, you will see your updates have taken place. 

## Improvements
- Add some sort of caching, so the GitHub API endpoints don't need to fire every page reload.

## Contributing
Feel free to contribute to this project by suggesting a new feature or modification. I built this template for others to use and personalize, so don't hesitate to let me know what you'd like to see added/modified.

- Open an [issue](https://github.com/tannerdolby/angular-node-blog-template/issues) for any features/modifications you would like too see.
- Have a look at the contributing guidelines before submitting a PR.

## Remarks
I'd love to see this being used out in the wild, so if you setup your blog using this template feel free to tweet about it and [tag me](https://twitter.com/tannerdolby)! 🚀

### Other `npm` commands
- `npm run build`: Builds the Angular app and Netlify lambda functions.
- `npm run start`: Serves the Node/Express app locally.
- `npm run dev`: Serves the Node/Express app locally with [hot reloading](https://www.npmjs.com/package/nodemon).
- `npm run serve`: Serves the Netlify lambda app locally.
- `npm run build-lambda`: Builds the `functions` folder for lambda app.
- `netlify dev`: Serves the Netlify lambda functions and app locally.

## Maintainer
[@tannerdolby](https://github.com/tannerdolby)

## License
This project is under the [MIT](https://github.com/tannerdolby/angular-node-blog-template/blob/master/LICENSE.md) license.