const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          ${generator.fields(
            'transform: translateX(-1000px) rotate(-720deg)',
            'filter: blur(50px)',
          )}
          opacity: 0;
        }
        100% {
          ${generator.fields(
            'transform: translateX(0) rotate(0deg)',
            'filter: blur(0)',
          )}
          opacity: 1;
        }
      `,
    )}
    .${className} {
      ${generator.fields(
        `animation: ${className} var(--animate-duration) cubic-bezier(0.230, 1.000, 0.320, 1.000) both`,
      )}
    }
  `,
);

module.exports = animationClass;
