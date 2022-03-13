## What is this?

Animista CSS Generator

## Instalation
```bash
npm i animista-css-generator
```

## Usage

```jsx
import React from "react";
import animated from "animate-css-generator/animations/animated";
import scaleUpCenter from "animate-css-generator/animations/scale-up-center";

function App() {
  return (
    <div>
      <div className={`${animated} ${scaleUpCenter}`}>Scale Up Center</div>
    </div>
  );
}
```
