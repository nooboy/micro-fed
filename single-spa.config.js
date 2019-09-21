import { registerApplication, start } from 'single-spa'

registerApplication(
  'test1', 
  () => import('./src/test1/main.js'),
  () => /test1/.test(location.pathname) || location.pathname === '/'
);

registerApplication(
  'test2',
  () => import('./src/test2/main.js'),
  () => /test2/.test(location.pathname)
);

start();