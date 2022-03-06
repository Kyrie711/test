<template>
  <div>
    <div class="bar">
        <div class="s4"> 
            <p>{{name}}</p>
            <span>{{id}}</span>
        </div>
        <div class="s5">
            <img src="../assets/编辑.svg" alt="" @click="edit">
        </div>
        <span class="s3" @click="back">回到登录</span>
    </div>
    <el-descriptions title="" direction="vertical" :column="4" border>
        <el-descriptions-item label="姓名">{{name}}</el-descriptions-item>
        <el-descriptions-item label="性别">{{sex}}</el-descriptions-item>
        <el-descriptions-item label="手机号" :span="2">{{phone}}</el-descriptions-item>
        <el-descriptions-item label="教授课程">
            <span v-for="(lesson, index) in lessons" :key="index" class="s2">
                <el-tag size="small">{{lesson}}</el-tag>
            </span>
        </el-descriptions-item>
        <el-descriptions-item label="所在学院">{{college}}</el-descriptions-item>
        <el-descriptions-item label="工号">{{id}}</el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
import {request} from '../network/request'
export default {
    
    data() {
        return {
            name: '',
            sex: '',
            phone: '',
            lessons: [],
            college: '',
            id: '',
            iid: ''
        }
    },
    created() {
      request({
        url: '/teacher/index?iid=101',
      }).then(res => {
        this.name = res.data.name
        this.sex = res.data.sex
        this.phone = res.data.phone
        this.lessons = res.data.lessons.split(',')
        this.college = res.data.college
        this.id = res.data.id
        this.iid = res.data.iid
      })
    
    },
    methods: {
        edit() {
            this.$router.push({
                path: '/teacher/tea_edit',
                query: {
                    name: this.name,
                    sex: this.sex,
                    phone: this.phone,
                    lessons: this.lessons,
                    college: this.college,
                    id: this.id,
                    iid: this.iid
                }
            })
        }, 
        back() {
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
    .bar{
        height: 80px;
        background-color: #fff;
        line-height: 80px;
        box-shadow: 2px 2px 2rem rgba(0, 0, 0, 0.3);
        margin-bottom: 2px;
    }

    .s2 {
        margin-right: 10px;
        margin-left: 10px;
    }
    .s1 {
        margin-left: 10px;
    }



    .s3 {
        margin-right: 70px;
        float: right;
        cursor: pointer;
        font-size: 20px;
    }
    .s3:hover {
        color: #a5a4a4;
    }
    .s4{
        margin-top: 20px;
        margin-left: 20px;
        line-height: 25px;
        float: left;
        color: #a5a4a4;
    }
    .s4 p{
        font-size: 18px;
    }
    .s4 span{
        font-size: 14px;
    }
    .s5 {
        margin-left: 5px;
        vertical-align: middle;
        line-height: 80px;
        float: left; 
        height: 80px;
    }
    .s5 img {
        cursor: pointer; 
        padding-top: 20px;
        width: 40px;
        border-bottom: 5px solid #fff;
    } 
    .s5 img:hover { 
        border-bottom: 3px solid #41b983;
    }
</style>