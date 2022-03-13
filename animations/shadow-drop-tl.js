const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          ${generator.fields('box-shadow: 0 0 0 0 rgba(0, 0, 0, 0)')}
        }
        100% {
          ${generator.fields(
            'box-shadow: -12px -12px 20px -12px rgba(0, 0, 0, 0.35)',
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
