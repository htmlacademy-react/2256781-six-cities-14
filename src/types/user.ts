type TUser = {
  name: string;
  isPro: boolean;
  avatarUrl: string;
}

type TUserData = TUser & {
  email: string;
  token: string;
};

export { type TUserData, type TUser };
