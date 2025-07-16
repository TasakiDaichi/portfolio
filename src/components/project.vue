<template>
  <section id="projects" class="projects">
    <v-row>
      <v-col cols="12">
        <h2>プロジェクト</h2>
        <v-row>
          <v-col cols="12" md="6" v-for="project in projects" :key="project.id">
            <v-card class="project-card" :ref="setProjectCardRef">
              <v-card-title>{{ project.name }}</v-card-title>
              <v-card-subtitle>{{ project.description }}</v-card-subtitle>
              <v-card-actions>
                <v-btn v-if="project.link" color="primary" :href="project.link" target="_blank">プロジェクトを見る</v-btn>
                <v-btn v-if="project.movieLink" color="primary" :href="project.movieLink"
                  target="_blank">動画を見る</v-btn>
                <p v-else-if="!project.movieLink && !project.link">現在制作中...</p>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </section>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue';

const projects = [
  {
    id: 1,
    name: '個人ゲーム開発（ホラー）',
    description: '初めてUnityで開発したDarkDeceptionっぽいゲームです。',
    link: 'https://github.com/TasakiDaichi/Unity-Horror',
    movieLink: ''
  },
  {
    id: 2,
    name: '個人ゲーム開発（アドベンチャー）',
    description: '実機を用いて身体の動きを感知してアバターが動くゲームです。',
    link: 'https://github.com/TasakiDaichi/Unity-Adventure',
    movieLink: ''
  },
  {
    id: 3,
    name: 'ポートフォリオサイト',
    description: 'Vue.jsを使ったこのポートフォリオです。',
    link: 'https://github.com/TasakiDaichi/portfolio',
    movieLink: ''
  },
  {
    id: 4,
    name: 'BazzWordシミュレータ',
    description: 'pygameとFlaskを用いた流行語遷移を簡易的にシミュレーションできるシステムです。',
    link: 'https://github.com/TasakiDaichi/bazzword_simulater',
    movieLink: ''
  },
  {
    id: 5,
    name: '自作インタプリタ言語lox',
    description: 'インタプリタ言語の根本を理解するために自作言語の開発に取り組んでいます。',
    link: '',
    movieLink: ''
  },
  {
    id:6,
    name:'1からRedisを制作プロジェクト',
    description: '主にキャッシュとして使用されるインメモリデータベース「Redis」を1から制作しています。',
    link: '',
    movieLink: ''
  }
];

const projectCardRefs = [];
const setProjectCardRef = (el) => {
  if (el) {
    projectCardRefs.push(el);
  }
};

let observer;

onMounted(() => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('is-visible');
        }, index * 150);
        observer.unobserve(entry.target);
      }
    });
  }, options);

  projectCardRefs.forEach(card => {
      if (card && card.$el) {
          observer.observe(card.$el);
      }
  });
});

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style scoped>
.projects {
  padding: 20px 0;
}

.project-card {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.project-card.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
