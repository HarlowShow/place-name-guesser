<script setup lang="ts">
import { watch } from 'vue'
import  QuestionOption from './QuestionOption.vue'
const emit = defineEmits(['update'])
const props = defineProps<{ answers: string[] }>()
let sortedAnswers = props.answers.sort(() => Math.random() - 0.5)
const updateCount = ((answer: string) =>  {
    emit('update', answer) 
}) 
watch(
  () => props.answers,
  () => {
    sortedAnswers = props.answers.sort(() => Math.random() - 0.5)
  }
)
</script>

<template>
    <div v-for="a in sortedAnswers" class="option">
       <QuestionOption :option="a" @submit="updateCount"/>
    </div>  

</template>

<style scoped>
    .option {
        background-color: #dae0dc;
        margin-bottom: 1rem;
        border-radius: 15px;
        padding: 1rem;
    }

    .option:hover {
        background-color: #185c36;
        color: white;
        cursor: pointer;
    }
</style>