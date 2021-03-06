const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          ${generator.fields(
            'box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e',
            'transform: translateX(0) translateY(0)',
          )}
        }
        100% {
          ${generator.fields(
            'box-shadow: -1px 1px #3e3e3e, -2px 2px #3e3e3e, -3px 3px #3e3e3e, -4px 4px #3e3e3e, -5px 5px #3e3e3e, -6px 6px #3e3e3e, -7px 7px #3e3e3e, -8px 8px #3e3e3e',
            'transform: translateX(8px) translateY(-8px)',
          )}
        }
      `,
    )}
    .${className} {
      ${generator.fields(
        `animation: ${className} var(--animate-duration) cubic-bezier(0.470, 0.000, 0.745, 0.715) both`,
      )}
    }
  `,
);

module.exports = animationClass;
