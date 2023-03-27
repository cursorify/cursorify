---
sidebar_position: 3
---

# Making Custom Cursor

`react-cursorify` defines styles through classname, and can easily create custom components using `useCursorify` hook.

Below is a custom cursor component that detects `cursorify-pointer` classname. By default, `is{keyword}` detects the `cursorify-{keyword}` classname and changes state.

You can check [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor#values) for keywords.

```tsx
const DefaultCursor = (props) => {
  const { isPointer } = useCursorify()
  return <StyledWrapper ref={ref} data-pointer={isPointer}></StyledWrapper>
}

export default DefaultCursor

const StyledWrapper = styled.div`
  width: 23px;
  height: 23px;
  background-color: rgba(224, 224, 224, 0.8);
  border-radius: 50%;
  transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out,
    background-color 0.1s ease-in-out;
  &[data-pointer='true'] {
    transform: scale(2.3);
    background-color: rgba(224, 224, 224, 0.4);
  }
`
```

A custom cursor component can be applied as below.

```tsx
import React from 'react'
import { Cursorify } from 'react-cursorify'
import CustomCursor from 'component/CustomCursor'

const App: React.FC = () => {
  return (
    <div>
      <Cursorify cursor={CustomCursor} />
      <button className="cursorify-pointer">hover me!</button>
    </div>
  )
}

export default App
```

For more details, please refer to the [Documentation](https://github.com/morethanmin/react-cursorify#getting-started).
