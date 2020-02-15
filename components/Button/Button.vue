<template>
  <button class="button"><slot /></button>
</template>

<script>
export default {
  name: 'Button'
}
</script>

<style scoped>
.button {
  background: #1968ff;
  color: #fff;
  font-weight: 700;
  border-radius: 3px;
  outline: none;
  border: none;
  font-size: 1rem;
  padding: .8rem 1rem;
  margin: .5rem .8rem;
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
}

.button:focus {
  box-shadow: 0 0 0 3px rgba(66,153,225,.6);
}
</style>
