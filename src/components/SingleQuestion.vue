<script setup lang="ts">
import { ref, Ref, computed } from 'vue'
import  QuestionOption from './QuestionOption.vue'
import MainButton from './ui/MainButton.vue'

const emit = defineEmits(['update'])
const activeAnswer: Ref<string> = ref('')
    type result = {
  answer: string,
  isCorrect: boolean
}

const prevAnswers: Ref<string[]> = ref([])
const props = defineProps<{ answers: string[], results: result[], index: number }>()

const updateCount = (() =>  {
    // if answer not selected or not selected previously
    if (activeAnswer.value.length === 0 && !prevAnswers.value[props.index]) {
        // console.log(prevAnswers.value[props.index])
        // console.log(props.index)
        console.log('will show validation message')
    } else if (activeAnswer.value.length === 0){
        // if active not updated, submit previous
        const tuple = [props.index, prevAnswers.value[props.index]]
        emit('update', tuple)
    } else {
        // otherwise submit active
        const tuple = [props.index, activeAnswer.value]
        emit('update', tuple)
        activeAnswer.value = ''
    }
})

const updateActive = ((answer: string) => {
    // console.log('updating active')
    activeAnswer.value = answer
    // console.log('updating previous answer to: ' + activeAnswer.value)
    prevAnswers.value[props.index] = activeAnswer.value
    // console.log('selected: ' + activeAnswer.value)
})

const active = computed(() => {
    return prevAnswers.value[props.index] ?? activeAnswer.value
})
</script>

<template>
    <div class="option-wrapper">
        <div v-for="a in props.answers" class="option">
                <QuestionOption :option="a" :active="active" @setactive="updateActive"/>
        </div>
        <div class="next-button">
            <MainButton @click="updateCount" label="next question">Next</MainButton>
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