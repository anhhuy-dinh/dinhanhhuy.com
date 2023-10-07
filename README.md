# dinhanhhuy.com

NextJS + Tailwind CSS + Notion as CMS + [notion-x](https://github.com/dinhanhthi/notion-x).

👉 An example of Notion Database for notes: [check here](https://thi-cs.notion.site/thi-cs/98af612503b54cc8b9ee527957418d6e?v=ed9d8334d20043c1ab9ea831022b2999).

## Dev

> **IMPORTANT**: Keep using Next `v13.4.7`, otherwise we have this issue `Uncaught Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object.`!

🚨 You have to install **globally** [Nodejs >=18](https://nodejs.org/en) (recommend using [nvm](https://github.com/nvm-sh/nvm)) and [Yarn](https://yarnpkg.com/) first.

```bash
# install
yarn

# clone submodule notion-x (when installing only)
git submodule update --init --recursive

# ud notion-x
git submodule update --recursive --remote
# or yarn getlib

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