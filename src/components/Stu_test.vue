<template>
    <div class="test">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane :label="lesson" :name="lesson" v-for="lesson in lessons" :key="lesson">
                <slot :name="lesson">{{lesson}}</slot>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import {request} from '@/network/request.js'
export default {
    data() {
        return {
            activeName: '数学分析',
            lessons: []
        }
    },
    created() {
        let sf = this.$route.query.sf
        let a = '/' + sf + '/index?iid=101'
         request({
        url: a
      }).then(res => {
        this.lessons = res.data.lessons.split(',')
      })
    },
    components: {

    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        }
    }
}
</script>

<style scoped>
    .test {
        position: relative;
        top: 0;
        left: 105px;
        right: 0;
        bottom: 0;
        width: calc(100vw - 105px);
    }
</style>