<template>
  <div class="ui attached segment">
    <div class="ui card m-moment" v-for="i in 10" :key="`moment${i}`">
      <div class="content">
        <div class="header">Cute Dog</div>
        <div class="meta">
          <span class="right floated time">2 days ago</span>
          <span class="category">Animals</span>
        </div>
        <div class="description">
          <p></p>
        </div>
      </div>
      <div class="extra content">
        <div class="right floated author">
          <img class="ui avatar image" src="/images/avatar/small/matt.jpg"> Matt
        </div>
      </div>
    </div>

  </div>

</template>
<script>
 export default {
   name:'Moment'
 }
</script>
<style scoped>

.m-moment{
  width: 100%;
  min-height: 100px;

}

</style>