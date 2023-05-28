<template>
    <div id="box">
    </div>
</template>

<style scoped>
#box{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('@/assets/images/background.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    z-index: -99;
}
#box::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: inherit;
    filter: blur(10px);
    z-index: -1;
    opacity: 0.7;
}

</style>