const cart = () => {
    const cartBtn = document.querySelector('.button-cart')

    const cart = document.getElementById('modal-cart')

    const cartClose = document.querySelector('.modal-close')

    cartBtn.addEventListener('click', () => {
        cart.style.display = 'flex'
    })

    cartClose.addEventListener('click', () => {
        cart.style.display = ''
    })
}

cart()