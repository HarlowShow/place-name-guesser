<script setup lang="ts">
import IconButton from './ui/IconButton.vue'
import HelpIcon from './icons/HelpIcon.vue'
// const emit = defineEmits(['updateStage'])
// const start = (() => {
//     emit('updateStage')
// })
</script>

<template>
    <IconButton class="icon-box" label="help">
        <HelpIcon />
    </IconButton>
</template>

<style scoped>
svg {
    color: #ECF3EB;
    font-size: 2rem;
}
</style>