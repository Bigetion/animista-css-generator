const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          ${generator.fields('transform: scale3d(1, 1, 1)')}
        }
        30% {
          ${generator.fields('transform: scale3d(0.75, 1.25, 1)')}
        }
        40% {
          ${generator.fields('transform: scale3d(1.25, 0.75, 1)')}
        }
        50% {
          ${generator.fields('transform: scale3d(0.85, 1.15, 1)')}
        }
        65% {
          ${generator.fields('transform: scale3d(1.05, 0.95, 1)')}
        }
        75% {
          ${generator.fields('transform: scale3d(0.95, 1.05, 1)')}
        }
        100% {
          ${generator.fields('transform: scale3d(1, 1, 1)')}
        }
      `,
    )}
    .${className} {
      ${generator.fields(
        `animation: ${className} var(--animate-duration) both`,
      )}
    }
  `,
);

module.exports = animationClass;
