
import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import Hello from './app.vue'

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#app1',
    render: r => r(Hello)
  } 
});

export const bootstrap = [
  vueLifecycles.bootstrap,
];

export function mount(props) {
  createDomElement();
  return vueLifecycles.mount(props);
}

export const unmount = [
  vueLifecycles.unmount,
];

function createDomElement() {
  let el = document.getElementById('app1');

  if (!el) {
      el = document.createElement('div');
      el.id = 'app1';
      document.body.appendChild(el);
  }
  return el;
}