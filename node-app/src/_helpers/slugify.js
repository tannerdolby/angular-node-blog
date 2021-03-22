function slugify(url) {
    const slug = url.toLowerCase().split(" ").join("-");
    return slug;
}

module.exports = slugify;