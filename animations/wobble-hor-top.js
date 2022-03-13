const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0%,
        100% {
          ${generator.fields(
            'transform: translateX(0%)',
            'transform-origin: 50% 50%',
          )}
        }
        15% {
          ${generator.fields('transform: translateX(-30px) rotate(6deg)')}
        }
        30% {
          ${generator.fields('transform: translateX(15px) rotate(-6deg)')}
        }
        45% {
          ${generator.fields('transform: translateX(-15px) rotate(3.6deg)')}
        }
        60% {
          ${generator.fields('transform: translateX(9px) rotate(-2.4deg)')}
        }
        75% {
          ${generator.fields('transform: translateX(-6px) rotate(1.2deg)')}
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
