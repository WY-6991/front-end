<template>

  <div class="ui container blog-container">
    <div class="ui attached  segment  top">
      <div class="ui  fluid placeholder" v-for="i in 4" :key="`about${i}`">
        <div class="paragraph">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <div class="paragraph">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>

      <sui-embed
          id="O6Xo21L0ybE"
          placeholder="static/images/extras/image-16by9.png"
          source="youtube"
      />
      <div class="ui  fluid placeholder" v-for="i in 4" :key="`about${i}`">
        <div class="paragraph">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <div class="paragraph">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>


      <Message></Message>
      <Comment></Comment>

    </div>


  </div>


</template>
<script>
import Message from "../components/Message";
import Comment from "../components/Comment";

export default {
  name: 'name',
  components: {Comment, Message}
}
</script>
<style scoped>

.blog-container {
  width: 100% !important;
  height: 100vh;
  min-height: 1000px !important;
}

</style>