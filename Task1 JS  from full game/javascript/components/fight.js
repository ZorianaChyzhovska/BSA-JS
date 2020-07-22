import { controls } from '../../constants/controls';


export async function fight(firstFighter, secondFighter) {
  return new Promise((resolve) => {
    // resolve the promise with the winner when fight is over
  });
}

export function getDamage(attacker, defender) {
  // return damage
}


  //----------------------------------
export function getHitPower(fighter) {
  // return hit power 
  // power = attack * criticalHitChance;, де criticalHitChance - рандомне число від 1 до 2;
  const criticalHitChance = Math.random() + 1;
  return fighter.attack * criticalHitChance;
}

export function getBlockPower(fighter) {
  // return block power
  // power = defense * dodgeChance;, де dodgeChance - рандомне число від 1 до 2.
  const dodjeChance = Math.random() + 1;
  return fighter.defense * dodjeChance;

}
 //----------------------------------