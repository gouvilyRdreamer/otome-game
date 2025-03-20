interface Character {
  id: number;
  name: string;
  image: string;
}

interface Choice {
  text: string;
  response: string;
  favorabilityChange: number;
  nextScene?: number;
}

interface Scene {
  text: string;
  background: string;
  character?: Character;
  choices?: Choice[];
}

interface Scenario {
  scenes: Scene[];
}

export type { Character, Choice, Scene, Scenario }; 