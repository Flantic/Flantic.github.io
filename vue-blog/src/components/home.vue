<template>
    <div class="home-view">
        <div class="first-screen">
            <div class="text-box">
                <h1>不忘初心 方得始终</h1>
            </div>
        </div>
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
.text-box{
    position:absolute;
    right:200px;
    top:100px;
    color:#fff;
    h1{
        font-weight:700;
        text-shadow:2px 2px 3px rgba(120,120,120,.9)
    }
}
</style>