<template>
    <div class="order-list">
      <order-header title="订单列表">
        <template v-slot:tip>
            <span>请谨慎钓鱼链接或者诈骗电话， 了解更多></span>
        </template>
        </order-header>
    </div>
</template>

<script>
import OrderHeader from './../components/OrderHeader'
export default {
    name:'order-list',
    components: {
      OrderHeader
    }
}
</script>

<style>

</style>