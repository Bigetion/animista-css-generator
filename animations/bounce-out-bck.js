const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          ${generator.fields(
            'transform: translateZ(0)',
            'animation-timing-function: ease-out',
          )}
        }
        5% {
          ${generator.fields(
            'transform: translateZ(-100px)',
            'animation-timing-function: ease-in',
          )}
        }
        15% {
          ${generator.fields(
            'transform: translateZ(0)',
            'animation-timing-function: ease-out',
          )}
        }
        25% {
          ${generator.fields(
            'transform: translateZ(-110px)',
            'animation-timing-function: ease-in',
          )}
        }
        38% {
          ${generator.fields(
            'transform: translateZ(0)',
            'animation-timing-function: ease-out',
          )}
        }
        52% {
          ${generator.fields(
            'transform: translateZ(-200px)',
            'animation-timing-function: ease-in',
          )}
        }
        70% {
          ${generator.fields(
            'transform: translateZ(0) scale(1)',
            'animation-timing-function: ease-out',
          )}
        }
        85% {
          opacity: 1;
        }
        100% {
          ${generator.fields(
            'transform: translateZ(-900px) scale(0)',
            'animation-timing-function: ease-in',
          )}
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
