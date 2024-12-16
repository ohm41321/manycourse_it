<script setup>

</script>
<template>
      <div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="src/assets/pic/what-skills-should-you-master-expertise.jpg" style="width: 100%; height: auto; object-fit: fill; object-position: right;">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
        <div class="container">
          <div class="carousel-caption text-start">
            <h1 style="color: #ffa601;">Welcome to Many Course</h1>
            <p class="opacity-75" >Discover the most interesting courses for you.</p>   
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img src="src/assets/pic/best-tools-help-create-elearning-course-1.jpg" style="width: 100%; height:auto; object-fit: cover; object-position: center">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
        <div class="container">
          <div class="carousel-caption">
            <h1 style="color: #ffa601;">Let us take care of your future.</h1>
            <p>Develop your skills and create a better future.</p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img src="src/assets/pic/what-an-elearning-course-should-be-comprised-of-1.jpg" style="width: 100%; height: auto;  object-fit: fill; object-position: center;">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
        <div class="container">
          <div class="carousel-caption text-end">
            <h1 style="color: #ffa601;">Awaken your knowledge.</h1>
            <p>Open up a limitless learning experience.</p>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<style>

body {

  padding-top: 0rem;
  padding-bottom: 3rem;
  color: rgb(var(--bs-tertiary-color-rgb));
}



/* Carousel base class */
.carousel {
  margin-top: -25px;
  margin-bottom: 4rem;
}
/* Since positioning the image, we need to help out the caption */
.carousel-caption {
  bottom: 3rem;
  z-index: 10;
}

/* Declare heights because of positioning of img element */
.carousel-item {
  height: 30rem;
}


.marketing .col-lg-4 {
  margin-bottom: 1.5rem;
  text-align: center;
}
/* rtl:begin:ignore */
.marketing .col-lg-4 p {
  margin-right: .75rem;
  margin-left: .75rem;
}
/* rtl:end:ignore */


/* Featurettes
------------------------- */

.featurette-divider {
  margin: 5rem 0; 
}

.featurette-heading {
  letter-spacing: -.05rem;
}

/* rtl:end:remove */

/* RESPONSIVE CSS
-------------------------------------------------- */

@media (min-width: 40em) {
  .carousel-caption p {
    margin-bottom: 1.25rem;
    font-size: 1.25rem;
    line-height: 1.4;
  }

  .featurette-heading {
    font-size: 50px;
  }
}

@media (min-width: 62em) {
  .featurette-heading {
    margin-top: 7rem;
  }
}

</style>