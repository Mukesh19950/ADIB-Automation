export interface UserCredential {
    username: string;
    password: string;
    question: string;
    answer: string;
}

export interface UserData {
    maker: UserCredential;
    checker: UserCredential;
}