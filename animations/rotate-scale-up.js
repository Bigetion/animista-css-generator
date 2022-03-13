const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          ${generator.fields('transform: scale(1) rotateZ(0)')}
        }
        50% {
          ${generator.fields('transform: scale(2) rotateZ(180deg)')}
        }
        100% {
          ${generator.fields('transform: scale(1) rotateZ(360deg)')}
        }
      `,
    )}
    .${className} {
      ${generator.fields(
        `animation: ${className} var(--animate-duration) linear both`,
      )}
    }
  `,
);

module.exports = animationClass;
