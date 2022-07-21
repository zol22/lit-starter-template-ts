import {Router} from '@vaadin/router';
import './my-element';

window.addEventListener('load', () => {
  initRouter();
});
function initRouter() {
  const router = new Router(document.querySelector('main'));
  router.setRoutes([
    {
      path: '/',
      component: 'my-element',
    },
  ]);
}
