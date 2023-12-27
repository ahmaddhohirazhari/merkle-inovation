export interface UserResultInterface {
  address?: Address;
  id?: number;
  email?: string;
  username?: string;
  password?: string;
  name?: Name;
  phone?: string;
  __v?: number;
}

export interface Address {
  city?: string;
  street?: string;
  number?: number;
  zipcode?: string;
  geolocation?: Geolocation;
}

export interface Geolocation {
  lat?: string;
  long?: string;
}

export interface Name {
  firstname?: string;
  lastname?: string;
}

export interface formLogin {
  username: string;
  password: string;
}
