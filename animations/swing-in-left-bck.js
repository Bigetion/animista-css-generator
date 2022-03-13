const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          ${generator.fields(
            'transform: rotateY(-70deg)',
            'transform-origin: left',
          )}
          opacity: 0;
        }
        100% {
          ${generator.fields('transform: rotateY(0)', 'transform-origin: left')}
          opacity: 1;
        }
      `,
    )}
    .${className} {
      ${generator.fields(
        `animation: ${className} var(--animate-duration) cubic-bezier(0.175, 0.885, 0.320, 1.275) both`,
      )}
    }
  `,
);

module.exports = animationClass;
