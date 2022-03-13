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
            'transform-origin: 600px 50%',
          )}
          opacity: 1;
        }
        100% {
          ${generator.fields(
            'transform: translateX(1000px) rotateY(20deg) scale(6)',
            'transform-origin: -100% 50%',
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
