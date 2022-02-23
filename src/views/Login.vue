<template>
  <div class="container" onclick="onclick">
    <div class="top"></div>
    <div class="bottom"></div>
    <div class="center">
      <h2>请登录</h2>
      <input class="input" type="text" placeholder="用户名"/>
      <input class="input" type="password" placeholder="密码"/>

      <div class="radio">
          <div>
            <input type="radio" id="teacher" value="teacher" v-model="radio">
            <label for="teacher">教师</label>
          </div>
          <div>
            <input type="radio" id="student" value="student" v-model="radio">
            <label for="student">学生</label>
          </div>
      </div>
      <button class="btn" @click="login">登录</button>
      <h2>&nbsp;</h2>
    </div>
  </div>
</template>

<script>
import {request} from '../network/request.js'

export default {
  name: 'Login',
  data() {
    return {
      radio: ''
    }
  },
  methods: {
    login() {
      if (this.radio === 'teacher') {
        this.$router.push('/teacher')
      } else {
        this.$router.push('/student')
      }
    // request({
    //   url: '/Apple/listAllApple',
    // }).then(res => {
    //   console.log(res);
    // })
  
    }
  }
}
</script>

<style scoped>
  @import url("https://fonts.googleapis.com/css?family=Raleway:400,700");
*, *:before, *:after {
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  font-family: "Raleway", sans-serif;
}

.radio {
  display: flex;
  width: 200px;
  height: 40px;
}
.radio label{
  margin-left: 10px;
}
.radio div{
  flex: 1;
  text-align: center;
  justify-content: space-between;
}

.btn {
  width: 100px;
  padding: 8px 12px;
  outline: none;
  border: 0;
  color: #fff;
  border-radius: 4px;
  background: #8c7569;
  font-family: "Nunito", sans-serif;
  transition: 0.3s;
  cursor: pointer;
}

.btn:hover {
  background: #55311c;
}

.container {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.container:hover .top:before, .container:hover .top:after, .container:hover .bottom:before, .container:hover .bottom:after, .container:active .top:before, .container:active .top:after, .container:active .bottom:before, .container:active .bottom:after {
  margin-left: 200px;
  transform-origin: -200px 50%;
  transition-delay: 0s;
}
.container:hover .center, .container:active .center {
  opacity: 1;
  transition-delay: 0.2s;
}

.top:before, .top:after, .bottom:before, .bottom:after {
  content: "";
  display: block;
  position: absolute;
  width: 200vmax;
  height: 200vmax;
  top: 50%;
  left: 50%;
  margin-top: -100vmax;
  transform-origin: 0 50%;
  transition: all 0.5s cubic-bezier(0.445, 0.05, 0, 1);
  z-index: 10;
  opacity: 0.65;
  transition-delay: 0.2s;
}

.top:before {
  transform: rotate(45deg);
  background: #e46569;
}
.top:after {
  transform: rotate(135deg);
  background: #ecaf81;
}

.bottom:before {
  transform: rotate(-45deg);
  background: #60b8d4;
}
.bottom:after {
  transform: rotate(-135deg);
  background: #3745b5;
}

.center {
  position: absolute;
  width: 400px;
  height: 400px;
  top: 50%;
  left: 50%;
  margin-left: -200px;
  margin-top: -200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  opacity: 0;
  transition: all 0.5s cubic-bezier(0.445, 0.05, 0, 1);
  transition-delay: 0s;
  color: #333;
}
.center .input {
  width: 100%;
  padding: 15px;
  margin: 5px;
  border-radius: 1px;
  border: 1px solid #ccc;
  font-family: inherit;
}
</style>
