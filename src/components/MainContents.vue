<template>
  <v-main>
    <v-container>
      <!-- トップセクション -->
      <section id="home" class="home">
        <div class="hero-overlay">
          <h1 class="hero-title">Tasaki Daichi</h1>
          <v-btn color="primary" href="#projects">プロジェクトを見る</v-btn>
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
import Profile from './profile.vue';
import Skills from './skills.vue';
import Project from './project.vue'; // 新しくインポート

</script>

<style scoped>
.home {
  position: relative;
  overflow: hidden;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(/public/SEx4f0f8Y4YtFwY1750899318_1750899380.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #f5f5f5;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.hero-overlay {
  margin-bottom: 12px;
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
</style>
