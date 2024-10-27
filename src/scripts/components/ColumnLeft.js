import { leftNavItems } from './settings/left.js';

export default function leftColumnCreate() {
    const leftColumnContainer = document.getElementById('leftColumn');

    let LeftNavHTML = `
        <div id="leftColumn" class="d-none d-md-block col-md-auto order-1">
            <div class="container align-items-end">
                <hr>
    `;
    leftNavItems.forEach(item => {
        LeftNavHTML += `
            <div class="row text-left">
                <a class="nav-item nav-link d-flex align-items-center" href="${item.href}">
                    <i class="bi ${item.icon} icon-large2"></i>
                    <span class="d-none d-xxl-inline icon-large fw-bold">　${item.text}</span>
                </a>
            </div>

        `;
        if (item.hr) {
            LeftNavHTML += `<hr>`;
        }
    });
    LeftNavHTML += `
                <br><br>
                <div class="d-none d-xxl-block text-center">
                    <div class="card bg-light" style="width: 150px; height: 150px;">
                        <div class="card-body text-center">
                            <img src="/src/img/QR.png" class="img-fluid" alt="QRcode" style="width: 120px; height: 120px;">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    leftColumnContainer.outerHTML = LeftNavHTML;
}
