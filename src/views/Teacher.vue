<template>
  <div>
      <menu-bar>
        <ul>
          <li><a click.prevent="handle">个人信息</a></li>
          <li><a click.prevent="handle">考试课程</a></li>
          <li><a click.prevent="handle">考试情况</a></li>
        </ul>
      </menu-bar>
  </div>
</template>

<script>
import MenuBar from '../components/MenuBar.vue'
export default {
  components: {
    MenuBar
  },
  methods: {
    handle() {

    }
  }
}
</script>

<style>

</style>