document.addEventListener("DOMContentLoaded", function () {
    // コンポーネントを非同期で読み込み
    function loadComponent(elementId, url) {
        return fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById(elementId).innerHTML = data;
            });
    }

    // コンポーネントの読み込みをすべて待つ
    Promise.all([
        loadComponent('topNav', '../component/page_parts/topNav.html'),
        loadComponent('bottomNav', '../component/page_parts/bottomNav.html'),
        loadComponent('leftOffcanvas', '../component/page_parts/leftOffcanvas.html'),
        loadComponent('rightOffcanvas', '../component/page_parts/rightOffcanvas.html'),
        loadComponent('leftColumn', '../component/page_parts/leftColumn.html'),
        loadComponent('rightColumn', '../component/page_parts/rightColumn.html'),
        loadComponent('head', '../component/page_parts/head.html'),
    ]).then(() => {
        // ナビゲーションリンクのアクティブ化
        function setActiveLink() {
            // 現在のページのURLを取得
            var currentPath = window.location.pathname;
            // すべてのナビゲーションリンクを取得
            var navLinks = document.querySelectorAll('.nav-item.nav-link');
            // 各ナビゲーションリンクをループし、現在のパスと一致するか確認
            navLinks.forEach(function(link) {
                if (link.getAttribute('href') === currentPath) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }

        // 初期実行
        setActiveLink();

        // DOM変更を監視
        var observer = new MutationObserver(setActiveLink);
        observer.observe(document.body, { childList: true, subtree: true });

        // PWAの場合は、ページ遷移時にも対応する
        window.addEventListener('popstate', setActiveLink);
    }).catch(error => {
        console.error('Error loading components:', error);
    });
});


