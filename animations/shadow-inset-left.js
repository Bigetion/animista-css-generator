const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          ${generator.fields('box-shadow: inset 0 0 0 0 rgba(0, 0, 0, 0)')}
        }
        100% {
          ${generator.fields(
            'box-shadow: inset 6px 0 14px -6px rgba(0, 0, 0, 0.5)',
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
