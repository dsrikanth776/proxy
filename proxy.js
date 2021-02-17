const target = {
    firstName: "srikanth",
    lastName: "chowdary"
  };
  
  const handler1 = {};
  
  const proxY1 = new Proxy(target, handler1);

  console.log(proxY1.firstName); 
console.log(proxY1.lastName); 


const targeT = {
    fristname: "srikanth",
    lastname: "chowdary"
  };
  
  const handler2 = {
    get: function(targeT, property, receiver) {
      return "dabbara";
    }
  };
  
  const proxy2 = new Proxy(targeT,handler2);


  console.log(proxy2.firstname); 

  console.log(proxy2.lastname); 


  const Target = {
    firstNAME: 'srikanth',
    lastNAME: 'chowdary'
}

const Handler3 = {
    get:function (Target, property,reciver) 
    {
        return property === 'fullName' ?
            `${Target.firstNAME} ${Target.lastNAME}` :
            Target[property];
    }
};

const proxy3 = new Proxy(Target, Handler3);

console.log(proxy3.firstNAME);
// srikanth
console.log(proxy3.lastNAME);
//chowdary
console.log(proxy3.fullName);
//srikanth chowdary

const tarGet= {
    FirstName: 'srikanth',
    LastName: 'chowdary',
    age: 23
}

const hanDler = {
    set(tarGet, property, value) {
        if (property === 'age') {
            if (typeof value !== 'number') {
                throw new Error('Age must be a number.');
            }
            if (value < 18) {
                throw new Error('The user must be 18 or older.')
            }
        }
        tarGet[property] = value;
    }
};

const ProxyUser = new Proxy(tarGet, hanDler);

console.log(ProxyUser.FirstName);
//srikanth
console.log(ProxyUser.LastName);
//choudary
console.log(ProxyUser.age);
//23



const monster1 = {
    secret: 'easily scared',
    eyeCount: 4
  };
  
  const handler4 = {
    get: function(target, property, receiver) {
      if (property === 'secret') {
        return `${target.secret.substr(0, 4)} ... shhhh!`;
      }
      //using reflect
      return Reflect.get(...arguments);
    }
  };
  
  const proxy4 = new Proxy(monster1, handler4);
  
  console.log(proxy4.eyeCount);
  // expected output: 4
  
  console.log(proxy4.secret);
  // expected output: "easi ... shhhh!"


  const monster2 = {
    howru: 'iam good',
    tellmeurno: 9398494491
  };
  
  const handler5 = {
    get: function(target, property, receiver) {
      if (property === 'howru') {
        return `${target.howru.substr(0, 8)}  hello!`;
      }
      //using reflect
      return Reflect.get(...arguments);
    }
  };
  
  const proxy5 = new Proxy(monster2, handler5);
  

  console.log(proxy5.howru);
  // iam good hello!

  console.log(proxy5.tellmeurno);
  // 9398494491

  const monster3 = {
      you: 'i love you ',
    giftprice:2300 
  };
  
  const handler6 = {
    get: function(target, property, receiver) {
      if (property == 'you') {
        return `${target.you.substr(0,12)}  .....i to you`;
      }
      //using reflect
      return Reflect.get(...arguments);
    }
  };
  
  const proxy6 = new Proxy(monster3, handler6);
  

  console.log(proxy6.you);
  // i love you  .....i to you

  console.log(proxy6.giftprice);
  // 2300


  const TARGET = {
    firstName: 'srikanth',
    lastName: 'chowdary',
    email: 'sree@gmail.com',
}
const HANDLER = {
    get(TARGET, property)
     {
        console.log(`Property ${property} has been read.`);
        return TARGET[property];
    }
}
const proXY = new Proxy(TARGET, HANDLER);

console.log(proXY.firstName);
//srikanth

console.log(proXY .lastName);
//chowdarry
console.log(proXY.email);
//sree@gmail.com
