<template>
  <vuep :template="code" />
</template>

<script>
export default {
  data () {
    return {
      /* eslint-disable */
      code: `
<template>
  <div>
    <h3>Count: {{ count }} </h3>
    <button @click="increment">
      Increase
    </button>
    <button @click="decrement">
      Decrease
    </button>
  </div>
</template>
<script>
  export default {
    name: 'Count',
    data () {
      return {
        count: 0
      }
    },
    methods: {
      increment () {
        this.count++
      },
      decrement () {
        this.count--
      }
    }
  }
<\/script>
      `
    }
  }
}
</script>
