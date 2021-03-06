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
        45.99% {
          opacity: 1;
        }
        46% {
          opacity: 0;
        }
        46.9% {
          opacity: 0;
        }
        46.91% {
          opacity: 1;
        }
        51.99% {
          opacity: 1;
        }
        52% {
          opacity: 0;
        }
        52.8% {
          opacity: 0;
        }
        52.81% {
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
