<script setup lang="ts">
const emit = defineEmits(['updateStage'])
const start = (() => {
    emit('updateStage')
})
</script>

<template>
    <div class="question-card">
        <h1>Place Name or</h1>
        <h1>Fake Name?</h1>
        <h2>Guess which of the three placenames is fake</h2>
      <button @click="start">Start</button>
    </div>
</template>

<style scoped>

</style>