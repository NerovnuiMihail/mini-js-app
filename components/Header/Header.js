class Header {
    handlerOpensShoppingPage() {
        shoppingPage.render();
    }

    render(count) {
        const html = `
            <div class="header-container">
                <div class="header-counter" onclick="headerPage.handlerOpensShoppingPage()">
                    👛 ${count}
                </div>
            </div>
        `;

        ROOT_HEADER.innerHTML = html;
    }
}

const headerPage = new Header();

const productsStore = localSU.getProducts();

headerPage.render(productsStore.length);