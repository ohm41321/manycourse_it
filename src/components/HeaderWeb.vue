
<template>
<div class="navbar-ct" style="background-color:#212121;">
    <header class="fixed-header d-flex flex-wrap justify-content-center py-2 mb-4">
      <!--The Logo, Name on Header-->
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none" style="margin-left: 40px;">
        <img src="../assets/pic/icon/black_1.png" alt="" width="70" height="70"> &nbsp; &nbsp;
        <span class="fs-4" style="color: white;">Many Course</span>
      </a>
<!-- Button On Header Right Hand-->

<RouterLink to="/assess">
    <button class="c-button c-button--gooey" style="margin-right: 10px;" > Keys
      <div class="c-button__blobs">
      <div></div>
      <div></div>
      <div></div>
      </div>
    </button>
</RouterLink> 

<RouterLink to="/purchase">
    <button class="c-button c-button--gooey"  style="margin-right: 10px;" > Package
      <div class="c-button__blobs">
      <div></div>
      <div></div>
      <div></div>
      </div>
    </button>
</RouterLink>     
<img @click="toggleDarkTheme()" src="https://cdn-icons-png.flaticon.com/512/4445/4445942.png" id="icon-theme" style="margin-right: 30px;">
    </header>
</div>
</template>
<script setup>
import { RouterLink } from 'vue-router';

// fn change theme
const toggleDarkTheme = () => {
  const icon = document.getElementById("icon-theme"); 

  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = 'https://cdn-icons-png.flaticon.com/512/3050/3050031.png'; 
  } else {
    icon.src = 'https://cdn-icons-png.flaticon.com/512/4445/4445942.png'; 
  }
};



</script>
<!--Style of Header, Button-->
<style>
/* icon-theme-dark, light */

#icon-theme{
  margin: auto 20px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: 1s;

}
#icon-theme:hover{
  animation-name: rotate;
  -webkit-animation: rotate 3s normal linear infinite;
  animation: rotate 3s normal linear infinite;
  scale: 1.5;
}

:root{
   --primary-color: #f4fdff;
  --secondary-color: #212121; 
}

.dark-theme{
 --primary-color: #3d3d3d;
 --secondary-color: #ffffff;
}

@keyframes rotate {
  0% {
    -webkit-transform: rotate3d(0, 0, 1, 0deg);
    transform: rotate3d(0, 0, 1, 0deg);
  }
  25% {
    -webkit-transform: rotate3d(0, 0, 1, 90deg);
    transform: rotate3d(0, 0, 1, 90deg);
  }
  50% {
    -webkit-transform: rotate3d(0, 0, 1, 180deg);
    transform: rotate3d(0, 0, 1, 180deg);
  }
  75% {
    -webkit-transform: rotate3d(0, 0, 1, 270deg);
    transform: rotate3d(0, 0, 1, 270deg);
  }
  100% {
    -webkit-transform: rotate3d(0, 0, 1, 360deg);
    transform: rotate3d(0, 0, 1, 360deg);
  }
}
/* navbar */

.navbar-ct{
  margin: 6.5rem auto;
}
.fixed-header{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #212121;
  z-index: 1000;
}
/*  */
.c-button {
  background-color: #212121;
  margin: 10px;
  color: #000;
  font-weight: 700;
  font-size: 16px;
  text-decoration: none;
  padding: 0.5em 1em;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  position: relative;
  z-index: 1;
}

.c-button--gooey {
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 2px;
  border: 4px solid #ffae00;
  border-radius: 0;
  position: relative;
  transition: all 500ms ease;
}

.c-button--gooey .c-button__blobs {
  height: 100%;
  filter: url(#goo);
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  bottom: -3px;
  right: -1px;
  z-index: -1;
}

.c-button--gooey .c-button__blobs div {
  background-color: #ffae00;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  position: absolute;
  transform: scale(1.4) translateY(125%) translateZ(0);
  transition: all 600ms ease;
}

.c-button--gooey .c-button__blobs div:nth-child(1) {
  left: -5%;
}

.c-button--gooey .c-button__blobs div:nth-child(2) {
  left: 30%;
  transition-delay: 60ms;
}

.c-button--gooey .c-button__blobs div:nth-child(3) {
  left: 66%;
  transition-delay: 25ms;
}

.c-button--gooey:hover {
  color: #212121;
}

.c-button--gooey:hover .c-button__blobs div {
  transform: scale(1.4) translateY(0) translateZ(0);
}
/* */
.form-control-dark {
  border-color: var(--bs-gray);
}
.form-control-dark:focus {
  border-color: #000000;
  box-shadow: 0 0 0 .25rem rgba(255, 255, 255, .25);
}
.text-small {
  font-size: 85%;
}

.dropdown-toggle:not(:focus) {
  outline: 0;
}
@media screen and (max-width: 1560px) {
  .navbar-ct{
  margin: 6.98rem auto;
}
}

@media screen and (max-width: 560px) {
  .fs-4{
    margin-right: 200px;
  }
  .navbar-ct{
  margin: 12.2rem auto;
}
}
@media screen and (max-width: 445px) {
  .fs-4{
    margin-right: 100px;
  }
  .navbar-ct{
  margin: 10.3rem auto;
}
.c-button--gooey{
  margin-top: -20px;
}
#icon-theme{
  margin: auto 20px;
  margin-top: -20px ;
}
}

</style>