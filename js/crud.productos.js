const crearProducto = () => {
    let imagen = document.getElementById('imagen').value
    let marca = document.getElementById('marca').value
    let precio = document.getElementById('precio').value
    let descripcion = document.getElementById('descripcion').value
    let productos = JSON.parse(localStorage.getItem('productos')) || []
    let array = []
    
    if(productos.length === 0){
        array.push({id: productos.length + 1, imagen, marca, precio, descripcion})
        localStorage.setItem('productos', JSON.stringify(array))
    }else{
        for (let i = 0; i < productos.length; i++) {
            const producto = productos[i];

            array.push(producto)
            
        }


        array.push({id: productos.length + 1, imagen, marca, precio, descripcion})

        localStorage.setItem('productos', JSON.stringify(array))
    }


}


