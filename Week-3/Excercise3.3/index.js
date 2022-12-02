function createIncrement()
 {let count=0;
  functionincrement() {
    count++;
  }
  let message=`Count is${count}`;
  function log() {
    console.log(message);
  }
  return[increment,log];}
  const[increment,log] =createIncrement();
  increment();
  increment();
  increment();
  log();// What is logged?
