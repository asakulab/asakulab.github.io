// navItems.jsから配列をインポート
import { bottomNavItems } from './settings/bottom.js';

export default function bottomNavCreate() {
    const bottomNavContainer = document.getElementById('bottomNav');

    let bottomNavHTML = `<nav id="bottomNav" class="nav Bnav d-md-none nav-pills nav-justified fixed-bottom">`;
    bottomNavItems.forEach(item => {
        bottomNavHTML += `
            <a class="nav-item nav-link" href="${item.href}">
                <i class="bi ${item.icon} icon-large"></i>
            </a>
        `;
    });
    bottomNavHTML += `</nav>`;

    bottomNavContainer.outerHTML = bottomNavHTML;
}
