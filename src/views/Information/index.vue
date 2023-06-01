<template>
    <div id="box">
        <div class="headpic" >
            <img src="@/assets/images/image.png" alt="" />
        </div>
        <div class="content"
        @click="stroe.LinkOpenState = true"
        v-show = !stroe.LinkOpenState
        >
            <h1>WElCOME</h1>
            <h4>{{ title }}</h4>
        </div>
        <LinkCard v-show = stroe.LinkOpenState />
        <div class="Social-media">
                <a href="https://gitee.com/hhhhahl" class="icon"><img src="@/assets/images/icon/gitee.png" alt="" /></a>
                <a href="https://github.com/hhhhala" class="icon"><img src="@/assets/images/icon/github.png" alt="" /></a>
                <a href="https://space.bilibili.com/312701905" class="icon"><img src="@/assets/images/icon/bilibili.png" alt="" /></a>
        </div>
    </div>
</template>



<script setup>
import LinkCard from '@/components/LinkCard/index.vue'
import { mainStore } from '@/stores'
const stroe = mainStore()

defineProps(['title'])
</script>



<style scoped>
.headpic,
.headpic img {
    position: relative;
    width: 205px;
    height: 205px;
    border-radius: 50%;
    box-shadow: 0 0 10px #0b333f;
    margin: 0 auto 20px auto;
}

.content {
    color: #fff;
    text-align: center;
    position: relative;
    padding: .7rem 5rem;
    border-radius: .4rem;
    background: #00000042;
}
.content:hover{
    transform: scale(1.02);
}
.Social-media{
    display: flex;
    justify-content: center;
}
.icon{
    display: inline-block;
    width: 40px;
    height: 40px;
    margin: 2rem 1rem;
}
.icon:hover{
    /* 不规则形状添加阴影 */
    filter: drop-shadow(0 0 6px #fff);
}
img{
    max-width: 100%;
    display: block;
}
</style>
