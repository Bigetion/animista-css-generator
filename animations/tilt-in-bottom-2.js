const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          ${generator.fields(
            'transform: rotateY(-30deg) translateY(300px) skewY(30deg)',
          )}
          opacity: 0;
        }
        100% {
          ${generator.fields(
            'transform: rotateY(0deg) translateY(0) skewY(0deg)',
          )}
          opacity: 1;
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
