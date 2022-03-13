const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          ${generator.fields(
            'transform: translateY(0) translateZ(0) rotateX(0)',
            'transform-origin: 50% 0%',
          )}
        }
        100% {
          ${generator.fields(
            'transform: translateY(-100%) translateZ(-260px) rotateX(180deg)',
            'transform-origin: 50% 100%',
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
