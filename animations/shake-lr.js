const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0%,
        100% {
          ${generator.fields(
            'transform: rotate(0deg)',
            'transform-origin: 50% 50%',
          )}
        }
        10% {
          ${generator.fields('transform: rotate(8deg)')}
        }
        20%,
        40%,
        60% {
          ${generator.fields('transform: rotate(-10deg)')}
        }
        30%,
        50%,
        70% {
          ${generator.fields('transform: rotate(10deg)')}
        }
        80% {
          ${generator.fields('transform: rotate(-8deg)')}
        }
        90% {
          ${generator.fields('transform: rotate(8deg)')}
        }
      `,
    )}
    .${className} {
      ${generator.fields(
        `animation: ${className} var(--animate-duration) cubic-bezier(0.455, 0.030, 0.515, 0.955) both`,
      )}
    }
  `,
);

module.exports = animationClass;
