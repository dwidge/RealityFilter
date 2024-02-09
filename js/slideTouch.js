function setupSlideTouch(
  container,
  onSlideTouch = (current, start) => log({ onSlideTouch: current })
) {
  // console.log("setupPinch1");
  let initial = {
    clientX: container.clientWidth / 2,
    clientY: container.clientHeight / 2,
  };
  const center = {
    clientX: container.clientWidth / 2,
    clientY: container.clientHeight / 2,
  };
  let current = {
    clientX: container.clientWidth / 2,
    clientY: container.clientHeight / 2,
  };
  container.addEventListener("touchstart", (event) => {
    if (event.touches.length) {
      const [touch1] = event.touches;
      initial.clientX = touch1.clientX;
      initial.clientY = touch1.clientY;
      current.clientX = touch1.clientX;
      current.clientY = touch1.clientY;
      // console.log("touchstart1", initial);
    }
  });

  container.addEventListener("touchmove", (event) => {
    if (event.touches.length) {
      const [touch1, touch2 = center] = event.touches;
      const startDiffX = touch1.clientX - initial.clientX;
      const currentDiffX = touch1.clientX - current.clientX;
      const startDiffY = touch1.clientY - initial.clientY;
      const currentDiffY = touch1.clientY - current.clientY;
      current.clientX = touch1.clientX;
      current.clientY = touch1.clientY;
      // console.log("touchmove1", currentDiffX, startDiffX);
      onSlideTouch(
        [
          currentDiffX / container.clientWidth,
          currentDiffY / container.clientHeight,
        ],
        [
          startDiffX / container.clientWidth,
          startDiffY / container.clientHeight,
        ],
        event.touches.length
      );
    }
  });
}
