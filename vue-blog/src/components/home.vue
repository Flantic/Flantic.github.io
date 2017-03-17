<template>
    <div class="home-view">
        <div class="first-screen"></div>
    </div>
</template>

<script>
export default {
    name:'home'
}
</script>

<style lang="scss" scoped>
.home-view{
    position:relateve;
    flex:1;
}
.first-screen{
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
    cursor: default;
    background-image: url('../assets/imgs/gobang_local.c8327.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
}
</style>