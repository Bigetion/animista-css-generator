const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          ${generator.fields(
            'transform: translateZ(-800px) rotate3d(-1, 1, 0, -90deg)',
            'animation-timing-function: ease-in',
          )}
          opacity: 0;
        }
        54% {
          ${generator.fields(
            'transform: translateZ(-160px) rotate3d(-1, 1, 0, -87deg)',
            'animation-timing-function: ease-in-out',
          )}
          opacity: 1;
        }
        100% {
          ${generator.fields(
            'transform: translateZ(0) rotate3d(-1, 1, 0, 0)',
            'animation-timing-function: ease-out',
          )}
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
