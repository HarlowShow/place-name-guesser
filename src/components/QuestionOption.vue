<script setup lang="ts">
import { computed } from 'vue'

const emit = defineEmits(['submit', 'setactive'])
const props = defineProps<{ option: string, active: string }>()

const buttonWrapper = computed(() => ({
    'active': props.active === props.option ? true : false,
    'button-wrapper': true
}))

console.log(props.active)
const setActiveAnswer = (() => {
emit('setactive', props.option)
})
</script>

<template>
    <div :class="buttonWrapper">
        <button @click="setActiveAnswer">
           {{ option }}
        </button>
    </div>
</template>

<style scoped>

/* button.active {
    border: 10px solid;
    border-image-slice: 1;
    border-width: 3px;
    border-image-source: linear-gradient(to left, var(--color-green-primary), var(--color-green-secondary));
} */

.button-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    width: 508px;
    height: 68px;
}

.active {
    /* border: 10px solid;
    border-image-slice: 1;
    border-width: 3px; */
    background: linear-gradient(to left, var(--color-green-primary), var(--color-green-secondary));

}

button {
    width: 500px;
    height: 60px;
    color: var(--color-black);
    font-size: 1.5rem;
    background-color: var(--color-off-white);
    /* margin-bottom: 1rem; */
    border-radius: 10px;
    /* padding: 1rem; */
    /* box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px; */
}
        
    @media screen and (min-width: 768px){
        button:hover {
            background-color: #185c36;
            color: white;
            cursor: pointer;
        }

    }

</style>