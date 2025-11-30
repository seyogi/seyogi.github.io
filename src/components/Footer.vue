<template>
  <div class="footer">
    <ul class="footer-list">
      <li><a href="https://seyogi.github.io/" class="linktxt">Home</a> / </li>
      <li>
          <router-link to="/Contact" class="linktxt">
            Contact
          </router-link>
      </li> &nbsp;&nbsp;
      <li>
          <a href="https://twitter.com/syg_74" target="_blank" rel="noopener noreferrer" class="box">
            <font-awesome-icon class="icons" icon="fa-brands fa-x-twitter" color="#c4a8a5" />
          </a> / 
      </li>
      <li>
            <a href="https://github.com/seyogi" target="_blank" rel="noopener noreferrer" class="box">
              <font-awesome-icon class="icons" icon="fa-brands fa-github" color="#c4a8a5" />
            </a> / 
      </li>
      <li>
            <a href="https://www.youtube.com/channel/UC4HgyRgl5mOy7QXtOnm-pzQ" target="_blank" rel="noopener noreferrer"
              class="box">
              <font-awesome-icon class="icons" icon="fa-brands fa-youtube" color="#c4a8a5" />
            </a>
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

.footer .linktxt {
  text-decoration: none;
  color: #c4a8a5;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  vertical-align: top;
}
.footer li :hover{
  color: #fdd6d6;
}

</style>
