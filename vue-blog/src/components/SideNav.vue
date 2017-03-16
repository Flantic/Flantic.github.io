<template>
        <div :class="['side-nav',{'is-open':sideNavStatus}]" >
            <div :class="['menu-btn',sideNavStatus? 'is-inside':'is-outside']" @click='sideNavSwitchStatus'>
                <i class="icon icon-menu"></i>
                <span>Menu</span>
            </div>
            <div class="head-img">
                <div class="img-box"><img src="../assets/imgs/logo.png" alt=""></div>
                <p class="name">Flantic</p>
            </div>
            <ul class="menu-list">
                <li class="line"></li>
                <li @click='sideNavStatusflase'><router-link to="/" exact class="link"><i class="icon icon-start"></i>Home</router-link></li>
                <li @click='sideNavStatusflase'><router-link to="/article" class="link"><i class="icon icon-article"></i>Article</router-link></li>
                <li @click='sideNavStatusflase'><router-link to="/photo" class="link"><i class="icon icon-camera"></i>Photo</router-link></li>
                <li class="line"></li>
                <li class="title">FIND ME</li>
                <li @click='sideNavStatusflase'><a href="" class="link"><i class="icon icon-github"></i>Gayhub</a></li>
                <li @click='sideNavStatusflase'><a href="" class="link"><i class="icon icon-user"></i>About Me</a></li>
                <li @click='sideNavStatusflase'><a href="" class="link"><i class="icon icon-code"></i>My code</a></li>
            </ul>
        </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
    // name:'sidenav',
    mounted(){
        // this.sideNavSwitchStatus();
        // console.log(this.$store.state.sideNavStatus)
    },
    data(){
        return{ 
            
        }
    },
    methods:{
         ...mapMutations(['sideNavSwitchStatus','sideNavStatusflase'])
    },
    computed: {
        ...mapState({
            sideNavStatus:state=>state.sideNavStatus
        })
    }
}
</script>

<style lang="scss" scope>
.side-nav{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 240px;
    height: 100vh;
    padding: 50px 0;
    background-color: #232323;
    box-shadow: 2px 0 35px rgba(0,0,0,.7);
    transform: translate3d(-240px,0,0);
    transition: transform .5s ease-in-out;
    z-index: 99;
    .menu-btn{
        visibility: visible;
        position: absolute;
        top: 15px;
        border-radius: 4px;
        color:#3498db;
        cursor: pointer;
        padding: 0 12px;
        height: 34px;
        line-height: 34px;
        transform: translate3d(-100px,0,0);
        transition: all .5s ease-in-out;;
        z-index: 99;
        border-width:1px;
        border-style:silid;
        border-color:#fff;
        background-color: rgba(10,22,51,.36);
        // &:hover{
        //     border-color:#fff;
        // }
    }
}
.side-nav.is-open{ 
    transform: translate3d(0,0,0);
    .menu-list{
        li:nth-child(2) .link{
            transform: translateZ(0);
            opacity: 1;
            transition: transform .6s cubic-bezier(.175,.885,.32,1.275) .1s,opacity .6s cubic-bezier(.175,.885,.32,1.275) .1s;
        }
        li:nth-child(3) .link{
            transform: translateZ(0);
            opacity: 1;
            transition: transform .6s cubic-bezier(.175,.885,.32,1.275) .2s,opacity .6s cubic-bezier(.175,.885,.32,1.275) .2s;
        }
        li:nth-child(4) .link{
            transform: translateZ(0);
            opacity: 1;
            transition: transform .6s cubic-bezier(.175,.885,.32,1.275) .3s,opacity .6s cubic-bezier(.175,.885,.32,1.275) .3s;
        }
        li:nth-child(7) .link{
            transform: translateZ(0);
            opacity: 1;
            transition: transform .6s cubic-bezier(.175,.885,.32,1.275) .4s,opacity .6s cubic-bezier(.175,.885,.32,1.275) .4s;
        }
        li:nth-child(8) .link{
            transform: translateZ(0);
            opacity: 1;
            transition: transform .6s cubic-bezier(.175,.885,.32,1.275) .5s,opacity .6s cubic-bezier(.175,.885,.32,1.275) .5s;
        }
        li:last-child .link{
            transform: translateZ(0);
            opacity: 1;
            transition: transform .6s cubic-bezier(.175,.885,.32,1.275) .6s,opacity .6s cubic-bezier(.175,.885,.32,1.275) .6s;
        }
    }
}
.link.router-link-active{
    background-color: rgba(52,152,219,.8);
    color: #fffffb; 
}
.menu-btn.is-inside{
    right: -80px;
    background:transparent;
    font-weight:700;
    text-shadow: 2px 2px 5px rgba(0,0,0,.86);
}
.menu-btn.is-outside{
    right:-200px;
}
.head-img{
    margin: 0 auto;
    width: 150px;
    text-align: center;
    .img-box{
        height: 150px; 
        border-radius: 50%;
        border:3px solid #ccc;
        box-shadow:1px 1px 5px rgba(0,0,0,0.5);
        overflow: hidden;
        cursor: pointer;
        img{width:100%;}
    }
    .name{
        font-size: 25px;
        line-height: 40px;
        font-weight: 700;
        color: #eee;
    }
}
.menu-list{
    display:flex;
    flex-direction: column;
    text-shadow: 1px 1px 3px rgba(0,0,0,.86);
    .link{
        position: relative;
        display:block;
        padding: 10px 20px;
        font-size: 15px;
        cursor: pointer;
        font-weight: 500;
        color: #5faee3;
        transform: translate3d(60px,0,0);
        opacity: 0;
        transition: all .3s;
    }
    li{ 
        font-size:15px;
        line-height: 30px;  
        .icon{ 
            padding-right: 10px;
            color: #5faee3;
            vertical-align: top;
            text-align: left;
            width: 1.2em;
        }
    }
    li.line{
        margin: 10px 20px;
        border-top: 1px solid #0a0a0a;
        box-shadow: inset 0 1px 0 rgba(255,255,255,.04);
        height: 8px;
        line-height:0;
    }
    li.title{
        text-transform: uppercase;
        margin: 0 20px;
        opacity: .7;
    }
    li.active{
    }
    
}

</style>