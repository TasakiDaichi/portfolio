<template>
  <v-app>
    <!-- ナビゲーションバー -->
    <v-app-bar app>
      <v-toolbar-title>portfolio</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text href="#about">自己紹介</v-btn>
      <v-btn text href="#skills">スキル</v-btn>
      <v-btn text href="#projects">プロジェクト</v-btn>
      <v-btn text href="#contact">コンタクト</v-btn>
    </v-app-bar>

    <!-- メインコンテンツ -->
    <v-main>
      <v-container>
        <!-- トップセクション -->
        <section id="home" class="home">
          <div>
            <h1>Tasaki Daichi</h1>
            <p>駆け出しWEBエンジニア</p>
            <v-btn color="primary" href="#projects">プロジェクトを見る</v-btn>
          </div>
        </section>

        <!-- 自己紹介セクション -->
        <section id="about" class="about">
          <Profile />
        </section>

        <!-- スキルセクション -->
        <section id="skills" class="skills">
          <v-row>
            <v-col cols="12" md="6">
              <h2>スキル</h2>
              <v-list>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>python</v-list-item-title>
                    <v-list-item-subtitle>主に研究・バックエンド開発(AWS lambda)で使用しています。</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>JavaScript</v-list-item-title>
                    <v-list-item-subtitle>フロントエンド開発で使用しています。</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Vue.js</v-list-item-title>
                    <v-list-item-subtitle>コンポーネント指向でのフロント開発に取り組んでいます。</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>C#（現在使用なし）</v-list-item-title>
                    <v-list-item-subtitle>Unityでの個人ゲーム開発を行っていました。</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </section>

        <!-- プロジェクトセクション -->
        <section id="projects" class="projects">
          <v-row>
            <v-col cols="12">
              <h2>プロジェクト</h2>
              <v-row>
                <v-col cols="12" md="4" v-for="project in projects" :key="project.id">
                  <v-card>
                    <v-card-title>{{ project.name }}</v-card-title>
                    <v-card-subtitle>{{ project.description }}</v-card-subtitle>
                    <v-card-actions>
                      <v-btn color="primary" :href="project.link" target="_blank">プロジェクトを見る</v-btn>
                      <v-btn v-if="project.movieLink" color="primary" :href="project.movieLink" target="_blank">動画を見る</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </section>

        <!-- お問い合わせセクション -->
        <section id="contact" class="contact">
          <v-row>
            <v-col cols="12">
              <h2>コンタクト</h2>
              <p>
                ご興味がありましたら、以下の方法でご連絡ください。
              </p>
              <v-btn color="primary" href="mailto:d.tasaki1212@icloud.com">Emailで連絡</v-btn>
            </v-col>
          </v-row>
        </section>
      </v-container>
    </v-main>

    <WelcomeItem />

    <!-- フッター -->
    <v-footer app>
      <span>© 2025 TasakiDaichi</span>
    </v-footer>
  </v-app>
</template>

<script>
import {ref} from 'vue';

const projects = [
  { id: 1, name: '個人ゲーム開発（ホラー）', description: '初めてのUnityにてホラーゲームを開発しました。DarkDeceptionっぽいゲームです。', link: 'https://github.com/yourusername/portfolio', movieLink: '' },
  { id: 2, name: '個人ゲーム開発（アドベンチャー）', description: 'Ardinoを使用した、身体の動きを感知してアバターが動くゲームです。', link: 'https://github.com/yourusername/portfolio', movieLink: '' },
  { id: 3, name: 'ポートフォリオサイト', description: 'Vue.jsを使ったこのポートフォリオです。', link: 'https://github.com/yourusername/portfolio', movieLink: '' },
  { id: 4, name: 'BazzWordシミュレータ', description: 'pygameとFlaskを用いた流行語遷移を簡易的にシミュレーションできるシステムです。', link: 'https://github.com/yourusername/portfolio', movieLink: '' }
]
</script>

<style scoped>
.home {
  text-align: center;
  padding: 50px 0;
}

.about, .skills, .projects, .contact {
  padding: 50px 0;
}

footer {
  text-align: center;
  background-color: #f5f5f5;
  padding: 10px 0;
}
</style>
