<template>
    <div class="content-view">
        <img src="../assets/imgs/bg.c1981.jpg" class="bg-image no-blur" alt="background-img">
        <div class="page-Loading" v-show="pageLoading">
            <loading-Circular></loading-Circular>
        </div>
        <div class="article-box">
            <div class="page-1200 article-list"> 
                <article class="article-list-item" v-for="(item,index) in articleData">
                    <div :class="['article-cont',{'is-open':articleData[index].loading}]">
                        <div class="loading-box">
                            <loadingStrip v-show="articleData[index].loading"></loadingStrip>
                        </div>
                        <h1 class="article-title">
                            <a href="" @click.prevent="seeMore(index)">{{item.title}}
                            <span class="lable-block lable-orange">mui</span>
                            <span class="lable-block lable-blue">react</span>
                            <span class="lable-block ">javascript</span></a>
                        </h1>
                        <div class="article-body" v-html="compiledMarkdown(index)">
                        </div>
                        <div class="see-more" @click="seeMore(index)">点击查看更多<i class="icon icon-down"></i></div>
                        <div class="article-foot">
                            <div class="author-info">
                                <span class="head"><img src="../assets/imgs/logo.png"></span>
                                <span class="name">作者：{{item.author}}</span>
                            </div>
                            <time class="time">发表时间：{{item.time}}</time>
                            <div class="zan"><i class="icon icon-zan"></i>({{item.zan}}+)赞</div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import marked from 'marked'
import loadingCircular from './loading/loading_1'
import loadingStrip from './loading/loading_2'
export default {
    mounted(){
        this.pageLoading=true
        axios.get('/article/data')
        .then(function(XHR){
            XHR.data.forEach((item,index)=>{
                item.loading=false;
            })
            this.articleData = XHR.data;
            console.log(this.articleData)
            this.pageLoading=false;
        }.bind(this))
        .catch(error=>console.log(error))
    },
    data(){
        return{
            pageLoading:false,
            articleData:[]
        }
    },
    computed: {
    },
    name:'article',
    methods:{
        seeMore (index) {
            clearTimeout(t);
            let status = this.articleData[index].loading;
            this.articleData[index].loading= !status;
            console.log(status)
            let t=setTimeout(()=>{this.articleData[index].loading = false;},3000)
        },
        compiledMarkdown: function(index){
            return marked(this.articleData[index].body, { sanitize: true })
        }
    },
    components:{
        loadingCircular,
        loadingStrip
    }
}
</script>

<style lang="scss" scope>
//article list style
.article-box{
    width:100%;
    height:100%;
    overflow:auto;
}
.article-list{
    padding:30px 0;
    overflow:auto;
}
.article-list-item{
	background: #fff;
	padding-bottom: 20px;
	margin-bottom: 20px;
	box-shadow: 2px 2px 8px rgba(0,0,0,.3);
	border-radius: 3px;
}
.article-cont{
	position: relative;
	padding: 20px 20px 40px;
	z-index: 999;
    .loading-box{
        position:absolute;
        top:20px;
        right:20px;
    }
	.article-title{
		margin-bottom: 18px;
        text-align:left;
		a{
			display: block;
		      text-shadow: 1px 1px 2px #ccc;
		      background: none;
		      word-wrap: break-word;
		}
		.lable-block{
			position: relative;
			display: inline-block;
			margin: 0 0 0 10px;
			font-size: 12px;
			color:#fff;
			padding: 0 10px 1px 15px;
			background: #333;
			border-radius: 3px;
			text-shadow:none;
			
			&:after{
				position: absolute;
				left: -6px;
				top:2px;
				content: "";
				padding: 7px;
				background: #333;
				border-radius: 3px;
				transform:rotate(44deg);
				z-index: -1;
			}
			&:before{
				position: absolute;
				content: "●";
				left: 2px;
				top:0;
			}
		}
		.lable-orange{ color:orange;}
		.lable-blue{ color:#3498db;}
		.lable-green{ color:#1abc9c;}
	}
	.article-body{
		min-height: 160px;
		max-height: 160px;
        margin-bottom:20px;
		overflow: hidden;
		// p{
		// 	font-size: 14px;
		// 	line-height: 1.618;
	    // 		margin: .5em 0 1.5em;
	    // 		text-indent: 2em;
		// }
		// em{
		// 	font-weight: 700;
		// }
	}
	.see-more{
		position: absolute; 
		left: 0;
		bottom: 30px;
		width: 100%;
		height: 40px;
		line-height: 40px; 
		font-weight: 700;
		text-align: center;
		cursor: pointer;
		z-index: 99;
		// background: linear-gradient(rgba(255,255,255,1) , rgba(0,0,0,.1)); 
		.icon{
			padding-left: 5px;
		}
	}
	.article-foot{
		position: absolute; 
		left: 0;
		bottom: 0;
		width: 100%; 
		height: 30px;
		line-height: 30px;
		padding: 0 10px;
		.zan,
		.time,
		.author-info{
			display: inline-block;
			vertical-align: top;
			margin: 0 5px;
		}
		.zan{ cursor: pointer;}
		.icon{ 
			padding-right: 5px;
			font-size: 20px;
		}
	}
	.author-info{
		line-height: 30px;
		span{ 
			display: inline-block;
			vertical-align: top;
			margin: 0 5px;
		}
		.name{}
		.head{
			width: 30px;
			height: 30px;
			border-radius: 50%;
			overflow: hidden;
			cursor: pointer;
			img{ width: 100%;}
		}
	}
} 
.article-cont.is-open{
    .article-body{
        max-height:1200px;
    }
}
@media screen and (max-width: 1320px){
	.page-1200{ width: 100%; padding:4%;}
}
@media screen and (max-width: 500px){
	.article-list-item{
		margin-bottom: 3%;
	}
	.article-cont{
		padding: 4% 4% 30px;
		.article-title{
			font-size:1.5em;
		}
		.article-body{
			min-height:120px;
		}
	}
	.article-foot{
		.time{ display: none;}
	}
}
</style>