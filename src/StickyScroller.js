import React, { useEffect, useRef } from "react";
import debounce from "lodash/debounce";

const StickyScroller = ({ items }) => {
  const itemRefs = useRef(items.map((item) => React.createRef()));
  useEffect(() => {
    const callback = debounce((event) => {
      const snapToIndex = itemRefs.current
        .map((itemRef) => Math.abs(itemRef.current.getBoundingClientRect().y))
        .reduce((acc, val, idx, arr) => {
          if (val < arr[acc]) {
            return idx;
          }
          return acc;
        }, 0);
      window.scrollBy({
        top: itemRefs.current[snapToIndex].current.getBoundingClientRect().y,
        behavior: "smooth",
      });
    }, 200);
    window.addEventListener("scroll", callback);
    return () => window.removeEventListener("scroll", callback);
  }, [itemRefs]);

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "1px",
          position: "fixed",
          top: "50%",
          backgroundColor: "red",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {items.map((item, index) => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "100vh",
              width: "100%",
            }}
            ref={itemRefs.current[index]}
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
    </>
  );
};

export default StickyScroller;
