
<script setup lang="ts">
const props = defineProps({
    label: { type: String, required: true }
})
</script>
<template>
    <button class="icon-button" role="button">
        <slot>content here</slot>
        <span class="visually-hidden">
            {{ props.label }}
        </span>
    </button>
</template>

<style scoped>
.icon-button {
    height: 3rem;
    padding: 0.5rem;
    background-color: transparent;
    color: var(--color-black);
    border: none;
}

.icon-button:hover {
    transform: scale(1.1);
}

.visually-hidden {
    display: inline-block;
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1;
    width: 1;
    margin: -1;
    padding: 0;
    border: 0;
  }
</style>
