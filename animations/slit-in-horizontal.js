const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          ${generator.fields('transform: translateZ(-800px) rotateX(90deg)')}
          opacity: 0;
        }
        54% {
          ${generator.fields('transform: translateZ(-160px) rotateX(87deg)')}
          opacity: 1;
        }
        100% {
          ${generator.fields('transform: translateZ(0) rotateX(0)')}
        }
      `,
    )}
    .${className} {
      ${generator.fields(
        `animation: ${className} var(--animate-duration) ease-out both`,
      )}
    }
  `,
);

module.exports = animationClass;
