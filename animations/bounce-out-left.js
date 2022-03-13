const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          ${generator.fields(
            'transform: translateX(0)',
            'animation-timing-function: ease-out',
          )}
        }
        5% {
          ${generator.fields(
            'transform: translateX(-30px)',
            'animation-timing-function: ease-in',
          )}
        }
        15% {
          ${generator.fields(
            'transform: translateX(0)',
            'animation-timing-function: ease-out',
          )}
        }
        25% {
          ${generator.fields(
            'transform: translateX(-38px)',
            'animation-timing-function: ease-in',
          )}
        }
        38% {
          ${generator.fields(
            'transform: translateX(0)',
            'animation-timing-function: ease-out',
          )}
        }
        52% {
          ${generator.fields(
            'transform: translateX(-80px)',
            'animation-timing-function: ease-in',
          )}
        }
        70% {
          ${generator.fields(
            'transform: translateX(0)',
            'animation-timing-function: ease-out',
          )}
        }
        85% {
          opacity: 1;
        }
        100% {
          ${generator.fields('transform: translateX(-1000px)')}
          opacity: 0;
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
