let dni, nota1, nota2, asistencias, asist_porcentaje, estado_alumno;
const clases = 40;

function datos_alumno(){
    dni = document.getElementById("dni").value;
    nota1 = document.getElementById("nota1").value;
    nota2 = document.getElementById("nota2").value;
    asistencias = document.getElementById("asistencia").value;

    if(dni == 0 || nota1 == 0 || nota2 == 0 || 
        asistencias == 0){
        alert("Ingrese todos los datos solicitados")
    }else if(asistencias > 40){
        alert("No pudo haber asistido a más de 40 clases"); 
    }else{
        //alert(dni+" "+nota1+" "+nota2+" "+asistencias)
        //calculamos el porcentaje de asistencias
    asist_porcentaje = asistenciasx100();

    //Verificamos el estado del alumno en la asignatura
    estado_alumno = estado(asist_porcentaje);

    //Mostramos en pantalla el estado del estudiantes
    mostrar();
    }
}

function asistenciasx100(){
    let porcentaje = asistencias*100/40;
    return porcentaje;
}

function estado(asist_porcentaje){
    clases80 = 80*40/100;//80% de clases equivale a 32 clases
    //Calculamos la cantidad de clases que necesita para obtener el 80%
    let debe =  clases80 - asistencias;
    if (nota1 >= 8 && nota2 >= 8){
        if(asist_porcentaje >= 80){
            estado_alumno = "Alumno regular.\n DNI: "+dni; 
        }else{
            estado_alumno = "Debe realizar clases de apoyo.\n Debe "+
            debe+" clases para obtener el 80%\n DNI: "+dni; 
        }    
    }else if(nota1 >= 8 || nota2 >= 8){
        if(asist_porcentaje >= 80){
            estado_alumno = "Debe recuperar un parcial.\n DNI: "+dni; 
        }
    }else{
        estado_alumno = "Alumno libre.\n DNI: "+dni; 
    }
    return estado_alumno;
}

function mostrar(){
    //Obtenemos las etiquetas por medio de su id
    let porcent_asistencia = document.getElementById("asistencias-porcentaje");
    let alumno_estado= document.getElementById("estado-alumno");

    //Mostramos los resultados
    asist_porcentaje = "El porcentaje de asistencias es de: "+asist_porcentaje;
    porcent_asistencia.textContent = asist_porcentaje;
    alumno_estado.textContent = estado_alumno;
}