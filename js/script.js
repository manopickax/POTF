let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });
  
  let div = document.querySelectorAll('div');
  observer.observe(div[0]);
  observer.observe(div[1]);
  observer.observe(div[2]);
  observer.observe(div[3]);