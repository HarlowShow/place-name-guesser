<script setup lang="ts">
import MainButton from './ui/MainButton.vue'
const emit = defineEmits(['updateStage'])
const start = (() => {
    emit('updateStage')
})
</script>

<template>
    <div class="quiz">
        <div class="title">
            <h1>Place Name or Fake Name?</h1>
            <h2>Guess which of three UK place names is fake</h2>
        </div>
      <MainButton @click="start" label="start quiz">Start</MainButton>
    </div>
</template>

<style scoped>

h1 {
    font-size: 2rem;
    margin: 0;
    line-height: 1.2;
    font-weight: 700;
}

h2 {
  font-size: 1.5rem;
  line-height: 1.2;
  font-weight: 500;
}

.title {
    max-width: 75%;
}

@media (max-width: 480px) {
    .title {
      max-width: 100%;
    }
  }
</style>