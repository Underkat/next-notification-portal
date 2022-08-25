export interface Player {
  id: string;
  player: PlayerInfo;
}

export interface PlayerInfo {
  id: string;
  name: string;
  phone: PlayerPhone;
}

export interface PlayerPhone {
  phone: string;
}
