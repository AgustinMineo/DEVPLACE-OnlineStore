function buyItem(){
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
        addValue()
        )
    } else if (
        /* Read more about handling dismissals below */
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

let contProducts = 0;

function addValue(){
    contProducts++;
    updateValue(contProducts);
}

function updateValue(a){
    document.getElementById("cantProducts").innerHTML=a;
}

