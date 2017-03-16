<template>
  <div id="app">
    <side-nav></side-nav>
    <div :class="['container',{'offset':sideNavStatus}]" @click='sideNavStatusflase' >
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
import SideNav from './components/SideNav'
export default {
  name: 'app',
  components:{
    SideNav
  },
  methods:{
        ...mapMutations(['sideNavStatusflase'])
  },
  computed: {
      ...mapState({
          sideNavStatus:state=>state.sideNavStatus
      })
  }
}
</script>

<style lang="scss">
@import './style/layout.scss';
#app {
  // font-family: 'Montserrat,Segoe UI,Microsoft Yahei,Helvetica,Arial';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow:hidden;
  // color: #2c3e50;
}
.container{
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    will-change: transform;
    transition: transform .5s ease-in-out;
}
.container.offset{
    transform: translate3d(240px,0,0);
}
.content-view{
    flex: 1;
    display: flex;
    height: 100vh;
    overflow: hidden;
    flex-direction: column;
    .bg-image{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        filter: blur(20px);
        transform: scale(1.2);
        z-index: -1;
    }
}
</style>
