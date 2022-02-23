<template>
  <div class="info">
    <el-descriptions title="" direction="vertical" :column="4" border>

        <el-descriptions-item label="姓名">
            <input type="text" :value="$route.query.name">
        </el-descriptions-item>

        <el-descriptions-item label="性别">
            <input type="text" :value="$route.query.sex">
        </el-descriptions-item>

        <el-descriptions-item label="手机号" :span="2">
            <input type="number" name="" id="" :value="$route.query.phone">
        </el-descriptions-item>

        <el-descriptions-item label="所选课程">
            <el-tag size="small">{{$route.query.lesson}}</el-tag>
        </el-descriptions-item>

        <el-descriptions-item label="所在学院">
            <input type="text" :value="$route.query.college">
        </el-descriptions-item>

        <el-descriptions-item label="工号/学号">
            <input type="number" name="" id="" :value="$route.query.id">
        </el-descriptions-item>

    </el-descriptions>
    <button class="info-btn" @click="save">保存</button>
  </div>
</template>

<script>
export default {
    methods: {
        save() {
            
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

    .info {
        position: relative;
        top: 0;
        left: 5%;
        right: 0;
        bottom: 0;
        width: 95%;
    }
</style>