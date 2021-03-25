function slugify(str) {
    // match any non-word character
    const regex = new RegExp(/\W+/, "gm");
    let slug = str.replace(regex, " ").toLowerCase().split(" ").join("-");
    return slug;
}

module.exports = slugify;