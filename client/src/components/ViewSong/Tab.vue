<template>
  <panel title="Tabs">
    <textarea
      readonly
      v-model="song.tab">
    </textarea>
  </panel>
</template>

<script>
import Panel from '@/components/Panel' // use vue component

export default {
  props: [
    'song'
  ],
  components: {
    Panel
  }
}
</script>

<style scoped>
textarea {
  width: 100%;
  font-family: monospace;
  border: none;
  height: 600px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 40px;
}
</style>
