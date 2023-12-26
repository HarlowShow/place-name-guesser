<template>


<button class="button-primary">
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

  font-weight: 300;
}
</style>