export type Login = {
  email:string,
  password:string,
  token?:string,
};

export type User = {
  id:number,
  username:string,
  role:string,
  email:string,
  token?:string,
};

export type FullUser = User & {
  password:string,
};

export type CreateUser = {
  email:string,
  username:string,
  password:string,
};
