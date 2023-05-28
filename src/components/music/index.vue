<template>
    <div id="box">
        <audio ref="audio" @ended="playNext"></audio>
        <div ref="musicBox" class="musicBox"  @click="ToisMusic" >
            <div ref="title" v-show="!isMusic" class="title">{{ title ? title : 'Music Play' }}</div>
            <div v-show="isMusic" class="controls">
                <div><img src="@/assets/images/icon/previous.png" alt=""></div>
                <div >
                    <img v-show="!isPlay" @click="playMusic" src="@/assets/images/icon/play.png" alt="">
                    <img v-show="isPlay" @click="pauseMusic" src="@/assets/images/icon/pause.png" alt="">
                </div>
                <div><img src="@/assets/images/icon/next.png" alt=""></div>
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
            isMusic:true,
            isList:false,
            isLoading:true,
            isPlay:false,
        }
        
    },
    computed:{

    },
    // 函数
    methods: {
        // 音乐框点击事件
        ToisMusic(){
            if(!this.isMusic){
                this.isMusic = !this.isMusic
            }
        },
        // 播放按钮点击事件
        async playMusic(){
            // 当无歌曲播放时，随机播放列表歌曲
            if(!this.title){
                this.num = Math.floor(Math.random() * this.musiclist.length);
                this.title = `${this.musiclist[this.num].name} - ${this.musiclist[this.num].art}`
                this.$refs.audio.src = this.musiclist[this.num].url
                console.log(`${this.title}无歌曲`);
                console.log(this.num);
            }
            this.$refs.audio.play()
            if(!this.isPlay)this.isPlay = !this.isPlay
            console.log(`${this.isPlay}播放`);
        },
        pauseMusic(){
            this.$refs.audio.pause()
            if(this.isPlay)this.isPlay = !this.isPlay
            console.log(`${this.isPlay}暂停`);
        },
        playNext(){
            this.num = Math.floor(Math.random() * this.musiclist.length);
            this.title = `${this.musiclist[this.num].name} - ${this.musiclist[this.num].art}`
            this.$refs.audio.src = this.musiclist[this.num].url
            console.log(`${this.title}下一首`);
            console.log(`${this.num}下标`);
            this.$refs.audio.load()
            this.playMusic()
            console.log(`调用开始`);
        },
        // 列表元素点击事件
        SelectSong(){
            // 获取当前点击的歌曲元素
            const item = event.target
            // 获取歌曲列表元素
            const mlist = this.$refs.mlist
            // 改变所有歌曲样式为默认样式
            for (let i = 0; i < mlist.length; i++) {
                mlist[i].classList = " ";
            }
            // 改变点击歌曲样式为点击样式
            item.classList = 'active'
        }
    },
    watch:{

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
        height: 4rem;
        transition: all .2s ease;
    }
    .title{
        color: #fff;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .controls{
        color: #fff;
        display: flex;
        width: 80%;
        padding-top: .3rem;
        justify-content: space-around;
        align-items: center;
        overflow: hidden;
    }
    .controls img{
        width: 3ch;
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