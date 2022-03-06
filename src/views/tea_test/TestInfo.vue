<template>
    <div class="test">
        <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column type="expand">
            <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="学生成绩">
                    <span>{{ props.row.course }}</span>
                </el-form-item>
                </el-form>
            </template>
            </el-table-column>
            <el-table-column
            label="学生姓名"
            prop="name">
            </el-table-column>
            <el-table-column
            label="学生学号"
            prop="number">
            </el-table-column>
            <el-table-column
            label="考试科目"
            prop="subject">
            </el-table-column>
            <el-table-column
            label="考试时间"
            prop="time">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import {request} from '@/network/request.js'
export default {
    data() {
      return {
        tableData: []
        
      }
    },
    created() {
        request({
            url: '/teacher/show'
        }).then(res => {
            console.log(res);
            this.tableData = res.data
        })
    },
}
</script>

<style>
    .test {
        position: relative;
        top: 0;
        left: 120px;
        right: 0;
        bottom: 0;
        width: calc(100vw - 120px);
    }
    .demo-table-expand {
    font-size: 0;
    }
    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }
</style>