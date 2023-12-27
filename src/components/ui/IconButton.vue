

<template>
    <button class="icon-button">
        <slot>content here</slot>
    </button>
</template>

<style scoped>
.icon-button {
    height: 2rem;
    padding: 0.5rem;
    background-color: transparent;
    color: var(--color-black);
    border: none;
}

.icon-button:hover {
    transform: scale(1.1);
}
</style>
