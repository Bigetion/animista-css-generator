const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          ${generator.fields(
            'transform: translateX(600px)',
            'animation-timing-function: ease-in',
          )}
          opacity: 0;
        }
        38% {
          ${generator.fields(
            'transform: translateX(0)',
            'animation-timing-function: ease-out',
          )}
          opacity: 1;
        }
        55% {
          ${generator.fields(
            'transform: translateX(68px)',
            'animation-timing-function: ease-in',
          )}
        }
        72% {
          ${generator.fields(
            'transform: translateX(0)',
            'animation-timing-function: ease-out',
          )}
        }
        81% {
          ${generator.fields(
            'transform: translateX(32px)',
            'animation-timing-function: ease-in',
          )}
        }
        90% {
          ${generator.fields(
            'transform: translateX(0)',
            'animation-timing-function: ease-out',
          )}
        }
        95% {
          ${generator.fields(
            'transform: translateX(8px)',
            'animation-timing-function: ease-in',
          )}
        }
        100% {
          ${generator.fields(
            'transform: translateX(0)',
            'animation-timing-function: ease-out',
          )}
        }
      `,
    )}
    .${className} {
      ${generator.fields(
        `animation: ${className} var(--animate-duration) both`,
      )}
    }
  `,
);

module.exports = animationClass;
