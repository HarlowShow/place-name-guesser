<script setup lang="ts">
import { ref, Ref } from 'vue'
import QuizSection from './components/QuizSection.vue'
import HomePage from './components/HomePage.vue'
import ResultsSection from './components/ResultsSection.vue'
import HelpButton from './components/HelpButton.vue'
import CloseButton from './components/CloseButton.vue'
import HelpModal from './components/HelpModal.vue'


const modalIsOpen = ref(false)
const finalResults: Ref<Result[]> = ref([])
type Stage = 'home' | 'quiz' | 'answers'
type Result = {
  answer: string,
  isCorrect: boolean
}
const onStart = (() => {
  stage.value = 'quiz'
})
const onQuizComplete = ((results: Result[]) => {
  finalResults.value = results
  // console.log(results)
  stage.value = 'answers'
})

const onPlayAgain = (() => {
  stage.value = 'home'
})
let stage: Ref<Stage> = ref('home')
const toggleModal = (() => { 
  modalIsOpen.value = !modalIsOpen.value
})
</script>

<template>
  <div class="top-menu" @click="toggleModal">
    <HelpButton v-if="modalIsOpen === false"/>
    <CloseButton v-else />
  </div>
  <div class="content">
    <HelpModal class="modal" v-show="modalIsOpen===true"></HelpModal>
      <div class="main" v-show="modalIsOpen===false">
        <HomePage v-if="stage === 'home'" @updateStage="onStart"/>
        <QuizSection @updateStage="onQuizComplete" v-else-if="stage === 'quiz'"/>
        <ResultsSection @updateStage="onPlayAgain" :results="finalResults" v-else />
      </div>
  </div>

</template>

<style>

.main {
  display: flex;
  width: 100%;
}

.content {
  display: flex;
  place-items: center;
  justify-content: center;
  width: 360px;
}

@media (min-width: 640px) {
  .content {
    width: 500px;
  }
}

@media (max-width: 400px) {
  .content {
    width: 320px;
  }

  .quiz {
    width: 100%;
  }
}
.top-menu {
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* width: 100%; */
}
</style>
