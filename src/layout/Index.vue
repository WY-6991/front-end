<template>
  <div class="container">
    <Nav></Nav>
    <Header></Header>
    <div>
<!--      <div class="ui stackable equal height stackable grid">-->
      <div class="ui  stackable grid">
        <div class="three wide column">
          <BloggerInfo></BloggerInfo>
          <BloggerInfo></BloggerInfo>
          <BloggerInfo></BloggerInfo>
        </div>
        <div class="ten wide column main-content" >
          <router-view></router-view>
        </div>
        <div class="three wide column">
          <BloggerInfo></BloggerInfo>
          <BloggerInfo></BloggerInfo>
          <BloggerInfo></BloggerInfo>
        </div>
      </div>


    </div>

    <Footer></Footer>
  </div>
</template>
<script>
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Header from "./components/Header";
import BloggerInfo from "./components/sidebar/Info";

export default {
  name: 'Layout',
  components: {BloggerInfo, Header, Footer, Nav}
}
</script>
<style scoped>
.main-content{
  max-width: 1400px;
}

</style>