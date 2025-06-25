<template>
  <v-container>
    <h4>アイコンの表示</h4>
    <v-row>
      <v-col>
        <p><v-icon icon="mdi-home" /> Home</p>
        <p><v-icon icon="mdi-account" /> Account</p>
      </v-col>
    </v-row>

    <h4>カウンターボタン</h4>
    <v-row>
      <v-col>
        <v-btn
          variant="outlined"
          @click="count++"
        >count : <v-icon icon="mdi-plus"/>{{ count }}</v-btn>
      </v-col>
    </v-row>    
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
const count = ref(0);
</script>