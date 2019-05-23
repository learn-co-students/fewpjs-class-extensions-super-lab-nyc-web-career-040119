// Write your classes here


class Tree {
  constructor(species){
    this.species = species;
  }
  static baseDefinition(){
    return `A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.`;
  }
  static definition(){
    return `A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.`;
  }
}

class Deciduous extends Tree {
  constructor(species, name){
    super(species)
    this.name = name;
  }
  static definition(){
    return `${super.baseDefinition()} Deciduous trees shed their leaves annually.`;
  }
}


class Evergreen extends Tree {
  constructor(species, name){
    super(species)
    this.species = species;
    this.name = name;
  }
  static definition(){
    super.baseDefinition()

    return `${super.baseDefinition()} ${this.name}s keep their leaves all year round.`;
  }
}
Evergreen.definition(species, 'name')
