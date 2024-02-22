<script setup lang="ts">
import IconButton from './ui/IconButton.vue'
import CloseIcon from './icons/CloseIcon.vue'
// const emit = defineEmits(['updateStage'])
// const start = (() => {
//     emit('updateStage')
// })
</script>

<template>
    <IconButton class="icon-box" label="close">
       <CloseIcon />
    </IconButton>
</template>

<style scoped>
.icon-box {
    height: 2rem;
    padding: 0.5rem;
    max-height: 2rem;
}
</style>