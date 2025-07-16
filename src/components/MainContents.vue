<template>
  <v-main>
    <v-container>
      <!-- トップセクション -->
      <section id="home" class="home">
        <div class="hero-container">

          <div class="hero-left">
            <div class="motto-container" :class="{ 'animate-motto': isMounted }">
              <p class="motto">CODE</p>
              <p class="motto">OPTIMIZE</p>
              <p class="motto">EMPOWER</p>
            </div>
            <div class="identity-container">
              <p class="identity">TASAKI DAICHI / web engineer</p>
            </div>
          </div>

          <div class="hero-right">
            <p class="vertical-subtitle">ユーザーを起点に、<br>誰にでも使いやすいプロダクトを。</p>
          </div>
        </div>
      </section>

      <!-- 自己紹介セクション -->
      <section id="about" class="about">
        <Profile />
      </section>

      <!-- スキルセクション -->
      <section id="skills" class="skills">
        <Skills />
      </section>

      <!-- プロジェクトセクション -->
      <Project />

      <!-- お問い合わせセクション -->
      <section id="contact" class="contact">
        <v-row>
          <v-col cols="12">
            <h2>コンタクト</h2>
            <p>
              ご興味がありましたら、こちらのメールアドレスにご連絡ください
            </p>
            <p>Email: d.tasaki1212[at]icloud.com</p>
          </v-col>
        </v-row>
      </section>
    </v-container>
    <v-footer class="d-flex align-center justify-center ga-2 flex-wrap flex-grow-1 py-3" color="surface-light">
      <p>2025 DaichiTasaki</p>
      <v-btn density="compact" icon="mdi-github" href="https://github.com/TasakiDaichi"></v-btn>
    </v-footer>
  </v-main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Profile from './profile.vue';
import Skills from './skills.vue';
import Project from './project.vue'; // 新しくインポート

const isMounted = ref(false);
onMounted(() => {
  isMounted.value = true;
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
</style>

<style scoped>
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  background: #000000;
  color: #ffffff;
  overflow: hidden;
}

.hero-container {
  display: flex;
  justify-content: center;
  gap: 160px;
  width: 100%;
  max-width: 1200px;
  max-height: 400px;
}

.motto {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 8rem;
  font-weight: bold;
  line-height: 0.85;
  margin: 0;
  padding: 0;
  letter-spacing: 0.08em;
  -webkit-text-stroke: 0.5px #ffffff;
  opacity: 0;
}

.identity-container {
  margin-top: 1.5rem;
}

.identity {
  font-family: "Yu Gothic", "游ゴシック体", "YuGothic", "Helvetica Neue", sans-serif;
  font-size: 1.2rem;
  letter-spacing: 0.05em;
  font-weight: bold;
}

.vertical-subtitle {
  font-family: "Hiragino Kaku Gothic ProN", "Meiryo", sans-serif;
  writing-mode: vertical-rl;
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  color: #e0e0e0;
  font-weight: bold;
}

/* レスポンシブ対応 */
@media (max-width: 960px) {
  .motto {
    font-size: 5rem;
  }
  .identity {
    font-size: 1rem;
  }
  .vertical-subtitle {
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .home {
    padding: 1rem;
  }
  .hero-container {
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
  }

  .motto {
    font-size: 3.5rem;
    -webkit-text-stroke: 0.2px #ffffff;
  }

  .identity {
    font-size: 0.9rem;
  }

  .vertical-subtitle {
    font-size: 0.8rem;
    max-height: 300px;
  }
}

.about, .skills, .projects, .contact {
  padding: 20px 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-in-from-top {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate-motto .motto {
  animation: slide-in-from-top 0.5s ease-out forwards;
}

.animate-motto .motto:nth-child(1) {
  animation-delay: 0.2s;
}

.animate-motto .motto:nth-child(2) {
  animation-delay: 0.4s;
}

.animate-motto .motto:nth-child(3) {
  animation-delay: 0.6s;
}
</style>