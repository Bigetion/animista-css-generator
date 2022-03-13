const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          ${generator.fields(
            'transform: translateY(-1000px) scaleY(2.5) scaleX(0.2)',
            'transform-origin: 50% 0%',
            'filter: blur(40px)',
          )}
          opacity: 0;
        }
        100% {
          ${generator.fields(
            'transform: translateY(0) scaleY(1) scaleX(1)',
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
