<template>
  <panel title="YouTube Video">
    {{youtubeId}}
    <youtube
      :video-id="youtubeId"
      :player-width="800"
      :player-height="300">
    </youtube>
  </panel>
</template>

<script>
import Panel from '@/components/Panel' // use vue component

export default {
  props: [
    'youtubeId'
  ],
  components: {
    Panel
  }
}
</script>

<style scoped>
</style>
