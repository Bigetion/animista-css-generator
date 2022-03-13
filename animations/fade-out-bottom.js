const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          ${generator.fields('transform: translateY(0)')}
          opacity: 1;
        }
        100% {
          ${generator.fields('transform: translateY(50px)')}
          opacity: 0;
        }
      `,
    )}
    .${className} {
      ${generator.fields(
        `animation: ${className} var(--animate-duration) ease-out both`,
      )}
    }
  `,
);

module.exports = animationClass;
