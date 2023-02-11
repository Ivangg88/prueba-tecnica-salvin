export interface Userlogin {
  userName: string;
  password: string;
}

export interface UserLoged {
  userName: string;
  token: string;
  isLogged: boolean;
  timeStamp: Date;
}

export interface Token {
  userName: string;
  timeStamp: Date;
  isLogged: boolean;
}
