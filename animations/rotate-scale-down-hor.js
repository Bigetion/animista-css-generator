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
          ${generator.fields('transform: scale(0.5) rotateX(-180deg)')}
        }
        100% {
          ${generator.fields('transform: scale(1) rotateX(-360deg)')}
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
