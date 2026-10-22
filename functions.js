
const contenedor = document.getElementById("contenedor-colores");
const contenedorValor = document.getElementById("resultado")

const colores = [
    "Negro", "Marrón", "Rojo", "Naranja", "Amarillo",
    "Verde", "Azul", "Violeta", "Gris", "Blanco",
    "Oro", "Plata"
];

const coloresValores = {
    "Negro": 0,
    "Marrón": 1,
    "Rojo": 2,
    "Naranja": 3,
    "Amarillo": 4,
    "Verde": 5,
    "Azul": 6,
    "Violeta": 7,
    "Gris": 8,
    "Blanco": 9,
};

const multiplicadores = {
    "Negro": 1,
    "Marrón": 10,
    "Rojo": 100,
    "Naranja": 1000,
    "Amarillo": 10000,
    "Verde": 100000,
    "Azul": 1000000,
    "Oro": 0.1,
    "Plata": 0.01
};

const tolerancias = {
    "Marrón": "±1%",
    "Rojo": "±2%",
    "Verde": "±0.5%",
    "Azul": "±0.25%",
    "Violeta": "±0.1%",
    "Gris": "±0.05%",
    "Oro": "±5%",
    "Plata": "±10%"
};

function generarSelectores(cantidad) {
    contenedor.innerHTML = "";
    console.log("Generando selectores:", cantidad);
    for (let i = 1; i <= cantidad; i++) {

        const columna = document.createElement("div");
        columna.className = "col-12 col-sm-6 col-lg-3";

        const tarjeta = document.createElement("div");
        tarjeta.className = "card h-100 border shadow-sm";

        const cuerpo = document.createElement("div");
        cuerpo.className = "card-body";

        const titulo = document.createElement("label");
        titulo.className = "form-label fw-bold";
        titulo.textContent = `Banda ${i}`;
        titulo.htmlFor = `banda${i}`;


        const select = document.createElement("select");
        select.className = "form-select";
        select.id = `banda${i}`;
        select.name = `banda${i}`;

        select.addEventListener("change", function () {
            obtenerValorSelect(cantidad);
        });

        const opcionInicial = document.createElement("option");
        opcionInicial.value = "";
        opcionInicial.textContent = "Selecciona un color";
        opcionInicial.selected = true;
        opcionInicial.disabled = true;
        select.appendChild(opcionInicial);


        colores.forEach((color, indice) => {
            const opcion = document.createElement("option");
            opcion.value = color;
            opcion.textContent = color;
            select.appendChild(opcion);
        });

        cuerpo.appendChild(titulo);
        cuerpo.appendChild(select);
        tarjeta.appendChild(cuerpo);
        columna.appendChild(tarjeta);
        contenedor.appendChild(columna);
    }
}

const coloresSelected = []
function obtenerValorSelect(cantidad) {

    coloresSelected.length = 0;
    for (let i = 1; i <= cantidad; i++) {
        const color = document.getElementById(`banda${i}`).value;
        if (color !== "") {
            coloresSelected.push(color);
        }
    }

    if (coloresSelected.length === cantidad) {
        calcularValor(coloresSelected);
    } else {
        contenedorValor.textContent = "Selecciona todos los colores";
    }
}
function calcularValor(coloresSelected) {

    let result = "";

    for (let i = 0; i <= coloresSelected.length - 1; i++) {
        let valor = coloresValores[coloresSelected[i]];

        if (i == 0 || i == 1) {
            result = result + String(valor);
        }

    }

    let indiceMultiplicador = coloresSelected.length - 2;
    let indiceTolerancia = coloresSelected.length - 1;

    const colorMultiplicador = coloresSelected[indiceMultiplicador];
    const mult = multiplicadores[colorMultiplicador];

    const colorTolerancia = coloresSelected[indiceTolerancia];
    const tolerancia = tolerancias[colorTolerancia];

    result = Number(result) * mult;

    contenedorValor.textContent = result + " Ω " + `Tolerancia de ${tolerancia}`;

}
const radios = document.querySelectorAll('input[name="bandas"]');

radios.forEach(radio => {
    radio.addEventListener("change", function () {
        generarSelectores(Number(this.value));
    });
});


const seleccionado = document.querySelector('input[name="bandas"]:checked');
generarSelectores(Number(seleccionado.value));
