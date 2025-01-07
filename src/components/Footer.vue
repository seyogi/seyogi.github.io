<template>
  <div class="footer">
    <ul class="footer-list">
      <li><a href="https://seyogi.github.io/">Home</a> | </li>
      <li><a href="https://seyogi.hatenablog.com/" target="_blank">Blog</a > | </li>
      <li>
          <router-link to="/Contact">
            Contact
          </router-link>
      </li>
    </ul>
    ©2020-2025 Seyogi
  </div>
</template>

<style scoped>
ul.footer-list li {
    display: inline;
}

.footer {
    margin: 0 auto;
    line-height: 30px;
    color:#ffffff; 
    background: #332621;
    text-align: center;
}

a:link {color:#4444ff;}
a:visited {color:#d264d2;}
a:hover {color:#ffffff; background:#0000cc;}
a:active {color:#ffff00;}

</style>
