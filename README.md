## What is this?

Animista CSS Generator

## Instalation
```bash
npm i animista-css-generator
```

## Usage

```jsx
import React from "react";
import { animated, scaleUpCenter } from "animista-css-generator";

function App() {
  return (
    <div>
      <div className={`${animated} ${scaleUpCenter}`}>Scale Up Center</div>
    </div>
  );
}
```
