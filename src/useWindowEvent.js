import { useCallback, useEffect } from "react";

export default (event, callback, dependencies = []) => {
  const memoizedCallback = useCallback(callback, dependencies);
  useEffect(() => {
    window.addEventListener(event, memoizedCallback);
    return () => window.removeEventListener(event, memoizedCallback);
  }, [event, memoizedCallback]);
};
