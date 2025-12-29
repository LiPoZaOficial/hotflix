
export interface ContentCard {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  modelName?: string;
  badge?: string;
  paymentUrl?: string;
  price?: string;
  videoCount?: string;
}

export enum MenuOption {
  INICIO = 'Início',
  MINHA_CONTA = 'Minha Conta',
  ADMINISTRADOR = 'Administrador'
}

export interface UserProfile {
  name: string;
  avatar: string;
  progress: number;
  remainingAccess: number;
}
