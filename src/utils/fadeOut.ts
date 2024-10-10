export const fadeOut = (element: any, duration = 200) => {
  if (!element) return;

  element.style.opacity = 1;

  const step = 50 / duration; // Thời gian giữa mỗi lần giảm opacity

  const fade = () => {
    let opacity = parseFloat(element.style.opacity);
    if ((opacity -= step) <= 0) {
      element.style.display = "none";
      element.style.opacity = "";
    } else {
      element.style.opacity = opacity;
      requestAnimationFrame(fade);
    }
  };

  fade();
};
