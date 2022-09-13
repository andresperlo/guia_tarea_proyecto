let productos = JSON.parse(localStorage.getItem('productos'))
let divRow = document.getElementById('rowCard')
divRow.innerHTML = productos.map(producto =>
    ` 
    <div class="card mx-3" style="width: 18rem;">
        <img src="${producto.imagen}" class="card-img-top" alt="..." style="height:50vh">
            <div class="card-body">
                <h5 class="card-title">${producto.marca}</h5>
                <p class="card-text">${producto.descripcion}</p>
                <p class="card-text">${producto.precio}</p>
                <a href="../html/oneProduct.html?id=${producto.id}" class="btn btn-success my-3" >Ver Mas...</a>
                <button type="button" class='btn btn-dark'>Añadir al Carrito</button>

            </div>
    </div>`
)
