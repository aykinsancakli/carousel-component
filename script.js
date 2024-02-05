// Slider Component

const slider = function () {
  // Elements
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.btn-left');
  const btnRight = document.querySelector('.btn-right');
  const dotContainer = document.querySelector('.dots');

  // Variables
  let curSlide = 0;
  const maxSlide = slides.length;

  // Body Colors
  const colors = ['#ffe3e3', '#c3fae8', '#ffe8cc'];

  // STARTING POINT
  // slides.forEach(
  //   (slide, i) => (slide.style.transform = `translateX(${100 * i}%)`)
  // );
  // // 0%, 100%, 200%, 300% INITIAL CONDITION

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dot')
      .forEach((dot) => dot.classList.remove('dot--active'));

    document
      .querySelector(`.dot[data-slide="${slide}"]`)
      .classList.add('dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );

    document.body.style.backgroundColor = `${colors[slide]}`;
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dot')) {
      const { slide } = e.target.dataset;

      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();
