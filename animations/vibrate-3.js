const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          ${generator.fields('transform: translate(0)')}
        }
        10% {
          ${generator.fields('transform: translate(-2px, -2px)')}
        }
        20% {
          ${generator.fields('transform: translate(2px, -2px)')}
        }
        30% {
          ${generator.fields('transform: translate(-2px, 2px)')}
        }
        40% {
          ${generator.fields('transform: translate(2px, 2px)')}
        }
        50% {
          ${generator.fields('transform: translate(-2px, -2px)')}
        }
        60% {
          ${generator.fields('transform: translate(2px, -2px)')}
        }
        70% {
          ${generator.fields('transform: translate(-2px, 2px)')}
        }
        80% {
          ${generator.fields('transform: translate(-2px, -2px)')}
        }
        90% {
          ${generator.fields('transform: translate(2px, -2px)')}
        }
        100% {
          ${generator.fields('transform: translate(0)')}
        }
      `,
    )}
    .${className} {
      ${generator.fields(
        `animation: ${className} var(--animate-duration) linear infinite both`,
      )}
    }
  `,
);

module.exports = animationClass;
