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
  id: number;
  text: string;
  background: string;
  character?: Character;
  choices?: Choice[];
  shouldFade?: boolean;
}

export interface Scenario {
  scenes: Scene[];
}

export interface LocalScene extends Scene {
  choices?: Choice[];
} 