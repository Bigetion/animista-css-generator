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
            'transform-origin: 50% -1400px',
          )}
          opacity: 1;
        }
        100% {
          ${generator.fields(
            'transform: translateY(600px) rotateX(30deg) scale(0)',
            'transform-origin: 50% 100%',
          )}
          opacity: 1;
        }
      `,
    )}
    .${className} {
      ${generator.fields(
        `animation: ${className} var(--animate-duration) ease-in both`,
      )}
    }
  `,
);

module.exports = animationClass;
