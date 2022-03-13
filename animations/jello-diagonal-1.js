const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          ${generator.fields('transform: skew(0deg 0deg)')}
        }
        30% {
          ${generator.fields('transform: skew(25deg 25deg)')}
        }
        40% {
          ${generator.fields('transform: skew(-15deg, -15deg)')}
        }
        50% {
          ${generator.fields('transform: skew(15deg, 15deg)')}
        }
        65% {
          ${generator.fields('transform: skew(-5deg, -5deg)')}
        }
        75% {
          ${generator.fields('transform: skew(5deg, 5deg)')}
        }
        100% {
          ${generator.fields('transform: skew(0deg 0deg)')}
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
