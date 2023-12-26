<script setup lang="ts">
import { ref } from "vue";
import { useFacts } from "../../helpers/findfact.ts";
import AverageScore from "./AverageScore.vue";
import MainButton from './ui/MainButton.vue'

type Result = {
  answer: string;
  isCorrect: boolean;
};
type ResultString = {
  isCorrect: boolean;
  string: string;
};
const emit = defineEmits(["updateStage"]);
const isReady = ref(false);
const score = ref(0);
const resultStrings: ResultString[] = [];
const props = defineProps<{ results: Result[] }>();
const prepareResults = () => {
  props.results.forEach((res) => {
    const funfact = useFacts(res);
    if (res.isCorrect === true) {
      const resString = {
        isCorrect: true,
        string: `${res.answer} is not a real place.`,
      };
      score.value += 1;
      resultStrings.push(resString);
    } else {
      const resString = {
        isCorrect: false,
        string: `${funfact}`,
      };
      resultStrings.push(resString);
    }
  });
  isReady.value = true;
  return resultStrings;
};
const strings = prepareResults();

const playAgain = () => {
  // console.log('click')
  emit("updateStage");
};
</script>

<template>
  <div class="quiz">
    <div v-if="isReady === true">
      <h1>You Scored: {{ score }}/20</h1>
      <div class="score-wrapper">
        <Suspense>
          <AverageScore :score="score" />
        </Suspense>
      </div>
      <div class="results" v-for="(string, index) in strings">
        <div class="result-label">
            <h2>Question {{ index + 1 }}:</h2>
            <h2 v-if="string.isCorrect === true" class="correct">Correct</h2>
            <h2 v-else class="incorrect">Incorrect!</h2>
        </div>
        <p class="fun-fact">{{ string.string }}</p>
      </div>
    </div>
    <MainButton @click="playAgain">Play Again</MainButton>
  </div>
</template>

<style scoped>
.score-wrapper {
  padding-top: 2.5rem;
}

h1 {
  color: var(--color-black);
  font-size: 1.5rem;
  margin-top: 0rem;
}

.fun-fact {
    margin-top: 0;
    padding-top: 0.5rem;
    padding-bottom: 1rem;
}
.btn {
  margin-top: 2rem;
}
.results {
  text-align: start;
}

.result-label {
    display: flex;
    gap: 0.5rem;
}

h2 {
  font-size: 0.9rem;
  color: var(--color-black);
  padding-top: 0;
  text-transform: uppercase;
  margin: 0;
}

h4 {
  font-size: 1.5rem;
  display: inline;
}

h3 {
  font-size: 1.5rem;
  text-align: start;
  margin: 0;
  line-height: 1.2;
}

.correct {
  color: var(--color-green-secondary);
}

.incorrect {
  color: red;
}
</style>
