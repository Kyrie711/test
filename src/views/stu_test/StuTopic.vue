<template>
  <div class="test">
      <el-button type="danger" class="btn" @click="send">提交</el-button>
      <el-table
          :data="math"
          stripe
          style="width: 100%">
          <el-table-column
              prop="id"
              label="序号"
              width="280">
          </el-table-column>
          <el-table-column
              prop="topic"
              label="题目"
              width="280">
          </el-table-column>
          <el-table-column label="答案">
            <template slot-scope="scope">
              <el-input class="el_input" v-model="every[scope.$index]"></el-input>
            </template>
          </el-table-column>
          <el-table-column>
                <template slot-scope="scope">
                  <el-button
                  :disabled="dis[scope.$index]"
                  class="btn2"
                  type="danger"
                  @click="handleEdit(scope.$index, scope.row)"
                  >确定
                  </el-button>
              </template>
          </el-table-column>
      </el-table>
  </div>
</template>

<script>
import {request} from '@/network/request.js'
import Qs from 'qs'
export default {
   created() {
        // this.change(false)
         request({
        url: '/student/work',
      }).then(res => {
          this.math = res.data
      })
    },
    data() {
        return {
            math: [],
            row: '',
            index1: '1',
            index2: '2',
            every: [],
            dis: [,,,,,,,,,]
        }
    },
    methods: {
        
        send() {
            request({
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                method: 'post',
                url: '/student/work/end',
            }).then(res => {
                console.log(res);
                this.$router.push({
                  path: '/student/stu_test',
                  query: {
                    sf: 'student'
                  }
                })
            })
        },
        handleEdit(index, row) {
          this.dis.splice(index,1,true)
          this.row = row
          this.row.ans = this.every[index]
          let data = new URLSearchParams(this.row)
          request({
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                method: 'post',
                url: '/student/work/commit',
                data
            }).then(res => {
              console.log(res);
            })
        }
    },
}
</script>

<style scoped>
  .btn2{
    margin-top: 0;
    width: 80px;
    height: 40px;
  }
  .el_input {
    width: 200px;
  }
    .test {
        position: relative;
        top: 0;
        left: 105px;
        right: 0;
        bottom: 0;
        width: calc(100vw - 105px);
    }
   @import url("https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap");
  
* {
  padding: 0;
  margin: 0;
}

html {
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
}


body {
  background: #1488cc;
  background: -webkit-linear-gradient(to right, #2b32b2, #1488cc);
  background: linear-gradient(to right,#2b32b2,#1488cc);
} 

.wrapper {
  height: 100%;
  width: 100%;
  height: 100vh;
}

.blog_post {
  position: relative;
  padding: 6rem 3rem 6rem 6rem;
  background: #fff;
  max-width: 400px;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 1px 1px 2rem rgba(0, 0, 0, 0.3);
}

.img_pod {
  height: 110px;
  width: 110px;
  background: linear-gradient(90deg, #ff9966, #ff5e62);
  z-index: -1;
  box-shadow: 1px 1px 2rem rgba(0, 0, 0, 0.3);
  border-radius: 100%;
  position: absolute;
  left: -50px;
  top: 10px;
  transform: translateY(-50%);
}

h3 {
  margin: 0 0 0.5rem 0;
  color: #999;
  font-size: 1.25rem;
}

h1 {
  margin: 0 0 1rem 0;
  font-size: 2.5rem;
  letter-spacing: 0.5px;
  color: #333;
}

p {
  margin: 0 0 4.5rem 0;
  font-size: 1.5rem;
  color: #333;
}

.btn {
    margin-top: 20px;
    width: 100px;
    height: 40px;
}


</style>