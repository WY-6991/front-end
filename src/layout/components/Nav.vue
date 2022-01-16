<template>
  <div>
    <div class="ui inverted large top fixed hidden menu">
      <div class="ui container">
        <router-link class=" item" :class="{'active':$route.name==='Index'}" to="/index"><i class="ui icon home"></i>主页
        </router-link>

        <sui-dropdown text="分类" class="item" >
          <sui-dropdown-menu>
            <sui-dropdown-item class="inverted">
             <router-link to="/category/1"> 我的项目</router-link>
            </sui-dropdown-item>

          </sui-dropdown-menu>
        </sui-dropdown>

        <router-link class=" item" :class="{'active':$route.name==='Moment'}" to="/moment"><i
            class="ui icon hotjar"></i>动态
        </router-link>
        <router-link class=" item" :class="{'active':$route.name==='Archive'}" to="/archive"><i
            class="ui icon archive"></i>归档
        </router-link>
        <router-link class=" item" :class="{'active':$route.name==='Friends'}" to="/friend"><i
            class="ui icon users"></i>友情链接
        </router-link>
        <router-link class=" item" :class="{'active':$route.name==='About'}" to="/about"><i
            class="ui icon question circle "></i>关于
        </router-link>
        <router-link class=" item" :class="{'active':$route.name==='Update'}" to="/update"><i
            class="ui icon envira "></i>更新
        </router-link>


        <div class="right menu">
          <div class="ui icon input">
            <input type="text" placeholder="Search...">
            <i class="search icon"></i>
          </div>

          <router-link to="/login" class="item"><i class="ui icon paper plane"></i>登录</router-link>
        </div>
      </div>
    </div>

    <!-- Sidebar Menu -->
    <!--    <div class="ui vertical inverted sidebar menu">-->
    <!--      <a class="active item">Home</a>-->
    <!--      <a class="item">Work</a>-->
    <!--      <a class="item">Company</a>-->
    <!--      <a class="item">Careers</a>-->
    <!--      <a class="item">Login</a>-->
    <!--      <a class="item">Signup</a>-->
    <!--    </div>-->

  </div>
</template>
<script>
export default {
  name: 'Nav'
}
</script>
<style scoped>

</style>