const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          ${generator.fields(
            'transform: translateX(0) rotate(0deg)',
            'filter: blur(0)',
          )}
          opacity: 1;
        }
        100% {
          ${generator.fields(
            'transform: translateX(1000px) rotate(720deg)',
            'filter: blur(50px)',
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
