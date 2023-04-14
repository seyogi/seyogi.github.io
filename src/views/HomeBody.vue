<template>
  <div>
    <Banner></Banner>
    <div class="container">
      <Main class="center_container"></Main>
    </div>
  </div>
</template>

<script>
import Main from "../components/Homeparts/Main";
import Banner from "../components/Homeparts/Banner";


//import Twitter from "../components/Homeparts/Twitter";
//<Twitter class="right_container"></Twitter>

export default {
  components: {
    Main,
    //Twitter,
    Banner,
  },
};

</script>

<style scoped>

.center_container {
  margin-left: auto;
  margin-right: auto;
  max-width: 940px;
}

/*---------- Banner ----------
@media screen and (max-width: 1080px) {
  .center_container {
    margin-left: auto;
    margin-right: auto;
    max-width: 90%;
  }
  .right_container {
    display: none;
    width: 0%;
  }
}
@media screen and (min-width: 1080px) {
  .container {
    max-width: 1080px;
    margin: auto;
  }
  .container:after {
    content: "";
    display: block;
    clear: both;
  }
  .center_container {
    width: 70%;
    float: left;
  }
  .right_container {
    padding-top: 20px;
    height: 100%;
    display: inline;
    float: right;
    position: sticky;
    top: 20px;
  }
}*/

</style>
