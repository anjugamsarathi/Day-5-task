// Print Odd number in an array using anonymous function

const arr = [1,2,3,4,5,6,7,8,9];
const arr1 = [];

arr.forEach(function(n){
    if(n % 2 != 0){
        arr1.push(n);
    }
});
console.log(`${arr1}`);


// // Print Odd number in an array using IIFE function

(function display(arr=[])
{
            let s1=[];
            for(var i in arr)           
                {
                           if(arr[i]%2!=0)    
                             {
                                         s1.push(i);
                              }
                            }
                            console.log(`${s1}`);  
                    
                     })([2,3,4,5,6,7,8,9]); 
                    
                    
                    
                     // convert all the strings to title caps in a string using Anonymous function
                    
                     let titleCase = function(string){
                        var sentence = string.toLowerCase().split(" ");
                        for (var i=0;i<sentence.length;i++){
                            sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
                        }
                        console.log(sentence.join(" "));
                     }
                     titleCase("this is tamilarasi given guvi day 5 task");
                    
                     // convert all the strings to title caps in a string using IIFE function

                     
                     (function caps(n){
                      let sentence1 = n.toLowerCase().split(" ");
                      for(i=0;i<sentence1.length;i++){
                          sentence1[i] = sentence1[i][0].toUpperCase() + sentence1[i].slice(1);
                      }
                      console.log(sentence1.join(" "));
                   })("this is tamilarasi given guvi day 5 task");
                  
                  
                  
                  // sum of all number in an array using anonymous function
                  
                  const array = [1,2,3,4,5];
                  
                  [array].forEach(function(m){
                      var s = 0;
                      for(i=0;i<m.length;i++){
                          s = s + m[i];
                      }
                      console.log(`${s}`);
                  });                     
// sum of all number in an array using IIFE function

(function sum(n){
  var s = 0;
  for(i=0;i<n.length;i++){
      s = s + n[i];
  }
  console.log(`${s}`);  
})([1,3,5,7]);




// return all prime numbers in an array using anonymous function

const primeN = [1,2,3,4,5,6,7,8,9,10,11];

[primeN].forEach(function(n){
let count
let s1=""
for( var i=0;i<primeN .length; i++ )    
{
  count=0
   for(var j=1;j<=primeN[i];j++)  
   {
if(primeN[i]%j==0)    
{  
count=count+1   
}
}
if(count==2)            
{                            
s1=s1+" " +primeN[i]
}
}
console.log(`Prime numbers  :  ${s1}`) ;                   
});

// return all prime numbers in an array using IIFE function

(function prime(numbers=[]){   
let count;
let s1="";
for( var i=0;i<numbers .length; i++ )
{
count=0 
for(var j=1;j<=numbers[i];j++)
{ if(numbers[i]%j==0)
{  
count=count+1   
}
}
if(count==2)            
{                          
s1=s1+" " +numbers[i]
}
}
console.log(`Prime Numbers : ${s1}`) 
})([2,3,4,5,6,7,8,9,10,11]);


// return all the palindromes in an array using anonymous function

var palind=function(a){
var res="";
var ans="";
for(i=0;i<a.length;i++)
{
res+=a[i];
var count=0
for(j=0;j<res.length;j++)
{
if(res[j]===res[((res.length-1)-j)])
{
count++
}
}
if(count===res.length)
{
ans+=res+" "
}
res="";
}
return ans;
}
console.log(palind(["Tamil","said","life","is a", "nathure"]));

// // return all the palindromes in an array using IIFE function

(function palindr(a){
  var res="";
  var ans="";
  for(i=0;i<a.length;i++)
  {
  res+=a[i];
  var count=0
  for(j=0;j<res.length;j++)
  {
  if(res[j]===res[((res.length-1)-j)])
  {
  count++
  }
  }
  if(count===res.length)
  {
  ans+=res+" "
  }
  res="";
  }
  console.log(ans);  
})(["Tamil","did","refer","thelugu"]);


//rotate an array by k times using anonymous

var rotate=function(a,k){
n=a.length;
c=[];
d="";
for(i=0;i<n;i++)
{
    c[(i+k)%(n)]=a[i]
}
for(i=0;i<c.length-1;i++)
{
    d+=c[i]+" "
}
d+=c[c.length-1]
return d;
}
console.log(rotate([1,2,3,4,5],2));

////rotate an array by k times using IIFE

(function rotate(a,k){
  n=a.length;
c=[];
d="";
for(i=0;i<n;i++)
{
    c[(i+k)%(n)]=a[i]
}
for(i=0;i<c.length-1;i++)
{
    d+=c[i]+" "
}
d+=c[c.length-1]
console.log(d);
})([1,2,3,4,5],3); 


//return median of two sorted arrays of the same size using anonymous

var arr5=function(a,b){
  var c=[];
  var n=a.length;
  var p=b.length;
  var i=0;
  var j=0;
  var med=0;
  while(i<n && j<p)
  {
      if(a[i]<b[j])
      {
          c.push(a[i])
          i++
      }
      else
      {
          c.push(b[j])
          j++
      }
  }

   if(i<n)
   {
       for(let k=i;k<n;k++)
       {
           c.push(a[k])
       }
   }
   else if(j<p)
   {
       for(let m=j;m<p;m++)
       {
           c.push(b[m])
       }
   }
   if(c.length%2===0)
   {
       med=(c[(c.length/2)-1]+c[c.length/2])/2
   }
   else
   {
       med=c[Math.floor(c.length/2)]
   }
   return med;

}
console.log(arr5([1,2,3,7],[4,5,6,8]));

//return median of two sorted arrays of the same size using anonymous

(function median(a,b){
  var c=[];
  var n=a.length;
  var p=b.length;
  var i=0;
  var j=0;
  var med=0;
  while(i<n && j<p)
  {
      if(a[i]<b[j])
      {
          c.push(a[i])
          i++
      }
      else
      {
          c.push(b[j])
          j++
      }
  }

   if(i<n)
   {
       for(let k=i;k<n;k++)
       {
           c.push(a[k])
       }
   }
   else if(j<p)
   {
       for(let m=j;m<p;m++)
       {
           c.push(b[m])
       }
   }
   if(c.length%2===0)
   {
       med=(c[(c.length/2)-1]+c[c.length/2])/2
   }
   else
   {
       med=c[Math.floor(c.length/2)]
   }
   console.log(med);

}) ([1,2,3,7],[4,5,6,8]); 


// remove duplicates from an array using anonymous

var arr6=function(a){
  var b=[];
  var n=a.length;
  for(let i=0;i<n-1;i++)
  {
      for(let j=i+1;j<n;j++)
      {
          if(a[i]===a[j])
          {
              delete a[j]
          }
      }
  }
  for(let i=0;i<a.length;i++)
  {
      if(a[i]%10===Math.floor(a[i]%10))
      {
          b.push(a[i])
      }
  }
  let c=""
  for(let i=0;i<b.length-1;i++)
   {
       c+=b[i]+" ";
  }
  c+=b[b.length-1];
   return c;

}
console.log(arr6([1,1,2,1,2,3,3,3,4,3,3,3,3,2,2,2]));

// remove duplicates from an array using IIFE

(function remove(a){
  var b=[];
  var n=a.length;
  for(let i=0;i<n-1;i++)
  {
      for(let j=i+1;j<n;j++)
      {
          if(a[i]===a[j])
          {
              delete a[j]
          }
      }
  }
  for(let i=0;i<a.length;i++)
  {
      if(a[i]%10===Math.floor(a[i]%10))
      {
          b.push(a[i])
      }
  }
  let c=""
  for(let i=0;i<b.length-1;i++)
   {
       c+=b[i]+" ";
  }
  c+=b[b.length-1];
   console.log(c);

})([1,1,2,1,2,3,3,3,4,3,3,3,3,2,2,2]);



// print Odd numbers using arrow functions

let printOdd = (n=[]) => {
  let s1="";
  for(var i in n){
      if(n[i]%2!=0){
      s1=s1+" "+n[i]
  }
                        }
               console.log(`odd numbers are :${s1}`)  
}
printOdd([1,2,3,4,5,6,7,8,9]);

//convert all the strings to title caps in a string array

let titleCaps = (string1) => {
  var sentence = string1.toLowerCase().split(" ");
      for (var i=0;i<sentence.length;i++){
          sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
      }
      console.log(sentence.join(" "));
}
titleCaps("this is tamilarasi given guvi day 5 task");

// return all prime numbers in an array using arrow function

let primeNum = (n=[]) => {
  let count
  let s1=""
  for( var i=0;i<primeNum.length; i++ )    
   {
      count=0
       for(var j=1;j<=primeNum[i];j++)  
       {
    if(primeNum[i]%j==0)    
   {  
   count=count+1   
   }
   }
    if(count==2)            
  {                            
  s1=s1+" " +primeNum[i]
  }
  }
  console.log(`Prime numbers are:  ${s1}`) ;
}
primeNum([1,2,3,4,5,6,7,8,9]);

// sum of all number in an array using arrow function

let sumOf = (n=[]) => {
  var s = 0;
      for(i=0;i<n.length;i++){
          s = s + n[i];
      }
      console.log(`${s}`);
}
sumOf([1,2,3,4,5]);

// return all the palindromes in an array using arrow function

let palindrome = (n=[]) => {
var res="";
var ans="";
for(i=0;i<n.length;i++)
{
res+=n[i];
var count=0
for(j=0;j<res.length;j++)
{
if(res[j]===res[((res.length-1)-j)])
{
count++
}
}
if(count===res.length)
{
ans+=res+" "
}
res="";
}
console.log(ans);
}
palindrome(["Tamil","refer","thelugu"]);

