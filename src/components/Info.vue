<template>
  <div>
    <el-descriptions title="" direction="vertical" :column="4" border>
        <el-descriptions-item label="姓名">{{name}}</el-descriptions-item>
        <el-descriptions-item label="性别">{{sex}}</el-descriptions-item>
        <el-descriptions-item label="手机号" :span="2">{{132}}</el-descriptions-item>
        <el-descriptions-item label="所选课程">
            <el-tag size="small">{{lesson}}</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="所在学院">{{college}}</el-descriptions-item>
        <el-descriptions-item label="学号/工号">{{id}}</el-descriptions-item>
    </el-descriptions>
    <button class="info-btn" @click="edit">编辑</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'kooriookami',
            sex: '男',
            phone: 132,
            lesson: '计算机操作系统',
            college: '信息学院',
            id: 2020
        }
    },
    methods: {
        edit() {
            this.$router.push({
                path: '/student/stu_edit',
                query: {
                    name: this.name,
                    sex: this.sex,
                    phone: this.phone,
                    lesson: this.lesson,
                    college: this.college,
                    id: this.id
                }
            })
        }
    }
}
</script>

<style scoped>
    .info-btn {
        margin: 10px;
        padding: 9px 15px;
        font-size: 12px;
        border-radius: 3px;
        color: #fff;
        background-color: #409eff;
        border-color: #409eff;
        cursor: pointer;
        border: 1px solid #dcdfe6;
    }
    .info-btn:hover {
       background-color: #136dc7;
    }
</style>