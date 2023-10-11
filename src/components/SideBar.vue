<template>
  <aside class="sidebar" data-sidebar>

    <div class="sidebar-info">

      <figure class="avatar-box">
        <!--          <img src="./assets/images/blakc%20and%20dark.png" alt="Richard hanrick" width="80">-->
      </figure>

      <div class="info-content">
        <h1 class="name" title="Richard hanrick">Akbarali Asqaraliyev</h1>

        <p class="title">Web developer</p>
      </div>

      <button class="info_more-btn" data-sidebar-btn>
        <span>Show Contacts</span>

        <ion-icon name="chevron-down"></ion-icon>
      </button>

    </div>

    <div class="sidebar-info_more">

      <div class="separator"></div>

      <ul class="contacts-list">

        <li class="contact-item">

          <div class="icon-box">
            <ion-icon name="mail-outline"></ion-icon>
          </div>

          <div class="contact-info">
            <p class="contact-title">Email</p>

            <a href="mailto:richard@example.com" class="contact-link">richard@example.com</a>
          </div>

        </li>

        <li class="contact-item">

          <div class="icon-box">
            <ion-icon name="phone-portrait-outline"></ion-icon>
          </div>

          <div class="contact-info">
            <p class="contact-title">Phone</p>

            <a href="tel:+12133522795" class="contact-link">+1 (213) 352-2795</a>
          </div>

        </li>

        <li class="contact-item">

          <div class="icon-box">
            <ion-icon name="calendar-outline"></ion-icon>
          </div>

          <div class="contact-info">
            <p class="contact-title">Birthday</p>

            <time datetime="1982-06-23">June 23, 1982</time>
          </div>

        </li>

        <li class="contact-item">

          <div class="icon-box">
            <ion-icon name="location-outline"></ion-icon>
          </div>

          <div class="contact-info">
            <p class="contact-title">Location</p>

            <address>Sacramento, California, USA</address>
          </div>

        </li>

      </ul>

      <div class="separator"></div>

      <ul class="social-list">

        <li class="social-item">
          <a href="#" class="social-link">
            <!--              <ion-icon class = "socials-icons" name="logo-facebook"></ion-icon>-->
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook"
                 viewBox="0 0 16 16">
              <path
                  d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
            </svg>
          </a>
        </li>

        <li class="social-item">
          <a href="#" class="social-link">
            <!--              <ion-icon class = "socials-icons" name="logo-twitter"></ion-icon>-->
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter"
                 viewBox="0 0 16 16">
              <path
                  d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
            </svg>
          </a>
        </li>

        <li class="social-item">
          <a href="#" class="social-link">
            <!--              <ion-icon class = "socials-icons" name="logo-instagram"></ion-icon>-->
          </a>
        </li>

      </ul>

    </div>

  </aside>
</template>

<script>
export default {
  name: "SideBar"
}
</script>


<style>

/*-----------------------------------*\
  #style.css
\*-----------------------------------*/


/**
 * copyright 2022 @codewithsadee
 */


/*-----------------------------------*\
  #CUSTOM PROPERTY
\*-----------------------------------*/

:root {

  /**
   * colors
   */

  /* gradient */

  --bg-gradient-onyx: linear-gradient(
      to bottom right,
      hsl(240, 1%, 25%) 3%,
      hsl(0, 0%, 19%) 97%
  );
  --bg-gradient-jet: linear-gradient(
      to bottom right,
      hsla(240, 1%, 18%, 0.251) 0%,
      hsla(240, 2%, 11%, 0) 100%
  ), hsl(240, 2%, 13%);
  --bg-gradient-yellow-1: linear-gradient(
      to bottom right,
      hsl(45, 100%, 71%) 0%,
      hsla(36, 100%, 69%, 0) 50%
  );
  --bg-gradient-yellow-2: linear-gradient(
      135deg,
      hsla(45, 100%, 71%, 0.251) 0%,
      hsla(35, 100%, 68%, 0) 59.86%
  ), hsl(240, 2%, 13%);
  --border-gradient-onyx: linear-gradient(
      to bottom right,
      hsl(0, 0%, 25%) 0%,
      hsla(0, 0%, 25%, 0) 50%
  );
  --text-gradient-yellow: linear-gradient(
      to right,
      hsl(45, 100%, 72%),
      hsl(35, 100%, 68%)
  );

  /* solid */

  --jet: hsl(0, 0%, 22%);
  --onyx: hsl(240, 1%, 17%);
  --eerie-black-1: hsl(240, 2%, 13%);
  --eerie-black-2: hsl(240, 2%, 12%);
  --smoky-black: hsl(0, 0%, 7%);
  --white-1: hsl(0, 0%, 100%);
  --white-2: hsl(0, 0%, 98%);
  --orange-yellow-crayola: hsl(45, 100%, 72%);
  --vegas-gold: hsl(45, 54%, 58%);
  --light-gray: hsl(0, 0%, 84%);
  --light-gray-70: hsla(0, 0%, 84%, 0.7);
  --bittersweet-shimmer: hsl(0, 43%, 51%);

  /**
   * typography
   */

  /* font-family */
  --ff-poppins: 'Poppins', sans-serif;

  /* font-size */
  --fs-1: 24px;
  --fs-2: 18px;
  --fs-3: 17px;
  --fs-4: 16px;
  --fs-5: 15px;
  --fs-6: 14px;
  --fs-7: 13px;
  --fs-8: 11px;

  /* font-weight */
  --fw-300: 300;
  --fw-400: 400;
  --fw-500: 500;
  --fw-600: 600;

  /**
   * shadow
   */

  --shadow-1: -4px 8px 24px hsla(0, 0%, 0%, 0.25);
  --shadow-2: 0 16px 30px hsla(0, 0%, 0%, 0.25);
  --shadow-3: 0 16px 40px hsla(0, 0%, 0%, 0.25);
  --shadow-4: 0 25px 50px hsla(0, 0%, 0%, 0.15);
  --shadow-5: 0 24px 80px hsla(0, 0%, 0%, 0.25);

  /**
   * transition
   */

  --transition-1: 0.25s ease;
  --transition-2: 0.5s ease-in-out;

}


/*-----------------------------------*\
  #RESET
\*-----------------------------------*/

*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

img, ion-icon, a, button, time, span {
  display: block;
}

button {
  font: inherit;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
}

input, textarea {
  display: block;
  width: 100%;
  background: none;
  font: inherit;
}

::selection {
  background: var(--orange-yellow-crayola);
  color: var(--smoky-black);
}

:focus {
  outline-color: var(--orange-yellow-crayola);
}

html {
  font-family: var(--ff-poppins);
}

body {
  background: var(--smoky-black);
}


/*-----------------------------------*\
  #REUSED STYLE
\*-----------------------------------*/

.sidebar,
article {
  background: var(--eerie-black-2);
  border: 1px solid var(--jet);
  border-radius: 20px;
  padding: 15px;
  box-shadow: var(--shadow-1);
  z-index: 1;
}

.separator {
  width: 100%;
  height: 1px;
  background: var(--jet);
  margin: 16px 0;
}

.icon-box {
  position: relative;
  background: var(--border-gradient-onyx);
  width: 30px;
  height: 30px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: var(--orange-yellow-crayola);
  box-shadow: var(--shadow-1);
  z-index: 1;
}

/* social-media icons */
.socials-icons {
  color: var(--orange-yellow-crayola);

}

.icon-box::before {
  content: "";
  position: absolute;
  inset: 1px;
  background: var(--eerie-black-1);
  border-radius: inherit;
  z-index: -1;
}

.icon-box ion-icon {
  --ionicon-stroke-width: 35px;
}

article {
  display: none;
}

article.active {
  display: block;
  animation: fade 0.5s ease backwards;
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.h2,
.h3,
.h4,
.h5 {
  color: var(--white-2);
  text-transform: capitalize;
}

.h2 {
  font-size: var(--fs-1);
}

.h3 {
  font-size: var(--fs-2);
}

.h4 {
  font-size: var(--fs-4);
}

.h5 {
  font-size: var(--fs-7);
  font-weight: var(--fw-500);
}

.article-title {
  position: relative;
  padding-bottom: 7px;
}

.article-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30px;
  height: 3px;
  background: var(--text-gradient-yellow);
  border-radius: 3px;
}

.has-scrollbar::-webkit-scrollbar {
  width: 5px; /* for vertical scrollbar */
  height: 5px; /* for horizontal scrollbar */
}

.has-scrollbar::-webkit-scrollbar-track {
  background: var(--onyx);
  border-radius: 5px;
}

.has-scrollbar::-webkit-scrollbar-thumb {
  background: var(--orange-yellow-crayola);
  border-radius: 5px;
}

.has-scrollbar::-webkit-scrollbar-button {
  width: 20px;
}

.content-card {
  position: relative;
  background: var(--border-gradient-onyx);
  padding: 15px;
  padding-top: 45px;
  border-radius: 14px;
  box-shadow: var(--shadow-2);
  cursor: pointer;
  z-index: 1;
}

.content-card::before {
  content: "";
  position: absolute;
  inset: 1px;
  background: var(--bg-gradient-jet);
  border-radius: inherit;
  z-index: -1;
}


/*-----------------------------------*\
  #MAIN
\*-----------------------------------*/

main {
  margin: 15px 12px;
  margin-bottom: 75px;
  min-width: 259px;
}


/*-----------------------------------*\
  #SIDEBAR
\*-----------------------------------*/

.sidebar {
  margin-bottom: 15px;
  max-height: 112px;
  overflow: hidden;
  transition: var(--transition-2);
}

.sidebar.active {
  max-height: 405px;
}

.sidebar-info {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
}

.avatar-box {
  background: var(--bg-gradient-onyx);
  border-radius: 20px;
}

.info-content .name {
  color: var(--white-2);
  font-size: var(--fs-3);
  font-weight: var(--fw-500);
  letter-spacing: -0.25px;
  margin-bottom: 10px;
}

.info-content .title {
  color: var(--white-1);
  background: var(--onyx);
  font-size: var(--fs-8);
  font-weight: var(--fw-300);
  width: max-content;
  padding: 3px 12px;
  border-radius: 8px;
}

.info_more-btn {
  position: absolute;
  top: -15px;
  right: -15px;
  border-radius: 0 15px;
  font-size: 13px;
  color: var(--orange-yellow-crayola);
  background: var(--border-gradient-onyx);
  padding: 10px;
  box-shadow: var(--shadow-2);
  transition: var(--transition-1);
  z-index: 1;
}

.info_more-btn::before {
  content: "";
  position: absolute;
  inset: 1px;
  border-radius: inherit;
  background: var(--bg-gradient-jet);
  transition: var(--transition-1);
  z-index: -1;
}

.info_more-btn:hover,
.info_more-btn:focus {
  background: var(--bg-gradient-yellow-1);
}

.info_more-btn:hover::before,
.info_more-btn:focus::before {
  background: var(--bg-gradient-yellow-2);
}

.info_more-btn span {
  display: none;
}

.sidebar-info_more {
  opacity: 0;
  visibility: hidden;
  transition: var(--transition-2);
}

.sidebar.active .sidebar-info_more {
  opacity: 1;
  visibility: visible;
}

.contacts-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

.contact-item {
  min-width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
}

.contact-info {
  max-width: calc(100% - 46px);
  width: calc(100% - 46px);
}

.contact-title {
  color: var(--light-gray-70);
  font-size: var(--fs-8);
  text-transform: uppercase;
  margin-bottom: 2px;
}

.contact-info :is(.contact-link, time, address) {
  color: var(--white-2);
  font-size: var(--fs-7);
}

.contact-info address {
  font-style: normal;
}

.social-list {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  padding-bottom: 4px;
  padding-left: 7px;
}

.social-item .social-link {
  color: var(--light-gray-70);
  font-size: 18px;
}


.social-item .social-link:hover {
  color: var(--light-gray);
}


/*-----------------------------------*\
  #NAVBAR
\*-----------------------------------*/


/*-----------------------------------*\
  #ABOUT
\*-----------------------------------*/

.about .article-title {
  margin-bottom: 15px;
}


.about-text p {
  margin-bottom: 15px;
}


.service-icon-box img {
  margin: auto;
}


/**
 * #testimonials-modal
 */

.modal-container.active .testimonials-modal {
  transform: scale(1);
  opacity: 1;
}

.modal-close-btn ion-icon {
  --ionicon-stroke-width: 50px;
}

.modal-img-wrapper > img {
  display: none;
}


.modal-content time {
  font-size: var(--fs-6);
  color: var(--light-gray-70);
  font-weight: var(--fw-300);
  margin-bottom: 10px;
}

.modal-content p {
  color: var(--light-gray);
  font-size: var(--fs-6);
  font-weight: var(--fw-300);
  line-height: 1.6;
}


/**
 * #clients
 */


.clients-item img {
  width: 100%;
  filter: grayscale(1);
  transition: var(--transition-1);
}

.clients-item img:hover {
  filter: grayscale(0);
}


/*-----------------------------------*\
  #RESUME
\*-----------------------------------*/

.article-title {
  margin-bottom: 30px;
}


/**
 * education and experience
 */


.timeline .title-wrapper {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 25px;
}


.timeline-list span {
  color: var(--vegas-gold);
  font-weight: var(--fw-400);
  line-height: 1.6;
}


/*-----------------------------------*\
  #PORTFOLIO
\*-----------------------------------*/


.filter-select.active .select-icon {
  transform: rotate(0.5turn);
}


.filter-select.active + .select-list {
  opacity: 1;
  visibility: visible;
  pointer-events: all;
}

.select-item button {
  background: var(--eerie-black-2);
  color: var(--light-gray);
  font-size: var(--fs-6);
  font-weight: var(--fw-300);
  text-transform: capitalize;
  width: 100%;
  padding: 8px 10px;
  border-radius: 8px;
}

.select-item button:hover {
  --eerie-black-2: hsl(240, 2%, 20%);
}


@keyframes scaleUp {
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}

.project-item > a {
  width: 100%;
}


.project-item > a:hover .project-img::before {
  background: hsla(0, 0%, 0%, 0.5);
}


.project-item > a:hover .project-item-icon-box {
  --scale: 1;
  opacity: 1;
}

.project-item-icon-box ion-icon {
  --ionicon-stroke-width: 50px;
}

.project-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition-1);
}

.project-item > a:hover img {
  transform: scale(1.1);
}


/*-----------------------------------*\
  #BLOG
\*-----------------------------------*/


.blog-post-item > a {
  position: relative;
  background: var(--border-gradient-onyx);
  height: 100%;
  box-shadow: var(--shadow-4);
  border-radius: 16px;
  z-index: 1;
}

.blog-post-item > a::before {
  content: "";
  position: absolute;
  inset: 1px;
  border-radius: inherit;
  background: var(--eerie-black-1);
  z-index: -1;
}


.blog-banner-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition-1);
}

.blog-post-item > a:hover .blog-banner-box img {
  transform: scale(1.1);
}


.blog-meta :is(.blog-category, time) {
  color: var(--light-gray-70);
  font-size: var(--fs-6);
  font-weight: var(--fw-300);
}


/*-----------------------------------*\
  #CONTACT
\*-----------------------------------*/


.mapbox figure {
  height: 100%;
}

.mapbox iframe {
  width: 100%;
  height: 100%;
  border: none;
  filter: grayscale(1) invert(1);
}


textarea.form-input {
  min-height: 100px;
  height: 120px;
  max-height: 200px;
  resize: vertical;
  margin-bottom: 25px;
}

textarea.form-input::-webkit-resizer {
  display: none;
}


.form-btn ion-icon {
  font-size: 16px;
}


/*-----------------------------------*\
  #RESPONSIVE
\*-----------------------------------*/

/**
 * responsive larger than 450px screen
 */


/**
 * responsive larger than 580px screen
 */

@media (min-width: 580px) {

  /**
   * CUSTOM PROPERTY
   */
  :root {

    /**
     * typography
     */

    --fs-1: 32px;
    --fs-2: 24px;
    --fs-3: 26px;
    --fs-4: 18px;
    --fs-6: 15px;
    --fs-7: 15px;
    --fs-8: 12px;

  }


  /**
   * #REUSED STYLE
   */
  .sidebar, article {
    width: 520px;
    margin-inline: auto;
    padding: 30px;
  }

  .article-title {
    font-weight: var(--fw-600);
    padding-bottom: 15px;
  }

  .article-title::after {
    width: 40px;
    height: 5px;
  }

  .icon-box {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    font-size: 18px;
  }


  /**
   * #MAIN
   */
  main {
    margin-top: 60px;
    margin-bottom: 100px;
  }


  /**
   * #SIDEBAR
   */
  .sidebar {
    max-height: 180px;
    margin-bottom: 30px;
  }

  .sidebar.active {
    max-height: 584px;
  }

  .sidebar-info {
    gap: 25px;
  }

  .avatar-box {
    border-radius: 30px;
  }

  .avatar-box img {
    width: 120px;
  }

  .info-content .name {
    margin-bottom: 15px;
  }

  .info-content .title {
    padding: 5px 18px;
  }

  .info_more-btn {
    top: -30px;
    right: -30px;
    padding: 10px 15px;
  }

  .info_more-btn span {
    display: block;
    font-size: var(--fs-8);
  }

  .info_more-btn ion-icon {
    display: none;
  }

  .separator {
    margin: 32px 0;
  }

  .contacts-list {
    gap: 20px;
  }

  .contact-info {
    max-width: calc(100% - 64px);
    width: calc(100% - 64px);
  }


  /**
   * #ABOUT
   */
  .about .article-title {
    margin-bottom: 20px;
  }

  .testimonials-avatar-box img {
    width: 80px;
  }


  .modal-avatar-box img {
    width: 65px;
  }

  .modal-img-wrapper > img {
    display: block;
    flex-grow: 1;
    width: 35px;
  }


  textarea.form-input {
    margin-bottom: 30px;
  }


  .form-btn ion-icon {
    font-size: 18px;
  }

}


/**
 * responsive larger than 768px screen
 */

@media (min-width: 768px) {

  /**
   * REUSED STYLE
   */
  /**
   * SIDEBAR
   */
  .contacts-list {
    grid-template-columns: 1fr 1fr;
    gap: 30px 15px;
  }


  .modal-avatar-box img {
    width: 80px;
  }


  .filter-item button {
    color: var(--light-gray);
    font-size: var(--fs-5);
    transition: var(--transition-1);
  }

  .filter-item button:hover {
    color: var(--light-gray-70);
  }

  .filter-item button.active {
    color: var(--orange-yellow-crayola);
  }


}


/**
 * responsive larger than 1024px screen
 */

@media (min-width: 1024px) {

  /**
   * CUSTOM PROPERTY
   */
  :root {

    /**
    * shadow
    */

    --shadow-1: -4px 8px 24px hsla(0, 0%, 0%, 0.125);
    --shadow-2: 0 16px 30px hsla(0, 0%, 0%, 0.125);
    --shadow-3: 0 16px 40px hsla(0, 0%, 0%, 0.125);

  }


  /**
   * REUSED STYLE
   */
  .sidebar, article {
    width: 950px;
    box-shadow: var(--shadow-5);
  }


  /**
   * MAIN
   */
  main {
    margin-bottom: 60px;
  }


}


/**
 * responsive larger than 1250px screen
 */

@media (min-width: 1250px) {

  /**
   * RESET
   */
  body::-webkit-scrollbar {
    width: 20px;
  }

  body::-webkit-scrollbar-track {
    background: var(--smoky-black);
  }

  body::-webkit-scrollbar-thumb {
    border: 5px solid var(--smoky-black);
    background: hsla(0, 0%, 100%, 0.1);
    border-radius: 20px;
    box-shadow: inset 1px 1px 0 hsla(0, 0%, 100%, 0.11),
    inset -1px -1px 0 hsla(0, 0%, 100%, 0.11);
  }

  body::-webkit-scrollbar-thumb:hover {
    background: hsla(0, 0%, 100%, 0.15);
  }

  body::-webkit-scrollbar-button {
    height: 60px;
  }


  /**
   * REUSED STYLE
   */
  .sidebar, article {
    width: auto;
  }

  article {
    min-height: 100%;
  }


  /**
   * MAIN
   */
  main {
    max-width: 1200px;
    margin-inline: auto;
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: 25px;
  }


  /**
   * SIDEBAR
   */
  .sidebar {
    position: sticky;
    top: 60px;
    max-height: max-content;
    height: 100%;
    margin-bottom: 0;
    padding-top: 60px;
    z-index: 1;
  }

  .sidebar-info {
    flex-direction: column;
  }

  .avatar-box img {
    width: 150px;
  }

  .info-content .name {
    white-space: nowrap;
    text-align: center;
  }

  .info-content .title {
    margin: auto;
  }

  .info_more-btn {
    display: none;
  }

  .sidebar-info_more {
    opacity: 1;
    visibility: visible;
  }

  .contacts-list {
    grid-template-columns: 1fr;
  }

  .contact-info :is(.contact-link) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .contact-info :is(.contact-link, time, address) {
    --fs-7: 14px;
    font-weight: var(--fw-300);
  }

  .separator:last-of-type {
    margin: 15px 0;
    opacity: 0;
  }

  .social-list {
    justify-content: center;
  }


  /**
	 * RESUME
	 */
  .timeline-text {
    max-width: 700px;
  }

}

</style>