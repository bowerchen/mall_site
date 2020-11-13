<template>
    <div class="index"> 
        <div class="container">
            <div class="swiper-box">
                <div class="nav-menu">
                    <ul class="menu-wrap">
                        <li class="menu-item">
                            <a href="javascript:;">手机  电话卡</a>
                            <div class="children">
                                <ul v-for="(item, index) in menuList" :key="index">
                                    <li v-for="(sub,index) in item" :key="index">
                                        <a :href="sub ? '/#/product/' + sub.id : ''">
                                            <img :src="sub ? sub.img : '/imgs/item-box-1.png'" alt="">
                                            {{sub ? sub.name : 小米9}}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">电视 盒子</a>
                            <div class="children"></div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">笔记本 显示器</a>
                            <div class="children"></div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">家电 插线板</a>
                            <div class="children"></div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">智能 路由器</a>
                            <div class="children"></div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">电源 配件</a>
                            <div class="children"></div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">健康 儿童</a>
                            <div class="children"></div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">耳机 音响</a>
                            <div class="children"></div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">生活 箱包</a>
                            <div class="children"></div>
                        </li>
                    </ul>
                </div>
                <swiper ref="indexSwiper" :options="swiperOptions">
                    <swiper-slide v-for="(item, index) in slideList" v-bind:key="index">
                        <a v-bind:href="'/#/product/'+ item.id "><img v-bind:src="item.img"></a>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </div>
            <div class="ads-box"></div>
            <div class="banner"></div>
            <div class="product-box"></div>
        </div>
        <service-bar></service-bar>
    </div>
</template>

<script>
    import ServiceBar from './../components/ServiceBar'
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'

    export default {
        name:'index',
        components: {
            ServiceBar,
            Swiper,
            SwiperSlide
        },
        data() {
            return {
                swiperOptions: {
                    autoplay: {
                        delay: 3000
                    },
                    loop: true,
                    effect : 'cube',
                    cubeEffect: {
                        slideShadows: true,
                        shadow: true,
                        shadowOffset: 100,
                        shadowScale: 0.6
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                },
                slideList: [
                    {
                        id: '42',
                        img:'/imgs/slider/slide-1.jpg'
                    },
                    {
                        id: '45',
                        img:'/imgs/slider/slide-2.jpg'
                    },
                    {
                        id: '46',
                        img:'/imgs/slider/slide-3.jpg'
                    },
                    {
                        id: '',
                        img:'/imgs/slider/slide-4.jpg'
                    },
                    {
                        id: '',
                        img:'/imgs/slider/slide-5.jpg'
                    },
                    
                ],
                menuList: [
                    [
                        {
                            id: 30,
                            img: '/imgs/item-box-1.png',
                            name: '小米CC9',
                        },
                        {
                            id: 31,
                            img: '/imgs/item-box-2.png',
                            name: '小米8青春版',
                        },
                        {
                            id: 32,
                            img: '/imgs/item-box-3.jpg',
                            name: 'redMi K20 Pro',
                        },
                        {
                            id: 33,
                            img: '/imgs/item-box-4.jpg',
                            name: '移动4G专区',
                        },
                    ],
                    [
                        {
                            id: 30,
                            img: '/imgs/item-box-1.png',
                            name: '小米CC9',
                        },
                        {
                            id: 31,
                            img: '/imgs/item-box-2.png',
                            name: '小米8青春版',
                        },
                        {
                            id: 32,
                            img: '/imgs/item-box-3.jpg',
                            name: 'redMi K20 Pro',
                        },
                        {
                            id: 33,
                            img: '/imgs/item-box-4.jpg',
                            name: '移动4G专区',
                        },
                    ],
                    [
                        {
                            id: 30,
                            img: '/imgs/item-box-1.png',
                            name: '小米CC9',
                        },
                        {
                            id: 31,
                            img: '/imgs/item-box-2.png',
                            name: '小米8青春版',
                        },
                        {
                            id: 32,
                            img: '/imgs/item-box-3.jpg',
                            name: 'redMi K20 Pro',
                        },
                        {
                            id: 33,
                            img: '/imgs/item-box-4.jpg',
                            name: '移动4G专区',
                        },
                    ],
                    [
                        {
                            id: 30,
                            img: '/imgs/item-box-1.png',
                            name: '小米CC9',
                        },
                        {
                            id: 31,
                            img: '/imgs/item-box-2.png',
                            name: '小米8青春版',
                        },
                        {
                            id: 32,
                            img: '/imgs/item-box-3.jpg',
                            name: 'redMi K20 Pro',
                        },
                        {
                            id: 33,
                            img: '/imgs/item-box-4.jpg',
                            name: '移动4G专区',
                        },
                    ],
                    [
                        {
                            id: 30,
                            img: '/imgs/item-box-1.png',
                            name: '小米CC9',
                        },
                        {
                            id: 31,
                            img: '/imgs/item-box-2.png',
                            name: '小米8青春版',
                        },
                        {
                            id: 32,
                            img: '/imgs/item-box-3.jpg',
                            name: 'redMi K20 Pro',
                        },
                        {
                            id: 33,
                            img: '/imgs/item-box-4.jpg',
                            name: '移动4G专区',
                        },
                    ],
                    [
                        {
                            id: 30,
                            img: '/imgs/item-box-1.png',
                            name: '小米CC9',
                        },
                        {
                            id: 31,
                            img: '/imgs/item-box-2.png',
                            name: '小米8青春版',
                        },
                        {
                            id: 32,
                            img: '/imgs/item-box-3.jpg',
                            name: 'redMi K20 Pro',
                        },
                        {
                            id: 33,
                            img: '/imgs/item-box-4.jpg',
                            name: '移动4G专区',
                        },
                    ],
                    [
                        {
                            id: 30,
                            img: '/imgs/item-box-1.png',
                            name: '小米CC9',
                        },
                        {
                            id: 31,
                            img: '/imgs/item-box-2.png',
                            name: '小米8青春版',
                        },
                        {
                            id: 32,
                            img: '/imgs/item-box-3.jpg',
                            name: 'redMi K20 Pro',
                        },
                        {
                            id: 33,
                            img: '/imgs/item-box-4.jpg',
                            name: '移动4G专区',
                        },
                    ],
                   
                ]
            }
        },
        computed: {
            swiper() {
                return this.$refs.indexSwiper.$swiper
            }
        },
        mounted() {

        }
    }
</script>

<style scoped lang="scss">
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';
.index {
    .swiper-box {
        .nav-menu {
            position: absolute;
            width: 264px;
            height: 451px;
            z-index: 9;
            box-sizing: border-box;
            background-color: rgba(#55585a, .7);
            .menu-wrap {
                .menu-item {
                    height: 50px;
                    line-height: 50px;
                    a {
                        display: block;
                        position: relative;
                        font-size: 16px;
                        color: #fff;
                        padding-left: 30px;
                        &:after {
                            position: absolute;
                            right: 30px;
                            top: 17.5px;
                            content: ' ';
                            @include bgImg(10px, 15px, '/imgs/icon-arrow.png');
                        }
                    }
                    &:hover {
                        background-color: $colorA;
                        .children {
                            display: block;
                        }
                        
                    }
                    .children {
                        display: none;
                        position: absolute;
                        top: 0;
                        left: 264px;
                        border: 1px solid $colorH;
                        width: 962px;
                        height: 451px;
                        background: $colorG;
                        overflow: hidden;
                        // z-index: 9;
                        ul {
                            display: flex;
                            position: relative;
                            justify-content: space-between;
                            height: 75px;
                            z-index: 1;
                            li {
                                flex: 1;
                                padding-left: 23px;
                                width: 241px;
                                height: 75px;
                                line-height: 75px;
                            }
                            a {
                                color: $colorB;
                                font-size: 14px;
                            }
                            img {
                                width: 42px;
                                height: 35px;
                                vertical-align: middle;
                                margin-right: 15px;
                            }
                        }
                    }
                }
            }
        }
        .swiper-container {
            height: 451px;
            .swiper-button-prev {
                left: 274px;
            }
            img {
                width: 100%;
                height: 100%;
            }
            
        }
    }
}
</style>


