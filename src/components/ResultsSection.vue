<script setup lang="ts">
import { ref } from 'vue'
import { useFacts } from '../../helpers/findfact.ts'
type Result = {
  answer: string,
  isCorrect: boolean
}
type ResultString = {
    isCorrect: boolean,
    string: string
}
const emit = defineEmits(['updateStage'])
const isReady = ref(false)
const score = ref(0)
const resultStrings: ResultString[] = []
const props = defineProps<{ results: Result[] }>()
const prepareResults = (() => {
    props.results.forEach((res) => {
    const funfact = useFacts(res)
    if (res.isCorrect === true) {
        const resString = {
            isCorrect: true,
            string: `${res.answer} is not a real place.`
        }
        score.value += 1
        resultStrings.push(resString)
    } else {
        const resString = {
            isCorrect: false,
            string: `${funfact}`
        }
        resultStrings.push(resString)
    }
})
isReady.value = true
return resultStrings
})
const strings = prepareResults()

const playAgain = (() => {
    console.log('click')
    emit('updateStage')
})

</script>

<template>
    <div class="question-card">
        <div v-if="isReady === true">
            <h5> You Scored: {{ score }}/20</h5>
            <div class="results" v-for="(string, index) in strings">
                <h3 class="question-label">Question {{  index + 1 }}:</h3>
                <span v-if="string.isCorrect === true">
                    <h4 class="correct">Correct</h4>
                </span>
                <span v-else> <h4 class="incorrect">Incorrect!</h4>
                </span>
                <p> {{ string.string }}</p>
            </div>
        </div>
    <button @click="playAgain"> Play Again </button>
    </div>
</template>

<style scoped>

.results {
    text-align: start;
}
.question-label {
    text-align: start;
    display: inline;
    padding-right: 1rem;
}
p {
    font-size: 1.5 rem;
}

h4 {
    font-size: 1.7rem;
    display: inline;
}

h3 {
    font-size: 1.7rem;
    text-align: start;
}

.correct {
    color: green;
}

.incorrect {
    color: red;
}
</style>