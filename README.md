# cursorify

![react-cursorify-social-card](https://user-images.githubusercontent.com/72514247/227773776-762fbd64-1662-4d01-8049-9fee079cf717.png)

Customizable cursor component for any style. 🕹️

[Website](https://cursorify.github.io/)

# Getting Started

Let's apply react-cursorify!

## Install react-cursorify

You can install react-cursorify in your React project using the two commands below.

via npm:

```zsh
npm install @cursorify/react
```

or via yarn:

```zsh
yarn add @cursorify/react
```

## Apply to your react project

To apply react-cursorify, simply wrap your React project with `CursorifyProvider`. It's easy, right?

```tsx
import { CursorifyProvider } from '@cursorify/react'

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
- visibleDefaultCursor: You can pass a boolean.
- breakpoint: You can set breakpoint to disable in mobile size.

```tsx
import { CursorifyProvider, EmojiCursor } from '@cursorify/react'

const App = () => {
  return (
    <CursorifyProvider
      cursor={EmojiCursor}
      delay={2}
      opacity={0.7}
      visibleDefaultCursor={false}
      breakpoint={997}
    >
      <>{/*....your component */}</>
    </CursorifyProvider>
  )
}

export default App
```

## More info

For more details, please refer to the [Docs](https://cursorify.github.io/).

## Cursor

react-cursorify manages custom cursor components so that they can be shared and used. Please share your cursor component via PR!

## Contributing

Check out the [Contributing Guide](.github/CONTRIBUTING.md).

### Contributors

<!--
Contributors template:
<a href="https://github.com/{username}"><img src="{src}" width="50px" alt="{username}" /></a>&nbsp;&nbsp;
-->

## Support

react-cursorify is an MIT-licensed open source project. It can grow thanks to the sponsors and support from the amazing backers.

### Sponsors

<!--
Sponsors template:
<a href="https://github.com/{uesrname}"><img src="{src}" width="50px" alt="{username}" /></a>&nbsp;&nbsp;
-->

none.

## License

The [MIT License](LICENSE).
