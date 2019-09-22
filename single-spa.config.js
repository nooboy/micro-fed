import { registerApplication, start } from 'single-spa'

registerApplication(
  'app1', 
  () => import('./app1/main.js'),
  pathPrefix('app1')
);

registerApplication(
  'app2',
  () => import('./app2/main.js'),
  pathPrefix('app2')
);

registerApplication(
  'app3',
  // () => import('./app3/src/singleSpaEntry.js'),
  () => import('./app3/release/singleSpaEntry.js'),
  pathPrefix('app3')
);

start();

function pathPrefix(prefix) {
  return function(location) {
      return location.pathname.indexOf(`${prefix}`) === 0;
  }
}