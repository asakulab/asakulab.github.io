export default function topNavCreate() {
    // id="topNav" の要素を取得
    const topNavContainer = document.getElementById('topNav');

    // innerHTMLを使ってnavの内容を追加
    topNavContainer.outerHTML = `
        <nav id="topNav" class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasLeft" href="#"><i class="bi bi-journal-text"></i>　あさくらぼ</a>
                <div class="navbar-brand d-lg-none" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"><i class="bi bi-pencil-square"></i></div>
            </div>
        </nav>
    `;
}