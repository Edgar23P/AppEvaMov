export class AssistanceDetail {
    tipoAsistencia: string;
    periodo: string;
    asignatura: string;
    docente: string;
    grupo: string;
    horaOficial: string;
    fechaAsistencia: string;
    horaEntrada: string;
    horaSalida: string;
    edificio: string;
    espacio: string;
    beacon: string;

    /*
    *
    * gato: "hola"  = 12.3 =>  "12.3"
    * gato: string = 12.2 XXXXXXXXX
    *
    * */

    constructor(item){
        this.tipoAsistencia = item.tipoAsistencia;
        this.periodo = item.periodo;
        this.asignatura = item.asignatura;
        this.docente = item.docente;
        this.grupo = item.grupo;
        this.horaOficial = item.horaOficial;
        this.fechaAsistencia = item.fechaAsistencia;
        this.horaEntrada = item.horaEntrada;
        this.horaSalida = item.horaSalida;
        this.edificio = item.edificio;
        this.espacio = item.espacio;
        this.beacon = item.beacon;
    }
}