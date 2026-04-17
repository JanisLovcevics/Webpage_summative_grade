const search_bar = document.getElementById('search-bar')

search_bar.addEventListener("input", function () {
    const search_bar_value = search_bar.value.toLowerCase();
    Array.from(document.querySelector('.product_grid').children).forEach(product =>{
        const product_name = product.children[1].textContent.toLowerCase()
        if (product_name.includes(search_bar_value)) {
            product.style.display = 'block'
        }
        else {
            product.style.display = 'none'
        }
    });
})