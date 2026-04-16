class Product {
    constructor(name, price, image) {
        this.name = name;
        this.price = price;
        this.image = image;
    }
    display(product_list) {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${this.image}" alt="${this.name}">
            <h3>${this.name}</h3>
            <div class="price">€${this.price}.00</div>
        `;
        product_list.appendChild(productElement);
    }
}

class Disc_Product extends Product {
    constructor(name, price, image, discount) {
        super(name, price, image);
        this.discount = discount;
    }
}

fetch('./products_data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    try {
        const disc_products = document.querySelector(".disc_products").children[1];
        data.discounted_products.forEach(discounted_product => {
            const productElement = new Disc_Product(discounted_product.name, discounted_product.price, discounted_product.image, discounted_product.old_price)
            productElement.display(disc_products)
        })
    } catch (error) {
        console.error('Error displaying discounted products:', error);
    }
    
    try {
        const new_arrivals = document.querySelector(".new_arrivals").children[1];
        data.new_arrivals.forEach(new_product => {
            const productElement = new Product(new_product.name, new_product.price, new_product.image)
            productElement.display(new_arrivals)
        })
    } catch (error) {
        console.error('Error displaying new arrivals:', error);
    }

    try {
        const product_list = document.querySelector(".product_grid");
        data.products_list.forEach(product => {
            const productElement = new Product(product.name, product.price, product.image)
            productElement.display(product_list)
        })
    } catch (error) {
        console.error('Error displaying product list:', error);
    }
    })
  .catch(error => console.error('Failed to fetch data:', error));
