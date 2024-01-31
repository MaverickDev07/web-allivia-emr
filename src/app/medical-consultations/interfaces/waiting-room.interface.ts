export interface WaitingRoom {
    id:             string;
    foto:           string;
    path:           string;
    nombre:         string;
    edad:           number;
    tipocita:       string;
    fecha:          Date;
    fecha_fin:      Date;
    estadoconsulta: string;
    id_paciente:    number;
    id_doctor:      number;
    id_antecedente_medico: string;
}