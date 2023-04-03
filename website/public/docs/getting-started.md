# Getting Started

Let's apply react-cursorify!

## Install react-cursorify

You can install react-cursorify in your React project using the two commands below.

via npm:

```zsh
npm install react-cursorify
```

or via yarn:

```zsh
yarn add react-cursorify
```

## Apply to your react project

To apply react-cursorify, simply wrap your React project with `CursorifyProvider`. It's easy, right?

```tsx
import { CursorifyProvider } from 'react-cursorify'

const App = () => {
  return (
    <CursorifyProvider>
      <>{/*....your component */}</>
    </CursorifyProvider>
  )
}

export default App
```

## Applying default settings

If you want to set default options for the cursor, you can apply the default cursor component, opacity, and delay. Typically, changing the cursor settings on a website is not common, so it is better to apply your website settings to the default settings.

Refer to the description of each option below.

- cursor: pass the React component you want to apply.
- delay: You can pass a number between 1 and 10.
- opacity: You can pass a number between 0 and 1.

```tsx
import { CursorifyProvider, EmojiCursor } from 'react-cursorify'

const App = () => {
  return (
    <CursorifyProvider cursor={EmojiCursor} delay={2} opacity={0.7}>
      <>{/*....your component */}</>
    </CursorifyProvider>
  )
}

export default App
```

# Applying hover style with useRegisterHover

To apply hover style to the cursor, you must use the `useRegisterHover` hook. You can use the hook as follows. For the register argument, write the [cursor style keyword](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor#values).

```tsx
import { useRegisterHover } from 'react-cursorify'

const Home = () => {
  const register = useRegisterHover()
  return (
    <div>
      <button {...register('pointer')}>hover me 🕹️</button>
    </div>
  )
}

export default Home
```

# Creating a custom cursor using useCursorify

You can easily create your own cursor component by using `useCursorify`. The useCursorify hook returns `mouseState` and `hoverState`. Refer to the description of each below.

- mouseState: Displays the mouse state. Currently, only 'default' and 'mouseDown' exist.
- hoverState: Displays the style applied using the `useRegisterHover` hook.

The following is the `EmojiCursor` cursor component of react-cursorify. You don't necessarily have to apply styles using emotion. Try creating a cursor component with your own style!

```tsx
import useCursorify from '@/react-cursorify/hooks/useCursorify'
import styled from '@emotion/styled'

const EmojiCursor = () => {
  const { mouseState, hoverState } = useCursorify()

  return (
    <StyledWrapper data-hover={hoverState} {...{ a: 1 }}>
      {(() => {
        if (mouseState === 'mouseDown') return '✊'
        if (hoverState === 'pointer') return '👆'
        if (hoverState === 'text') return '✍️'

        return '🖐️'
      })()}
    </StyledWrapper>
  )
}

export default EmojiCursor

const StyledWrapper = styled.div`
  width: 40px;
  height: 40px;
  font-size: 30px;
`
```

# Change cursor using useChangeCursor

While it's not common to change the cursor on a website, we provide a hook that allows you to do so. To change the cursor component, use the `useChangeCursor` hook. The changeCursor argument should be a React component.

```tsx
import { useChangeCursor, PhingerCursor } from 'react-cursorify'

const Home = () => {
  const changeCursor = useRegisterHover()

  const handleClick = () => {
    changeCursor(PhingerCursor)
  }
  return (
    <div>
      <button onClick={handleClick}>click me 🕹️</button>
    </div>
  )
}

export default Home
```
