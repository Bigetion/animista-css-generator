const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        from {
          ${generator.fields(
            'transform: scale(1)',
            'transform-origin: center center',
            'animation-timing-function: ease-out',
          )}
        }
        10% {
          ${generator.fields(
            'transform: scale(0.91)',
            'animation-timing-function: ease-in',
          )}
        }
        17% {
          ${generator.fields(
            'transform: scale(0.98)',
            'animation-timing-function: ease-out',
          )}
        }
        33% {
          ${generator.fields(
            'transform: scale(0.87)',
            'animation-timing-function: ease-in',
          )}
        }
        45% {
          ${generator.fields(
            'transform: scale(1)',
            'animation-timing-function: ease-out',
          )}
        }
      `,
    )}
    .${className} {
      ${generator.fields(
        `animation: ${className} var(--animate-duration) ease-in-out infinite both`,
      )}
    }
  `,
);

module.exports = animationClass;
