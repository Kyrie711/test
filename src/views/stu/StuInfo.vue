<template>
    <div class="info">
        <info></info>    
    </div> 
</template>

<script>
import Info from '@/components/Info.vue'
export default {
    components: {
        Info
    },
    methods: {
    }
}
</script>

<style scpoed>
    .info {
        position: relative;
        top: 0;
        left: 5%;
        right: 0;
        bottom: 0;
        width: 95%;
    }
</style>