<script setup lang="ts">
import { computed, ref, Ref } from "vue";


const emit = defineEmits(["submit", "setactive"]);
const props = defineProps<{ option: string; active: string }>();
const choice: Ref<HTMLButtonElement | null> = ref(null);
// console.log('already selected? ' + props.isAlreadySelected)

const isActive = computed(() => {
  return props.active})

const buttonWrapper = computed(() => ({
  active: isActive.value === props.option ? true : false,
  "button-wrapper": true,
}));

// console.log(props.active);
const setActiveAnswer = () => {
  emit("setactive", props.option);
};

</script>

<template>
  <div class="button-wrapper">
    <button @click="setActiveAnswer" :class="buttonWrapper" ref="choice">
      {{ option }}
    </button>
  </div>
</template>

<style scoped>

.button-wrapper {
  border: 4px solid transparent;
  width: 100%;
}
button.active {
  background: linear-gradient(var(--color-off-white), var(--color-off-white))
      padding-box,
    linear-gradient(
        to left,
        var(--color-green-primary),
        var(--color-green-secondary)
      )
      border-box;
  border: 4px solid transparent;
  outline: none;
}

button {
  color: var(--color-black);
  width: 100%;
  font-size: 1.3rem;
  background-color: var(--color-off-white);
  border-radius: var(--button-border-radius);
}

button:active {
  outline: none;
}

button:hover {
  background: linear-gradient(var(--color-off-white), var(--color-off-white))
      padding-box,
    linear-gradient(
        to left,
        var(--color-green-primary-translucent),
        var(--color-green-secondary-translucent)
      )
      border-box;
  border: 4px solid transparent;
  /* border: 4px solid var(--color-green-accent); */
}

button.active:hover {
  background: linear-gradient(var(--color-off-white), var(--color-off-white))
      padding-box,
    linear-gradient(
        to left,
        var(--color-green-primary),
        var(--color-green-secondary)
      )
      border-box;
  border: 4px solid transparent;
  outline: none;
}
</style>
