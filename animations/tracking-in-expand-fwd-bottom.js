const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          letter-spacing: -0.5em;
          ${generator.fields('transform: translateZ(-700px) translateY(500px)')}
          opacity: 0;
        }
        40% {
          opacity: 0.6;
        }
        100% {
          ${generator.fields('transform: translateZ(0) translateY(0)')}
          opacity: 1;
        }
      `,
    )}
    .${className} {
      ${generator.fields(
        `animation: ${className} var(--animate-duration) cubic-bezier(0.215, 0.610, 0.355, 1.000) both`,
      )}
    }
  `,
);

module.exports = animationClass;
