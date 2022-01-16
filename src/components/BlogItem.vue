<template lang="html">
  <div>
    <div v-for="i in 5" :key="i">
      <div class="ui segment">
        <div class="ui placeholder">
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
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'BlogItem',
};
</script>