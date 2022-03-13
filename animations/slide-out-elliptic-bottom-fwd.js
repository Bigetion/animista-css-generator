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
            'transform-origin: 50% 500px',
          )}
          opacity: 1;
        }
        100% {
          ${generator.fields(
            'transform: translateY(600px) rotateX(-20deg) scale(6)',
            'transform-origin: 50% -100%',
          )}
          opacity: 0;
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
