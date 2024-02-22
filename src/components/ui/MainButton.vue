<script setup lang="ts">
const props = defineProps({
    label: { type: String, required: true }
})
</script>


<template>
<button class="button-primary" :aria-label=props.label>
    <slot>content here</slot>
</button>

</template>

<style scoped>
.button-primary {
  background: linear-gradient(
    to left bottom,
    var(--color-one),
    var(--color-two)
  );

  font-weight: 400;
}
</style>