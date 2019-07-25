<template>
    <section class="bg-light mt-30 ml-10 mr-10 mb-10">
        <div class="pt-20 pb-20"> 
            <Button v-for="item in profileitems" :key="item.name" :to="`/profile/${item.name}`" class="border-0 bg-primary ibm-font font-12 pl-20 pr-20 color-light ml-20 mr-20">{{item.label}}</Button> 
            <Divider class="mt-20"/>
            <div class="pt-50 pb-50 pl-30 px-30">
                <router-view></router-view>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            profileitems: [
                {
                    label: "Overview",
                    name: "overview", 
                },
                {
                    label: "Security",
                    name: "security", 
                },
                {
                    label: "Transactions",
                    name: "transaction",
                },
                {
                    label: "Activity",
                    name: "activity"
                }
            ]
        }
    }
}
</script>

<style>

</style>
