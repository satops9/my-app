import React, { useState } from "react";
import "./us.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const App: React.FC = () => {
  return (
    <div>
    <div className="main">
      <h3>！使用する場合は必ず『概要』をお読みください。！</h3>

      <h3>　1：satop(Z/Generator)でできること</h3>
      <div className="overview">
        小説投稿サイト『ハーメルン』の特殊タグを、コーディングなしに実装できます。
        <br />例えば、
        <ul style={{listStyle: `none`}}>
          <li className="lib">匿名のメッセージを送受信できる『マシュマロ』風のデザイン</li>
          <li className="lib">定番のSNS『Twitter』風のデザイン</li>
          <li className="lib">大百科風のデザイン</li>
        </ul>
        小説の表現として使いたいけど、どうやって作成すれば良いかわからない、または毎回コピペするのが面倒、と言う方におすすめです。
        <br />特殊タグの構築に時間を取られること無く、本文の執筆に集中できます。
      </div>

      <h3>　2：satop(Z/Generator)の使い方</h3>
      <div className="overview">
      <p>satopには、主に2つの機能があります。</p>
      <img src="./img/menu.png" alt="menu_image" className="imgbar" />
      <p>マシュマロなどのパーツを生成/プレビューできる「<b>/Tags</b>」と、掲示板形式を生成/プレビューできる「<b>/BBS</b>」です。</p>
        <h4>　2-1：/Tagsの使い方</h4>
        <div className="overview">
        「/Tags」では、特殊タグ(パーツ)を生成することができます。
        <br />「/Tags」画面は、下部に「Input TEXT」エリア、上部に「View」「H-Code」のOutputエリアの2つがあります。
        <h4>Input TEXT エリア</h4>
        <Tabs>
          <TabList style={{listStyle: `none`}}>
            <Tab className={`tab`}>非表示</Tab>
            <Tab className={`tab`}>表示</Tab>
            </TabList>
          <TabPanel>
            <p style={{color:`gray`}}>※イメージ画像は非表示です※</p>
          </TabPanel>
          <TabPanel>
          <div className="center">
          <div className="footerH">
            <img src="./img/TagsInput.png" alt="input_image" className="imgbarT" />
            <img src="./img/TagsMenu.png" alt="Menu_image" className="imgbarT" />
          </div>
        </div>
          </TabPanel>
        </Tabs>
        <br />
        直接入力できるテキストボックスと、特殊タグをワンクリックで生成する「特殊タグ」ボタンが設置されています。
        <br />「特殊タグ」ボタンから使用したい特殊タグを選択すると、テキストボックスに簡易版の特殊タグが挿入されます。
        <br />あとは、テキストボックスに入力したい内容を入れるだけです。
        <br />こちらの特殊タグはご要望に応じて追加・修正・変更等を行っています。
        <br />ご要望がございましたら、Twitterまたは下記アドレスにメールをお送りください。
        <p>メールアドレス：support@zatops.com</p>
        <h4>Output エリア</h4>
        <Tabs>
          <TabList style={{listStyle: `none`}}>
            <Tab className={`tab`}>非表示</Tab>
            <Tab className={`tab`}>表示</Tab>
            </TabList>
          <TabPanel>
            <p style={{color:`gray`}}>※イメージ画像は非表示です※</p>
          </TabPanel>
          <TabPanel>
          <div className="center">
          <div className="footerH">
            <img src="./img/TagsOutput.png" alt="output_image" className="imgbar" />
            <img src="./img/TagsCode.png" alt="code_image" className="imgbar"/>
          </div>
        </div>
          </TabPanel>
        </Tabs>
        <br />
        「View」エリアでは、テキストボックスに入力した内容をプレビューできます。
        <br />このプレビューでは、特殊タグをHTML/CSSで再現しており、ハーメルン内でのプレビューと若干異なる場合がございますので、ご注意ください。
        <br />「H-Code」エリアでは、テキストボックスに入力した内容を特殊タグに変換したものを表示しています。
        <br />この「H-Code」エリアの内容を、ハーメルンの本文にコピペすることで、特殊タグを使用することができます。
        <br />動作確認は日々行っていますが、特殊タグの仕様変更等により、正常に動作しない場合がございます。
        <br />その際は、ご連絡頂けると当サイトでもスムーズに対応できますので、ご協力をお願い致します。
        </div>
        <h4>　2-2：/BBSの使い方</h4>
        <div className="overview">
        <Tabs>
          <TabList style={{listStyle: `none`}}>
            <Tab className={`tab`}>非表示</Tab>
            <Tab className={`tab`}>表示</Tab>
            </TabList>
          <TabPanel>
            <p style={{color:`gray`}}>※イメージ画像は非表示です※</p>
          </TabPanel>
          <TabPanel>
          <div className="center">
          <div className="footerH">
            <img src="./img/BbsChat.png" alt="2ch_image" className="imgbarH" />
            <img src="./img/BbsLine.png" alt="LINE_image" className="imgbarH" />
            <img src="./img/BbsAniman.png" alt="LINE_image" className="imgbarH" />
          </div>
        </div>
          </TabPanel>
        </Tabs>
        「/BBS」では、特殊タグ「掲示板形式」を作成することができます。
        <br />現在、通常の掲示板モード、「LINE」風モード、「あにまん掲示板」風モードを実装しています。
        <br />各モードで使用できるボタンはいくつか異なりますが、ベースとなる「掲示板」モードを解説します。
        <br />
        <br />「/BBS」画面は、下部に「Input TEXT」エリア、上部に「View」「H-Code」のOutputエリアの2つがあります。
        <h4>Input TEXT エリア</h4>
        直接入力できるテキストボックスと、各種設定ボタンや項目があります。
        <br />「設定」ボタンから、掲示板全体の設定を行うことができます。
        <br />「コピー」ボタンから、掲示板の内容(タグ含む)をコピーすることができます。
        <br />「リセット」ボタンから、掲示板の内容をリセットすることができます。
        <br />設置されているレス番号、名前、IDを設定するためのテキスト/選択ボックスは、「投稿」が行われる度に自動更新される仕組みです。
        <br />何れも手動での変更も可能ですので、レス番号が飛ぶ演出を行う場合や、コテハン(固定ハンドル)の設定を行う場合等にご利用ください。
        <h4>Output エリア</h4>
        「View」エリアでは、テキストボックスに入力した内容をプレビューできます。
        <br />このプレビューでは、特殊タグをHTML/CSSで再現しており、ハーメルン内でのプレビューと若干異なる場合がございますので、ご注意ください。
        <br />「H-Code」エリアでは、テキストボックスに入力した内容を特殊タグに変換したものを表示しています。
        <br />この「H-Code」エリアの内容を、ハーメルンの本文にコピペすることで、特殊タグを使用することができます。
        <br />動作確認は日々行っていますが、特殊タグの仕様変更等により、正常に動作しない場合がございます。
        <br />その際は、ご連絡頂けると当サイトでもスムーズに対応できますので、ご協力をお願い致します。
        </div>
        <h4>　2-3：保存方法について</h4>
        <div className="overview">
        「/Tags」で作成した特殊タグは、Cookieに保存されます。
        <br />「/BBS」もCookie保存されますが、こまめなローカル保存を推奨しています。
        <br />また、Cookieを削除すると、作成した特殊タグも削除されます。
        <br />特殊タグを作成した後は、必ず「コピー」ボタンからコピーを行い、テキストファイル等に保存してください。
        <br />その他、ローカル保存も可能です。
        <br />現時点でローカル保存に対応しているのは、「/BBS」の「LINE」「あにまん掲示板」モードのみとなります。
        </div>
      </div>
    </div>
    </div>
  );
};

export default App;