const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          ${generator.fields('transform: rotate(0)', 'transform-origin: left')}
        }
        100% {
          ${generator.fields(
            'transform: rotate(360deg)',
            'transform-origin: left',
          )}
        }
      `,
    )}
    .${className} {
      ${generator.fields(
        `animation: ${className} var(--animate-duration) cubic-bezier(0.455, 0.030, 0.515, 0.955) both`,
      )}
    }
  `,
);

module.exports = animationClass;
