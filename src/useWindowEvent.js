import { useCallback, useEffect } from "react";

const useWindowEvent = (event, callback, dependencies = []) => {
  const memoizedCallback = useCallback(callback, dependencies);
  useEffect(() => {
    window.addEventListener(event, memoizedCallback);
    return () => window.removeEventListener(event, memoizedCallback);
  }, [event, memoizedCallback]);
};

export default useWindowEvent;
