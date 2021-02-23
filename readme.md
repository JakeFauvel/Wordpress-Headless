# Wordpress headless CMS setup

## Backend

Using additional plugins to extend the Wordpress default API. Custom posts/API calls can be made to return custom data for the Vue.js frontend.

**Installed plugins:**
* ACF to REST API (Exposes Advanced Custom Fields Endpoints in the WordPress REST API)
* Advanced Custom Fields (Customize WordPress with powerful, professional and intuitive fields)
* Custom Post Type UI (Admin panel for creating custom post types and custom taxonomies in WordPress)
* WP-REST-API V2 Menus (Adding menus endpoints on WP REST API v2)

**_Backend can be run locally simply using WAMP/MAMP._** 

**Username**: admin  
**Password**: password

## Frontend

Vue.js scaffolded frontend utilising Webpack. Simply vue-router setup and Sass scoped CSS setup.

Attempting to make the frontend as generic as possible in order to keep the structure flexible for rebranding/other sites.

Can be run locally using: `npm run serve`
