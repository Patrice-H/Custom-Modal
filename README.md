# @patrice-h/custom-modal

> Customized modal for OpenClassrooms project made with create-react-library

[![NPM](https://img.shields.io/npm/v/@patrice-h/custom-modal.svg)](https://www.npmjs.com/package/@patrice-h/custom-modal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @patrice-h/custom-modal
```

## Usage

```jsx
import React, { useState } from 'react'
import MyComponent from '@patrice-h/my-modal'

export const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const displayModal = () => {
    setIsModalOpen(true)
  }
  const hideModal = () => {
    setIsModalOpen(false)
  }

  return(
    <div>
      <button onClick={displayModal}>Open Modal</button>
      <MyComponent isOpen={isModalOpen} text="My text" hideModal={hideModal} >
    </div>
  )
}
```

## Stylization (example)

```css
#modal-container {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
}
#modal-content {
  vertical-align: middle;
  position: relative;
  max-width: 500px;
  width: 90%;
  height: max-content;
  background: #fff;
  padding: 15px 30px;
  border-radius: 8px;
  box-shadow: 0 0 10px #000;
  text-align: left;
}
#modal-text {
  color: red;
}
#close-modal-btn {
  position: absolute;
  top: -12.5px;
  right: -12.5px;
  display: block;
  width: 30px;
  height: 30px;
  cursor: pointer;
}
#modal-container.hidden-modal {
  display: none;
}
```

## License

MIT © [Patrice-H](https://github.com/Patrice-H)
