var products = new Object();
const shopArray= [];
let totalProducts=0;

(async ()=>{

  try{
      const response = await fetch("/products.json");
      const productsJson = await response.json();
      console.log(productsJson)
      localStorage.setItem('data', JSON.stringify(productsJson));
      displayButton();
  }
  catch(error)
  {
      console.log(error)
  }
})();



function buyItem(id){
const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  
  swalWithBootstrapButtons.fire({
    title: 'Confirmación',
    text: "Esta seguro que desea agregar este producto?",
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Continuar',
    cancelButtonText: 'Cancelar',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
        '¡¡Producto Agregado!!',
        'Agregaste el producto de forma exitosa!',
        'success',
        newProduct(id)
        )
    } else if (
        result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                '¡¡Producto no agregado!!',
                'No agregaste el producto',
                'info'
                )
            }
        })
}

function newProduct(id){
  let productsJson = JSON.parse(localStorage.getItem('data'));
  if(productsJson){
    let product = productsJson.find(product => product.id === id);
    let cantProducts= shopArray.find(product => product.id === id);
    
    
    if(cantProducts){
      cantProducts.cantidad++;
    }else{
      product.cantidad=1;
      shopArray.push(product);
    }
    addValue();
    showProducts();
    totalCart();
    displayButton();

  }
}
const deleteButton = document.getElementById('deleteAllButton');

function displayButton(){
  if(contProducts==0){
    document.getElementById('deleteAllButton').style.display='none';
    document.getElementById('totalValue').style.display='none';
  }else{
    document.getElementById('deleteAllButton').style.display='block';
    document.getElementById('totalValue').style.display='block';
  }
}

let contProducts = 0;

function addValue(){
    contProducts++;
    updateValue(contProducts);
}

function restValue(){
  contProducts--;
  updateValue(contProducts);
}
/* Calculamos el precio total del carrito de compras */
function totalCart(){
  const $total = document.getElementById('totalValue');
  let totalCash=0;

  shopArray.forEach((products)=> {
    totalCash+=products.precio* products.cantidad;
  })

  $total.innerHTML = `<p>Total: $ ${totalCash}</p>`;

    localStorage.shopArray = JSON.stringify(shopArray);
    $total.innerHTML = `<h5 class="text-center">Total: $ ${totalCash.toFixed(2)}</h5>`;
}

function updateValue(a){
    document.getElementById("cantProducts").innerHTML=a;
  }


function showProducts(){
  let shopCart = document.getElementById('shopCart');

  let shopVisual=' ';
  shopArray.forEach((product,id)=>{
    shopVisual +=`
    <div class="col display-block">
      <div class="card m-2">
        <img src="${product.img}" class="rounded mx-auto d-block" width="60" height="90"  alt="...">
          <div class="card-body">
              <h5 class="card-title">${product.nombre}</h5>
            <p class="card-text">Descripcion: ${product.descripcion}</p>
            <p class="card-text">Precio : $${product.precio}</p>
            <p class="card-text">Cantidad : ${product.cantidad}</p>
            <button class="btn btn-danger px-5" onclick="deleteProduct(${product.id})">-</button>
            <button class="btn btn-success px-5" onclick="newProduct(${product.id})">+</button>
            </div>
            </div>
            </div>
    `
  });
  shopCart.innerHTML=shopVisual;
}

function deleteProduct(id){
  let productsData = JSON.parse(localStorage.getItem('data'));
  if(productsData){
    let productToDelete = productsData.find((s) => s.id ===id);
    let productSearch = shopArray.find(productToDelete => productToDelete.id ===id);
    if(productSearch.cantidad >1){
      productSearch.cantidad--;
    }else{
      shopArray.splice(shopArray.indexOf(productSearch),1);
    }
    restValue();
    localStorage.shopArray= JSON.stringify(shopArray);
    showProducts();
    totalCart();
    displayButton();
  }
}
function deleteAll(){
  let productsData = JSON.parse(localStorage.getItem('data'));
  if(productsData){
    productsData.forEach((products,id)=>{
      if(productsData.cantidad >1){
        productsData.cantidad--;
      }else{
        shopArray.splice(shopArray.indexOf(productsData.id),1);
      }
    });
    contProducts=0;
    updateValue(0);
    showProducts();
    totalCart();
    displayButton();
    localStorage.shopArray= JSON.stringify(shopArray);
  }
}