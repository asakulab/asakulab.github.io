export default function rightColumnCreate() {
    // id="topNav" の要素を取得
    const rightColumnContainer = document.getElementById('rightColumn');

    // innerHTMLを使ってnavの内容を追加
    rightColumnContainer.outerHTML = `
        <div id="rightColumn" class="d-none d-lg-block col-lg-3 col-xl-4 order-3">
            <div class="rightColumn">
                <div class="text-start">
                    <div class="d-flex mt-2 mb-2 p-1 rounded-pill bg-light border justify-content-center fw-bold">
                        新着メッセージ</div>
                    <p>2024/10/28: サイト開設</p>
                </div>
                <hr>
                

                <div class="messageForm card bg-light mt-3">
                    <h4 class="card-header">最近の出没 / 出没予定</h4>
                    <div class="card-body p-2 m-2">
                        ACT Japan年次ミーティング2024
                    </div>
                </div>
            </div>
        </div>
    `;
}


