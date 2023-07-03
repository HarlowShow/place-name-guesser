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
  console.log(results)
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
    <HelpModal class="modal" v-if="modalIsOpen===true"></HelpModal>
    <div class="main" v-else="modalIsOpen===false">
      <HomePage v-if="stage === 'home'" @updateStage="onStart"/>
      <QuizSection @updateStage="onQuizComplete" v-else-if="stage === 'quiz'"/>
      <ResultsSection @updateStage="onPlayAgain" :results="finalResults" v-else />
    </div>
  </div>

</template>

<style>

.content {
  display: flex;
  place-items: center;
  justify-content: center;
  margin: 0 auto;
  @media (max-width: 480px) {
    min-width: 300px;
    /* width: 90%; */
  }
  @media (max-width: 480px) {
    h1 {
      font-size: 1.5rem;
    }
  }
  @media (min-width: 480px) {
    min-width: 350px;
    width: 90%;
  }
  @media (min-width: 768px) {
    width: 600px;
  }
  @media (min-width: 992px) {
    width: 700px;
  }
}
.top-menu {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* width: 100%; */
}
.main {
  @media (max-width: 480px) {
    min-width: 300px;
    width: 90%;
  }
  @media (min-width: 480px) {
    min-width: 350px;
    width: 90%;
  }
  @media (min-width: 768px) {
    width: 600px;
  }
  @media (min-width: 992px) {
    width: 700px;
  }
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
