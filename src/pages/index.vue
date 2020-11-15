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
            <div class="ads-box">
                <a :href="'/#/product/'+item.id" v-for="(item, index) in adsList" :key="index">
                    <img v-lazy="item.img" alt="">
                </a>
            </div>
            <div class="banner">
                <a :href="'/#/product/30'">
                    <img v-lazy="'/imgs/banner-1.png'" alt="">
                </a>
            </div>
        </div>
        <div class="product-box">
            <div class="container">
                <h2>手机</h2>
                <div class="wrapper">
                    <div class="banner-left">
                        <a href="/#/product/345">
                            <img v-lazy="'/imgs/mix-alpha.jpg'" alt="">
                        </a>
                    </div>
                    <div class="list-box">
                        <div class="list" v-for="(arr, index) in phoneList" :key="index">
                            <div class="item" v-for="(item, index) in arr" :key="index">
                                    <span :class="{'new-pro': index%2==0}">新品</span>
                                    <div class="item-img">
                                        <a :href="'/#/product/'+item.id">
                                            <img v-lazy="item.mainImage" alt="">
                                        </a>
                                    </div>
                                    <div class="item-info">
                                        <h3>{{item.name}}</h3>
                                        <p>{{item.subtitle}}</p>
                                        <p class="price" @click="addCart(item.id)"> {{item.price}}元</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <service-bar></service-bar>
        <modal 
            title="提示"
            sureText="查看购物车"
            btnType="1"
            modalType="middle"
            :showModal="showModal"
            @submit="goToCart"
            @cancel="showModal=false"
            >
            <template v-slot:body>
                <p>商品添加成功！</p>    
            </template>    
        </modal>
    </div>
</template>

<script>
    import ServiceBar from './../components/ServiceBar'
    import Modal from './../components/Modal'
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'

    export default {
        name:'index',
        components: {
            ServiceBar,
            Swiper,
            SwiperSlide,
            Modal
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
                   
                ],
                adsList: [
                    {
                        id:33,
                        img: '/imgs/ads/ads-1.png'
                    },
                    {
                        id:48,
                        img: '/imgs/ads/ads-2.jpg'
                    },
                    {
                        id:45,
                        img: '/imgs/ads/ads-3.png'
                    },
                    {
                        id:47,
                        img: '/imgs/ads/ads-4.jpg'
                    },
                ],
                phoneList: [],
                showModal: false
            }
        },
        computed: {
            swiper() {
                return this.$refs.indexSwiper.$swiper
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                this.axios.get('/products', {
                    params: {
                        categoryId: 100012,
                        pageSize:14
                    }
                }).then((res) => {
                    res.list = res.list.slice(6, 14)
                    this.phoneList = [res.list.slice(0, 4), res.list.slice(4, 8)]
                })
            },
            // showModal() {
            //     // return false
            // },
            // 购物车功能
            addCart(id) {
                this.axios.post('/carts', {
                    productId: id,
                    selected: true
                }).then((res) => {
                    this.showModal = true
                    this.$store.dispatch('saveCartCount', res.cartTotalQuantity)
                }).catch(() => {
                    this.showModal = true
                })
            },
            goToCart() {
                this.$router.push('/cart')
            },
        }
    }
</script>

<style scoped lang="scss">
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';
@import './../assets/scss/base.scss';
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
    .ads-box {
        @include flex();
        margin-top: 14px;
        margin-bottom:31px;
        a {
            width: 296px;
            height: 167px;
        }
    }
    .banner {
        margin-bottom: 50px;
    }
    .product-box {
        background-color: $colorJ;
        padding: 30px 0 50px;
        h2 {
            font-size: $fontF;
            height: 21px;
            line-height: 21px;
            color: $colorB;
            margin: 0 0 20px 0;
        }
        .wrapper {
            display: flex;
            .banner-left {
                margin-right: 36px;
                img {
                    width:224px;
                    height: 619px;
                }
            }
            .list-box {
                .list {
                    @include flex();
                    width: 986px;
                    margin-bottom: 14px;
                    &:last-child {
                        margin: 0;
                    }
                    .item {
                        width: 236px;
                        height: 302px;
                        background-color: $colorG;
                        text-align: center;
                        span {
                            display: inline-block;
                            width: 67px;
                            height: 24px;
                            margin: 10px 0;
                            font-weight: bold;
                            color: #fff;
                            font-size: 14px;
                            line-height: 24px;
                            &.new-pro {
                                background: $colorA;
                            }
                        }
                        .item-img {
                            img {
                                height: 185px;
                            }
                        }
                        .item-info {
                            h3 {
                                font-size: $fontJ;
                                color: $colorB;
                                line-height: $fontJ;
                                font-weight:bold;
                            }
                            p {
                                color: $colorD;
                                line-height: 13px;
                                margin: 6px auto 13px;
                            }
                            .price {
                                color: #F20A0A;
                                font-size: $fontJ;
                                font-weight: bold;
                                cursor: pointer;
                                &:after {
                                    content: ' ';
                                    @include bgImg(22px, 22px, '/imgs/icon-cart-hover.png');
                                    padding-left: 22px;
                                    margin-left: 5px;
                                    vertical-align: middle;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>


