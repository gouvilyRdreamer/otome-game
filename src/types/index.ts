export interface Character {
  id: number;
  name: string;
  image: string;
}

export interface Choice {
  text: string;
  responses: string[];
  favorabilityChange: number;
  nextScene?: number;
}

export interface Scene {
  text: string;
  background: string;
  character?: Character;
  choices?: Choice[];
}

export interface Scenario {
  scenes: Scene[];
}

export interface LocalScene extends Scene {
  choices?: Choice[];
} 