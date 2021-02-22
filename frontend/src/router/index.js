import Vue from 'vue'
import VueRouter from 'vue-router'
// Top Level
import Home from '../pages/Home.vue'
import Standard from '../pages/Standard';
import News from '../pages/News';
import Sales from '../pages/Sales';
import Contact from '../pages/Contact';
import Service from '../pages/Service';
// Products
import Products from '../pages/Products';
import Teppichfliesen from '../pages/products/Teppichfliesen';
import Teppichdielen from '../pages/products/Teppichdielen';
import Downloads from '../pages/products/Downloads';
import Accessories from '../pages/products/Accessories';
// Company
import Company from '../pages/Company';
import About from '../pages/company/About';
import Production from '../pages/company/Production';
import Credentials from '../pages/company/Credentials';
// Service
import FAQ from '../pages/service/FAQs';
import Installation from '../pages/service/Installation';
import Care from '../pages/service/Care';

Vue.use(VueRouter)

const routes = [
  // Home
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // Products
  {
    path: '/products',
    name: 'Products',
    component: Products,
  },
  {
    path: '/products/',
    name: 'Product Page',
    component: Standard,
    children: [
      {
        path: 'teppichfliesen',
        component: Teppichfliesen
      },
      {
        path: 'teppichdielen',
        component: Teppichdielen
      },
      {
        path: 'downloads',
        component: Downloads
      },
      {
        path: 'accessories',
        component: Accessories
      }
    ]
  },
  {
    path: '/company',
    name: 'Company',
    component: Company,
  },
  // Company
  {
    path: '/company/',
    name: 'Company Page',
    component: Standard,
    children: [
      {
        path: 'about',
        component: About
      },
      {
        path: 'production',
        component: Production
      },
      {
        path: 'credentials',
        component: Credentials
      }
    ]
  },
  // News
  {
    path: '/news',
    name: 'News',
    component: News
  },
  // Service
  {
    path: '/service',
    name: 'Service',
    component: Service
  },
  {
    path: '/service/',
    name: 'Service Page',
    component: Standard,
    children: [
      {
        path: 'faq',
        component: FAQ
      },
      {
        path: 'installation',
        component: Installation
      },
      {
        path: 'care-instructions',
        component: Care
      }
    ]
  },
  // Sales
  {
    path: '/sales',
    name: 'Sales',
    component: Sales
  },
  // Contact
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
