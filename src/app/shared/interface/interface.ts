export interface InterfaceUser {
    username: string,
    password: string
}

export interface User {
    id: number;
    last_login?: any;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    is_staff: boolean;
    is_superuser: boolean;
    is_active: boolean;
    phone_mobile: string;
    date_joined: Date;
    phone_home: string;
    phone_office: string;
    city: string;
    type_document: string;
    document: number;
    id_group: number;
    token: string;
    modules: Modules[]
}

export interface Modules {
    name: string,
    path: string,
    icon: string,
    nickname: string;
} 