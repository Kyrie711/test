<template>
  <div class="menubar">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/lato/v22/S6uyw4BMUTPHjxAwXjeu.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/lato/v22/S6uyw4BMUTPHjx4wXg.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* body {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #1A1E23;
} */

.menubar {
    height: 100%;
    position: absolute;
    width: 100px;
    text-align: center;
    z-index: 1;
}

ul {
    width: 100px;
  display: flex;
  flex-direction: column;
  align-items: start;
  list-style-type: none;
  background-color: rgb(250, 251, 255);
  height: 100%;  
  justify-content: center;
  box-shadow: 1px 1px 4px #a9c9d1;
}
ul li {
    width: 100px;
  padding: 6px 0;
}
ul li a {
    cursor: pointer;
  position: relative;
  display: block;
  box-sizing: border-box;
  /* border-right: solid 4px #fff; */
  padding: 4px 0;
  font-family: Lato, sans-serif;
  color: #678086;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.5s;
}
ul li a::after {
  position: absolute;
  content: "";
  top: 100%;
  left: 0;
  width: 100%;
  height: 3px;
  background: #3498db;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.5s;
}
ul li a:hover {
  color: #95a5a6;
}
ul li a:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}
</style>