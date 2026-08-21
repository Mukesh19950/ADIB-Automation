export interface UserCredential {
    cif: string;
    username: string;
    password: string;
}

export interface UserData {
    maker: UserCredential;
    checker: UserCredential;
    admin: UserCredential;
    invaliduser: UserCredential;
}