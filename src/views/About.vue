<template>
  <div class="ui attached segment about">
    <div class="ui placeholder" v-for="i in 4" :key="`about${i}`">
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
    <div class="ui placeholder" v-for="i in 4" :key="`about${i}`">
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


    <Comment></Comment>
  </div>
</template>
<script>
import Comment from "../components/Comment";
export default {
  components: {Comment}
}
</script>