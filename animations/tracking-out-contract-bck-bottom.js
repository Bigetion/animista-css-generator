const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          ${generator.fields('transform: translateZ(0) translateY(0)')}
          opacity: 1;
        }
        60% {
          opacity: 1;
        }
        100% {
          letter-spacing: -0.5em;
          ${generator.fields('transform: translateZ(-500px) translateY(300px)')}
          opacity: 0;
        }
      `,
    )}
    .${className} {
      ${generator.fields(
        `animation: ${className} var(--animate-duration) cubic-bezier(0.550, 0.085, 0.680, 0.530) both`,
      )}
    }
  `,
);

module.exports = animationClass;
