const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          ${generator.fields(
            'transform: translateZ(0) translateY(0) translateX(0)',
          )}
        }
        100% {
          ${generator.fields(
            'transform: translateZ(-400px) translateY(-200px) translateX(200px)',
          )}
        }
      `,
    )}
    .${className} {
      ${generator.fields(
        `animation: ${className} var(--animate-duration) cubic-bezier(0.470, 0.000, 0.745, 0.715) both`,
      )}
    }
  `,
);

module.exports = animationClass;
