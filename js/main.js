var products = new Object();


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
        addValue(),
        newProduct()
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

function newProduct(id,nombre,descripcion){
  products.id=id;
  products.nombre=nombre;
  products.descripcion=descripcion;
  products.img="https://picsum.photos/80/80";
  localStorage.setItem("product_"+id,JSON.stringify(products));
}
let contProducts = 0;

function addValue(){
    contProducts++;
    updateValue(contProducts);
}

function updateValue(a){
    document.getElementById("cantProducts").innerHTML=a;
  }
/*
function goScroll(){
  window.scrollTo(0,500);
}
function idioma(){
idioma=navigator.language;
alert(idioma)
}  */

  /*
  function refresh(){ Actualiza la pagina. 
    location.reload();
  }*/
  /*function openWindow(){Se utiliza para abrir una nueva pestaña a una url en especial 
    window.open("https://getbootstrap.com/docs/5.2/getting-started/introduction/");
  }*/

 /* function windowsPerso(){ Se utiliza para crear una ventana nuevo dentro de la misma pagina mostrando algo.
    let ventana = window.open("","Vetana Modal","width=400,height=200");
    ventana.document.write("<p>Ejemplo de HTML, OPEN Windows </p>" );
  }*/
  
  /*function imprimir(){
    window.print(); Se utiliza para imprimir la pagina.*
  }*/
  /*Imprimir la hora */
  /*
  function timeHours(){
    let fecha= new Date();
    document.getElementById('time').innerHTML=fecha.toLocaleTimeString();
  }*/
/*
  const interval =setInterval(timeHours,1000); En milisegundos, se ejecuta cada 1000 milisegundos
  function clearTime(){
    clearInterval(interval);
  }*/
  /*
  function urlHistory(){  Se utiliza para ir en el historial del buscador para adelante o para atras en base al valor, negativo para atras positivo para adelante. 
    history.back();
    history.go(-1);
  }*/

 /* localStorage.setItem("name","Prueba");
  console.log(localStorage.getItem("name"));*/
 /* setTimeout(timeHours,1000); /* Se ejecuta 1 unica vez */
   /*Imprimir la hora */
/*
function isEmpty(contProducts){
  If(empty(cantProducts)){
    div.innerHTML == 'none';
}
}*/