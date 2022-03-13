const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0%,
        100% {
          opacity: 1;
        }
        41.99% {
          opacity: 1;
        }
        42% {
          opacity: 0;
        }
        43% {
          opacity: 0;
        }
        43.01% {
          opacity: 1;
        }
        47.99% {
          opacity: 1;
        }
        48% {
          opacity: 0;
        }
        49% {
          opacity: 0;
        }
        49.01% {
          opacity: 1;
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
