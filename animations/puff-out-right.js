const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          ${generator.fields(
            'transform: scale(1)',
            'transform-origin: 100% 50%',
            'filter: blur(0px)',
          )}
          opacity: 1;
        }
        100% {
          ${generator.fields(
            'transform: scale(2)',
            'transform-origin: 100% 50%',
            'filter: blur(4px)',
          )}
          opacity: 0;
        }
      `,
    )}
    .${className} {
      ${generator.fields(
        `animation: ${className} var(--animate-duration) cubic-bezier(0.165, 0.840, 0.440, 1.000) both`,
      )}
    }
  `,
);

module.exports = animationClass;
