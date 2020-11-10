export type Roles = 'user' | 'boss' | 'admin';

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
  