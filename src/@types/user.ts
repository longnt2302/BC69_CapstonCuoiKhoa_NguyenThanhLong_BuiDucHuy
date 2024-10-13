export type UserResponse = {
  user: Partial<User>;
  token: string;
};

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  birthday: string;
  avatar: string;
  gender: boolean;
  role: string;
};
