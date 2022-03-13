const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          ${generator.fields('transform: scale(0.2)')}
          opacity: 0.8;
        }
        80% {
          ${generator.fields('transform: scale(1.2)')}
          opacity: 0;
        }
        100% {
          ${generator.fields('transform: scale(2.2)')}
          opacity: 0;
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
