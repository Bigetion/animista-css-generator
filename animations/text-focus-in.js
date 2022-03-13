const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          ${generator.fields('filter: blur(12px)')}
          opacity: 0;
        }
        100% {
          ${generator.fields('filter: blur(0px)')}
          opacity: 1;
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
