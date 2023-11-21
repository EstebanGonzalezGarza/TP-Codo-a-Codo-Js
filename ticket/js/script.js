(() => {
    'use strict'

    const forms = document.querySelectorAll('.needs-validation')

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})();

function calcTotal() {
    const precio = 200;
    console.log("calctotal");

    let cant = document.getElementById("cant").value;
    console.log("cant" + cant);

    if (cant >= 1) {
        let total = cant * precio;
        console.log("total=" + total);

        let desc = document.getElementById("desc").value;
        total = total - (total * desc / 100);
        console.log("total con descuento=" + total);

        document.getElementById("total").className = "fw-bold p-1";
        document.getElementById("total").innerHTML = total;
    } else {
        document.getElementById("total").className = "text-danger";
        document.getElementById("total").innerHTML = "Valor inválido";
    }
}

function mostrarResumen() {
    const cantidad = parseInt(document.getElementById("cant").value);
    const categoria = document.getElementById("desc").value;
    const precio = 200;
    let descuento = 0;

    switch (categoria) {
        case "80":
            descuento = 10;
            break;
        case "50":
            descuento = 15;
            break;
        case "15":
            descuento = 20;
            break;
        default:
            descuento = 0;
            break;
    }

    let total = cantidad * precio;
    total = total - (total * descuento / 100);

    document.getElementById("total").className = "fw-bold p-1";
    document.getElementById("total").innerHTML = total.toFixed(2);
}
