/* In this example, not all entities will abide by the same functions.
So, functions are defined separately, and assigned as appropriate to entities.
*/
class entity{
  constructor(name){
    this.name = name;
  }
}

const one = {
  move(){
    console.log('as;dklfj')
  }
}
const two = {
  stay(){
    console.log('gsd;lkjfngb')
  }

}
const three = {
  jump(){
    console.log('dsd;ljfh')
  }
}

class Character extends entity{
  constructor(name, attack, health){
    super(name);
    this.attack = attack;
    this.health = health;
  }
}
// Here is where character functions are assigned.
Object.assign(Character.prototype, one);
Object.assign(Character.prototype, two);
Object.assign(Character.prototype, three);

class Wall extends entity{
  constructor(name, health){
    this.name = name;
    this.health = health;
  }
}
Object.assign(Wall.prototype, one);
Object.assign(Wall.prototype, two);