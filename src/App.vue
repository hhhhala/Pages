<template>
  <div id="app">
    <music :musiclist="musiclist"></music>
    <Background />
    <main>
      <Information></Information>
    </main>
  </div>
</template>

<script>

import Background from "@/components/Background"
import Information from "@/components/Information"
import music from "@/components/music"

import { getsearchlist, getmusicurl } from "@/api/index"

export default {
  name: 'App',
  components: {
    Background,
    Information,
    music,
  },
  data(){
    return{
      musiclist:[],
    }
  },
  mounted(){
    getsearchlist().then(({data:res}) =>{
      console.log(res);
            res.playlist.tracks.forEach((item,index) => {
                getmusicurl(item.id).then(({data:res}) =>{
                    this.musiclist.push({
                    'id':index,
                    'name':item.name,
                    'art':item.ar[0].name,
                    'url':res.data[0].url
                })
                }) 
            });
        })
  }
}

</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;  /* 禁止元素内的文本被选取 */
}
body,html{
  overflow: hidden;
}
main{
  width: min(100%, 100% - 4rem);
  height: 100vh;
  padding: 10rem;
  margin-inline: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
