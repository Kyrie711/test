<template>
  <div class="stu">
    <menu-bar>
    <ul>
        <li :class="{color: active}"><a v-on:click.prevent="info">个人信息</a></li>
        <li :class="{color: !active}"><a v-on:click.prevent="test">考试板块</a></li>
    </ul>
    </menu-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import MenuBar from '../components/MenuBar.vue'
export default {
    data() {
        return {
            active: true
        }
    },
    created() {
        
    },
    components: {
        MenuBar
    },
    methods: {
        info() {
            this.active = true
            this.$router.push('/student').catch(() => {})
        },
        test() {
            this.active = false
            this.$router.push({
                path: '/student/stu_test',
                query: {
                    sf: 'student'
                }
            }).catch(() => {})
        }
        
    }
}
</script>

<style scoped>

</style>    