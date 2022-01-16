<template>
  <div class="login-container">
    <form class="ui form attached fluid segment login">
      <div class="ui header">登录</div>
      <div class="ui left icon input field">
        <input placeholder="username" type="text">
        <i class="ui icon user"></i>
      </div>
      <div class="ui left icon input field">
        <input placeholder="password" type="password">
        <i class="ui icon lock"></i>
      </div>
      <div class="inline field m-checkbox">
        <div class="ui checkbox">
          <input type="checkbox" id="terms">
          <label for="terms">记住密码</label>
        </div>
        <label for="terms">忘记密码</label>
      </div>
      <div class="ui blue submit button">登录</div>
    </form>

  </div>
</template>
<script>

export default {
  name: 'Login',

}
</script>
<style scoped>

.login-container{
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
}

label {
  float: left;
  left: 10%;
}

.login {
  position: relative;
  width: 500px !important;
  height: 300px;
}

input {
  width: 450px !important;
  height: 44px;
}

.m-checkbox {
  display: flex;
  justify-content: space-between;
}

.ui.submit.button {
  width: 100%;
}
</style>