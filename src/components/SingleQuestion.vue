<script setup lang="ts">
import { watch, ref, Ref, computed } from 'vue'
import  QuestionOption from './QuestionOption.vue'
import MainButton from './ui/MainButton.vue'

const emit = defineEmits(['update'])
const activeAnswer: Ref<string> = ref('')

const props = defineProps<{ answers: string[] }>()
let sortedAnswers = props.answers.sort(() => Math.random() - 0.5)

const updateCount = (() =>  {
    if (activeAnswer.value.length === 0) {
        console.log('will show validation message')
    } else {
        emit('update', activeAnswer.value)
        activeAnswer.value = ''
    }
})

const updateActive = ((answer: string) => {
    activeAnswer.value = answer
    // console.log('selected: ' + activeAnswer.value)
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
    <div class="option-wrapper">
        <div v-for="a in sortedAnswers" class="option">
                <QuestionOption :option="a" :active="active" @setactive="updateActive"/>
        </div>
        <div class="next-button">
            <MainButton @click="updateCount">Next</MainButton>
        </div>  
    </div>

</template>

<style scoped>

.option-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
    .option {
        padding-top: 1rem;
        padding-left: 1rem;
        padding-right: 1rem;
        width: 80%;
    }

    .next-button {
        padding-top: 2rem;
    }
</style>