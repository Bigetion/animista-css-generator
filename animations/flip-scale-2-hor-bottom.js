const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          ${generator.fields(
            'transform: translateY(0) rotateX(0) scale(1)',
            'transform-origin: 50% 100%',
          )}
        }
        50% {
          ${generator.fields(
            'transform: translateY(50%) rotateX(90deg) scale(2)',
            'transform-origin: 50% 50%',
          )}
        }
        100% {
          ${generator.fields(
            'transform: translateY(100%) rotateX(180deg) scale(1)',
            'transform-origin: 50% 0%',
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
