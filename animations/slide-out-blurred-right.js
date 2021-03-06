const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          ${generator.fields(
            'transform: translateX(0) scaleY(1) scaleX(1)',
            'transform-origin: 50% 50%',
            'filter: blur(0)',
          )}
          opacity: 1;
        }
        100% {
          ${generator.fields(
            'transform: translateX(1000px) scaleX(2) scaleY(0.2)',
            'transform-origin: 0% 50%',
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
