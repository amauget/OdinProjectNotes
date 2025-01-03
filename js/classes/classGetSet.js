class user{
  constructor(name){
    //Referenced in the setter
    this.name = name;
  }
  
  get name(){
    return this._name;
  }

  set name(value){
    if(value.length < 4){
      alert("Name is too short.");
      return;
    }
    this._name = value;
  }
}

let user = new user('john');
alert(user.name); //john

let user2 = new user('Al'); //Name is too short.