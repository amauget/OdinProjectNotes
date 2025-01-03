// variables can be assigned within the class, just doesn't use let, const or var..
//Class fields are closer to obj properties than vars.
class Rectangle {
  height = 0;
  width;
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}