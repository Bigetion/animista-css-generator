const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          ${generator.fields('transform: scale(1) rotate3d(1, 1, 0, 0deg)')}
        }
        50% {
          ${generator.fields('transform: scale(0.4) rotate3d(1, 1, 0, -90deg)')}
        }
        100% {
          ${generator.fields('transform: scale(1) rotate3d(1, 1, 0, -180deg)')}
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
