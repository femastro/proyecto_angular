export type Roles = '1' | '2' | '3';

export interface Users {
    username : string;
    passowrd : string;
}

export interface UserResponse extends Users {
    message: string;
    token: string;
    userId: number;
    role: Roles;
  }
  