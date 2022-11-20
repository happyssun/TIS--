<style scoped></style>

<template>
  <div id="app">
    자식 컴포넌트에서 받은 값: {{ mesg }}
    <child-component v-on:show-log="printText"></child-component>
  </div>
</template>

<script>
import Vue3403Comp from '../components/vue3403/Vue3403Comp.vue';
// vuex 라이브러리에서 mapActions, mapMutations, mapState, mapGetters 함를 가져옵니다.
// import { mapActions, mapMutations, mapState, mapGetters } from 'vuex';

export default {
  /* pdtmc^2w */
  props: [],
  data() {
    return {
      mesg: null,
    };
  },
  //template: ``,
  methods: {
    printText(param1, param2) {
      console.log(param1, param2);
      this.$data.mesg = `param1=${param1}, param2=${param2}`;
    },
  },
  components: {
    'child-component': Vue3403Comp, // -이 있으면 ''문자열형태로
  },
};
</script>
