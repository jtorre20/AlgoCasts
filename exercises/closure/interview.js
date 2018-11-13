//What is the output?

let num = 4;
function outer(){
  let num = 2;
  function inner(){
    num++;
    var num = 3;
    console.log(num)
  };
  inner();
}
outer();

// => 3



