const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          ${generator.fields(
            'transform: rotate3d(1, 1, 0, 0deg)',
            'transform-origin: 100% 0%',
          )}
        }
        100% {
          ${generator.fields(
            'transform: rotate3d(1, 1, 0, 180deg)',
            'transform-origin: 100% 0%',
          )}
        }
      `,
    )}
    .${className} {
      ${generator.fields(
        `animation: ${className} var(--animate-duration) cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
      )}
    }
  `,
);

module.exports = animationClass;
