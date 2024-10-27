export default function rightOffcanvasCreate() {
    // id="topNav" の要素を取得
    const rightOffcanvasContainer = document.getElementById('rightOffcanvas');

    // innerHTMLを使ってnavの内容を追加
    rightOffcanvasContainer.outerHTML = `
        <!-- rightOffcanvas -->
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">

            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasRightLabel">あさくらぼ</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div class="offcanvas-body">
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
        <!-- rightOffcanvas -->
    `;
}

