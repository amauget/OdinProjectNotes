const props = [
    { id: 1, name: "Fizz" },
    { id: 2, name: "Buzz" },
    { id: 3, name: "FizzBuzz" },
  ];
  
  const [, , { name }] = props;
  
  console.log(name); // "FizzBuzz"