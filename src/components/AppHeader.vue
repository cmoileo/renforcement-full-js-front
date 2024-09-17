<template>
  <header>
    <img src="../assets/logo.png" alt="Logo" class="logo" />
    <nav>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/contact">Contact</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'AppHeader',
  setup() {
    const router = useRouter()

    return {
      router
    }
  }
}
</script>

<style>
header {
  background-color: #f8f9fa;
  padding: 20px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    max-width: 70px;
  }

  ul {
    display: flex;
    gap: 20px;
    li {
      list-style: none;

      router-link {
        cursor: pointer;
      }
    }
  }
}
</style>