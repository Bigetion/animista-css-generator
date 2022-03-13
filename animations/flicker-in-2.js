const { cssHash } = require('css-hash');

const generator = require('../generator');

const animationClass = cssHash(
  (className) => `
    ${generator.keyframes(
      className,
      `
        0% {
          opacity: 0;
        }
        10% {
          opacity: 0;
          ${generator.fields('box-shadow: none')}
        }
        10.1% {
          opacity: 1;
          ${generator.fields('box-shadow: none')}
        }
        10.2% {
          opacity: 0;
          ${generator.fields('box-shadow: none')}
        }
        20% {
          opacity: 0;
          ${generator.fields('box-shadow: none')}
        }
        20.1% {
          opacity: 1;
          ${generator.fields('box-shadow: 0 0 30px rgba(255, 255, 255, 0.25)')}
        }
        20.6% {
          opacity: 0;
          ${generator.fields('box-shadow: none')}
        }
        30% {
          opacity: 0;
          ${generator.fields('box-shadow: none')}
        }
        30.1% {
          opacity: 1;
          ${generator.fields(
            'box-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25)',
          )}
        }
        30.5% {
          opacity: 1;
          ${generator.fields(
            'box-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25)',
          )}
        }
        30.6% {
          opacity: 0;
          ${generator.fields('box-shadow: none')}
        }
        45% {
          opacity: 0;
          ${generator.fields('box-shadow: none')}
        }
        45.1% {
          opacity: 1;
          ${generator.fields(
            'box-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25)',
          )}
        }
        50% {
          opacity: 1;
          ${generator.fields(
            'box-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25)',
          )}
        }
        55% {
          opacity: 1;
          ${generator.fields(
            'box-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25)',
          )}
        }
        55.1% {
          opacity: 0;
          ${generator.fields('box-shadow: none')}
        }
        57% {
          opacity: 0;
          ${generator.fields('box-shadow: none')}
        }
        57.1% {
          opacity: 1;
          ${generator.fields(
            'box-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.3)',
          )}
        }
        60% {
          opacity: 1;
          ${generator.fields(
            'box-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.3)',
          )}
        }
        60.1% {
          opacity: 0;
          ${generator.fields('box-shadow: none')}
        }
        65% {
          opacity: 0;
          ${generator.fields('box-shadow: none')}
        }
        65.1% {
          opacity: 1;
          ${generator.fields(
            'box-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.3), 0 0 100px rgba(255, 255, 255, 0.1)',
          )}
        }
        75% {
          opacity: 1;
          ${generator.fields(
            'box-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.3), 0 0 100px rgba(255, 255, 255, 0.1)',
          )}
        }
        75.1% {
          opacity: 0;
          ${generator.fields('box-shadow: none')}
        }
        77% {
          opacity: 0;
          ${generator.fields('box-shadow: none')}
        }
        77.1% {
          opacity: 1;
          ${generator.fields(
            'box-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1)',
          )}
        }
        85% {
          opacity: 1;
          ${generator.fields(
            'box-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1)',
          )}
        }
        85.1% {
          opacity: 0;
          ${generator.fields('box-shadow: none')}
        }
        86% {
          opacity: 0;
          ${generator.fields('box-shadow: none')}
        }
        86.1% {
          opacity: 1;
          ${generator.fields(
            'box-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25), 0 0 100px rgba(255, 255, 255, 0.1)',
          )}
        }
        100% {
          opacity: 1;
          ${generator.fields(
            'box-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25), 0 0 100px rgba(255, 255, 255, 0.1)',
          )}
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
