const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          ${generator.fields(
            'transform: scale(0.5)',
            'transform-origin: 50% 100%',
          )}
        }
        100% {
          ${generator.fields(
            'transform: scale(1)',
            'transform-origin: 50% 100%',
          )}
        }
      `,
    )}
    .${className} {
      ${generator.fields(
        `animation: ${className} var(--animate-duration) cubic-bezier(0.390, 0.575, 0.565, 1.000) both`,
      )}
    }
  `,
);

module.exports = animationClass;
