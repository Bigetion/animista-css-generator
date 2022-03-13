const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          ${generator.fields('transform: scale(1) rotateX(0)')}
        }
        50% {
          ${generator.fields('transform: scale(0.4) rotateX(90deg)')}
        }
        100% {
          ${generator.fields('transform: scale(1) rotateX(180deg)')}
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
