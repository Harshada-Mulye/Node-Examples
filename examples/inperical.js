let readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  console.log(`Input received by the user: ${input}`);
  let words = input.split(" ");

  let d = words[0];

  let a = words[1];

  let b = words[3];

  if (a == "th" || a == "thou") end1();
  d *= 1000;
  if (a == "in" || a == "inch") end1();
  d *= 12;
  if (a == "ft" || a == "foot") end1();
  d *= 3;
  if (a == "yd" || a == "yard") end1();
  d *= 22;
  if (a == "ch" || a == "chain") end1();
  d *= 10;
  if (a == "fur" || a == "furlong") end1();
  d *= 8;
  if (a == "mi" || a == "mile") end1();
  d *= 3;
  if (a == "lea" || a == "league") end1();

  
  function end1() {
    if (b == "th" || b == "thou") end2();
    d /= 1000;
    if (b == "in" || b == "inch") end2();
    d /= 12;
    if (b == "ft" || b == "foot") end2();
    d /= 3;
    if (b == "yd" || b == "yard") end2();
    d /= 22;
    if (b == "ch" || b == "chain") end2();
    d /= 10;
    if (b == "fur" || b == "furlong") end2();
    d /= 8;
    if (b == "mi" || b == "mile") end2();
    d /= 3;
    if (b == "lea" || b == "league") end2();
  }
  function end2() {
    console.log(d);
  }
});
//rl.close();
