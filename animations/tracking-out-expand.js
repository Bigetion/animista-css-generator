const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          opacity: 1;
        }
        60% {
          opacity: 0.8;
        }
        100% {
          letter-spacing: 1em;
          opacity: 0;
        }
      `,
    )}
    .${className} {
      ${generator.fields(
        `animation: ${className} var(--animate-duration) cubic-bezier(0.550, 0.085, 0.680, 0.530) both`,
      )}
    }
  `,
);

module.exports = animationClass;
