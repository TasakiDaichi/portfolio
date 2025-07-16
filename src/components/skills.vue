<template>
  <div>
    <h2>スキル</h2>
    <v-container fluid>
      <v-row>
        <v-col
          v-for="(skill, i) in skills"
          :key="i"
          cols="12"
          sm="6"
          md="6"
        >
          <v-card class="skill-card" :ref="setSkillCardRef">
            <v-card-title>
              <v-icon left :color="skill.color">{{ skill.icon }}</v-icon>
              {{ skill.name }}
            </v-card-title>
            <v-card-text>
              <p>{{ skill.description }}</p>
              <div class="skill-bar">
                <p>level</p>
                <v-progress-linear
                :model-value="skill.progress"
                :color="skill.color"
                height="10"
                rounded
                class="my-2 progress-bar-transition">
                </v-progress-linear>
                <p>Lv.{{skill.targetProgress}}</p>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

// スキルデータをリアクティブな配列として定義
const skills = ref([
  {
    name: 'Python',
    icon: 'mdi-language-python',
    color: 'yellow',
    description: '主に研究・バックエンド開発(AWS Lambda)で使用しています。',
    progress: 0,
    targetProgress: 80,
  },
  {
    name: 'JavaScript',
    icon: 'mdi-language-javascript',
    color: 'orange',
    description: 'フロントエンド開発で使用しています。',
    progress: 0,
    targetProgress: 60,
  },
  {
    name: 'Vue.js',
    icon: 'mdi-vuejs',
    color: 'green',
    description: 'コンポーネント指向でのフロント開発に取り組んでいます。',
    progress: 0,
    targetProgress: 60,
  },
  {
    name: 'C#（現在使用なし）',
    icon: 'mdi-language-csharp',
    color: 'purple',
    description: 'Unityでの個人ゲーム開発を行っていました。',
    progress: 0,
    targetProgress: 40,
  },
  {
    name: 'AWS',
    icon: 'mdi-aws',
    color: 'blue',
    description: 'Cloudfront+S3を用いた静的サイト配信とAPIGateWay, Lambdaを用いたサーバレスバックエンドを持つ、モダンなウェブアプリケーションを構成しています。',
    progress: 0,
    targetProgress: 40
  }
]);

const skillCardRefs = [];
const setSkillCardRef = (el) => {
  if (el) {
    skillCardRefs.push(el);
  }
};

// Intersection Observerのインスタンス
let observer;

onMounted(() => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2, // カードが20%見えたら発火
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const cardElement = entry.target;
        // is-visibleクラスを追加してフェードインさせる
        cardElement.classList.add('is-visible');

        // 対応するスキルデータを見つけてプログレスを更新
        const targetSkill = skills.value.find(
          (s) => s.name === cardElement.querySelector('.v-card-title').textContent.trim()
        );
        
        if (targetSkill) {
          // CSSトランジションでアニメーションさせるために目標値を設定
          setTimeout(() => {
            targetSkill.progress = targetSkill.targetProgress;
          }, 500); // フェードインアニメーション後に開始
        }
        
        // 一度表示されたら監視を解除
        observer.unobserve(cardElement);
      }
    });
  }, options);

  // 各カードを監視対象に追加
  skillCardRefs.forEach(card => {
    // VuetifyコンポーネントのDOM要素は .$el
    observer.observe(card.$el);
  });
});

onBeforeUnmount(() => {
  // コンポーネントが破棄される前にObserverをクリーンアップ
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style scoped>
.skill-card {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

.skill-card.is-visible {
  opacity: 1;
  transform: translateY(0);
}
.skill-bar{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
}
/* v-progress-linearのバーのアニメーション */
.progress-bar-transition :deep(.v-progress-linear__determinate) {
  transition: width 1.5s ease-out !important;
}
</style>
