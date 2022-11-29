const Pages = {
    home: `
        <!doctype html>
        <html>
            <head><title>Home</title></head>
            <body>
                <h1>Home</h1>
                <hr />
            </body>
        </html>
    `,
    about: `
        <!doctype html>
        <html>
            <head><title>About</title></head>
            <body>
                <h1>About</h1>
                <hr />
            </body>
        </html>
    `,
    pageNotFound: `
        <!doctype html>
        <html>
            <head><title>Not found</title></head>
            <body>
                <h1>Not found</h1>
                <hr />
            </body>
        </html>
    `
};

// Explore what is "exports" and how it is different from module.exports
console.log( module.exports ); // {} -> an empty object

// adding property "Pages" to the module.exports object
// module.exports.Pages = Pages

module.exports = {
    // Pages: Pages
    Pages,
    // add more exports
};

// whatever is module.exports at this point will be what is available to other files importing this module