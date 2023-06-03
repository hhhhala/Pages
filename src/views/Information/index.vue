<template>
    <div id="box">
        <div class="headpic" >
            <img src="@/assets/images/image.png" alt="" />
        </div>
        <div class="content">
            <h1>WElCOME</h1>
            <h3>{{ title }}</h3>
        </div>
        
        <div class="link">
            <transition name="left">
                <div class="Social-media" v-show="!store.linkOpenstate">
                    <a href="https://gitee.com/hhhhahl" class="icon"><img src="@/assets/images/icon/gitee.png" alt="" /></a>
                    <a href="https://github.com/hhhhala" class="icon"><img src="@/assets/images/icon/github.png" alt="" /></a>
                    <a href="https://space.bilibili.com/312701905" class="icon"><img src="@/assets/images/icon/bilibili.png" alt="" /></a>
                </div>
            </transition>
            <transition name="right">
                <LinkCard class="linkCard" v-show="store.linkOpenstate"/>
            </transition>
            <span class="button" @click="store.linkOpenstate = !store.linkOpenstate"></span>
        </div>
        

    </div>
</template>



<script setup>
import LinkCard from '@/components/LinkCard/index.vue'
import { mainStore } from '@/stores';

const store = mainStore()
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
    border-radius: .4rem;
}
.link{
    position: relative;
    display: flex;
    justify-content: center;
    padding-top: 6rem;
}
.Social-media{
    position: absolute;
    top: 0;
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
.linkCard{
    position: absolute;
    top: 0;
}
.button{
    position: absolute;
    width: .7rem;
    height: .7rem;
    transform: translateY(-50%);
    background: #fff;
    border-radius: 1rem;
    backdrop-filter: bulr(10px);
    cursor: pointer;
}
.button:hover{
    width: 1.5rem;
}
.left-enter-active, 
.left-leave-active, 
.left-enter, 
.right-leave-to {
    opacity: 0;
    transform: translateX(-50px);
}
.right-enter-active, 
.right-leave-active, 
.right-enter, 
.left-leave-to {
    opacity: 0;
    transform: translateX(50px);
}
</style>
