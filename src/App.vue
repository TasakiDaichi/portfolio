<template>
  <v-app>
    <div>
      <!-- ローディング画面 -->
      <transition name="fade-out">
        <div v-if="loading" class="loading-screen">
          <!-- 波紋背景 -->
          <div class="ripple-background">
            <div class="circle xxlarge shade1"></div>
            <div class="circle xlarge shade2"></div>
            <div class="circle large shade3"></div>
            <div class="circle medium shade4"></div>
            <div class="circle small shade5"></div>
          </div>

          <!-- プログレスバー -->
          <div class="progress-wrapper">
            <div class="loading-bar" :style="{ width: progress + '%' }"></div>
            <div class="loading-text">{{ progress }}%</div>
          </div>
        </div>
      </transition>

      <!-- 本体表示 -->
      <transition name="fade">
        <div v-if="!loading">
          <MainContents />
        </div>
      </transition>
    </div>
  </v-app>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import MainContents from './components/MainContents.vue'

const loading = ref(true)
const progress = ref(0)

onMounted(() => {
  const interval = setInterval(() => {
    if (progress.value >= 100) {
      clearInterval(interval)
      setTimeout(() => {
        loading.value = false
      }, 600)
    } else {
      progress.value += 1
    }
  }, 30)
})
</script>

<style scoped>
/* 背景全体 */
.loading-screen {
  position: fixed;
  inset: 0;
  background: #121212; /* main.cssと合わせた背景色 */
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  flex-direction: column;
}

/* 波紋エフェクト */
.ripple-background {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle {
  border-radius: 50%;
  position: absolute;
  animation: ripple 3s infinite ease-in-out;
}

.xxlarge { width: 600px; height: 600px; }
.xlarge  { width: 400px; height: 400px; }
.large   { width: 300px; height: 300px; }
.medium  { width: 200px; height: 200px; }
.small   { width: 100px; height: 100px; }

/* アクセントカラーに合わせた波紋 */
.shade1 { background-color: rgba(66, 184, 131, 0.03); }
.shade2 { background-color: rgba(66, 184, 131, 0.04); }
.shade3 { background-color: rgba(66, 184, 131, 0.05); }
.shade4 { background-color: rgba(66, 184, 131, 0.06); }
.shade5 { background-color: rgba(66, 184, 131, 0.08); }

@keyframes ripple {
  0% {
    transform: scale(0.9);
    opacity: 1;
  }
  100% {
    transform: scale(1.8);
    opacity: 0;
  }
}

/* プログレスバー */
.progress-wrapper {
  position: relative;
  z-index: 1;
  width: 50%;
  text-align: center;
}

.loading-bar {
  height: 10px;
  background-color: #42b883; /* Vue Green */
  transition: width 0.2s ease;
  border-radius: 5px;
}

.loading-text {
  margin-top: 10px;
  font-size: 18px;
  color: #E0E0E0;
  font-family: 'Inter', monospace;
}

/* フェード遷移 */
.fade-enter-active,
.fade-leave-active,
.fade-out-leave-active {
  transition: opacity 0.8s ease;
}
.fade-enter-from,
.fade-leave-to,
.fade-out-leave-to {
  opacity: 0;
}
</style>