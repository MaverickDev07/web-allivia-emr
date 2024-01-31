export interface MedicalBackground {
    id:                               string;
    genero:                           string;
    fecha_nacimiento:                 string;
    id_paciente:                      string;
    fuma:                             number;
    alcohol:                          number;
    cafeina:                          number;
    ejercicio:                        number;
    drogas:                           number;
    testifico:                        boolean;
    mini_mental_test:                 any;
    cabeza:                           any;
    cuello:                           any;
    torax_anterior:                   any;
    torax_posterior:                  any;
    abdomen:                          any;
    sistema_nervioso_perfiferico:     any;
    sistema_nervioso_motor:           any;
    extremidades:                     any;
    categorizacion_paciente:          string
    app_antecedente_alergia:          AppAntecedenteAlergia[];
    app_antecedente_vacunas:          AppAntecedenteVacuna[];
    app_antecedente_enfermedad_bases: AppAntecedenteEnfermedadBasis[];
    app_antecedente_cirugia:          AppAntecedenteCirugia[];
    app_antecedente_familia:          AppAntecedenteFamilia[];

    nuevas_alergias:                  any[];
    nuevas_vacunas:                   any[];
    nuevas_enfermedad_bases:          any[];
    nuevas_cirugia:                   any[];
    nuevas_familia:                   any[];
}

export interface AppAntecedenteAlergia {
    id?:                    string;
    id_antecedente_medico: string;
    id_alergia:            string;
}

export interface AppAntecedenteCirugia {
    id?:                    string;
    id_antecedente_medico: string;
    id_cirugia:            string;
}

export interface AppAntecedenteEnfermedadBasis {
    id?:                    string;
    id_antecedente_medico: string;
    id_enfermedad_base:    string;
}

export interface AppAntecedenteFamilia {
    id?:                    string;
    nombre:                string;
    diabetes:              number;
    cancer:                string;
    enfemedadCorazon?:      null;
    hipertension:          boolean;
    id_antecedente_medico: string;
    enfemedad_corazon:     boolean;
    nuevo_valor_cancer?:     boolean;
}

export interface AppAntecedenteVacuna {
    id?:                    string;
    id_antecedente_medico: string;
    id_vacuna:             string;
}


export interface Objetivos {
    id?: number,
    creado?: Date,
    modificado?: Date,
    estado: string,
    objetivo: string,
}


export interface GoalsSelected {
    id?:           string;
    creado:       Date;
    modificado:   Date;
    estado:       string;
    id_objetivo:  string;
    id_paciente:  string;
    app_objetivo: AppObjetivo;
}

export interface AppObjetivo {
    id?:         string;
    creado?:     Date;
    modificado?: Date;
    estado:     string;
    objetivo:   string;
}



export interface Paciente {
    id:          string;
    usuario_id:  string;
    descripcion: string;
    app_usuario: AppUsuario;
}

export interface AppUsuario {
    usuario_id:            string;
    descricpion:           string;
    email:                 string;
    nombre:                string;
    apellido:              string;
    carnet:                string;
    fecha_nacimiento:      Date;
    path:                  string;
    usuario:               string;
    pin_password:          string;
    password_emr:          string;
    estado:                string;
    creado:                Date;
    creado_por:            string;
    modificado:            null;
    modificado_por:        null;
    reestablecer_password: null;
    grupo_id:              null;
    fecha_fin:             null;
    tipo_autenticacion_id: number;
    password_valido_hasta: null;
    genero:                string;
    direccion:             null;
    telefono:              null;
    nombrearchivo:         string;
    id_device:             string;
    revision:              boolean;
    token:                 null;
}



export interface AppointmentAgenda {
    id:                string;
    id_paciente:       number;
    id_doctor:         number;
    id_tipocita:       number;
    id_pago:           number;
    id_tipoconsulta:   number;
    id_especialidad:   number;
    fecha:             Date;
    inicioconsulta:    null;
    finconsulta:       null;
    estadoconsulta:    string;
    motivoconsulta:    string;
    precio:            number;
    motivocancelacion: null;
    tipoespecialidad:  null;
    horario:           string;
    reconsulta:        boolean;
    fecharegistro:     Date;
    nit_comprador:     null;
    razon_social:      null;
    tipo_agenda:       null;
}