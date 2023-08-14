<script setup lang="ts">
import {ref} from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)

function onClick() {
  console.log("on btn click")
  count.value++
  $("#hello_world").children("p[name='edit_para']").hide()
}
</script>

<template>
  <div id="hello_world">
    <h1>{{ msg }}</h1>
    <button type="button" @click="onClick()">count is {{ count }}</button>
    <p name = "edit_para">
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
    <p name = "edit_para">
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
    <p>
      Check out
      <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
      >, the official Vue + Vite starter
    </p>
    <p>
      Install
      <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
      in your IDE for a better DX
    </p>
    <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
