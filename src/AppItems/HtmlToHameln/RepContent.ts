type Content = {
    search: string; // 置換対象
    replace: string; // 置換結果
}
type Code_H = {
    id: string;
    index: number;
    label: string; // ラベル
    value: string; // コード
}

export const replacements: Content[] = [
    { 
        search: `<マシュマロ>`,
        replace: `
        <div class="tag_box bgcolor" style="box-sizing:border-box;white-space:normal;width:100%;max-width:100%;padding:0.5em;border:1px solid #fe8196;background-color:#fe8196;color:#202020;overflow:auto;">
        <p></p>
        <p id="1"></p>
        <div class="tag_box bgcolor" style="box-sizing:border-box;white-space:normal;width:100%;max-width:100%;padding:0.2em;background-color:#ffffff;color:#202020;overflow:auto;">
        <p></p><p id="2">　</p><p id="3"></p>
        <div style="text-align: center">
        `
    },
    { 
        search: `</マシュマロ>`,
        replace: `
        </div>
        <p></p>
        <p id="6">　</p><p id="7"></p>
        </div>
        <p></p>
        <p id="8"></p>
        </div>
        `
    },
    { 
        search: `<ツイッター>`,
        replace: `<div class="tag_box bgcolor" style="box-sizing:border-box;white-space:normal;width:100%;max-width:100%;background-color:#ffffff;color:#202020;border:2px solid #1e90ff;padding:0.5em;overflow:auto;">
        <p></p>
        <p id="148"></p>
        <p></p>
        <p id="149"></p>
        <table style="border-color:#ffffff" class="tag_table bordercolor">
            <tbody>
                <tr>
                    <td style="border-color:#ffffff" class="bordercolor">
                        <div class="tag_box bgcolor" style="box-sizing:border-box;white-space:normal;width:10%;max-width:100%;background-color:#1e90ff;color:#202020;padding:1.8em;overflow:auto;">
                        </div>
                    </td>`
    },
    { 
        search: `</ツイッター>`,
        replace: `<p id="152"></p>
        <p></p>
        <p id="153"></p>
        <table style="border-color:#ffffff" class="tag_table bordercolor">
            <tbody>
                <tr>
                    <td style="border-color:#ffffff" class="bordercolor">　　　　</td>
                    <td style="border-color:#ffffff" class="bordercolor">　　　　　</td>
                    <td style="border-color:#ffffff" class="bordercolor">　　　　　</td>
                    <td style="border-color:#ffffff" class="bordercolor">　　　　</td>
                </tr>
                <tr>
                    <td style="border-color:#ffffff" class="bordercolor">
                        <span style="font-family:f-u58" class="webfont_subset">💬</span>
                    </td>
                    <td style="border-color:#ffffff" class="bordercolor">
                        <span style="font-family:f-u58" class="webfont_subset">
                            <img src="./img/RT.png" alt="RT" height="auto" />
                        </span>
                    </td>
                    <td style="border-color:#ffffff" class="bordercolor">
                        <span style="font-family:f-u58" class="webfont_subset">♡</span>
                    </td>
                    <td style="border-color:#ffffff" class="bordercolor">
                        <span style="font-family:f-u58" class="webfont_subset">
                            <img src="./img/share.png" alt="Share" height="auto" />
                        </span>
                    </td>
                    <td style="border-color:#ffffff" class="bordercolor">
                        <span style="font-family:f-u58" class="webfont_subset">
                            <img src="./img/bkm.png" alt="BKM" height="auto" />
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
        <p></p>
        <p id="154"></p>
    </div>`
    },
    { 
        search: `<ユーザー名>`,
        replace: `<td style="border-color:#ffffff" class="bordercolor">
        <div class="left">`
    },
    { 
        search: `</ユーザー名>`,
        replace: `</div>`
    },
    { 
        search: `<アカウントID>`,
        replace: `<div class="left">
        <span style="color:#808080" class="color">`
    },
    { 
        search: `</アカウントID>`,
        replace: `</span>
        </div>
    </td>
</tr>
</tbody>
</table>`
    },
    { 
        search: `<ツイート内容>`,
        replace: `<p></p>
        <p id="151">`
    },
    { 
        search: `</ツイート内容>`,
        replace: `</p>`
    },
    { 
        search: `<ニコニコ>`,
        replace: `<div class="tag_box tag_pc bgcolor" style="box-sizing:border-box;white-space:normal;width:100%;max-width:100%;padding:0.2em;display:inline-block;background-color:#ffffff;color:#202020;overflow:auto;">
        <div style="border-color:#AAAAAA" class="bordercolor">
            <div style="width: 100%; text-align: left; float:left;background-color:#373434;" class="bgcolor">
                <div style="text-align: left; float: left;">
                    <span class="color">
                        <ruby>
                            <span class="tag_text" style="color:#FFF;display:inline-block;font-size:2em;" data-option="s2">
                                <span style="font-family:f-372" class="webfont_subset">ニコ</span>
                            </span>
                            <rt>
                                <span style="color:#FFF;font-family:f-372" class="webfont_subset">NICO</span>
                            </rt>
                        </ruby>
                        <ruby>
                            <span class="tag_text" style="color:#FFF;display:inline-block;font-size:2em;" data-option="s2">
                                <span style="font-family:f-372" class="webfont_subset">ニコ</span>
                            </span>
                            <rt>
                                <span style="color:#FFF;font-family:f-372" class="webfont_subset">NICO</span>
                            </rt>
                        </ruby>
                        <ruby>
                            <span class="tag_text" style="display:inline-block;font-size:2em;" data-option="s2">
                                <span style="color:#FFF;font-family:f-372" class="webfont_subset">大百科</span>
                            </span>
                            <rt>
                                <span style="color:#FFF;font-family:f-372" class="webfont_subset">PEDIA</span>
                            </rt>
                        </ruby>
                    </span>
                    <span class="tag_text" style="display:inline-block;font-size:1.5em;" data-option="s1.5">
                        <span style="font-family:f-372" class="webfont_subset">
                            <span style="color:white" class="color">(</span>
                            <span style="color:orange" class="color">仮</span>
                            <span style="color:white" class="color">)</span>
                        </span>
                    </span>
                </div>
                <div style="text-align: right; float: right;">
                    <table style="border-color:#FFA500" class="tag_table bordercolor">
                        <tbody>
                            <tr>
                                <td style="border-color:#FFA500;background-color:#ffffff;" class="bordercolor bgcolor">
                                    <span style="color:black" class="color">
                                        <span style="font-family:f-372" class="webfont_subset">　　　</span>
                                    </span>　　　　　　</td>
                                    <td style="border-color:#FFA500;background-color:#FFA500;text-align:center;" class="bordercolor bgcolor">
                                        <span class="bold">
                                            <span style="color:white" class="color">
                                                <span>🔎</span>
                                            </span>
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>`
    },
    { 
        search: `<ニコタイトル>`,
        replace: `<div style="box-sizing:border-box;white-space:normal;width:100%;max-width:100%;padding:0.2em;display:inline-block;background-color:#ffffff;color:#020202;overflow:auto;">
        <div style="box-sizing:border-box;white-space:normal;position:relative;overflow:hidden !important;width:100%;max-width:100%;height:4em;max-height:100%;line-height:1.6em;overflow:hidden;">
            <div style="box-sizing:border-box;white-space:normal;position:absolute;left:0em;top:0em;width:100%;max-width:100%;line-height:2em;overflow:hidden;">
                <p></p>
                    <span style="display:inline-block;font-size:1.5em;">
                        <span class="color">`
    },
    { 
        search: `</ニコタイトル>`,
        replace: `</span>
        <span style="margin: 0 10px; background-color: #808080;color:white; font-size: 0.6em;"><span style="filter:opacity(0.0)" data-num="0">_</span>単語<span style="filter:opacity(0.0)" data-num="0">_</span></span></span>
        </span>
</div>`
    },
    { 
        search: `<ニコフリガナ>`,
        replace: `<div  style="box-sizing:border-box;white-space:normal;position:absolute;left:0.5em;top:1.9em;width:100%;max-width:100%;line-height:1.3em;overflow:hidden;">
        <p></p>
            <span style="margin-top:10px; color:#808080" class="color">`
    },
    { 
        search: `</ニコフリガナ>`,
        replace: `</span>
        </p>
    </div>
</div>
<div style="text-align: right; float: right;">
<table>
    <tbody>
        <tr>
            <td style="border-color:#ffffff" class="bordercolor">
                <span style="color:orange" class="color">
                    <span style="font-family:f-u58" class="webfont_subset">👍</span>
                    <span class="tag_text" style="display:inline-block;font-size:0.8em;" data-option="s0.8">
                        <span class="small">88</span>
                    </span>
                </span>
            </td>
        </tr>
    </tbody>
</table>
</div>

<div style="text-align: right; float: right;">
<table style="border-color:#ffffff" class="tag_table bordercolor">
    <tbody>
        <tr>
            <td style="border-color:#ffffff" class="bordercolor">
                <span style="color:orange" class="color">
                    <span style="font-family:f-u58" class="webfont_subset">🎉</span>
                    <span class="tag_text" style="display:inline-block;font-size:0.8em;" data-option="s0.8">
                        <span class="small">114514</span>
                    </span>
                </span>
            </td>
        </tr>
    </tbody>
</table>
</div>
<p>　</p>
<div style="text-align: left; float: left;">
<table class="tag_table bordercolor">
    <tbody>
        <tr>
            <td style="padding: 5px; border: solid 1px #FFA500" class="bordercolor">
                <span style="color:orange" class="color">
                    <span style="font-family:f-u58" class="webfont_subset">👍</span> 
                    <span class="tag_text" style="display:inline-block;font-size:0.8em;" data-option="s0.8">
                        <span class="bold">いいね！</span>
                    </span>
                </span>
            </td>
            <td style="padding: 5px; border: solid 1px #FFA500" class="bordercolor">
                <span style="color:orange" class="color">
                    <span style="font-family:f-u58" class="webfont_subset">🎉</span>
                    <span class="tag_text" style="display:inline-block;font-size:0.8em;" data-option="s0.8">
                        <span class="bold">にこにこ優しく応援</span>
                    </span>
                </span>
            </td>
        </tr>
        
    </tbody>
</table> 
</div>
<div style="text-align: right; float: right;">
<table style="border-color:#AAAAAA" class="tag_table bordercolor">
    <tbody><tr><td style="border-color:#AAAAAA" class="bordercolor">
        <span style="color:#AAAAAA" class="color">
            <img src="./img/bkm.png" alt="bkm" height="auto" />
            <span class="bold">記事編集</span>
        </span>
    </td>
</tr>
</tbody>
</table>
</div>
`
    },
    { 
        search: `<ニコ項目目次ヘッタ>`,
        replace: `<div class="tag_box" style="box-sizing:border-box;white-space:normal;width:100%;max-width:100%;padding:0.2em;border:1px solid #AAAAAA;overflow:auto;">
        <span class="tag_text" style="display:inline-block;font-size:0.7em;" data-option="s0.7">
            <span style="color:blue" class="color">&gt;
`
    },
    { 
        search: `</ニコ項目目次フッタ>`,
        replace: `</span>
        </span>
    </div>
    </div>`
    },
    { 
        search: `<ニコ項目目次>`,
        replace: `<u>`
    },
    { 
        search: `</ニコ項目目次>`,
        replace: `</u> &gt;`
    },
    { 
        search: `<ニコ項目名>`,
        replace: `<span style="color:green">■</span>
        <span style="display:inline-block;font-size:1.2em;" data-option="s1.2">`
    },
    { 
        search: `</ニコ項目名>`,
        replace: `</span>`
    },
    { 
        search: `<ニコ項目内容>`,
        replace: `<div 
        style="box-sizing:border-box;
        white-space:normal;width:100%;max-width:100%;padding:0.5em; border-top: solid 1px #808080; overflow:auto;">`
    },
    { 
        search: `</ニコ項目内容>`,
        replace: `<div><br><br>`
    },
    { 
        search: `<標準動画>`,
        replace: `<div style="text-align: center;">
        <div style="display:inline-block;box-sizing:border-box;
        white-space:normal;width:80%;max-width:100%;height: 20em;
        padding:0.5em;
        background-color: #383636; border: solid 2px #383636; overflow:auto;">
        <div style="display:table;width: 100%; height: 18em;">
            <div style="text-align: center; display: table-cell; vertical-align: middle">
                <div style="font-size: 2.5em; display: inline-block; color:white; height: 0.1em;">`
    },
    { 
        search: `</標準動画>`,
        replace: `</div>
        </div>
    </div>
    </div>
    <div style="display:inline-block;text-align: left; box-sizing:border-box;
                white-space:normal;width:80%;max-width:100%;height: 2.8em;
                padding:0.5em;
                background-color: white; border: solid 2px #383636; overflow:auto;">
        <div style="text-align: left; float: left;">
            <span style="font-family:f-u58" class="webfont_subset">▶</span>
            <span style="font-family:f-u58" class="webfont_subset">＝</span>
            <span style="font-family:f-u58" class="webfont_subset">こ
            </span>
        </div>
        <div style="text-align: right; float: right;">
            <span style="font-family:f-u58" class="webfont_subset">だ</span>
        </div>
    </div>
</div>`
    },
    { 
        search: `<ボックス>`,
        replace: `<div style="display:inline-block;box-sizing:border-box;
        white-space:normal;width:100%;max-width:100%;
        padding:0.5em;
        background-color: white; border: solid 2px orange; overflow:auto;">`
    },
    { 
        search: `</ボックス>`,
        replace: `</div>`
    },
    { 
        search: `<太字>`,
        replace: `<b>`
    },
    { 
        search: `</太字>`,
        replace: `</b>`
    },
    { 
        search: `<URL風>`,
        replace: `<u style="color:blue;">`
    },
    { 
        search: `</URL風>`,
        replace: `</u>`
    },
    { 
        search: `<文字:`,
        replace: `<span style="`
    },
    { 
        search: `:>`,
        replace: `">`
    },
    { 
        search: `</文字>`,
        replace: `</span>`
    },
    { 
        search: `{大きさ:`,
        replace: `font-size:`
    },
    { 
        search: `:}`,
        replace: `;`
    },
    { 
        search: `{色:`,
        replace: `color:#`
    },
    { 
        search: ``,
        replace: ``
    },
    { 
        search: `<>`,
        replace: ``
    },
    { 
        search: `<>`,
        replace: ``
    },
];

export const H_replacements: Content[] = [
    {
        search: `<マシュマロ>`,
        replace: `《box:w100%,p0.5,bo#fe8196,bg#fe8196》
《box:w100%,p0.2,bg#ffffff》

《center》`
    },
    { 
        search: `</マシュマロ>`,
        replace: `《/center》

《/box》
《/box》
        `
    },
    { 
        search: `<ツイッター>`,
        replace: `《box:w100%,bg#ffffff,bo#1e90ff,p0.5》
《table:#ffffff》
[[《box:w10%,bg#1e90ff,p1.5》《/box》`
    },
    { 
        search: `</ツイッター>`,
        replace: `《table:#ffffff》
[[　　　　[　　　　　[　　　　　[　　　　[[《font:u58》こ《/font》[《font:u58》り《/font》[♡[《font:u58》ふ《/font》[《font:u58》め《/font》《/table》
《/box》`
    },
    { 
        search: `<ユーザー名>`,
        replace: `[《left》`
    },
    { 
        search: `</ユーザー名>`,
        replace: `《/left》`
    },
    { 
        search: `<アカウントID>`,
        replace: `《left》《color:#808080》`
    },
    { 
        search: `</アカウントID>`,
        replace: `《/color》《/left》《/table》`
    },
    { 
        search: `<ツイート内容>`,
        replace: ``
    },
    { 
        search: `</ツイート内容>`,
        replace: ``
    },
    { 
        search: `<br></br>`,
        replace: ` `
    },
    { 
        search: `<ニコニコ>`,
        replace: `《box:w100%,p0.2,inline》
        《boxbordercolor:#AAAAAA》
        《boxbgcolor:#373434》《left》《white》《Ruby》《text:s1.8》ニコ《/text》《rt》NICO《/rt》《/Ruby》《Ruby》《text:s1.8》ニコ《/text》《rt》NICO《/rt》《/Ruby》《Ruby》《text:s1.8》大百科《/text》《rt》PEDIA《/rt》《/Ruby》《/white》《text:s1.5》《white》(《/white》《orange》仮《/orange》《white》)《/white》《/text》《/left》《right》《table:#FFA500》[[<#ffffff.《black》ニコニコ大百科《/black》　　　　　　[=#FFA500.《b》《white》《font:u58》け《/font》《/white》《/b》
        《/table》《/right》
        《/boxbgcolor》
        《/boxbordercolor》
        《/box》`
    },
    { 
        search: `<ニコタイトル>`,
        replace: `《box:w100%,p0.2,inline》
        《left》《text:s1.5》`
    },
    { 
        search: `</ニコタイトル>`,
        replace: `《/text》　《bgcolor:#AAAAAA》《opacity:0》_《/opacity》《white》単語《/white》《opacity:0》_《/opacity》《/bgcolor》《/left》《right》《table:#ffffff》[[#ffffff.《orange》《font:u58》い《/font》《text:s0.8》《small》88《/small》《/text》《/orange》《/table》《/right》`
    },
    { 
        search: `<ニコフリガナ>`,
        replace: `《left》《text:s0.8》`
    },
    { 
        search: `</ニコフリガナ>`,
        replace: `《/text》《/left》《right》《table:#ffffff》[[#ffffff.《orange》《font:u58》お《/font》《text:s0.8》《small》114514《/small》《/text》《/orange》《/table》《/right》

        《left》《table:#FFA500》[[#ffffff.《orange》《font:u58》い《/font》 《text:s0.8》《b》いいね！《/b》《/text》《/orange》《/table》 《table:#FFA500》[[#ffffff.《orange》《font:u58》お《/font》 《text:s0.8》《b》ナニニ優しく応援《/b》《/text》《/orange》《/table》《/left》《right》《table:#AAAAAA》[[#ffffff.《color:#AAAAAA》《font:u58》す《/font》 《b》記事編集《/b》《/color》《/table》《/right》`
    },
    { 
        search: `<ニコ項目目次ヘッタ>`,
        replace: "《box:w100%,p0.2,bo#AAAAAA》 《text:s0.7》"
    },
    { 
        search: `</ニコ項目目次フッタ>`,
        replace: "《/text》《/box》《/box》"
    },
    { 
        search: `<ニコ項目目次>`,
        replace: "《blue》《u》"
    },
    { 
        search: `</ニコ項目目次>`,
        replace: "《/u》《/blue》 >"
    },
    { 
        search: `<ニコ項目名>`,
        replace: `
《green》■《/green》　《text:s1.2》`
    },
    { 
        search: `</ニコ項目名>`,
        replace: `《/text》
《hr》`
    },
    { 
        search: `<ニコ項目内容>`,
        replace: ``
    },
    { 
        search: `</ニコ項目内容>`,
        replace: ``
    },
    { 
        search: `<標準動画>`,
        replace: `《box:w100%,bg#696969,bo#000000》
        《box:w100%,p10,bg#696969》
        《center》《text:s1.8,#ffffff》`
    },
    { 
        search: `</標準動画>`,
        replace: `《/text》《/center》
        《/box》
        《/box》
        《box:w100#,bo#000000,bg#ffffff》
        《left》　《font:u58》さ《/font》 《font:u58》お《/font》 《font:u58》こ 《/font》《/left》《right》《font:u58》だ《/font》《/right》
        《/box》`
    },
    { 
        search: `<ボックス>`,
        replace: `《box:w100%,p0.2,inline,bo#FFA500》`
    },
    { 
        search: `</ボックス>`,
        replace: `《/box》`
    },
    { 
        search: `<太字>`,
        replace: `《b》`
    },
    { 
        search: `</太字>`,
        replace: `《/b》`
    },
    { 
        search: `<URL風>`,
        replace: `《blue》《u》`
    },
    { 
        search: `</URL風>`,
        replace: `《/u》《/blue》`
    },
    { 
        search: `<文字:`,
        replace: `《text:`
    },
    { 
        search: `:>`,
        replace: `》`
    },
    { 
        search: `</文字>`,
        replace: `《/text》`
    },
    { 
        search: `{大きさ:`,
        replace: `s`
    },
    { 
        search: `:}`,
        replace: `,`
    },
    { 
        search: `{色:`,
        replace: `#`
    },
    { 
        search: `</ニコニコ>`,
        replace: ``
    },
];

export const N_code: Code_H[] = [
    {
        id: "opt-01",
        index: 1,
        label: `セット`, // ラベル
        value: `<ニコニコ>
<ニコタイトル></ニコタイトル>
<ニコフリガナ></ニコフリガナ>
<ニコ項目目次ヘッタ><ニコ項目目次></ニコ項目目次></ニコ項目目次フッタ>
<ニコ項目名></ニコ項目名>
<ニコ項目内容></ニコ項目内容>
</ニコニコ>`, // コード
    },
    {
        id: "opt-02",
        index: 2,
        label: `項目名`, // ラベル
        value: `<ニコ項目名></ニコ項目名>`, // コード
    },
    {
        id: "opt-03",
        index: 3,
        label: `項目内容`, // ラベル
        value: `<ニコ項目内容></ニコ項目内容>`, // コード
    },
    {
        id: "opt-04",
        index: 4,
        label: `文字編集`, // ラベル
        value: `<文字:{色::}:></文字>`, // コード
    },
    {
        id: "opt-05",
        index: 5,
        label: `太字`, // ラベル
        value: `<太字></太字>`, // コード
    },
    {
        id: "opt-06",
        index: 6,
        label: `URL風`, // ラベル
        value: `<URL風></URL風>`, // コード
    },
    {
        id: "opt-07",
        index: 7,
        label:`ボックス`,
        value: `<ボックス></ボックス>`,
    },
    {
        id: "opt-08",
        index: 8,
        label:`標準動画`,
        value: `<標準動画></標準動画>`,
    },
    {
        id: "opt-09",
        index: 9,
        label:`大きさ`,
        value: `{大きさ::}`,
    }
]

export const H_code: Code_H[] = [
    {
        id: "opt-00",
        index: 0,
        label: `マシュマロ`, // ラベル
        value: `<マシュマロ></マシュマロ>`, // コード
    },
    {
        id: "opt-01",
        index: 1,
        label: `ツイッター`, // ラベル
        value: `<ツイッター>
<ユーザー名>ユーザーネーム</ユーザー名>
<アカウントID>@test_</アカウントID>
<ツイート内容>ツイート内容</ツイート内容>
</ツイッター>`, // コード
    },
    {
        id: "opt-02",
        index: 2,
        label: `ニコニコ風`, // ラベル
        value: `<ニコニコ>
<ニコタイトル></ニコタイトル>
<ニコフリガナ></ニコフリガナ>
<ニコ項目目次ヘッタ><ニコ項目目次></ニコ項目目次></ニコ項目目次フッタ>
<ニコ項目名></ニコ項目名>
<ニコ項目内容></ニコ項目内容>
</ニコニコ>`, // コード
    },
    {
        id: "opt-03",
        index: 3,
        label: `文字編集`, // ラベル
        value: `<文字:{色::}:></文字>`, // コード
    },
    {
        id: "opt-04",
        index: 4,
        label: `太字`, // ラベル
        value: `<太字></太字>`, // コード
    },
    {
        id: "opt-05",
        index: 5,
        label: `URL風`, // ラベル
        value: `<URL風></URL風>`, // コード
    },
    {
        id: "opt-06",
        index: 6,
        label:`ボックス`,
        value: `<ボックス></ボックス>`,
    },
    {
        id: "opt-07",
        index: 7,
        label:`標準動画`,
        value: `<標準動画></標準動画>`,
    },
    {
        id: "opt-08",
        index: 8,
        label:`大きさ`,
        value: `{大きさ::}`,
    }
    /*{
        id: "opt-01",
        index: 1,
        label: ``, // ラベル
        value: `<></>`, // コード
    },*/
];