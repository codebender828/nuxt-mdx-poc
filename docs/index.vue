<template>
  <main>
    <h1>⚡️Nuxt + Live Editor + MDX</h1>

    <nuxt-link to="/docs">
      Click Here to see MDX Examples
    </nuxt-link>

    <h3>Features</h3>
    <ul>
      <li>SSR</li>
      <li>Markdown documentation</li>
      <li>Live Code Editor</li>
    </ul>
    <br>
    <h3>Live Editor</h3>
    <LiveEditor>
      {{ code }}
    </LiveEditor>
  </main>
</template>

<script>
/* eslint-disable */
import { LiveEditor } from '@/components'
export default {
  name: 'Index',
  components: { LiveEditor },
  data () {
    return {
      code: `
<template>
  <!-- Edit this content to change me -->
  <button @click="handleClick" class="button">
    Edit me!
  </button>
</template>
<script>
  export default {
    methods: {
      handleClick: () => alert('Clicked')
    }
  }
<\/script>`
    }
  }
}
/* eslint-enable */
</script>

<style>
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
