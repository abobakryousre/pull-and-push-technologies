<template>
  <WebSocketBroadcastToAll/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ShortPolling from './components/ShortPollingComponent.vue'
import LongPolling from './components/LongPollingComponent';
import WebSocketBroadcastToAll from './components/WebSocket';
export default {
  name: 'App',
  components: {
    HelloWorld,
    LongPolling,
    ShortPolling,
    WebSocketBroadcastToAll,

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
