let main = document.getElementById('main')
let allProducts = JSON.parse(localStorage.getItem('productos'))
let id = window.location.search.split('=').pop()
console.log('id', id)
let producto = allProducts.filter(producto => producto.id === Number(id))
console.log('producto', producto)
main.innerHTML = `
<img src="${producto[0].imagen}" alt="" width="100%">
    <p>${producto[0].marca}</p>
<a href="/error404.html" class="btn btn-success">Comprar</a>
`