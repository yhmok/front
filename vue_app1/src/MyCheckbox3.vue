<template lang="">
    <div class="box">
        <h1>checkbox</h1>
        <p>{{value}}</p>
        <hr/>
         <input type="checkbox" v-model="value" />
          <div id="hello" v-show="value">Hello Vue.js</div>
    </div>
</template>
<script>
export default {
    name: "MyCheckbox3",
    data() {
        return {
            value: false
        }
    }
}
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
input {
  width: 30px;
  height: 30px;
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