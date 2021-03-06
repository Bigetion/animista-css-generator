const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          opacity: 1;
        }
        13.9% {
          opacity: 1;
        }
        14% {
          opacity: 0;
          ${generator.fields('box-shadow: none')}
        }
        14.9% {
          opacity: 0;
          ${generator.fields('box-shadow: none')}
        }
        15% {
          opacity: 1;
        }
        22.9% {
          opacity: 1;
        }
        23% {
          opacity: 0;
          ${generator.fields('box-shadow: none')}
        }
        24.9% {
          opacity: 0;
          ${generator.fields('box-shadow: none')}
        }
        25% {
          opacity: 1;
        }
        34.9% {
          opacity: 1;
        }
        35% {
          opacity: 0;
          ${generator.fields('box-shadow: none')}
        }
        39.9% {
          opacity: 0;
          ${generator.fields('box-shadow: none')}
        }
        40% {
          opacity: 1;
        }
        42.9% {
          opacity: 1;
        }
        43% {
          opacity: 0;
          ${generator.fields('box-shadow: none')}
        }
        44.9% {
          opacity: 0;
          ${generator.fields('box-shadow: none')}
        }
        45% {
          opacity: 1;
        }
        50% {
          opacity: 1;
        }
        54.9% {
          opacity: 1;
        }
        55% {
          opacity: 0;
          ${generator.fields('box-shadow: none')}
        }
        69.4% {
          opacity: 0;
          ${generator.fields('box-shadow: none')}
        }
        69.5% {
          opacity: 1;
        }
        69.9% {
          opacity: 1;
        }
        70% {
          opacity: 0;
          ${generator.fields('box-shadow: none')}
        }
        79.4% {
          opacity: 0;
          ${generator.fields('box-shadow: none')}
        }
        79.9% {
          opacity: 1;
        }
        80% {
          opacity: 0;
          ${generator.fields('box-shadow: none')}
        }
        89.8% {
          opacity: 0;
          ${generator.fields('box-shadow: none')}
        }
        89.9% {
          opacity: 1;
          ${generator.fields('box-shadow: none')}
        }
        90% {
          opacity: 0;
          ${generator.fields('box-shadow: none')}
        }
        100% {
          opacity: 0;
        }
      `,
    )}
    .${className} {
      ${generator.fields(
        `animation: ${className} var(--animate-duration) linear both`,
      )}
    }
  `,
);

module.exports = animationClass;
