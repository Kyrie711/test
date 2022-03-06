<template>
    <div>
        <stu-test>
            <div slot="数学分析">
                <el-button type="danger" class="btn" @click="handleEdit">作答</el-button>
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
                    <el-table-column
                        prop="score"
                        label="分数">
                    </el-table-column>
                </el-table>
            </div>
            <div slot="数据库">hhh</div>
        </stu-test>
    </div>
</template>

<script>
import StuTest from '@/components/Stu_test.vue'
import {request} from '@/network/request.js'

export default {
    created() {
         request({
        url: '/student/work',
      }).then(res => {
          this.math = res.data
      })
    },
    data() {
        return {
            math: [],
            index: '',
            row: ''
        }
    },
    components: {
        StuTest
    },
    methods: {
        handleEdit() {
            request({
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                method: 'post',
                url: '/student/work/start',
            }).then(res => {
              console.log(res);
            })
            this.$router.push('/student/stu_test/stu_topic')
        }
    },
}
</script>

<style scoped>

</style>