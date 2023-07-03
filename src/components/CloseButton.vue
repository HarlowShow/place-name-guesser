<script setup lang="ts">
import CloseIcon from './CloseIcon.vue'
// const emit = defineEmits(['updateStage'])
// const start = (() => {
//     emit('updateStage')
// })
</script>

<template>
    <div class="icon-box">
       <CloseIcon />
    </div>
</template>

<style scoped>
.icon-box {
    height: 2rem;
    padding: 0.5rem;
    max-height: 2rem;
}
</style>