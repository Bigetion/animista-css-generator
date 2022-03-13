const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          ${generator.fields(
            'transform: rotate(-540deg) scale(0)',
            'transform-origin: 50% 0',
          )}
          opacity: 0;
        }
        100% {
          ${generator.fields(
            'transform: rotate(0) scale(1)',
            'transform-origin: 50% 0',
          )}
          opacity: 1;
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