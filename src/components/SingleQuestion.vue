<script setup lang="ts">
import { watch, ref, Ref, computed } from 'vue'
import  QuestionOption from './QuestionOption.vue'
const emit = defineEmits(['update'])
const activeAnswer: Ref<string> = ref('')

const props = defineProps<{ answers: string[] }>()
let sortedAnswers = props.answers.sort(() => Math.random() - 0.5)

const updateCount = (() =>  {
    if (activeAnswer.value.length === 0) {
        console.log('will show validation message')
    } else {
        emit('update', activeAnswer.value) 
    }
})

const updateActive = ((answer: string) => {
    activeAnswer.value = answer
    console.log('selected: ' + activeAnswer.value)
})

const active = computed(() => {
    return activeAnswer.value
})

watch(
  () => props.answers,
  () => {
    sortedAnswers = props.answers.sort(() => Math.random() - 0.5)
  }
)
</script>

<template>
    <div>
        <div v-for="a in sortedAnswers" class="option">
                <QuestionOption :option="a" :active="active" @setactive="updateActive"/>
        </div>  
        <button @click="updateCount">Next</button>
    </div>

</template>

<style scoped>
    .option {
        padding-top: 1rem;
        padding-left: 1rem;
        padding-right: 1rem;
    }

</style>