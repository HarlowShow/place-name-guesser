<script setup lang="ts">
import { nextTick, ref, Ref, computed } from 'vue'
import SingleQuestion from './SingleQuestion.vue'
import { placeNamesReal, placeNamesFake } from '../../data/answers'
import { useQuestions } from '../../helpers/generatequestions'
import BackButton from './BackButton.vue'
// import { testFacts } from '../../helpers/findfact'

const emit = defineEmits(['updateStage'])
const count = ref(0)
const questionsRef = useQuestions(placeNamesReal, placeNamesFake)
const [...questions] = questionsRef
const correctAnswers: string[] = []
questions.forEach((a) => correctAnswers.push(a[0]))
const activeQuestion: Ref<string[]> = ref(questions[0])
// console.log('active question: ' + activeQuestion.value)

const shuffledQuestions = computed(() => {
  return activeQuestion.value.sort(() => 0.5 - Math.random())
})

type result = {
  answer: string,
  isCorrect: boolean
}
type answerTuple = [number, string]
const results: result[] = []

// testing - check results data
// for(let i = 0; i < placeNamesReal.length; i++) {
//   testFacts(placeNamesReal[i] as string)
// }

const submitAnswer = ((ans: answerTuple) => {
  let isCorrectAnswer = false
  const idx = ans[0]
  const string = ans[1]
  // console.log('answer submitted at index: ' + idx + 'and chosen string was: ' + string)
  // console.log('correct answer for this question should be: ' + correctAnswers[idx])
  // console.log('chosen answer' + ans)
  if (string === correctAnswers[idx]) {
    // console.log('correct')
    isCorrectAnswer = true
  } else {
    // console.log('incorrect')
  }
  const res = {
    answer: string,
    isCorrect: isCorrectAnswer
  }
  results[idx] = res
})
const nextQuestion = (async (answer: answerTuple) => {
  if (count.value === 19) {
    submitAnswer(answer)
    emit('updateStage', 'answers', results)
  } else {
    submitAnswer(answer)
    count.value += 1
    activeQuestion.value = questions[count.value]
    await nextTick()
  }
})

const goToPrevious = (() => {
  if (count.value === 0) {
    emit('updateStage', 'home')
  } else if (count.value > 0) {
    count.value -= 1;
    activeQuestion.value = questions[count.value]
  }
})

</script>

<template>
  <div class="quiz">
    <div class="heading-wrapper">
      <BackButton @click="goToPrevious" class="align-left"></BackButton>
      <h1 class="question-number centre">Question {{ count + 1 }} of 20</h1>
      <div></div>
    </div>
    <SingleQuestion :results="results" :index="count" :answers="shuffledQuestions" @update="nextQuestion"/>
  </div>

</template>

<style>

h1.question-number {
  font-size: 1rem;
  color: var(--color-grey);
  padding-top: 0;
  font-weight: 600;
}

.heading-wrapper {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: auto;
  text-transform: uppercase;
  width: 100%;
}

.centre {
  justify-self: center;
}

/* .align-left {
  justify-self: flex-start;
} */
</style>
