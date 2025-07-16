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
                                        <p>高校入学時は320人中300番という成績でしたが、学習計画を立てることで卒業時には30番台の成績となりました。<br>
                                            得意科目は物理。
                                        </p>
                                    </div>
                                </div>
                                <div class="profile-content">
                                    <div class="years">
                                        <p>2021年4月</p>
                                        <p>筑波大学総合学域群第2類　入学</p>
                                    </div>
                                    <div class="content">
                                        <p>大学の講義を実際に体験してから、自身の専攻を決めたいという思いから、入学後に学部を決められる総合学域群に入学しました。
                                        </p>
                                    </div>
                                </div>
                                <div class="profile-content">
                                    <div class="years">
                                        <p>2021年3月</p>
                                        <p>筑波大学理工学群工学システム学類　移行</p>
                                    </div>
                                    <div class="content">
                                        <p>モノづくりの楽しさと基礎知識の応用を体感できる「工学」の道に入りました。<br>
                                            この時点から、少しずつプログラミングに対して興味を持ち始めました。
                                            また大学組織の委員会に所属し、計1000人強が参加する大学イベントの実行委員を務めました。
                                        </p>
                                    </div>
                                </div>
                                <div class="profile-content">
                                    <div class="years">
                                        <p>現在</p>
                                        <p>筑波大学大学院知能機能システム学位プログラム　博士課程前期（修士）</p>
                                    </div>
                                    <div class="content">
                                        <p>工学分野（特に認知工学）に対して興味を持ち、大学院に進学することを決めました。<br>
                                            今は研究と長期インターンの二足の草鞋を履いています。
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
                            <v-card-subtitle>IITを用いた音声構造の解明に向けた研究を行っています</v-card-subtitle>
                        </v-card-item>
                        <v-card-text>
                            <div class="research-contents">
                                <div class="research-content">
                                    <h3>４年生での研究</h3>
                                    <p>
                                        音声要素（フォルマント周波数やPitch, Intensity）は個別の特徴が主に研究されています。<br>
                                        例えば、フォルマント周波数F1, F2を見れば母音を特定できる力を持っています。<br>
                                        しかしながら、これら要素の相互作用についてはまだ解明されていない点が多くあります。<br>
                                        そこで統合情報理論（IIT）を用いて内部の相互作用を観測することで、人間特有の音声構造を明らかにしています。
                                    </p>
                                </div>
                                <div class="research-content">
                                    <h3>現在の研究</h3>
                                    <p>
                                        4年生での研究から、音声構造を相互作用という観点から構造化し、その特徴を捉えることができました。<br>
                                        そこで私は、近年AIの進化によって急成長を遂げている合成音声に着目し、人間の音声構造との比較を行っています。<br>
                                        また、ヒトの合成音声に対する受容度と相互作用の構造の関係性についても調べています。
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
                                        C言語によるプログラミング基礎の講義を通じて、プログラミング言語に共通するif文やfor文といった内容を学習しました。<br>
                                        また、ポインタやメモリの概念を学ぶことでPCの構成についての造形を深めました。
                                    </p>
                                </div>
                                <div class="history-content">
                                    <h3>長期インターンシップ</h3>
                                    <div class="years">
                                        <p>2024年7月</p>
                                        <p>六興実業株式会社　WEBエンジニア</p>
                                    </div>
                                    <p>
                                        研修期間中にはpython(Flask)を用いた簡易的なwebアプリケーションを作成。<br>
                                        その後営業の方から業務改善したい部分をヒアリングし、顧客へ渡すレジュメの自動作成～送付機能を持つシステムの開発を担当。<br>
                                        現在は会社内の顧客ごとのタスクやプロダクトを管理する「案件管理システム」開発に着手しています。
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
                                        基本的にインドア派。
                                        PCゲームや将棋、読書・音楽鑑賞をしています。
                                        最近では流行に乗って筋トレを始めました。3ヶ月目です。
                                    </p>
                                </div>
                                <div class="history-content">
                                    <h3>自身の強み</h3>
                                    <p>
                                        チームを支える縁の下の力持ちとしてチーム内の細かな部分に気を配ることができます。
                                        チームでの活動が円滑に行えるように、意見を出しやすい環境にし、テスト等を即座に実行に移すフットワークの軽さも持ち合わせています。
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
  gap: 16px;
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
