export interface Character {
  id: number;
  name: string;
  image: string;
}

export interface Scene {
  text: string;
  background: string;
  character?: Character;
  choices?: string[];
}

export interface Scenario {
  text: string;
  background: string;
  character?: Character;
  choices?: string[];
}