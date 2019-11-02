import VueHighlightJS from 'vue-highlight.js';

import 'highlight.js/styles/ocean.css';

import css from 'highlight.js/lib/languages/css';
import javascript from 'highlight.js/lib/languages/javascript';
import vue from 'vue-highlight.js/lib/languages/vue';

function setupHighlight(Vue) {
  Vue.use(VueHighlightJS, {
    languages: { css, javascript, vue }
  });
}

export default setupHighlight;
