<template>
    <div>
        <h2 class="text-h4 font-weight-bold mb-4">Profile</h2>
        <div class="buttons mb-6">
            <v-btn variant="outlined" color="primary" @click="profilehandler = 'profile'">
                <v-icon left>mdi-account</v-icon>
                経歴
            </v-btn>
            <v-btn variant="outlined" color="yellow" @click="profilehandler = 'research'">
                <v-icon left>mdi-flask</v-icon>
                研究
            </v-btn>
            <v-btn variant="outlined" color="green" @click="profilehandler = 'history'">
                <v-icon left>mdi-briefcase</v-icon>
                職歴
            </v-btn>
            <v-btn variant="outlined" color="red" @click="profilehandler = 'hobby'">
                <v-icon left>mdi-heart</v-icon>
                趣味
            </v-btn>
        </div>
        <div class="contents">
            <v-window v-model="profilehandler">
                <v-window-item value="profile">
                    <v-card>
                        <v-card-item>
                            <v-card-title>経歴</v-card-title>
                        </v-card-item>
                        <v-card-text>
                            <div class="profile-contents">
                                <div class="profile-content">
                                    <div class="years">
                                        <p>2021年3月</p>
                                        <p>愛知県立時習館高等学校　卒業</p>
                                    </div>
                                    <div class="content">
                                        <p>高校入学当初は320人中300番台でしたが、独自の学習計画と継続的な努力により、卒業時には30番台まで成績を伸ばしました。<br>
                                            この経験から、目標設定と計画実行の重要性を学びました。得意科目は物理です。
                                        </p>
                                    </div>
                                </div>
                                <div class="profile-content">
                                    <div class="years">
                                        <p>2021年4月</p>
                                        <p>筑波大学総合学域群第2類　入学</p>
                                    </div>
                                    <div class="content">
                                        <p>様々な学問分野に触れてから専門を定めたいと考え、2年次に専攻を選択できる総合学域群へ入学しました。<br>
                                            この制度を利用し、自身の興味と適性をじっくりと見極めました。
                                        </p>
                                    </div>
                                </div>
                                <div class="profile-content">
                                    <div class="years">
                                        <p>2021年3月</p>
                                        <p>筑波大学理工学群工学システム学類　移行</p>
                                    </div>
                                    <div class="content">
                                        <p>基礎知識を応用して形にする『モノづくり』の魅力に惹かれ、工学システム学類へ移行。この頃からプログラミングへの関心を深めました。<br>
                                            また、学内イベントでは実行委員として1000人規模の企画運営に貢献し、チームワークと調整能力を養いました。
                                        </p>
                                    </div>
                                </div>
                                <div class="profile-content">
                                    <div class="years">
                                        <p>現在</p>
                                        <p>筑波大学大学院知能機能システム学位プログラム　博士課程前期（修士）</p>
                                    </div>
                                    <div class="content">
                                        <p>学部で芽生えた認知工学への探求心から、大学院へ進学。<br>
                                            現在は、研究活動と長期インターンシップを通じて、論理的思考力と実践的な開発スキルの向上に日々励んでいます。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-window-item>
                <v-window-item value="research">
                    <v-card>
                        <v-card-item>
                            <v-card-title>研究内容</v-card-title>
                            <v-card-subtitle>統合情報理論(IIT)を用いた音声の構造的特徴の解明</v-card-subtitle>
                        </v-card-item>
                        <v-card-text>
                            <div class="research-contents">
                                <div class="research-content">
                                    <h3>４年生での研究</h3>
                                    <p>
                                        音声には、母音を特徴づけるフォルマント周波数など、様々な音響要素が存在します。これまでの研究は各要素の個別分析が主流でした。<br>
                                        私は、これらの要素がどのように相互作用し、複雑な音声情報を構成しているかという未解明な点に着目。<br>
                                        意識のメカニズム解明のために提案された統合情報理論(IIT)を応用し、音声要素間の相互作用を定量的に観測することで、人間らしい音声の構造を明らかにする研究に取り組みました。<br>
                                    </p>
                                </div>
                                <div class="research-content">
                                    <h3>現在の研究</h3>
                                    <p>
                                        学部時代の研究を発展させ、現在はAIによる合成音声を分析対象としています。<br>
                                        人間とAIの音声構造を比較分析することで、より自然で人間に受け入れられやすい合成音声の開発に貢献することを目指しています。<br>
                                        さらに、音声構造と人間の『受容度』との関連性についても探求しています。<br>
                                    </p>
                                </div>
                                <div class="research-history">
                                    <h3>研究実績</h3>
                                    <div class="years">
                                        <p>2024年12月</p>
                                        <p>SI2024 計測自動制御学会システムインテグレーション部門</p>
                                    </div>
                                    <div>
                                        <p>優秀講演表彰　受賞</p>
                                        <a href="https://sice-si.org/si2024/excellent_speaker.php">学会詳細はこちら</a>
                                    </div>
                                </div>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-window-item>
                <v-window-item value="history">
                    <v-card>
                        <v-card-item>
                            <v-card-title>エンジニア経験</v-card-title>
                            <v-card-subtitle>大学での講義や長期インターンシップへの参加により技術を磨いています。</v-card-subtitle>
                        </v-card-item>
                        <v-card-text>
                            <div class="history-contents">
                                <div class="history-content">
                                    <h3>大学での講義</h3>
                                    <p>
                                        C言語の講義を通じて、if文やfor文といったプログラミングの基本構造を体系的に学習しました。<br>
                                        また、ポインタやメモリの概念を学ぶことで、コンピュータがプログラムを動かす仕組みへの理解を深め、ハードウェアレベルの視点を養いました。<br>
                                    </p>
                                </div>
                                <div class="history-content">
                                    <h3>長期インターンシップ</h3>
                                    <div class="years">
                                        <p>2024年7月</p>
                                        <p>六興実業株式会社　WEBエンジニア</p>
                                    </div>
                                    <p>
                                        WEBエンジニアとして長期インターンシップに参加しています。Python(Flask)を用いたWebアプリ開発の研修後、実務として営業部門の業務効率化に着手。<br>
                                        ヒアリングを通じて課題を抽出し、顧客向け資料の自動作成・送付システムを設計から実装まで担当しました。<br>
                                        現在は、社内のタスクとプロダクトを一元管理する『案件管理システム』の開発を主導しています。<br>
                                    </p>
                                </div>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-window-item>
                <v-window-item value="hobby">
                    <v-card>
                        <v-card-item>
                            <v-card-title>趣味・強み</v-card-title>
                        </v-card-item>
                        <v-card-text>
                            <div class="history-contents">
                                <div class="history-content">
                                    <h3>趣味</h3>
                                    <p>
                                        インドア中心ですが、好奇心は旺盛です。<br>
                                        思考力のトレーニングにもなるPCゲームや将棋が好きです。<br>
                                        最近は健康のために筋力トレーニングを始め、3ヶ月継続中。<br>
                                        新しいことにも積極的に挑戦する姿勢を忘れないようにしています。<br>
                                    </p>
                                </div>
                                <div class="history-content">
                                    <h3>自身の強み</h3>
                                    <p>
                                        私の強みは、チームの潤滑油となれる『縁の下の力持ち』であることです。<br>
                                        常に周囲に気を配り、メンバーが意見を出しやすい雰囲気作りを心がけています。<br>
                                        また、課題解決のためのアイデアが出た際には、検証やテストを即座に実行に移すフットワークの軽さも持ち合わせており、チーム全体のパフォーマンス向上に貢献できます。<br>
                                    </p>
                                </div>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-window-item>
            </v-window>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';

const profilehandler = ref('profile')

</script>

<style scoped>
.buttons {
  display: flex;
  flex-wrap: wrap; /* for smaller screens */
  gap: 12px;
  margin-bottom: 24px;
}

.v-btn {
  background: rgba(255, 255, 255, 0.05) !important;
  backdrop-filter: blur(5px);
  border: 1px solid;
}

.years{
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 8px;
}

.years p{
    font-weight: bold;
}

.profile-content,
.research-content,
.history-content{
    margin-bottom: 16px;
}

.v-card-title {
    font-weight: bold;
}
</style>
