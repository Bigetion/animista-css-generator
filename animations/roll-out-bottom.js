const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          ${generator.fields('transform: translateY(0) rotate(0deg)')}
          opacity: 1;
        }
        100% {
          ${generator.fields('transform: translateY(800px) rotate(540deg)')}
          opacity: 0;
        }
      `,
    )}
    .${className} {
      ${generator.fields(
        `animation: ${className} var(--animate-duration) ease-in both`,
      )}
    }
  `,
);

module.exports = animationClass;
