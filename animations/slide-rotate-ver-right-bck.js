const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          ${generator.fields(
            'transform: translateX(0) translateZ(0) rotateY(0)',
            'transform-origin: center right',
          )}
        }
        100% {
          ${generator.fields(
            'transform: translateX(150px) translateZ(-230px) rotateY(-90deg)',
            'transform-origin: center right',
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
