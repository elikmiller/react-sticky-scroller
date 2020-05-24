import React, { useRef } from "react";
import PropTypes from "prop-types";
import debounce from "lodash/debounce";

import useWindowEvent from "./useWindowEvent";

const StickyScroller = ({ children, delay, onScrollToChild }) => {
  // create a ref for each child element
  const itemRefs = useRef(children.map(() => React.createRef()));

  useWindowEvent(
    "scroll",
    debounce(() => {
      // user has scrolled to top of document - do nothing
      if (window.scrollY === 0) return;

      // user has scrolled to bottom of document - do nothing
      if (window.scrollY + window.innerHeight === document.body.clientHeight)
        return;

      // determine index, ref, size, DOMRect of nearest child element
      const nearestChildIndex = itemRefs.current
        .map((itemRef) =>
          Math.floor(Math.abs(itemRef.current.getBoundingClientRect().y))
        )
        .reduce((acc, val, idx, arr) => (val < arr[acc] ? idx : acc), 0);
      const nearestChildRef = itemRefs.current[nearestChildIndex];
      const nearestChildDOMRect = nearestChildRef.current.getBoundingClientRect();

      // scroll distance would be less than 1 - do nothing
      if (Math.abs(nearestChildDOMRect.y) < 1) return;

      // scroll to nearest child element
      onScrollToChild({
        index: nearestChildIndex,
        ref: nearestChildRef,
        y: nearestChildDOMRect.y,
      });
      window.scrollBy({
        top: nearestChildDOMRect.y,
        behavior: "smooth",
      });
    }, delay),
    [itemRefs]
  );

  return (
    <>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, { ref: itemRefs.current[index], key: index })
      )}
    </>
  );
};

StickyScroller.defaultProps = {
  delay: 200,
  onScrollToChild: () => {},
};

StickyScroller.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
  onScrollToChild: PropTypes.func,
};

export default StickyScroller;
