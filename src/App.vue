<template>
  <div id="app">
    <Background />
    <main>
      <information title=""/>
    </main>
  </div>
</template>

<script setup>
import Background from "@/components/Background"
import information from "@/views/Information"

</script>

<style scoped>
main{
  width: min(100%, 100% - 4rem);
  height: 100vh;
  padding: 10rem;
  margin-inline: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
