<template lang="">
    <div class="box">
    <h1>button</h1>
    <p>{{ visible }}</p>
    <hr />
    <button type="button" v-on:click="show">보이기</button>
    <button type="button" v-on:click="hide">감추기</button>
    <div id="hello" v-show="visible">Hello Vue.js</div>
  </div>
</template>

<script>
export default {
    name: 'MyButton1',
    data() {
        return {
            visible: false
        };
    },
    methods: {
        show() {
            this.visible=true;
        }, 
        hide() {
            this.visible=false;
        }
    }
};
</script>

<style scoped>
div.box {
  display: inline-block;
  padding: 20px;
  width: 300px;
  border: 1px solid gray;
  box-shadow: 5px 5px 5px #aaa;
}
p {
  font-size: 15pt;
  color: blue;
}
button {
  padding: 0.4em 3em;
  margin-right: 5px;
}
div#hello {
  margin-top: 20px;
  padding: 20px;
  background-color: lightGreen;
  border: 1px solid gray;
  text-align: center;
  font-size: 20pt;
}
</style>