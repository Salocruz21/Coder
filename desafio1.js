const fs = requiere('fs')

class ProductManager {
    #products

    constructor(){
        this.#products = []
    }

    #generateID = () => {
        let id
        if (this.#products.length === 0) id = 1
        else id = this.#products[this.#products.length-1].id + 1
        return id
    }

    #validateCode = (code) => {
        if(!code.include(this.#products.code)) {
            console.log('the code already exists')
            return
        }
    }

    getProducts = () => {
        return this.#products
    }

    addProducts = (title,description,price,thumbnail,code,stock) => {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error('incompleted fields')
            return 
        }

        let codes = this.#validateCode(codes)
        let id = this.#generateID()
        let newProducts = {
            id,title,description,price,thumbnail,code,stock
        }
        this.#products.push(newProducts)
        return this.#products
    }
}
    
const product_manager = new ProductManager()
product_manager.addProducts('Iphone11','high-end smartphone with 64gb of memory and ultra-definition cameras', 500, 'https://www.bodegaaurrera.com.mx/celulares/smartphones/telcel/iphone-11-apple-64-gb-negro-telcel_00750622733527', 1, 50)
product_manager.addProducts('Iphone12', 'high-end smartphone with 64gb of memory and ultra-definition cameras and ram 8gb', 700, 'https://www.apple.com/mx/shop/buy-iphone/iphone-12/pantalla-de-6.1-pulgadas-64gb-azul', 1, 50  )
console.log(product_manager.getProducts())

module.exports = ProductManager
