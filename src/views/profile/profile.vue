<template>
    <!-- profile page -->
    <div>
        <Row>
            <Col :sm="5" :md="6" class="pl-0 pr-0">
                <sidebar />
            </Col>
            <Col :sm="19" :md="18"> 
                <router-view />
            </Col>
        </Row>
    </div>
</template>

<script>
import sidebar from '@/components/profile/sidebar.vue';
export default {
    components: {
        sidebar
    }
}
</script>

<style>

</style>
