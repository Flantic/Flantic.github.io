<template>
    <div class="content-view">
        <img src="../assets/imgs/factory.45129.jpg" class="bg-image" alt="background-img">
        <div class="content-box">
            <div class="img-preview">
            </div>
            <div class="detail-group"></div>
        </div>
    </div>
</template>

<script>
function formatterDateTime() {
    var date=new Date()
    var month=date.getMonth() + 1
    var datetime = date.getFullYear()
            + ""// "年"
            + (month >= 10 ? month : "0"+ month)
            + ""// "月"
            + (date.getDate() < 10 ? "0" + date.getDate() : date
                    .getDate())
            + ""
            + (date.getHours() < 10 ? "0" + date.getHours() : date
                    .getHours())
            + ""
            + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
                    .getMinutes())
            + ""
            + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
                    .getSeconds());
    return datetime;
}
import axios from 'axios'
export default {
    name:'photo',
    mounted(){
        // this.$http({
        //     method:'JSONP',
        //     url:'http://route.showapi.com/109-35',
        //     params:{
        //         "showapi_timestamp": formatterDateTime(),
        //         "showapi_appid": '33974', 
        //         "showapi_sign": 'e51054dc3ca144b59bdea49642c16d35'
        //     },
        //     emulateJSON: true
        // })
        // .then(function(success){
        //     console.log(success)
        // },function(error){
        //     console.log(error)
        // })
        this.$http.jsonp('http://route.showapi.com/109-35',
        {
            params:{
                "showapi_timestamp": formatterDateTime(),
                "showapi_appid": '33974', 
                "showapi_sign": 'e51054dc3ca144b59bdea49642c16d35',
                "title":'军事'
            },
            jsonp:'jsonpcallback'
        }).then(function(res){
            let data = res.body.showapi_res_body.pagebean.contentlist;
            console.log(data)
            data.forEach((item,index)=>{
                console.log(item.title)
            })
            // console.log(res)
        },function(err){
            console.log(err)
        })
    },
    data(){ 
        return{
            imgSrc:'background-image: url("../assets/imgs/factory.45129.jpg");'
        }
    }
}
</script>

<style>
.content-box{
    flex: 1;
    display:flex;
    width: 85%;
    margin: 110px auto;
    border-radius: 6px;
    display: flex;
    position: relative;
    overflow: hidden;
    transition: all .3s;
    box-shadow: 0 0 20px 10px rgba(0,0,0,.25);
}
</style>