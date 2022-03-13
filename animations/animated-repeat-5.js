const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    .${className} {
      ${generator.fields(
        'animation-iteration-count: calc(1 * 5)',
        'animation-iteration-count: calc(var(--animate-repeat) * 5)',
      )}
    }
  `,
);

module.exports = animationClass;
