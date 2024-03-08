<template lang="">
    <div>{{ time }}</div>
</template>

<script>
import moment from "moment";

export default {
  name: "MyClock",
  props: {
    format: { type: String, default: "HH:mm:ss" }
  },
  data() {
    return { time: null };
  },
  mounted() {
    let callback = () => {
        this.time = moment().format(this.format);
        console.log(this.time);
    }    
    callback();
    this.timerId = setInterval(callback, 1000);
  },
  beforeUnmount() {
    clearInterval(this.timerId);
  }
};
</script>

<style scoped>
div {
  display: inline-block;
  font-size: 15pt;
  padding: 3px 12px;
  border: 1px solid gray;
}
</style>