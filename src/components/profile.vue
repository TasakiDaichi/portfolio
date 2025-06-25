<template>
    <h2>Profile</h2>
    <div class="buttons">
        <v-btn color="primary" @click="handleProfile">
            <v-icon icon="mdi-account"></v-icon>
        </v-btn>
        <v-btn color="yellow" @click="handleResearch">
            <v-icon icon="mdi-chart-bar"></v-icon>
        </v-btn>
        <v-btn color="green" @click="handleHistory">
            <v-icon icon="mdi-history"></v-icon>
        </v-btn>
        <v-btn color="red" @click="handleHobby">
            <v-icon icon="mdi-teddy-bear"></v-icon>
        </v-btn>
    </div>
    <div class="contents">
        <div v-if="profilehandler === 'profile'" class="profile">
            <v-card>
                <v-card-item>
                    <v-card-title>自己紹介</v-card-title>
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
        </div>
        <div v-else-if="profilehandler === 'research'" class="research">
            <v-card>
                <v-card-item>
                    <v-card-title>研究内容</v-card-title>
                    <v-card-subtitle>筑波大学新里研究室に所属し、IITを用いた音声構造の解明に向けた研究を行っています。</v-card-subtitle>
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
        </div>
        <div v-else-if="profilehandler === 'history'" class="history">
            <v-card>
                <v-card-item>
                    <v-card-title>研究内容</v-card-title>
                    <v-card-subtitle>筑波大学新里研究室に所属し、IITを用いた音声構造の解明に向けた研究を行っています。</v-card-subtitle>
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
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';

const profilehandler = ref('profile')

const handleProfile = () =>{
  profilehandler.value = 'profile'
}
const handleResearch = () =>{
  profilehandler.value = 'research'
}
const handleHistory = () =>{
  profilehandler.value = 'history'
}
const handleHobby = () =>{
  profilehandler.value = 'hobby'
}
</script>

<style scoped>
.buttons{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 8px;
}
.years{
    display: flex;
    justify-content: start;
    font-weight: bolder;
    gap: 12px;
}
.profile-content,
.research-content{
    margin-bottom: 8px;
}
</style>