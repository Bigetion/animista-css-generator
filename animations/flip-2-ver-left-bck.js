const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          ${generator.fields(
            'transform: translateX(0) translateZ(0) rotateY(0)',
            'transform-origin: 0% 50%',
          )}
        }
        100% {
          ${generator.fields(
            'transform: translateX(-100%) translateZ(-260px) rotateY(-180deg)',
            'transform-origin: 100% 0%',
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
