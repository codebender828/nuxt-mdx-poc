<template>
  <nav class="navbar">
    <nuxt-link to="/">
      <h1>Nuxt MDX</h1>
    </nuxt-link>
    <ul class="list">
      <li class="link">
        <nuxt-link to="/">
          Home
        </nuxt-link>
      </li>
      <li class="link">
        <nuxt-link to="/docs">
          Test
        </nuxt-link>
      </li>
      <li class="link">
        <a href="https://github.com/codebender828/nuxt-mdx-poc">
          Github Source Code
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.navbar {
  display: flex;
  height: 60px;
  padding: 0 3rem;
  align-items: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.list {
  display: flex;
  list-style: none;
}

.link {
  padding: 12px 16px;
  text-decoration: none;
}
</style>
