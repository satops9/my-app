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
];

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
    /*{
        label: ``, // ラベル
        value: `<></>`, // コード
    },*/
];