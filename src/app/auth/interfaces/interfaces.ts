export interface Authentication {
    ok:    boolean;
    token: string;
    user:  User;
}

export interface User {
    usuario_id?:            string;
    descricpion?:           string;
    email?:                 string;
    nombre?:                string;
    apellido?:              string;
    carnet?:                string;
    fecha_nacimiento?:      Date;
    path?:                  null;
    usuario?:               string;
    pin_password?:          string;
    password_emr?:          string;
    estado?:                string;
    creado?:                Date;
    creado_por?:            string;
    modificado?:            Date;
    modificado_por?:        string;
    reestablecer_password?: null;
    grupo_id?:              null;
    fecha_fin?:             null;
    tipo_autenticacion_id?: number;
    password_valido_hasta?: null;
    genero?:                string;
    direccion?:             null;
    telefono?:              null;
    nombrearchivo?:         null;
    id_device?:             null;
    revision?:              boolean;
    token?:                 null;
    app_doctor?:            Doctor;
}

export interface   Doctor {
    id:            string;
    usuario_id:    string;
    descripcion:   string;
    pais:          string;
    adjunto:       string;
    recomendacion: null;
    biografia:     null;
    pacientes:     string;
    experiencia:   null;
    path:          string;

}