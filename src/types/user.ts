export type AuthData = {
  login: string;
  password: string;
};

export type User = {
  id: string;
  email: string;
  token: string;
  name: string;
  avatarUrl: string;
  isPro: boolean;
}
