<template lang="">
    <div class="box" v-bind:class="color">
    <h1>select</h1>
    <select v-model="color">
      <option>yellow</option>
      <option>green</option>
      <option>blue</option>
      <option>red</option>
    </select>
  </div>
</template>

<script>
export default {
    name: "MySelect3",
    data() {
        return {
            color: "yellow"
        }
    }
}
</script>

<style scoped>
  div.box { display: inline-block; padding: 20px; width: 300px; border: 1px solid gray; box-shadow: 5px 5px 5px #aaa; }
  select { padding: 5px; font-size: 15pt; width: 150px; margin: 10px; }
  .yellow { background-color: #ffa; }
  .green { background-color: #bfb; }
  .blue { background-color: #bbf; }
  .red { background-color: #fbb; }
</style>
