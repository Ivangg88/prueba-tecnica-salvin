export interface Userlogin {
  userName: string;
  password: string;
}

export interface UserLoged {
  userName: string;
  token: string;
  isLogged: boolean;
  timeStamp: string;
}

export interface Token {
  userName: string;
  timeStamp: string;
  isLogged: boolean;
}

export interface Mark {
  description: string;
  coordenates: Array<number>;
}
