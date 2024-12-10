export interface MemeInfo {
  topText: string;
  bottomText: string;
  imageUrl: string;
}

export interface MemeFromAPI {
  id: string;
  name: string;
  url: string;
  width: number;
  height: number;
  box_count: number;
}
