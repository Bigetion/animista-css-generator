const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          ${generator.fields('transform: translateY(0) rotateX(0deg)')}
        }
        100% {
          ${generator.fields('transform: translateY(-150px) rotateX(-90deg)')}
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
