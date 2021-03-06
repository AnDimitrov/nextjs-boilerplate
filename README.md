## Boilerplate
Boilerplate with React, Ant Design, Next, Express, Mongoose, MongoDB, Storybook.
Based on [Builder Book boilerplate](https://github.com/builderbook/builderbook/tree/master/boilerplate "Builder Book boilerplate")

## Contents
- [Features](#features)
- [Run locally](#run-locally)
- [Built with](#built-with)
  - [Core stack](#core-stack)
  - [Third party APIs](#third-party-apis)
- [Project structure](#project-structure)

## Features
* **dotenv** for using environment variables
* **express** as the server
* **prettier** and **eslint** configured with **airbnb**'s styleguide for formating code
* **husky** and **lint-staged** for autoformatting code before commit
* **storybook** for interactive UI component dev & test

## Run locally
- Clone the project and run `yarn` to add packages.
- Before you start the app, create a `.env` file at the app's root. This file must have values for env variables specified below.
  - To get `MONGO_URL_TEST`, we recommend a [free MongoDB at mLab](http://docs.mlab.com/).
  - Get `Google_clientID` and `Google_clientSecret` by following [official OAuth tutorial](https://developers.google.com/identity/sign-in/web/sign-in#before_you_begin).

    Important: For Google OAuth app, callback URL is: http://localhost:8000/oauth2callback

    Important: You have to enable Google+ API in your Google Cloud Platform account.

  - Specify your own secret key for Express session `SESSION_SECRET`: https://github.com/expressjs/session#secret.

  `.env` :
  ```
  MONGO_URL_TEST="XXXXXX"

  Google_clientID="XXXXXX"
  Google_clientSecret="XXXXXX"

  SESSION_SECRET="XXXXXX"
  ```

- Start the app with `yarn dev`.
- The _first registered user_ in the app becomes an Admin user (`"isAdmin": true`).

## Built with

#### Core stack
- [React](https://github.com/facebook/react)
- [Ant Design](https://github.com/ant-design/ant-design)
- [Next](https://github.com/zeit/next.js)
- [Express](https://github.com/expressjs/express)
- [Mongoose](https://github.com/Automattic/mongoose)
- [MongoDB](https://github.com/mongodb/mongo)
- [Storybook](https://storybook.js.org/)

#### Third party APIs
- Google OAuth

Check out [package.json](https://github.com/AnDimitrov/nextjs-boilerplate/blob/master/package.json).


## Project structure

```
.
├── .storybook            # Storybook configs
│   ├── addons.js         # Addons
│   ├── config.js         # Config
│   ├── webpack.config.js # Custom webpack config
├── asserts               # Asserts
│   ├── ant-custom.less   # Ant Design custom Less variables
│   ├── styles.less       # Override Ant Design styles
├── components            # React components
│   ├── Header.js         # Header component
│   ├── MenuDrop.js       # Dropdown menu
├── lib                   # Code available on both client and server
│   ├── withAuth.js       # HOC that passes user to pages and more
│   ├── withLayout.js     # HOC for SSR with Ant Design UI and more
├── pages                 # Pages
│   ├── login.js          # Login page
│   ├── _app.js           # Main component to initialize pages
│   ├── _document.js      # Main Document for Next.js pages
│   ├── index.js          # Main page
│   ├── dashboard.js      # Dashboard page
│   ├── settings.js       # Settings page
├── server                # Server code
│   ├── models            # Mongoose models
│   │   ├── User.js       # User model
│   ├── app.js            # Custom Express/Next server
│   ├── google.js         # Google OAuth API
├── static                # Static resources
├── stories               # Storybook stories
│   ├── index.js          # Main story for Storybook
├── .babelrc              # Config for Babel
├── .env.example          # Example environment variables
├── .eslintignore         # List of ignored files and directories for eslint
├── .eslintrc.js          # Config for Eslint
├── .gitignore            # List of ignored files and directories
├── .prettierignore       # List of ignored files and directories for prettier
├── next.config.js        # Custom configuration for Nextjs
├── package.json          # List of packages and scripts
├── yarn.lock             # Exact versions of packages. Generated by yarn.

```
