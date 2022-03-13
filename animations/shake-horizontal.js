const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0%,
        100% {
          ${generator.fields('transform: translateX(0)')}
        }
        10%,
        30%,
        50%,
        70% {
          ${generator.fields('transform: translateX(-10px)')}
        }
        20%,
        40%,
        60% {
          ${generator.fields('transform: translateX(10px)')}
        }
        80% {
          ${generator.fields('transform: translateX(8px)')}
        }
        90% {
          ${generator.fields('transform: translateX(-8px)')}
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
