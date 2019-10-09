document.addEventListener("DOMContentLoaded", function() {
  const lazyImages = document.querySelectorAll(".lazy");
  const options = {
    threshold: 0.5
  };
  const imageObserver = new IntersectionObserver((entries, observer) => {
      console.log(observer)

    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const image = entry.target;
        image.src = image.dataset.src;
        image.alt = image.dataset.description;
        image.classList.remove("lazy");
        imageObserver.unobserve(image);
      }
    });
  }, options);
  lazyImages.forEach(image => imageObserver.observe(image));
});
