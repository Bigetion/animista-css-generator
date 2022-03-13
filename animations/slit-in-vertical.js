const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          ${generator.fields('transform: translateZ(-800px) rotateY(90deg)')}
          opacity: 0;
        }
        54% {
          ${generator.fields('transform: translateZ(-160px) rotateY(87deg)')}
          opacity: 1;
        }
        100% {
          ${generator.fields('transform: translateZ(0) rotateY(0)')}
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
