<template>
    <div id="box">
        <audio ref="audio" ></audio>
        <div ref="musicBox" class="musicBox"  @click="ToisMusic" >
            <div ref="title" v-show="!isMusic" class="title">{{ title ? title : 'Music Play' }}</div>
            <div v-show="isMusic" class="controls">
                <div><el-icon class="icon"><ArrowLeftBold /></el-icon></div>
                <div>
                    <el-icon class="icon" v-show="isPlay"><VideoPause /></el-icon>
                    <el-icon class="icon" v-show="!isPlay"><VideoPlay /></el-icon>
                </div>
                <div><el-icon class="icon"><ArrowRightBold /></el-icon></div>
            </div>
        </div>
        <div v-show="isList" class="list-box">
            <ul  class="list">
                <li ref="mlist" v-for="(music) in musiclist" :key="music.id"  @dblclick="SelectSong(music.url, music.name, music.art)" >
                    <span>{{ music.name }}</span>
                    <span>{{ music.art }}</span>
                </li>
            </ul>
        </div>     
    </div>
</template>

<script>
export default {
    props:{
        musiclist:null
    },
    data(){
        return{
            title: '',
            num:0,
            isMusic:false,
            isList:true,
            isLoading:true,
            isPlay:false,
        }
        
    },
    // 函数
    methods: {
        ToisMusic(){
            if(!this.isMusic){
                this.isMusic = !this.isMusic
            }
        },
        SelectSong(url, name, art){
            // 获取当前点击的歌曲元素
            const item = event.target
            // 获取歌曲列表元素
            const mlist = this.$refs.mlist
            // 获取音频媒体元素
            const audio = this.$refs.audio
            // 改变所有歌曲样式为默认样式
            for (let i = 0; i < mlist.length; i++) {
                mlist[i].classList = " ";
            }
            // 改变点击歌曲样式为点击样式
            item.classList = 'active'
            this.title = `${name} - ${art}`
            // 修改音频媒体歌曲url
            audio.src = url
            audio.play()
        }
    },
    watch:{
        // title:function(newVal){
        //     const title = this.$refs.title
        //     if( newVal.length >= 20){
        //         title.classList = 'title active'
        //         // this.title = title
        //         console.log(title.textContent);
        //         // console.log(newVal);
        //     }
        // }
    },
    mounted(){
    }
}
</script>

<style scoped>
    body,html{
        width: 100%;
        height: 100%;
    }
    *{margin: 0;padding: 0;box-sizing: border-box;}
    #box{
        position: fixed;
        height: 100vh;
        width: 100%;
        z-index: 99;
    }
    .musicBox{
        position: fixed;
        left: 4%;
        top: 4%;
        margin: 1rem;
        padding: 1rem;
        background: rgba(0, 0, 0, 0.4);
        backdrop-filter: blur(10px);
        border-radius: .4rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        overflow: hidden;
        width: 16rem;
    }
    .title{
        color: #fff;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .title.active {
        display: flex;
        animation: marquee 10s linear infinite;
    }
    @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-100%); }
    }
    .controls{
        color: #fff;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: .2rem 4rem;
        overflow: hidden;
    }
    .icon{
        font-size: 1.4rem;
    }
    .list-box{
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        width: 28rem;
        height: 32rem;
        background: #000000a8;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 1rem;
    }
    .list{
        display: block;
        box-sizing: border-box;
        backdrop-filter: blur(10px);
        height: 30rem;
        width: 25rem;
        overflow-y: scroll;
    }
    ul::-webkit-scrollbar {
        background-color: #333;
        display: none;
        }
    li{
        list-style: none;
        color: #fff;
        display: flex;
        padding: .4rem 1rem;
        margin: .2rem 0;
        border-radius: .2rem;
        justify-content: space-between;
        transition: .2s ease;
    }
    li.active{
        background: #ffffff42;
    }
    li:hover{
        background: #ffffff42;
    }
    span{pointer-events: none;}
</style>