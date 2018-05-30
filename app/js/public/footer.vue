<template>
    <div :class="$style.list">
        <router-link :class="$style.item" :to="{name: 'Home'}" tag="div">
            <img src="https://img12.360buyimg.com/jrpmobile/jfs/t11653/76/201131398/1192/bf1b2852/59e9d7f3N5f691137.png?width=60&height=60" alt="">
            <p>首页</p>
        </router-link>
        <router-link :class="$style.item" :to="{name: 'Earn'}" tag="div"> 
            <img src="https://img12.360buyimg.com/jrpmobile/jfs/t7690/252/3621724688/1715/757a3ca1/59e9d81bN27304850.png?width=60&height=60" alt="">
            <p>赚钱</p>
        </router-link>
        <router-link :class="$style.item" :to="{name: 'Vip'}" tag="div">
            <img src="https://img12.360buyimg.com/jrpmobile/jfs/t11653/76/201131398/1192/bf1b2852/59e9d7f3N5f691137.png?width=60&height=60" alt="">
            <p>借钱</p>
        </router-link>
        <router-link :class="$style.item" to="home" tag="div">
            <img src="https://img12.360buyimg.com/jrpmobile/jfs/t19729/201/1027312338/1395/95cecd48/5ab85d0eN01f81011.png?width=56&height=56" alt="">
            <p>省钱</p>
        </router-link>
        <router-link :class="$style.item" to="home" tag="div">
            <img src="https://img12.360buyimg.com/jrpmobile/jfs/t10897/141/1894216742/2046/ad0e8dc1/59e9d7feNaa5dd2fd.png?width=60&height=60" alt="">
            <p>金融会员</p>
        </router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" module>
    .list{
        display: flex;
        flex-direction: row;
        // justify-content: space-around;
        width: 100%;
        box-shadow: 0 -3px 4px rgba(0,0,0,.03);
        position: fixed;
        z-index: 100;
        bottom: 0;
        background-color: #fff;
        padding-bottom: 10px;
        font-weight: 400;
        color: #b3b5bc;
        .item{
            width: 20%;
            text-align: center;
            p{
                font-size: 18px;
                color: inherit;
                text-align: center;
            }
            img{
                justify-content: space-around;
            }
        }
    }
</style>

