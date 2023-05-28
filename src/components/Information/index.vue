<template>
    <div id="box">
        <div class="headpic">
            <img src="@/assets/images/image.png" alt="" />
        </div>
        <div class="content">
            <h3>Hello, Is My Page</h3>
            <h1>HHHHala7777777</h1>
            <h3>WElCOM</h3>

            <div class="Social-media">
                <a href="" class="icon"><img src="@/assets/images/icon/gitee.png" alt="" /></a>
                <a href="" class="icon"><img src="@/assets/images/icon/github.png" alt="" /></a>
                <a href="" class="icon"><img src="@/assets/images/icon/bilibili.png" alt="" /></a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.headpic,
.headpic img {
    position: relative;
    width: 205px;
    height: 205px;
    border-radius: 50%;
    box-shadow: 0 0 10px #0b333f;
    margin: 0 auto 20px auto;
    z-index: 1;
}

.content {
    text-align: center;
    position: relative;
    z-index: 1;
    color: #fff;
}
.icon{
    display: inline-block;
    width: 40px;
    height: 40px;
    margin: 2rem 1rem;
}
img{
    max-width: 100%;
    display: block;
}
</style>
