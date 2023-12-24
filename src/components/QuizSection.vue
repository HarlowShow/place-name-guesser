<script setup lang="ts">
import { nextTick, ref, Ref } from 'vue'
import SingleQuestion from './SingleQuestion.vue'
import { placeNamesReal, placeNamesFake } from '../../data/answers'
import { useQuestions } from '../../helpers/generatequestions'

const emit = defineEmits(['updateStage'])
const count = ref(0)
const questionsRef = useQuestions(placeNamesReal, placeNamesFake)
const [...questions] = questionsRef
const correctAnswers: string[] = []
questions.forEach((a) => correctAnswers.push(a[0]))
const activeQuestion: Ref<string[]> = ref(questions[0])
type result = {
  answer: string,
  isCorrect: boolean
}
const results: result[] = []

const submitAnswer = ((ans: string) => {
  let isCorrectAnswer = false
  // console.log('chosen answer' + ans)
  if (ans === correctAnswers[count.value]) {
    // console.log('correct')
    isCorrectAnswer = true
  } else {
    // console.log('incorrect')
  }
  const res = {
    answer: ans,
    isCorrect: isCorrectAnswer
  }
  results.push(res)
})
const nextQuestion = (async (answer: string) => {
  if (count.value === 19) {
    submitAnswer(answer)
    emit('updateStage', results)
  } else {
    submitAnswer(answer)
    count.value += 1
    activeQuestion.value = questions[count.value]
    await nextTick()
  }
})

</script>

<template>
  <div class="question-card">
    <div class="heading-wrapper">
      <h1>Question {{ count + 1 }} of 20</h1>
    </div>
    <SingleQuestion :answers="activeQuestion" @update="nextQuestion"/>
  </div>

</template>

<style>

h1 {
  font-size: 1rem;
  color: var(--color-grey);
  padding-top: 0;
}

.heading-wrapper {
  display: flex;
  align-items: start;
  text-transform: uppercase;
}

.question-card {
  background-color: var(--color-light-gray);
  padding: 2rem;
  border-radius: 15px;
}
.read-the-docs {
  color: #888;
}
</style>
