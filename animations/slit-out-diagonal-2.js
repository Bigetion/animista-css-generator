const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          ${generator.fields('transform: translateZ(0) rotate3d(-1, 1, 0, 0)')}
          opacity: 1;
        }
        54% {
          ${generator.fields(
            'transform: translateZ(-160px) rotate3d(-1, 1, 0, -87deg)',
          )}
          opacity: 1;
        }
        100% {
          ${generator.fields(
            'transform: translateZ(-800px) rotate3d(-1, 1, 0, -90deg)',
          )}
          opacity: 0;
        }
      `,
    )}
    .${className} {
      ${generator.fields(
        `animation: ${className} var(--animate-duration) ease-in both`,
      )}
    }
  `,
);

module.exports = animationClass;
