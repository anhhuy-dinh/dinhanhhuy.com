# dinhanhthi.com-v6

NextJS + Tailwind CSS + Notion as CMS + [notion-nextjs-lib](https://github.com/dinhanhthi/notion-nextjs-lib).

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