const resizeObject = new ResizeObserver((elements) => {
  function bearOverflow() {
    if (height >= 100) {
      const heroSection = document.querySelector('[data-intro-section]');
      const additionalPadding = height;
      heroSection.style.paddingTop = `${additionalPadding}px`;
    }
  }
  const rect = elements[0].contentRect;
  const height = rect.height;

  bearOverflow();
});

export {resizeObject};
