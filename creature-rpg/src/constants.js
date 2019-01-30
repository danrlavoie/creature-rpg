export const BATTLE_PHASES = {
  ROUND_OVER: '0/5 Wait for user input to start a new round',
  CHECK_ALIVE: '1/5 Check if current actor is alive',
  CHOOSE_ACTION: '2/5 Current actor chooses an action',
  CHOOSE_TARGET: '3/5 Current actor chooses a target',
  EXECUTE_ACTION: '4/5 Current actor action is processed',
  CHOOSE_NEXT_ACTOR: '5/5 Choose the next actor for the current round',
};

export const TARGET_CLASSES = {
  SELF: 'Self',
  SINGLE_FRIENDLY: 'Single friendly creature',
  SINGLE_OPPONENT: 'Single opponent',
  ALL_FRIENDLY: 'All friendly creatures',
  ALL_OPPOSED: 'All opposed creatures',
  ALL: 'All creatures great and small',
};

export const ACTION_CLASSES = {
  OFFENSIVE: 'Offensive',
  DEFENSIVE: 'Defensive',
  HEALING: 'Healing',
  BUFF: 'Buff',
  DEBUFF: 'Debuff',
  UTILITY: 'Utility',
};

export const ATTRIBUTES = {
  HP: 'Health points',
  SP: 'Skill points',
  ATK: 'Attack',
  DEF: 'Defense',
  AGI: 'Agility',
  WIS: 'Wisdom',
  RES: 'Resistance',
};
