export const setupIntersectionObserver = (
  elementSelector: string, 
  animationClass: string, 
  threshold: number = 0.1
) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass);
        }
      });
    },
    { threshold }
  );

  const elements = document.querySelectorAll(elementSelector);
  elements.forEach(el => {
    observer.observe(el);
  });

  return () => {
    elements.forEach(el => {
      observer.unobserve(el);
    });
  };
};

export const animateCounter = (
  element: HTMLElement, 
  targetValue: number, 
  duration: number = 2000
) => {
  const startTime = performance.now();
  const startValue = 0;
  
  const updateValue = (currentTime: number) => {
    const elapsedTime = currentTime - startTime;
    
    if (elapsedTime < duration) {
      const value = Math.floor(easeInOutCubic(elapsedTime, startValue, targetValue, duration));
      element.textContent = value.toString();
      requestAnimationFrame(updateValue);
    } else {
      element.textContent = targetValue.toString();
    }
  };
  
  requestAnimationFrame(updateValue);
};

// Easing function for smooth animation
const easeInOutCubic = (t: number, b: number, c: number, d: number) => {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t * t + b;
  t -= 2;
  return c / 2 * (t * t * t + 2) + b;
};