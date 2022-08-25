# @patrice-h/custom-modal

> Customized modal for OpenClassrooms project

[![NPM](https://img.shields.io/npm/v/@patrice-h/custom-modal.svg)](https://www.npmjs.com/package/@patrice-h/custom-modal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @patrice-h/custom-modal
```

## Usage

```jsx
import React, { Component } from 'react'

import MyComponent from '@patrice-h/custom-modal'
import '@patrice-h/custom-modal/dist/index.css'

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```

## Notes

The display of the modal can be achieved using an event listener, by incorporating the following code:

```Js
const modal = document.getElementById('modal');
modal.classList.remove('hidden');
```

## License

MIT © [Patrice-H](https://github.com/Patrice-H)
