<template>
  <div>
    <v-layout>
      <v-flex xs6>
        <song-metadata :song="song" />
      </v-flex>

      <v-flex xs6 class="ml-2">
        <you-tube :youtubeId="song.youtubeId" />
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex xs6 class="mt-2">
        <tab :song="song" />
      </v-flex>

      <v-flex xs6 class="ml-2 mt-2">
        <lyrics :song="song" />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Lyrics from './Lyrics'
import Tab from './Tab'
import SongMetadata from './SongMetadata'
import YouTube from './YouTube'
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel' // use vue component

export default {
  data () {
    return {
      song: {} // one object
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId // can track from vue devtool
    // console.log(songId)
    this.song = (await SongsService.show(songId)).data
    console.log(this.song)
  },
  components: {
    Panel,
    SongMetadata,
    YouTube,
    Lyrics,
    Tab
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
