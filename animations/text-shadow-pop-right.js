const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          text-shadow: 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555;
          ${generator.fields('transform: translateX(0)')}
        }
        100% {
          text-shadow: 1px 0 #555555, 2px 0 #555555, 3px 0 #555555, 4px 0 #555555, 5px 0 #555555, 6px 0 #555555, 7px 0 #555555, 8px 0 #555555;
          ${generator.fields('transform: translateX(-8px)')}
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
