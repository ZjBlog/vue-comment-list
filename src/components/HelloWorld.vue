<template>
  <div style="width: 600px;">
    <comment-list :nextPage="next"></comment-list>
  </div>
</template>
<script>
import CommentList from '../../dist/vue-comment-list.min.js'
export default {
  name: 'detail',
  data () {
    return {
      msg: 'Hello World',
      color: 'red',
      next: true
    }
  },
  props: {
  },
  computed: {
  },
  watch: {
  },
  components: {
    CommentList
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
