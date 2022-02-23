<template>
  <div class="stu">
    <menu-bar>
    <ul>
        <li><a v-on:click.prevent="info">个人信息</a></li>
        <li><a v-on:click.prevent="test">考试板块</a></li>
    </ul>
    </menu-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import MenuBar from '../components/MenuBar.vue'
export default {
    components: {
        MenuBar
    },
    methods: {
        test() {
            this.$router.push('/student/stu_test')
        },
        info() {
            this.$router.push('/student')
        }
    }
}
</script>

<style scoped>

</style>    