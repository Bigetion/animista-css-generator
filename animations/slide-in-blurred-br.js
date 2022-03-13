const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          ${generator.fields(
            'transform: translate(1000px, 1000px) skew(80deg, 10deg)',
            'transform-origin: 0% 100%',
            'filter: blur(40px)',
          )}
          opacity: 0;
        }
        100% {
          ${generator.fields(
            'transform: translate(0, 0) skew(0deg, 0deg)',
            'transform-origin: 50% 50%',
            'filter: blur(0)',
          )}
          opacity: 1;
        }
      `,
    )}
    .${className} {
      ${generator.fields(
        `animation: ${className} var(--animate-duration) cubic-bezier(0.230, 1.000, 0.320, 1.000) both`,
      )}
    }
  `,
);

module.exports = animationClass;
