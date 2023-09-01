# dinhanhthi.com-v6

NextJS + Tailwind CSS + Notion as CMS + [notion-nextjs-lib](https://github.com/dinhanhthi/notion-nextjs-lib).

👉 An example of Notion Database for notes: [check here](https://thi-cs.notion.site/thi-cs/98af612503b54cc8b9ee527957418d6e?v=ed9d8334d20043c1ab9ea831022b2999).

## Previous versions

👉 Version 1 (Jekyll): [v1.dinhanhthi.com](https://v1.dinhanhthi.com) -- [source](https://github.com/dinhanhthi/dinhanhthi.com-v1).<br />
👉 Version 2 (Jekyll): [v2.dinhanhthi.com](https://v2.dinhanhthi.com) -- [source](https://github.com/dinhanhthi/dinhanhthi.com-v2).<br />
👉 Version 3 (Jekyll): [v3.dinhanhthi.com](https://v3.dinhanhthi.com) -- [source](https://github.com/dinhanhthi/dinhanhthi.com-v3).<br />
👉 Version 4 (Gatsby, canceled at 60%): [demo of what I did](https://dinhanhthi-com-v4-gatsby.netlify.app/) -- [source](https://github.com/dinhanhthi/dinhanhthi.com-v4-gatsby).<br />
👉 Version 5 (11ty): [v5.dinhanhthi.com](https://v5.dinhanhthi.com) -- [source](https://github.com/dinhanhthi/dinhanhthi.com-v5).

## Dev

> **IMPORTANT**: Keep using Next `v13.4.7`, otherwise we have this issue `Uncaught Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object.`!

```bash
# install
yarn

# dev
yarn dev

# build
yarn build

# serve (need to build first)
yarn start

# update notion-nextjs-lib
yarn getlib

# reinstall all
yarn reinstall

# clean
yarn clean

# prettier
yarn prettier

# clear yarn cache (helpful sometimes)
yarn cache clean
```

Deploy to vercel,

```bash
vercel dev # like yarn dev

vercel build

# preview only
vercel deploy

# production
vercel --prod
```

Update images URLs,

```bash
# Update a single cover to cloudinary
yarn ud-cover <postId>

# Update all covers from all posts to cloudinary
yarn ud-cover-all

# Update a single icon to cloudinary
yarn ud-icon <postId>

# Update all icons from all posts to cloudinary
yarn ud-icon-all

# Update all images in a post to cloudinary
yarn ud-images-post <postId>
```