export default (func, wait) => {
  let timeoutId;

  return () => {
    const args = arguments;

    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      timeoutId = null;
      func(...args);
    }, wait);
  };
};
