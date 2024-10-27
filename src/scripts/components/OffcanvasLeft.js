import { leftNavItems } from './settings/left.js';

export default function leftOffcanvasCreate() {
    const leftOffcanvasContainer = document.getElementById('leftOffcanvas');

    let navHTML = `
        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasLeft" aria-labelledby="offcanvasLeftLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasLeftLabel">あさくらぼ</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
    `;
    leftNavItems.forEach(item => {
        navHTML += `
            <div class="row">
                <a class="nav-item nav-link d-flex align-items-center" href="${item.href}">
                    　<i class="bi ${item.icon} icon-large2"></i><span class="icon-large fw-bold">　${item.text}</span>
                </a>
            </div>
        `;
        if (item.hr) {
            navHTML += `<hr>`;
        }
    });
    navHTML += `
            <br><br>
            <div class="row">
                <div class="d-flex justify-content-center">
                    <div class="card bg-light" style="width: 150px; height: 150px;">
                        <div class="card-body text-center">
                            <img src="/src/img/QR.png" class="img-fluid" alt="QRcode" style="width: 120px; height: 120px;">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;

    leftOffcanvasContainer.outerHTML = navHTML;
}
