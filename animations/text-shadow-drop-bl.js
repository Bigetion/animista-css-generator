const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          text-shadow: 0 0 0 rgba(0, 0, 0, 0);
        }
        100% {
          text-shadow: -6px 6px 18px rgba(0, 0, 0, 0.35);
        }
      `,
    )}
    .${className} {
      ${generator.fields(
        `animation: ${className} var(--animate-duration) both`,
      )}
    }
  `,
);

module.exports = animationClass;
