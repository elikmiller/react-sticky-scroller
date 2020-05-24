# react-sticky-scroller

React component for building annoying, scrollbar-hijacking, websites

## Quick Example

### Install

`npm install react-sticky-scroller`

or

`yarn add react-sticky-scroller`

### Usage

```
import React from 'react';
import StickyScroller from 'react-sticky-scroller';

const App = () => {
    return <StickyScroller>
        <div style={{height: 100vh}}>Section 1</div>
        <div style={{height: 100vh}}>Section 2</div>
        <div style={{height: 100vh}}>Section 3</div>
    </StickyScroller>
}

export default App;
```

### Live Demo

https://codesandbox.io/s/react-sticky-scroller-examples-4fzku

## Props

### children

`StickyScroller` will scroll to the top of the nearest child node based on the current scroll position.

### delay

The amount of time (in milliseconds) which `StickyScroller` will wait after another scroll event before scrolling to the nearest child node.

### onScrollToChild

A callback which is fired when `StickyScroller` scrolls to the nearest child node. The function is called with a single parameter which is an object with the following keys.

- index - the index of the child node being scrolled to
- ref - the ref of the child node being scrolled to
- y - the number of pixels to be scrolled, can be negative
