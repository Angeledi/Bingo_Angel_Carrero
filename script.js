


const button = document.getElementById("jugar")
const checkbox1 = document.getElementById("tamano3");
const checkbox2 = document.getElementById("tamano4");
const checkbox3 = document.getElementById("tamano5");

const username1 = document.getElementById("jugador1")
const username2 = document.getElementById("jugador2")
const username3 = document.getElementById("jugador3")
const username4 = document.getElementById("jugador4")
var turno = 25;
let nx= 0 ;

const ptsname1 = document.getElementById("name1")
const ptsname2 = document.getElementById("name2")
const ptsname3 = document.getElementById("name3")
const ptsname4 = document.getElementById("name4")

const numturn = document.getElementById("numeroturno")

const siguientex = document.getElementById("derecha")
const anteriorx = document.getElementById("izquierda")
const matrizContainer = document.getElementById("matriz-container");
let playernum = document.getElementById("numerojugador")
let lastball = document.getElementById("ultimabola")
//const tiradax = document.getElementById("tirada")

let matrices = [];
let numerostirados = [];
let points =[0,0,0,0];

var currentpage = ''

function oyentes(){
    
  siguientex.addEventListener("click", function() {
    siguiente();
    
  });
anteriorx.addEventListener("click", function() {
anterior();
  });

button.addEventListener("click", function() {
    verificarCheckboxes();
  });

}


function verificarCheckboxes() {
    let cantidadSeleccionados = 0;
    let numMatrix = 0; // Variable para almacenar el valor seleccionado del checkbox
  
    if (checkbox1.checked) {
      cantidadSeleccionados++;
      numMatrix = 3;
    }
    if (checkbox2.checked) {
      cantidadSeleccionados++;
      numMatrix = 4;
    }
    if (checkbox3.checked) {
      cantidadSeleccionados++;
      numMatrix = 5;
    }
    if (cantidadSeleccionados !== 1) {
      
      alert("Selecciona solo uno");
      return;
    } else {
      innit(numMatrix);
    }
  }
  
function innit(numMatrix) {
  
    if (verifyInput()) {
        localStorage.setItem("numerito", numMatrix);
        switchSection()
        kawabingogen(numMatrix)
        generarMatrizHTML2(nx);
        oyentes();


    } else {
      alert("Rellena todos los campos");
      return;
    }
  function verifyInput() {
    if (username1.value === "" || username2.value === "" || username3.value === "" || username4.value === "") {
        return false;
    } else {
      return true;
    }
  }
  
}
  
  

function switchSection() {
    const registroSection = document.querySelector(".inicio");
    const bingoSection = document.querySelector(".bingo");
    
    registroSection.style.display = "none";
    bingoSection.style.display = "block";
    button.style.display = "none";
    }
function switchSectiof() {
        const registroSection = document.querySelector(".inicio");
        const bingoSection = document.querySelector(".bingo");
        const ptssection = document.querySelector(".pts");

        registroSection.style.display = "block";
        bingoSection.style.display = "none";
        button.style.display = "block";
        ptssection.style.display = "none"
        }




// Función para generar una matriz aleatoria de tamaño filas x columnas
function kawabingogen(numMatrix){
    const mtx1 = generarMatrizAleatoria(numMatrix);
    alert(mtx1[1][1])
    agregarMatriz(mtx1);
    alert(matrices[nx][1][1]) 
    const mtx2 = generarMatrizAleatoria(numMatrix)
    alert(mtx2[1][1])
    agregarMatriz(mtx2);
    alert(matrices[nx+1][1][1]) 
    const mtx3 = generarMatrizAleatoria(numMatrix)
    agregarMatriz(mtx3);
    const mtx4 = generarMatrizAleatoria(numMatrix);
    agregarMatriz(mtx4);
    
    //const aux = matrices[nx];
    

}

function generarMatrizAleatoria(n) {
  // Crea una matriz vacía
  const matr = [];
  // Genera los números aleatorios y crea la matriz
  for (let i = 0; i < n; i++) {
    const fila = [];
    for (let j = 0; j < n; j++) {
      // Genera un número aleatorio entre 1 y 50
      const numeroAleatorio = Math.floor(Math.random() * 50) + 1;

      // Agrega el número a la fila
      fila.push(numeroAleatorio);
    }
    // Agrega la fila a la matriz
    matr.push(fila);
  }

  return matr;
}

// Función para generar la representación HTML de la matriz
function generarMatrizHTML(matriz) {
    
  // Crea una tabla
  const tabla = document.createElement("table");
  // Recorre cada fila de la matriz
  for (let i = 0; i < matriz.length; i++) {
    // Crea una fila en la tabla
    const fila = document.createElement("tr");
    // Recorre cada elemento de la fila
    for (let j = 0; j < matriz[i].length; j++) {
      // Crea una celda en la fila
      const celda = document.createElement("td");
      // Asigna el valor de la matriz a la celda
      celda.textContent = matriz[i][j];
      // Agrega la celda a la fila
      fila.appendChild(celda);
    }
    // Agrega la fila a la tabla
    tabla.appendChild(fila);
  }
  // Agrega la tabla al contenedor
  matrizContainer.appendChild(tabla);
}
function generarMatrizHTML2(index) {
    matrizContainer.innerHTML = "";
    var matriz = matrices[index];
    // Crea una tabla
    const tabla = document.createElement("table");
    // Recorre cada fila de la matriz
    for (let i = 0; i < matriz.length; i++) {
      // Crea una fila en la tabla
      const fila = document.createElement("tr");
      // Recorre cada elemento de la fila
      for (let j = 0; j < matriz[i].length; j++) {
        // Crea una celda en la fila
        const celda = document.createElement("td");
        // Asigna el valor de la matriz a la celda
        celda.textContent = matriz[i][j];
        // Agrega la celda a la fila
        fila.appendChild(celda);
        for (let s =0; s < numerostirados.length; s++){
            if (matriz[i][j] === numerostirados[s]){
                celda.style.backgroundColor = "blue";
            }
        }
      }
      // Agrega la fila a la tabla
      tabla.appendChild(fila);
    }
    // Agrega la tabla al contenedor
    matrizContainer.appendChild(tabla);
  }

function agregarMatriz(matriz) {
    matrices.push(matriz);
  }
function anterior() {
    if (nx === 3){
        nx = 0;
    } else{
        nx++;
    }
   generarMatrizHTML2(nx);
    playernum.textContent = nx+1;
    
}

function siguiente() {
    if (nx === 0) {
      nx = 3;
    } else {
      nx--;
    }
    generarMatrizHTML2(nx);
    playernum.textContent = nx+1;
  }

function turnofunc(){
    if (turno !== -1){
        const numeroAleatorio = Math.floor(Math.random() * 50) + 1;
        while (numerostirados.includes(numeroAleatorio)) {
            // Generar un nuevo número aleatorio
            numeroAleatorio = Math.floor(Math.random() * 50) + 1;
          }
        //alert(numeroAleatorio)
        numerostirados.push(numeroAleatorio);
        generarMatrizHTML2(nx);
        lastball.textContent = numeroAleatorio;
        numturn.textContent = turno--;
    
        for (let mtr=0; mtr < matrices.length; mtr++){
            verifyBingo(mtr)
       //     if (verificarValoresEnLista(matrices[mtr], numerostirados)){
        //        alert("Bingo")
       //     }
    }
    
        
        
    }else{
       alert("El juego ha terminado se han acabado los turnos")
       turno = 25
       switchSectiof()
       matrices = [];
        numerostirados = [];
        pointson()
        ptsname1.textContent = points[0];
        ptsname2.textContent = points[1];
        ptsname3.textContent = points[2];
        ptsname4.textContent = points[3];
        bingosMarcados = {
            filas: new Set(),
            columnas: new Set(),
            diagonales: new Set(),
          };
          //let points =[0,0,0,0];
          nx = 0

    }
  }

  const bingosMarcados = {
    filas: new Set(),
    columnas: new Set(),
    diagonales: new Set(),
  };
  
  function verifyBingo(index) {
    const matriz = matrices[index]; // Obtener la matriz correspondiente al número de matriz seleccionado
  
    // Verificar filas completas
    const filasCompletas = matriz.some((fila, rowIndex) => {
      const filaCompleta = fila.every(num => numerostirados.includes(num));
      if (filaCompleta && !bingosMarcados.filas.has(rowIndex)) {
        bingosMarcados.filas.add(rowIndex);
        return true;
      }
      return false;
    });
  
    // Verificar columnas completas
    const columnasCompletas = matriz[0].some((_, colIndex) => {
      const columnaCompleta = matriz.every(fila => numerostirados.includes(fila[colIndex]));
      if (columnaCompleta && !bingosMarcados.columnas.has(colIndex)) {
        bingosMarcados.columnas.add(colIndex);
        return true;
      }
      return false;
    });
  
    // Verificar diagonal principal completa
    const diagonalPrincipalCompleta = matriz.every((fila, index) => {
      const diagonalCompleta = numerostirados.includes(fila[index]);
      if (diagonalCompleta && !bingosMarcados.diagonales.has('principal')) {
        bingosMarcados.diagonales.add('principal');
        return true;
      }
      return false;
    });
  
    // Verificar diagonal secundaria completa
    const diagonalSecundariaCompleta = matriz.every((fila, index) => {
      const diagonalCompleta = numerostirados.includes(fila[matriz.length - index - 1]);
      if (diagonalCompleta && !bingosMarcados.diagonales.has('secundaria')) {
        bingosMarcados.diagonales.add('secundaria');
        return true;
      }
      return false;
    });
  
    // Verificar si se ha alcanzado un bingo
    if (filasCompletas || columnasCompletas || diagonalPrincipalCompleta || diagonalSecundariaCompleta) {
      alert(points[index])
        points[index] += 3;
        alert(points[index])  
      alert("¡Bingo!");
    }
  }
  function pointson(){
    const registroSection = document.querySelector(".inicio");
    const bingoSection = document.querySelector(".bingo");
    const ptssection = document.querySelector(".pts");
    
    registroSection.style.display = "none";
    bingoSection.style.display = "none";
    button.style.display = "none";
    ptssection.style.display = "block"

  }

oyentes();
