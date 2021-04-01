export const endpoints = {
    "prod": {
        "post": "https://modest-bhabha-3a9de8.netlify.app/.netlify/functions/post",
        "postsMetadata": "https://modest-bhabha-3a9de8.netlify.app/.netlify/functions/metadata",
        "recentPosts": "https://modest-bhabha-3a9de8.netlify.app/.netlify/functions/metadata",
        "postsByTag": "https://modest-bhabha-3a9de8.netlify.app/.netlify/functions/tagged"
    },
    "lambda-dev": {
        "post": "http://localhost:9000/.netlify/functions/app/blog/",
        "recentPosts": "http://localhost:9000/.netlify/functions/app/recent",
        "postsMetadata": "http://localhost:9000/.netlify/functions/app/blog",
        "postsByTag": "http://localhost:9000/.netlify/functions/app/blog/topics"
    },
    "express-dev": {
        "post": "http://localhost:4000/blog/",
        "recentPosts": "http://localhost:4000/recent",
        "postsByTag": "http://localhost:4000/blog/topics"
    }
};