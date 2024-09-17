<template>
  <div>
    <h1>Welcome to the Home Page</h1>

    <ul>
      <form v-for="item in state.items" :key="item.id">
        <li>{{ item.name }}</li>
        <button @click.prevent="handledelete(item.id)">Delete</button>
      </form>
    </ul>

    <form @submit.prevent="handleSubmit">
      <input v-model="state.itemName" type="text" name="itemName" placeholder="Enter item name" />
      <button type="submit">Add Item</button>
    </form>
  </div>
</template>

<script>
import { reactive, onMounted } from 'vue';
import axios from "axios";

export default {
  setup() {
    const state = reactive({
      items: [],
      itemName: ''
    });

    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/items');
        state.items = response.data;
      } catch (error) {
        console.error(error);
      }
    };

    const handleSubmit = async () => {
      try {
        await axios.post('http://localhost:3000/api/items', { name: state.itemName });
        state.itemName = '';
        fetchItems();
      } catch (error) {
        console.error(error);
      }
    };

    const handledelete = async (id) => {
      try {
        await axios.delete(`http://localhost:3000/api/items/${id}`);
        fetchItems();
      } catch (error) {
        console.error(error);
      }
    };

    onMounted(fetchItems);

    return { state, handleSubmit, handledelete };
  }
}
</script>

<style scoped>
  ul {
    margin: auto;
    width: fit-content;

    form {
      display: flex;

    }
  }
</style>