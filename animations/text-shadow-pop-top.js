const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          text-shadow: 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555;
          ${generator.fields('transform: translateY(0)')}
        }
        100% {
          text-shadow: 0 -1px #555555, 0 -2px #555555, 0 -3px #555555, 0 -4px #555555, 0 -5px #555555, 0 -6px #555555, 0 -7px #555555, 0 -8px #555555;
          ${generator.fields('transform: translateY(8px)')}
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
