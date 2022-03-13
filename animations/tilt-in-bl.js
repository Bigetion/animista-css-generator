const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          ${generator.fields(
            'transform: rotateY(35deg) rotateX(-20deg) translate(-250px, 250px) skew(-12deg, -15deg)',
          )}
          opacity: 0;
        }
        100% {
          ${generator.fields(
            'transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg)',
          )}
          opacity: 1;
        }
      `,
    )}
    .${className} {
      ${generator.fields(
        `animation: ${className} var(--animate-duration) cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
      )}
    }
  `,
);

module.exports = animationClass;
