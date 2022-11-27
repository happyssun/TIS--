<style scoped></style>

<template>
  <div>
    <button v-on:click="showLog">show</button>
  </div>
</template>

<script>
// vuex 라이브러리에서 mapActions, mapMutations, mapState, mapGetters 함를 가져옵니다.
// import { mapActions, mapMutations, mapState, mapGetters } from 'vuex';

export default {
  //template: ``,
  methods: {
    showLog(e) {
      // this.$emit('부모에서의 이벤트명','인자1', '인자2')
      this.$emit('show-log', 'abc', 123);
    },
  },
};
</script>
