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
    }
}
</script>

<style scpoed>
    .info {
        position: relative;
        top: 0;
        left: 100px;
        right: 0;
        bottom: 0;
        width: calc(100vw - 100px); 
    }
</style>