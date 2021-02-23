## Frontend

Vue.js scaffolded frontend utilising Webpack. Simply vue-router setup and Sass scoped CSS setup.

Can be run locally using: `npm run serve`

`index.js` - Routes file

`MainLayout.vue` - Base file that all over Vue's are rendered into, has site navigation / site level components (footer etc should be in this file). Also pre-loads the siteConfig using a mixin. All site level configuration should go in this file. It can then be accessed in other pages/components using the window. Simply add `siteConfig: window.globalConfig` to your Vue data object.

`api-calls.js` - Start of a very simple set of API calls for accessing the headless Wordpress backend. Additional calls can be added here.

`colors.scss` - Used for global site colours, all colours should be utilised from here to make re-branding/editing much easier.

'Top level' pages directly under the `pages` directory. All sub-pages are in their respective folders as they are children of a 'top level' page. This is clearer when looking at the route structure.

Components stored under the `components` directory. All components should be as _**generic**_ as possible with styles only to affect their own internal structure. Meaning they can easily be re-utilised in other areas without having to change styles.



## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
