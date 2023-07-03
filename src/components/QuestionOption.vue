<script setup lang="ts">
const emit = defineEmits(['submit'])

const props = defineProps<{ option: string }>()
const submitAnswer = (() => {

    emit('submit', props.option)
})
</script>

<template>
    <div @click="submitAnswer">
       <p>{{ option }}</p> 
    </div>
</template>

<style scoped>
p {
    font-size: 1.5rem;
}
</style>