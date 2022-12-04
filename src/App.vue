<template>
  <v-app>
    <v-container>
      <v-btn>
        click me
      </v-btn>
    </v-container>
  </v-app>
</template>

<script>
import VBtn from '@/components/VBtn'
import VApp from '@/components/VApp'
import VContainer from '@/components/VGrid'

export default {
  name: 'App',
  components: { VBtn, VApp, VContainer }
}
</script>
