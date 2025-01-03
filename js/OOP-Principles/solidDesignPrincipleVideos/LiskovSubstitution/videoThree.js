// extending classes:
/* Liskov principle: all sub classes should be applicable to functions that apply to parent class. */
class Shape{}


class Rectangle extends Shape{
  constructor(width, height){
    this.width = width;
    this.height = height;
  }

  setWidth(width){
    this.width = width;
  }

  setHeight(height){
    this.height = height;
  }

  area(){
    return this.width * this.height;
  }
}

class Square extends Shape{ /* instead of rectangle since it has different parameters */
  setWidth(width){
    this.width = width;
    this.height = width;
  }

  setHeight(height){
    this.height = height;
    this.width = height;

  }

  area(){
    return this.width * this.height;
  }
}

function increseRectangleWidth(rectangle){
  rectangle.setWidth(rectangle.width + 1);
  /*  */
}
const rectangle1 = new Rectangle(10, 2);
const rectangle2 = new Square(5,5);

increseRectangleWidth(rectangle1);
increseRectangleWidth(rectangle2)