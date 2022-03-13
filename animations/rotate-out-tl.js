const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          ${generator.fields(
            'transform: rotate(0)',
            'transform-origin: top left',
          )}
          opacity: 1;
        }
        100% {
          ${generator.fields(
            'transform: rotate(-360deg)',
            'transform-origin: top left',
          )}
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
