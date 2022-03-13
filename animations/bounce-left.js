const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          ${generator.fields(
            'transform: translateX(-48px)',
            'animation-timing-function: ease-in',
          )}
          opacity: 1;
        }
        24% {
          opacity: 1;
        }
        40% {
          ${generator.fields(
            'transform: translateX(-26px)',
            'animation-timing-function: ease-in',
          )}
        }
        65% {
          ${generator.fields(
            'transform: translateX(-13px)',
            'animation-timing-function: ease-in',
          )}
        }
        82% {
          ${generator.fields(
            'transform: translateX(-6.5px)',
            'animation-timing-function: ease-in',
          )}
        }
        93% {
          ${generator.fields(
            'transform: translateX(-4px)',
            'animation-timing-function: ease-in',
          )}
        }
        25%,
        55%,
        75%,
        87%,
        98% {
          ${generator.fields(
            'transform: translateX(0px)',
            'animation-timing-function: ease-out',
          )}
        }
        100% {
          ${generator.fields(
            'transform: translateX(0px)',
            'animation-timing-function: ease-out',
          )}
          opacity: 1;
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
