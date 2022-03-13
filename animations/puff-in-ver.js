const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          ${generator.fields('transform: scaleY(2)', 'filter: blur(4px)')}
          opacity: 0;
        }
        100% {
          ${generator.fields('transform: scaleY(1)', 'filter: blur(0px)')}
          opacity: 1;
        }
      `,
    )}
    .${className} {
      ${generator.fields(
        `animation: ${className} var(--animate-duration) cubic-bezier(0.470, 0.000, 0.745, 0.715) both`,
      )}
    }
  `,
);

module.exports = animationClass;
