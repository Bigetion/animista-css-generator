const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          ${generator.fields('transform: translateX(50px) translateY(-50px)')}
          opacity: 0;
        }
        100% {
          ${generator.fields('transform: translateX(0) translateY(0)')}
          opacity: 1;
        }
      `,
    )}
    .${className} {
      ${generator.fields(
        `animation: ${className} var(--animate-duration) cubic-bezier(0.390, 0.575, 0.565, 1.000) both`,
      )}
    }
  `,
);

module.exports = animationClass;
