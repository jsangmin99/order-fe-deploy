function initState() {
    return {
        // localstorage에서 역직렬화 하여 가져온다.
        productsInCart: JSON.parse(localStorage.getItem("productsInCart")) || [],
        totalQuantity: localStorage.getItem('totalQuantity') || 0,
    }
}


const practice = {
    state: initState,
    mutations: {
        addCart(state, product) {
            const existingProduct = state.productsInCart.find(p => p.id == product.id);
            if (existingProduct) {
                existingProduct.quantity += product.quantity;
            } else {
                state.productsInCart.push(product);
            }
            state.totalQuantity = parseInt(state.totalQuantity )+ product.quantity;
            // localstorage에 직렬화 하여 저장한다.
            localStorage.setItem('productsInCart', JSON.stringify(state.productsInCart));
            localStorage.setItem('totalQuantity', state.totalQuantity);
        },
        clearCart(state) {
            state.productsInCart = [];
            state.totalQuantity = 0;
            localStorage.removeItem('productsInCart');
            localStorage.removeItem('totalQuantity');
        }
    },
    actions: {
        addCart(context, product) {
            context.commit('addCart', product);
        },
        clearCart(context) {
            context.commit('clearCart');
        }

    },
    getters: {
        getTotalQuantity: state => state.totalQuantity,
        getProductsInCart: state => state.productsInCart,
    }
}
export default practice;