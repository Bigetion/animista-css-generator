const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          ${generator.fields('transform: scale(1)')}
        }
        50% {
          ${generator.fields('transform: scale(0.9)')}
        }
        100% {
          ${generator.fields('transform: scale(1)')}
        }
      `,
    )}
    .${className} {
      ${generator.fields(
        `animation: ${className} var(--animate-duration) ease-in-out infinite both`,
      )}
    }
  `,
);

module.exports = animationClass;
