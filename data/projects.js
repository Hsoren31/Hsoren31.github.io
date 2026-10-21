export default [
  {
    title: "Blog API",
    description: [
      "A blogging platform built as a monorepo: one REST API powering two React apps. Readers browse posts and join threaded conversations. Authors write and manage posts from their own dashboard.",
      "Includes JWT authentication, validation middleware, tags, and author profiles.",
    ],
    techStack: ["React", "React Router", "Node.js", "Express", "Prisma", "JWT"],
    liveLink: "https://blog-ten-tan-16.vercel.app",
    githubLink: "https://github.com/Hsoren31/blog-api",
    imgUrl: "/assets/blog-api.webp",
  },
  {
    title: "File Uploader",
    description: [
      "A simplified cloud storage app, a little like Google Drive. Sign in, create folders, and upload images. Files live in Cloudinary while the app keeps track of where everything is.",
      "Sessions are stored in the database, so you stay signed in. Uploads accept JPEG and PNG.",
    ],
    techStack: ["Express", "Prisma", "Passport.js", "Multer", "Cloudinary"],
    liveLink: "https://fileuploader-production-5183.up.railway.app",
    githubLink: "https://github.com/Hsoren31/file_uploader",
    imgUrl: "/assets/file-uploader.webp",
  },
  {
    title: "Inventory App",
    description: [
      "A full-stack CRUD app for browsing games by genre and developer. A game can have many genres and many developers, so the data model is many-to-many. The database layer is raw SQL through the pg client, with no ORM.",
    ],
    techStack: ["Node.js", "Express", "PostgreSQL", "EJS", "CSS"],
    liveLink: "https://inventory-app-production-c7fd.up.railway.app/",
    githubLink: "https://github.com/Hsoren31/inventory-app",
    imgUrl: "/assets/inventory-app.webp",
  },
];
