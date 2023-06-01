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
        name:'余',
        link:''
    }
]
</script>

<style scoped>
.content{
    display: grid;
    grid-template-columns:repeat(3,1fr);
    column-gap: .5rem;
    text-align: right;
}
.itemCards{
    background-color: #00000048;
    border-radius: .4rem;
    padding: 1rem 4rem;
    cursor: pointer;
}
.itemCards:hover{
    transform: scale(1.02);
}
</style>