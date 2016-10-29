import Home from '../ui/pages/Home.jsx';
import About from '../ui/pages/About.jsx';
import NotFound from '../ui/pages/NotFound.jsx';
import Contacts from '../ui/pages/Contacts.js';
import Chats from '../ui/pages/Chats.js'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/contacts',
    component: Contacts
  },
  {
    path: '/chats',
    component: Chats
  },
  {
    path: '*',
    component: NotFound
  }
];

export default routes;
