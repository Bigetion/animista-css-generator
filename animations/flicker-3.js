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
        32.98% {
          opacity: 1;
        }
        33% {
          opacity: 0;
        }
        34% {
          opacity: 0;
        }
        34.02% {
          opacity: 1;
        }
        34.98% {
          opacity: 1;
        }
        35% {
          opacity: 0;
        }
        35.9% {
          opacity: 0;
        }
        35.92% {
          opacity: 1;
        }
        38.98% {
          opacity: 1;
        }
        39% {
          opacity: 0;
        }
        39.8% {
          opacity: 0;
        }
        39.82% {
          opacity: 1;
        }
        83.98% {
          opacity: 1;
        }
        84% {
          opacity: 0;
        }
        84.9% {
          opacity: 0;
        }
        84.92% {
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
