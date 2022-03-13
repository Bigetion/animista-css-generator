const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          ${generator.fields(
            'transform: translateZ(0) rotate3d(-1, 1, 0, 0deg)',
          )}
        }
        100% {
          ${generator.fields(
            'transform: translateZ(160px) rotate3d(-1, 1, 0, 180deg)',
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
