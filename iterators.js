const iter = {
    counter: 0,
    next(){
        return{
        value: this.counter++,
        done: this.counter >=10
    }
  }
}

let next;

do{
    next =  iter.next();
    console.log(next.value)
  }  
while (!next.done)
/*
myNumbers = {};

// Make it Iterable
myNumbers[Symbol.iterator] = function() {
  let n = 0;
  done = false;
  return {
    next() {
      n += 10;
      if (n == 100) {done = true}
      return {value:n, done:done};
    }
  };
}*/