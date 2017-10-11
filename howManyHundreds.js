function howManyHundreds(number) {
  var x = number;
  var y = number % 100;
  var z = x - y;
  return z / 100;
}

howManyHundreds(6000)