const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          ${generator.fields(
            'transform: translate(0, 0) skew(0deg, 0deg)',
            'transform-origin: 50% 50%',
            'filter: blur(0)',
          )}
          opacity: 1;
        }
        100% {
          ${generator.fields(
            'transform: translate(-1000px, -1000px) skew(80deg, 10deg)',
            'transform-origin: 100% 0%',
            'filter: blur(40px)',
          )}
          opacity: 0;
        }
      `,
    )}
    .${className} {
      ${generator.fields(
        `animation: ${className} var(--animate-duration) cubic-bezier(0.755, 0.050, 0.855, 0.060) both`,
      )}
    }
  `,
);

module.exports = animationClass;
