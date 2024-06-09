"use strict";

function calculate(lines, arr, costoPorPM) {
    let KLOC = lines / 1000; // Convertir líneas de código a KLOC (kilo líneas de código)
    let PM = arr[0] * Math.pow(KLOC, arr[1]); // Esfuerzo en PM (Person-Months)
    let TM = arr[2] * Math.pow(PM, arr[3]); // Tiempo en meses
    let SS = PM / TM; // Tamaño del equipo
    let P = lines / PM; // Productividad en líneas de código por PM
    let C = PM * costoPorPM; // Costo total del proyecto en bolivianos

    let CPL = C / lines; // Costo por línea de código
    let TDL = TM / lines; // Tiempo de desarrollo por línea de código

    // Redondear los resultados al entero más cercano
    let mldc_decimal = KLOC.toFixed(2);
    let mldc_entero = Math.round(KLOC);

    let PM_decimal = PM.toFixed(2);
    let PM_entero = Math.round(PM);

    let TM_decimal = TM.toFixed(2);
    let TM_entero = Math.round(TM);

    let SS_decimal = SS.toFixed(2);
    let SS_entero = Math.round(SS);

    let P_decimal = P.toFixed(2);
    let P_entero = Math.round(P);

    let C_decimal = C.toFixed(2);
    let C_entero = Math.round(C);

    let CPL_decimal = CPL.toFixed(2);
    let CPL_entero = Math.round(CPL);

    let TDL_decimal = TDL.toFixed(5);
    let TDL_entero = Math.round(TDL);

    let mldcResult = document.querySelector('.mldc_result');
    if (mldcResult) mldcResult.innerHTML = mldc_decimal + " MLDC (" + mldc_entero + ")";

    let effortsResult = document.querySelector('.efforts_result');
    if (effortsResult) effortsResult.innerHTML = PM_decimal + " PM (" + PM_entero + ")";

    let timeToDevelopResult = document.querySelector('.timeToDevelop_result');
    if (timeToDevelopResult) timeToDevelopResult.innerHTML = TM_decimal + " meses (" + TM_entero + ")";

    let personsToDevelopResult = document.querySelector('.personsToDevelop_result');
    if (personsToDevelopResult) personsToDevelopResult.innerHTML = SS_decimal + " personas (" + SS_entero + ")";

    let productivityResult = document.querySelector('.productivity_result');
    if (productivityResult) productivityResult.innerHTML = P_decimal + " líneas/PM (" + P_entero + ")";

    let costResult = document.querySelector('.cost_result');
    if (costResult) costResult.innerHTML = C_decimal + " Bs (" + C_entero + ")";

    let costPerLineResult = document.querySelector('.cost_per_line_result');
    if (costPerLineResult) costPerLineResult.innerHTML = CPL_decimal + " Bs/línea (" + CPL_entero + ")";

    let timePerLineResult = document.querySelector('.time_per_line_result');
    if (timePerLineResult) timePerLineResult.innerHTML = TDL_decimal + " meses/línea (" + TDL_entero + ")";
}


function start() {
    let organic = [3.2, 1.05, 2.5, 0.38];
    let semidetached = [3.0, 1.12, 2.5, 0.35];
    let embedded = [2.8, 1.20, 2.5, 0.32];

    let size1 = parseFloat(document.getElementById('linesOfCode1').value);
    let size2 = parseFloat(document.getElementById('linesOfCode2').value);
    let costoPorPM = parseFloat(document.getElementById('linesOfCode3').value);

    if (isNaN(costoPorPM) || costoPorPM <= 0) {
        alert("Por favor, introduce un número válido para el sueldo.");
        return;
    }

    let projectType = document.querySelector('input[name="project"]:checked').value;
    let barraValue;

    switch (projectType) {
        case "Organic":
            barraValue = parseInt(document.getElementById('barra1').value);
            break;
        case "Semidetached":
            barraValue = parseInt(document.getElementById('barra2').value);
            break;
        case "Embedded":
            barraValue = parseInt(document.getElementById('barra3').value);
            break;
        default:
            alert("Por favor, selecciona un tipo de proyecto válido.");
            return;
    }

    let P = barraValue;
    let size = (size1 + size2) * P;

    if (isNaN(size) || size <= 0) {
        alert("Por favor, introduce un número válido de líneas de código.");
        return;
    }

    // Mostrar el valor de size en el HTML
    document.querySelector('.size_result').innerHTML = "El tamaño calculado es: " + size;
    document.querySelector('.p_result').innerHTML = "Parametro (P): " + P;
    document.querySelector('.cos_result').innerHTML = "Sueldo (S): " + costoPorPM+" Bs";

    switch (projectType) {
        case "Organic":
            calculate(size, organic, costoPorPM);
            break;
        case "Semidetached":
            calculate(size, semidetached, costoPorPM);
            break;
        case "Embedded":
            calculate(size, embedded, costoPorPM);
            break;
        default:
            break;
    }
}
