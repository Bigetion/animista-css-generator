const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          ${generator.fields(
            'transform: rotateY(0)',
            'transform-origin: right',
          )}
          opacity: 1;
        }
        100% {
          ${generator.fields(
            'transform: rotateY(70deg)',
            'transform-origin: right',
          )}
          opacity: 0;
        }
      `,
    )}
    .${className} {
      ${generator.fields(
        `animation: ${className} var(--animate-duration) cubic-bezier(0.600, -0.280, 0.735, 0.045) both`,
      )}
    }
  `,
);

module.exports = animationClass;
