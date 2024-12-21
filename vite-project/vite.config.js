import {
    defineConfig
}
    from "vite";
export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: "index.html",
                about: "about.html",
                contact: "contact.html",
                destination: "destination.html",
                blog: "blog.html",
                ['single-blog'] : "single-blog.html"
            },
    },
},
});