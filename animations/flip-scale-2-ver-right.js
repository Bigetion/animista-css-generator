const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          ${generator.fields(
            'transform: translateX(0) rotateY(0) scale(1)',
            'transform-origin: 100% 50%',
          )}
        }
        50% {
          ${generator.fields(
            'transform: translateX(50%) rotateY(-90deg) scale(2)',
            'transform-origin: 50% 50%',
          )}
        }
        100% {
          ${generator.fields(
            'transform: translateX(100%) rotateY(-180deg) scale(1)',
            'transform-origin: 0% 50%',
          )}
        }
      `,
    )}
    .${className} {
      ${generator.fields(
        `animation: ${className} var(--animate-duration) linear both`,
      )}
    }
  `,
);

module.exports = animationClass;
