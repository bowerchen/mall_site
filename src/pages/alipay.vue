<template>
    <div class="ali-pay">
        <order-header title="订单支付">
            <template v-slot:tip>
                <span>请谨慎钓鱼链接或者诈骗电话， 了解更多></span>
            </template>
         </order-header>
         <loading v-if="loading"></loading>
        <div class="form" v-html="content"></div>
    </div>
</template>

<script>
import Loading from './../components/Loading'
import OrderHeader from './../components/OrderHeader'
export default {
    name: 'alipay',
    components: {
        OrderHeader,
        Loading
    },
    data() {
        return {
            orderId: this.$route.query.orderId,
            content: '',
            loading: true
        }
    },
    mounted() {
        this.paySubmit()
    },
    methods: {
        paySubmit() {
            this.axios.post('/pay', {
                orderId: this.orderId,
                orderName: '小米商城订单支付',
                amount: 0.01,
                payType: 1 // 1:支付宝  2:微信 
            }).then((res) => {
                this.content = res.content
                setTimeout(() => {
                    document.forms[0].submit()
                }, 100)
            })
        }
    }

}
</script>

<style>

</style>