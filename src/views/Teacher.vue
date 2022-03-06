<template>
  <div>
      <menu-bar>
        <ul>
          <li><a v-on:click.prevent="info">个人信息</a></li>
          <li><a v-on:click.prevent="test_lesson">考试课程</a></li>
          <li><a v-on:click.prevent="test_info">考试情况</a></li>
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
    info() {
        this.$router.push('/teacher').catch(() => {})
    },
    test_lesson() {
        this.$router.push({
                path: '/teacher/tea_test',
                query: {
                    sf: 'teacher'
                }
            }).catch(() => {})
    },
    test_info() {
      this.$router.push('/teacher/test_info').catch(() => {})
    }
  }
}
</script>

<style>

</style>