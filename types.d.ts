export interface Player {
  id: string;
  player: PlayerInfo;
}

export interface PlayerInfo {
  name: string;
  phone: PlayerPhone;
}

export interface PlayerPhone{
    phone : string
}
