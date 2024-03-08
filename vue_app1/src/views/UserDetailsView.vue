<template lang="">
    <div>
        <h1>User Details</h1>
        <p>user ID : {{id}}</p>
    </div>
</template>
<script>
export default {
    props: ['id']
    // 라우터에서 전달된 props를 정의한다.
    //name: "UserDetailsView"
};
</script>
<style lang="">
    
</style>