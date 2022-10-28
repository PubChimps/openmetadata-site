const testimonialContainer = document.querySelector("#testimonialContainer");

const fetchTestimonials = async () => {
  const res = await fetch("./js/testimonials.json");
  const data = await res.json();

  testimonialContainer.innerHTML = data
    .map(({ name, image, description, company }, index) => {
      return `<div class="swiper-slide" key=${index} >
                  <div class="testimonial-card card card-team">
                    <div class="card-body">
                        <img class="card-team-img mb-3"
                        src=${image}
                        alt=${company}/>
                      <div class="card-team-name"><strong>${name}</strong></div>
                       <div class="card-team-position mb-3"><strong>${company}</strong></div>
                      <p class="mb-0">
                      ${description}
                      </p>
                    </div>  
                 </div>
              </div>`;
    })
    .join("");
};

fetchTestimonials();

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  spaceBetween: 10,
  autoplay: true,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  },
});
