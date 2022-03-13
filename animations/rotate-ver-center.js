const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          ${generator.fields('transform: rotateY(0)')}
        }
        100% {
          ${generator.fields('transform: rotateY(360deg)')}
        }
      `,
    )}
    .${className} {
      ${generator.fields(
        `animation: ${className} var(--animate-duration) ease-in-out both`,
      )}
    }
  `,
);

module.exports = animationClass;
