<template>
    <div :class="$style.copy">
        <ul :class="$style.wrap">
            <li :class="$style.item">Copyright © 2004-2018 京东JD.com 版权所有</li>
            <li :class="$style.item">投资有风险，购买需谨慎</li>
            <li :class="$style.item">京东金融平台服务协议</li>
            <li :class="$style.item">京东金融隐私政策</li>  
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" module>
    @import '../../css/element.scss';
    .copy{
        margin-bottom: 125px;
        .wrap{
            @include list;
            background-color: #f5f5f5;
            .item{
                color: #999;
                font-size: 0.5rem;
                text-align: center;
                border-top: 1px solid #999;
                padding: 49px 0;
            }
        }
    }
    
</style>
