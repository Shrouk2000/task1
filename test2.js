const member={
    age:30,
    working:false,
    country:"egypts",
    hobbies:["Reading","Swimming","Programming"],

};
 const {age:a,work:w,country:c,hobbies:[h1,h2,h3],}=member;
console.log('My Age Is ${a} and iam ${w? "":"Not"} Working');
console.log('I live in ${c}');
console.log('My Hobbies: ${h1} And${h3}');
  
