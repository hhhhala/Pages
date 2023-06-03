<template>
    <div id="box">
        <div class="content">
            <div v-for="(item, index) in linksDate" :key="item">
                <div class="itemCards">
                    <div class="icon"></div>
                    <span class="name">{{ item.name }}</span>
                </div>    
            </div>
        </div>
    </div>
</template>

<script setup>

let linksDate = [
    {
        icon:'',
        name:'博客',
        link:''
    },
    {
        icon:'',
        name:'音乐',
        link:''
    },
    {
        icon:'',
        name:'关于',
        link:''
    }
]
</script>

<style scoped>
.content{
    display: grid;
    grid-template-columns:repeat(3,1fr);
    column-gap: .5rem;
}
.itemCards{
    backdrop-filter: bulr(10px);
    border-radius: .4rem;
    padding: .3rem 2rem;
    cursor: pointer;
    font-size: 18px;
    font-weight: 700;
    margin: 2rem .3rem;
}
.name{
    white-space: nowrap;  
}
.itemCards:hover{
    filter: drop-shadow(0 0 6px #fff);

}
</style>