

<template>
    <button class="icon-button" role="button">
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
    outline: none;
}

.icon-button:hover {
    transform: scale(1.1);
}

.icon-button:focus {
    outline: initial;
}
</style>
