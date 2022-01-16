<template>
  <div class="ui segment attached">
    <div class="ui three cards" v-for="i in 3" :key="`friend${i}`">
      <div class="ui card">
        <div class="content">
          <div class="ui placeholder">
            <div class="rectangular image"></div>
          </div>
        </div>
      </div>
      <div class="ui card">
        <div class="content">
          <div class="ui placeholder">
            <div class="rectangular image"></div>
          </div>
        </div>
      </div>
      <div class="ui card">
        <div class="content">
          <div class="ui placeholder">
            <div class="rectangular image"></div>
          </div>
        </div>
      </div>
    </div>
    <Message></Message>
    <Comment></Comment>


  </div>
</template>
<script>
import Comment from "../components/Comment";
import Message from "../components/Message";

export default {
  name: 'Friend',
  components: {Message, Comment}
}
</script>
<style scoped>

</style>