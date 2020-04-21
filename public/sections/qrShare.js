import { h } from 'https://unpkg.com/hyperapp?module=1';

import { section } from '/components/section.js';

export const qrShare = () => h(section, {
  class: {
    'sm:flex': true,
    'flex-col': true,
    'items-center': true,
    'justify-center': true,
    'hidden': true,
  },
}, [
  h('div', {
    class: {
      'text-md': true,
      'mb-3': true,
    },
  }, 'Scan this code to get the timer on your phone'),
  h('img', {
    src: `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${window.location}`,
    class: {
      'mb-3': true,
    },
  }),
]);