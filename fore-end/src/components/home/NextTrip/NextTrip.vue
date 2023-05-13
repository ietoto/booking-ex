<template>
    <div class="cont">
        <h1 class="h1">精彩下一站，灵感这里找</h1>

        <div class="flex-div">
            <ImageContainer :wide="'320px'"
                :img="'https://cf.bstatic.com/xdata/images/xphoto/540x405/208985472.webp?k=68a3261af9bc68c05a7dfb0ec2a5b3fb5b79c0c6af4b8ff007594ac6f76fba2f&o='">
                <h1>日本7大美不胜收的春日赏花胜地</h1>
                <p>富士山脚下的芝樱花海、令人惊叹的160岁紫藤树，这个春日徜徉花的世界</p>
            </ImageContainer>
            <ImageContainer wide="320px"
                img="https://cf.bstatic.com/xdata/images/xphoto/540x405/204972037.webp?k=6efb61ecac51d9dadd6156688589785487a070e33ec568fbba9e3f09ba19c0d9&o=">
                <h1>澳大利亚适合家庭出游的五大公路游路线</h1>
                <p>冲浪、美丽海滩、美食、冒险，应有尽有</p>
            </ImageContainer>


            <ImageContainer wide="320px"
                img="https://cf.bstatic.com/xdata/images/xphoto/540x405/207040983.webp?k=101ce52ac15cacd667ff96b8b618dac02f325cea3bb9094016864d0abeec2e40&o=">
                <h1>8大庆祝泰国泼水节的胜地</h1>
                <p>
                    沉浸式感受泰国最重要的节日，加入世界上最大的水仗
                </p>
            </ImageContainer>
            <!-- 其他 ImageContainer 组件 -->
        </div>

        <div class="flex-div">
            <!-- 其他 ImageContainer 组件 -->
            <ImageContainer wide="490px"
                img="https://cf.bstatic.com/xdata/images/xphoto/720x405/217716417.webp?k=cae30f9d656d0c9b9247f640770bf8b1d5469c2f81bb4ee80d8d7d33abca664b&o=">
                <h1>亚洲十大超赞音乐节</h1>
                <p>
                    从曼谷令人难以置信的音乐打水仗到船上的节庆 </p>
            </ImageContainer>

            <ImageContainer wide="490px"
                img="https://cf.bstatic.com/xdata/images/xphoto/540x405/150930613.webp?k=6dde6ecd1f597510449658be4fec58884db0153c50b958b4da7f4c454d5d16be&o=">
                <h1>
                    全球6大杰出的可持续城市
                </h1>
                <p>
                    从自行车骑行到大片绿化，这些目的地吸引着具有可持续意识的旅客</p>
            </ImageContainer>
        </div>
    </div>
</template>
  
<script>
import ImageContainer from "./ImageContainer";

export default {
    components: {
        ImageContainer
    }
}
</script>
  
<style scoped src="./styles.css"></style>
  