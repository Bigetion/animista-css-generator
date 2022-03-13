const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          ${generator.fields(
            'transform: translateY(0) translateZ(0) rotateX(0deg)',
            'transform-origin: bottom center',
          )}
        }
        100% {
          ${generator.fields(
            'transform: translateY(-150px) translateZ(130px) rotateX(-90deg)',
            'transform-origin: bottom center',
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
