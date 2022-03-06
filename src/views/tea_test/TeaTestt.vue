<template>
    <div>
        <el-drawer
        title=""
        :visible.sync="drawer1"
        :direction="direction"
        style="height: 2000px">
        <div class="text-bar">
            <div class="text-bar-input">
                <span class="text-bar-input-s">题目</span>
                <input type="text" class="input" v-model="topic">
            </div>
            <div class="text-bar-input">
                <span class="text-bar-input-s">答案</span>
                <input type="text" class="input" v-model="ans">
            </div>
            <div class="text-bar-input-btn">
                <el-button type="primary" @click="save">确认</el-button>
            </div>
        </div>
        </el-drawer>
        <el-drawer
        title=""
        :visible.sync="drawer2"
        :direction="direction"
        style="height: 2000px">
        <div class="text-bar">
            <div class="text-bar-input">
                <span class="text-bar-input-s">题目</span>
                <input type="text" class="input" v-model="edit_topic">
            </div>
            <div class="text-bar-input">
                <span class="text-bar-input-s">答案</span>
                <input type="text" class="input" v-model="edit_ans">
            </div>
            <div class="text-bar-input-btn">
                <el-button type="primary" @click="tea_edit_test">确认</el-button>
            </div>
        </div>
        </el-drawer>
        <el-drawer
        title=""
        :visible.sync="drawer3"
        :direction="direction"
        style="height: 2000px">
        <div class="text-bar">
            <div class="text-bar-input">
                <span class="text-bar-input-s">题目</span>
                <input type="text" class="input" v-model="serch_topic">
            </div>
            <div class="text-bar-input">
                <span class="text-bar-input-s">答案</span>
                <input type="text" class="input" v-model="serch_ans">
            </div>
        </div>
        </el-drawer>
        <stu-test>
            <div slot="数学分析">
                <div class="bar">
                    <el-button type="danger" @click="drawer1 = true">新增题目</el-button>
                    <span class="s">
                        <input type="text" class="input place" placeholder="请输入题目序号" v-model="id_serch">
                        <el-button type="primary" icon="el-icon-search" @click="serch(),drawer3 = true">搜索</el-button>
                    </span>
                </div>
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
                        prop="answer"
                        label="答案"
                        width="280">
                    </el-table-column>
                    <el-table-column>
                         <template slot-scope="scope">
                            <el-button
                            size="mini"
                            type="primary"
                            @click="Edit(scope.$index, scope.row),drawer2 = true"
                            >编辑
                            </el-button>
                            <el-button
                            size="mini"
                            type="danger"
                            @click="Delete(scope.$index, scope.row)"
                            >删除
                            </el-button>
                        </template>
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
        url: '/teacher/work',
      }).then(res => {
          this.math = res.data
      })
    },
    data() {
        return {
            math: [],
            index: '',
            row: '',
            drawer1: false,
            drawer2: false,
            drawer3: false,
            direction: 'ttb',
            topic: '',
            ans: '',
            edit_topic: '',
            edit_ans: '',
            edit_index: '',
            edit_row: '',
            serch_topic: '',
            serch_ans: '',
            id_serch: ''
        }
    },
    components: {
        StuTest
    },
    methods: {
        serch() {
            for(let i of this.math) {
                if (i.id == this.id_serch) {
                    this.serch_topic = i.topic,
                    this.serch_ans = i.answer
                }
            }
        },
        save() {
            let data = {
                topic: this.topic,
                answer: this.ans,
                id: this.math.length + 1,
                score: 0,
                ans: ''
            }
            data = new URLSearchParams(data)
            request({
                url: '/teacher/add',
                method: 'post',
                data
            }).then(res => {
                console.log(res);
                window.location.reload()
            })
        },
        Edit(index, row) {
            this.edit_topic = row.topic
            this.edit_ans = row.answer
            this.edit_index = index
            this.edit_row = row
        },
        Delete(index, row) {
            let id = index + 1
            let data = {
                id
            }
            data = new URLSearchParams(data)
            request({
                url: '/teacher/delete',
                method: 'post',
                data
            }).then(res => {
                console.log(res);
                window.location.reload()
            })
        },
        tea_edit_test() {
            this.edit_row.topic = this.edit_topic
            this.edit_row.answer = this.edit_ans
            // this.math[this.edit_index] = this.edit_row
            // let length = this.math.length
            // let data = this.math.slice(0,length)
            let data = {
                topic: this.edit_row.topic,
                answer: this.edit_row.answer,
                id: this.edit_row.id,
                score: 0,
                ans: ''
            }
            data = new URLSearchParams(data)
            request({
                url: '/teacher/edit',
                method: 'post',
                data
            }).then(res => {
                console.log(res);
                window.location.reload()
            })
        },

    },
}
</script>

<style scoped>
    .bar{
        height: 40px;
        background-color: #fff;
        line-height: 40px;
        box-shadow: 2px 2px 2rem rgba(0, 0, 0, 0.3);
        margin-bottom: 2px;
    }
    .input {
        -webkit-appearance: none;
        background-color: #fff;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        height: 40px;
        line-height: 40px;
        outline: none;
        padding: 0 15px;
        transition: border-color .2s cubic-bezier(.645,.045,.355,1);
        /* cursor: pointer; */
    }
    .s {
        float: right;
        margin-right: 70px;
    }
    .place {
        margin-right: 10px;
    }
    .text-bar {
        width: 400px;
        height: 500px;
        margin: 0 auto;
    }
    .text-bar-input {
        margin-top: 20px;
    }
    .text-bar-input-s {
        width: 200px;
        display: inline-block;
    }
    .text-bar-input-btn {
        padding-top: 20px;
        width: 240px;
        margin: 0 auto;
    }
</style>