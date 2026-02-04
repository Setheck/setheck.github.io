# Deploying to GitHub Pages

Instructions to run and deploy the site.

- Install dependencies:

```
npm install
```

- Run dev server:

```
npm run dev
```

- Build for production:

```
npm run build
```

- Deploy (uses `gh-pages`):

```
npm run deploy
```

Notes:
- This project uses hash-based routing (`createWebHashHistory`) so client-side routes work on GitHub Pages.
- For a user/organization site named `username.github.io` you may also serve from the repository root. Using `gh-pages` will publish to the `gh-pages` branch.
