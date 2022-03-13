const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          ${generator.fields(
            'transform: translateX(800px) rotateY(30deg) scale(6.5)',
            'transform-origin: -100% 50%',
          )}
          opacity: 0;
        }
        100% {
          ${generator.fields(
            'transform: translateX(0) rotateY(0) scale(1)',
            'transform-origin: 600px 50%',
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
