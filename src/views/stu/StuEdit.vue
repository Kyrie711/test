<template>
  <div class="info">
    <div class="bg">
      <div class="myinfo">
        INFO
        <div class="save">
          <img src="../../assets/保存.svg" alt="" @click="save">
        </div>
      </div>
    </div>
    <el-descriptions title="" direction="vertical" :column="4" border>
      <el-descriptions-item label="姓名">
        <el-input type="text"  v-model="name" />
      </el-descriptions-item>

      <el-descriptions-item label="性别">
        <el-input type="text" v-model="sex" />
      </el-descriptions-item>

      <el-descriptions-item label="手机号" :span="2">
        <el-input type="number" name="" id="" v-model="phone" />
      </el-descriptions-item>

      <el-descriptions-item label="所选课程">
        <!-- <el-input type="text" v-model="lessons" /> -->
         <el-select v-model="lessons" multiple placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.label"
            :label="item.label"
            :value="item.label">
          </el-option>
        </el-select>
      </el-descriptions-item>

      <el-descriptions-item label="所在学院">
        <el-input type="text" v-model="college" />
      </el-descriptions-item>

      <el-descriptions-item label="学号">
        <el-input type="number" name="" id="" v-model="id" />
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
import { request } from "@/network/request.js";

export default {
  data() {
      return {
          name: this.$route.query.name,
          sex: this.$route.query.sex,
          phone: this.$route.query.phone,
          college: this.$route.query.college,
          id: this.$route.query.id,
          lessons: this.$route.query.lessons,
          iid: this.$route.query.iid,
          options: [{
            label: '计算机操作系统'
          }, {
            label: '数据库'
          }, {
            label: '数学分析'
          }, {
            label: '高等代数'
          }, {
            label: '常微分方程'
          }],
        }
  },
  methods: {
    save() {
      let data = {
                name: this.name,
                sex: this.sex,
                phone: this.phone,
                lessons: this.lessons,
                college: this.college,
                id: this.id,
                iid: this.iid
      }
      console.log(data);
      data = new URLSearchParams(data)
      console.log(data);
      request({
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: 'post',  
        url: "/student/save",
        data
      }).then((res) => {
          
        console.log(res);
        this.$router.push('/student')
        
      });
    },
  },
};
</script>

<style scoped>

.save {  
  margin-right: 50px;
  float: right;    /* 9999999999999999999 */
  padding-top: 10px;
  height: 90px;
}
.save img {
  cursor: pointer;
  width: 70px;
}
.myinfo {
  font-size: 28px; 
  margin-left: 30px;
  line-height: 100px;
}
.bg {
  
  height: 100px; 
  background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);
}

.info {
  position: relative;
  top: 0;
  left: 100px;
  right: 0;
  bottom: 0;
  width: calc(100vw - 100px);
}
</style>