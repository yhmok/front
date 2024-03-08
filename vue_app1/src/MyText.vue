<template lang="">
    <div>
        <input type="text" v-model="text" />
        <button type="button" @click="$emit('send', text)"> 전달 </button>
    </div>
</template>
<script>
export default {
    name: "MyText",
    data: function() {
            return { text: '' };
    }
}
</script>
<style lang="">
    
</style>