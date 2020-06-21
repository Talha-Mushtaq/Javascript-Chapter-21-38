// =================== Chapter 21-25 --- Question 1 ===================  

// var fname = prompt("Enter First Name"),
// lname = prompt("Enter Second Name");

// alert("WELCOME "+fname+" "+lname);

// =================== Chapter 21-25 --- Question 2 ===================  

// var fav = prompt("Enter faviourt mobile model");

// document.write ( 
//     "My faviourt phone is : "+fav+"<br/> Length of string : "+fav.length
//    );

// =================== Chapter 21-25 --- Question 3 ===================  

// var pak = "Pakistani";
// document.write(
//             "String : "+pak+" <br/> Index of 'n' : "+pak.indexOf('n')  
//         );


// =================== Chapter 21-25 --- Question 4 ===================  

// var helo = "Hello World";
// document.write(
//             "String : "+helo+" <br/> Index of 'l' : "+helo.lastIndexOf('l')  
//         );


// =================== Chapter 21-25 --- Question 5 ===================  

// var pak = "Pakistani";
// document.write(
//             "String : "+pak+" <br/> Character at index 3 : "+pak.charAt(3)  
//         );


// =================== Chapter 21-25 --- Question 6 ===================  

// var fname = prompt("Enter First Name"),
// lname = prompt("Enter Second Name");
// var can = fname.concat(" "+lname);

// alert("WELCOME "+can);

// =================== Chapter 21-25 --- Question 7 ===================  

// var city = "Hyderabad";
//  document.write(
//              "City : "+city +
//              "<br/> After replacement  : "+
//               city.replace("Hyder","Islam")
//          );


// =================== Chapter 21-25 --- Question 8 ===================  

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write(
//           message.replace(/and/g,"&")
//     );

// =================== Chapter 21-25 --- Question 9 ===================  

// var val= "472";
// document.write(

//              "Value : "+val+
//              "<br/> Type : "+typeof(val)+
//              "<br/> Value : " + +(val)+
//             "<br/> Value : "+ typeof(+val)

//      );

// =================== Chapter 21-25 --- Question 10 ===================  

// var input = prompt("Enter any string for upper case");
// document.write(

//        "User input : "+input+
//        "<br/>Upper case : " + input.toUpperCase()
//     );

// =================== Chapter 21-25 --- Question 11 ===================  

// var input = prompt("Enter any string for Capital case");
// document.write(

//        "User input : "+input+
//        "<br/>Capital case : " + input.slice(0,1).toUpperCase() +  input.slice(1,input.length)
//     );

// =================== Chapter 21-25 --- Question 12 ===================  

// var num = 35.36 ;
//   var st = num +"";
//  document.write(
//        "Number : "+num+
//        "<br/> Result : " + st.replace('.','') 
//    );

// =================== Chapter 21-25 --- Question 13 ===================  

// var name = prompt("Enter a name without [@...!]");
// var regex = /^[A-Za-z0-9 ]+$/;
// var isValid = regex.test(name);
// if (!isValid) {
//     alert("Please enter a correct user name");
// }


// =================== Chapter 21-25 --- Question 14 ===================  

// var f = prompt("Enter a value for search in a bakery");
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
//  var c = false, i;

//   A.forEach((value,index,array)=>{
  
//     if( value.toLowerCase() === f.toLowerCase() )
//           {
//              c =  true ;
//              i=index;  
//           }
      
//   });
  
//  (c === true)
//   ?
//   document.write(
//         f + " is <b>avaialable</b> at index "+i+" in our bakery"
//         )
//       :
//       document.write(
//         f + " is <b>not avaialable</b> in our bakery"
//         );
  


// =================== Chapter 21-25 --- Question 15 ===================  

// var pass = prompt("Enter password");
// var regex = /^[A-Za-z0-9 ]+$/;

// if( typeof(pass.charAt(0)) != 'string' )
//    {
//     document.write("Enter first characcter must be alphabet");
//    }

// if(pass.length> 6)
//  {
//     document.write("Enter atleast 6 digits ");
      
//  }
// var isValid = regex.test(pass);
//  if (!isValid) 
//     document.write("Enter Only alphabets or numbers ");
  


// console.log(pass.charCodeAt(0));


// =================== Chapter 21-25 --- Question 16 ===================  

    // var university = "University of Karachi";
    
    //  var len = university.length;
    // for(i=0;i<len;i++)
    // {
    //    document.write( university[i]+"<br/>" );            
    // }
       


// =================== Chapter 21-25 --- Question 17 ===================  

// var last = prompt("Enter string");
//  document.write(

//   "User input : "+ last +
//   "<br/>Last character : "+last.charAt(last.length-1)
//  );

// =================== Chapter 21-25 --- Question 18 ===================  


// var  message = "The quick brown fox jumps over the lazy dog"; 
//      var len = message.length;
//      var c=0;
   
//      for(i=0;i<len;i++)
//     {
        
//         (message.slice(i,i+3) === "the" || message.slice(i,i+3) === "The")      // another method to write if statement
//            &&
//          c++;     
//     }
//     document.write("The quick brown fox jumps over the lazy dog<br/> There are " + c + " occurunce of the world 'the'");            


// =================== Chapter 26-30 --- Question 1 ===================  

// var val =   +  prompt("Enter a +ve number");
// document.write(
//                  "number : "+val +
//                  "<br/> round off value : "+Math.round(val) +
//                  "<br/> floor value : "+Math.floor(val)+
//                  "<br/> ceil value : "+Math.ceil(val)
 
//         );

// =================== Chapter 26-30 --- Question 2 ===================  

// var val =   +  prompt("Enter a -ve number");
// document.write(
//                  "number : "+val +
//                  "<br/> round off value : "+Math.round(val) +
//                  "<br/> floor value : "+Math.floor(val)+
//                  "<br/> ceil value : "+Math.ceil(val)
 
//         );


// =================== Chapter 26-30 --- Question 3 ===================

// var val =   +  prompt("Enter a number");
//   (val < 0 )
//    ?
//     document.write("absolute value of "+val+" : "+ (val*-1) )
//   :
//     document.write("absolute value of "+val+" : "+ (val) )


// =================== Chapter 26-30 --- Question 4 ===================  

// var a = Math.random();
// document.write("random dice value : " + Math.ceil(Math.random() * 6) );


// =================== Chapter 26-30 --- Question 5 ===================  

// var a = Math.random();
// var val = Math.ceil(Math.random() * 2) ;

// (val == 2)
//   ?
//   document.write( val+"<br/>random coin value : Heads" )
//   :
//   document.write( val+"<br/>random coin value : Tails" );

// =================== Chapter 26-30 --- Question 6 ===================  

// var a = Math.random();
// document.write("random value from 1 to 100 : " + Math.ceil(Math.random() * 100) );

// =================== Chapter 26-30 --- Question 7 ===================  
// =================== Chapter 26-30 --- Question 8 ===================  

// var n = prompt("Enter value b/w 1 to 10");
// var m = Math.random();
//  m = Math.ceil(Math.random() * 10);
//  (n === m)
//    ? 
//      alert("Congratulation you win") 
//    :
//      alert("You lose");  

// =================== Chapter 31-34 --- Question 1 ===================  

// var date = new Date();
// document.write("Current date = "+date);

// =================== Chapter 31-34 --- Question 2 ===================  

// var date = new Date();
// var m = ["January","February","March","April","Mey","June","August","September","October","November","December"];
// document.write("Current month = "+m[date.getMonth()]);

// =================== Chapter 31-34 --- Question 3 ===================  

//  var date = new Date();
// var d = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];
// document.write("Current month = "+d[date.getDay()]);


// =================== Chapter 31-34 --- Question 4 ===================  


//  var date = new Date();
// var d = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];

//  (d[date.getDay()] === "Sun" || d[date.getDay()] === "Sat")
//             && document.write("<h1>It’s Fun day</h1>");

// =================== Chapter 31-34 --- Question 5 ===================  

// var date = new Date();

// (date.getDate() > 16)
// ?
//  document.write("First fifteen days of the month")
// :
// document.write("Last days of the month")


// =================== Chapter 31-34 --- Question 6 ===================  

// var curr =  new Date();
// var pre ;
// pre = new Date("Jan 1, 1997");

// document.write(

//   "Current Date : "+ curr +
//   "<br/> Elpsedd milli seconds Jan. 1, 1970 : "+ pre.getTime() +
//   "<br/> Elpsedd minutes Jan. 1, 1970 : "+ (pre.getTime() / 1000 * 60) 
// );


// =================== Chapter 31-34 --- Question 7 ===================  


// var curr =  new Date();
// var hour = curr.getHours();

// (hour >12)
// ?
// document.write("<h1>Its PM</h1>")
// :
// document.write("<h1>Its AM</h1>");


// =================== Chapter 31-34 --- Question 8 ===================  

// var laterDate = new Date("Dec 12, 2020");

// document.write(laterDate);

// =================== Chapter 31-34 --- Question 9 ===================  

// var curr = new Date();
// var currMilli = curr.getTime();

// var pre = new Date("April 24, 2020");
// var preMilli = pre.getTime();

// var diff =  currMilli - preMilli ;
// var age =  Math.floor( diff/(1000 * 60 * 60 * 24) ) ;
// document.write( "<b style='color:red'>" + age + "</b> days have passed Since 1st Ramadan,2020");

// =================== Chapter 31-34 --- Question 10 ===================  

// var curr = new Date();
// var currMilli = curr.getTime();

// var pre = new Date("January 1, 2019");
// var preMilli = pre.getTime();

// var diff =  currMilli - preMilli ;
// var age =  Math.floor( diff/(1000 * 60 ) ) ;
// document.write( "<b style='color:red'>" + age + "</b> seconds have passed Since 1st Ramadan,2019");


// =================== Chapter 31-34 --- Question 11 ===================  


// var currDate = new Date();
// var currTime = currDate.getHours();
// var preHour =  currTime - 1;
// var newDate = new Date();
// newDate.setHours(preHour);
// document.write("Current date : "+currDate+
// "<br/>1 hour ago , it was : "+newDate
// );

// =================== Chapter 31-34 --- Question 12 ===================  

// var currDate = new Date();
// alert(currDate);
// var currYear = currDate.getFullYear();
// var preYear =  currYear - 100;
// var newDate = new Date();
// newDate.setFullYear(preYear);
// document.write("Current Year : "+currDate+
// "<br/>100 years ago , it was : "+ newDate
// );


// =================== Chapter 31-34 --- Question 13 ===================  

// var user = + prompt("Enter your age");
// var now  = new Date();
// var dob = now.getFullYear() - user ;
// document.write(
//     "Your age : "+ user+
//      "<br/>Your birthday year : "+ dob   
// );

// =================== Chapter 31-34 --- Question 14 ===================  


// var name = "Talha";
// var nowMonth  = new Date().getMonth();
// var unit = 100;
// var charge = 3;
// var netAmount = unit * charge;
// var late = 10;
// var grossAmount = netAmount + late; 
// document.write(
//     "<div style='border:1px solid; margin:auto;width:50%;text-align:center'>"+
//     "<h1>K-Electric Bill</h1>" +
//     "Customer Name : <b>"+name+"</b><br/>"+   
//     "Month : <b>"+nowMonth+"</b><br/>"+   
//     "Number of units : <b>"+unit+"</b><br/>"+   
//     "Charge per unit : <b>"+charge+"</b><br/>"+   
//     "<br/>Net Amount payable (within Due Date) : <b>"+netAmount+"</b><br/>"+   
//     "Late payment surcharge : <b>"+late+"</b><br/>"+   
//     "Gross Amount payable (after Due Date) : <b>"+grossAmount+"</b><br/>"+
//     "</div>" 
// );


// =================== Chapter 35-38 --- Question 1 ===================  

// tellTime();

//  function tellTime() {
//      var now = new Date();
//      var theHr = now.getHours();
//      var theMin = now.getMinutes();
//      document.write("Current time: "+ theHr + ":" + theMin);
//   }

// =================== Chapter 35-38 --- Question 2 ===================  


// var f = prompt("Enter firstname");
// var l = prompt("Enter last name");
// greet(f,l);
// function greet(f,l)
// {
//     alert("WELCOME "+f.concat(" "+l));    
// }

// =================== Chapter 35-38 --- Question 3 ===================  


// var f = +prompt("Enter first number");
// var s = +prompt("Enter second number");
// var sum = add(f,s);
// document.write(
//     "Sum = "+ sum
// );
// function add(f,s)
// {
//     return (f+s);    
// }


// =================== Chapter 35-38 --- Question 4 ===================  

// var a = +prompt("Enter first number");
// var b = +prompt("Enter second number");
// var op = prompt("Enter operator (/ * + -)");
// var ans=0.0;
// switch(op)
// {
//     case '/':
//         { 
//             ans = a/b;
//             break;
//         }
//         case '*':
//             { 
//                 ans = a*b;
//                 break;
//             }
//             case '+':
//                 { 
//                     ans = a+b;
//                     break;
//                 }
//                 case '-':
//                     { 
//                         ans = a-b;
//                         break;
//                     }
                                   
// }

// document.write("Answer = "+ans);



// =================== Chapter 35-38 --- Question 5 ===================  
//     var sq = square(10);
// document.write("Square = "+sq);

//     function square(a){
//             return(a*a);
//      }

// =================== Chapter 35-38 --- Question 6 ===================  
 
//  document.write( "Fictorial of 4 = "+fic(4) );
// function fic(a)
// {
//     var fic=1;
//     for(i=a;i>1;i--)
//     {
//          fic = fic * i;
//     }
//     return fic;
// }

// =================== Chapter 35-38 --- Question 7 ===================  

//  document.write( "Counting = <br/>"+count(1,5) );
// function count(s,e)
// {
//     var count=s+"<br/>";
//     for(i=s+1;i<=e;i++)
//     {
//         count = count + i + "<br/>";
//     }
//     return count;
// }

// =================== Chapter 35-38 --- Question 8 ===================  


// var b = + prompt("Enter base of triangle");
// var p = + prompt("Enter prependicular of triangle");
// var right = Hypotenuse(b,p);


// document.write(
//     "Prependiculaer of right angle triangle = " +
//        right 
// );

//     function Hypotenuse(b,p)
//     {
//         return ( square(b,p) ) ;
//     }
//     function square(b,p)
//     {
//         return    ( b + p ) ;
//     }


// =================== Chapter 35-38 --- Question 9 ===================  

// var w=5,h=5;

//   document.write(
//            "Area ="+area(w,h)
//   );
  
//   function area(w,h)
//     {
//        return ( w * h );
//     }

// =================== Chapter 35-38 --- Question 10 ===================  


// var p = prompt("Enter a palindrome");
//   (  p.slice(0,1) === p.slice(p.length-1)  )
//    && 
//       alert("This is a palindrome ");


// =================== Chapter 35-38 --- Question 11 ===================  

// 

// =================== Chapter 35-38 --- Question 12 ===================  

// var word = prompt("Enter a paragrapgh to make each word capital");

//  var s =  word.split(" ");
 
//  var con = "";

//  s.forEach(  (val,ind,arr) => {
//       con = con + ( val.slice(0,1).toUpperCase() +  val.slice(1,val.length).toLowerCase()+" "   ) ;  
//  });
 
//  document.write(

//     "You enter this line = "+ word +
//     "<br/> After Capital each word = " +con
    
//     );


//     var s = prompt("Enter a string to check maximum word in string","Web Development Tutorial");
     

//  document.write(
//          "You enter string = " + s +
//          "<br/>Maximum word from string = <b>" + check(s)+"</b>"
//  );
//      function check(s)
//      {
//              var max ;
//             var split = s.split(" ");            
//            var len = split.length ;          
//            var max = split[0];
 
//         for(i=1;i<len;i++)
//         {
//             ( max.length  < split[i].length )
//             &&
//                 ( max = split[i] );
//                 // console.log(split[i])
//         }

//               return (max);
//     }

// =================== Chapter 35-38 --- Question 13 ===================  


// var string = prompt("Enter string","Web Development Tutorial");
// var s = prompt("Enter a value to search");

// var search = search(string.toLowerCase(),s.toLowerCase());

// document.write(
//     "You enter String = "+ string+
//     "<br/>"+s+" s is "+search+" times in string"
// );
// function search(string,s)
// {
//       var count=0;
//        for(i=0;i<string.length;i++)
//        {           
//           ( s === string[i])
//           &&   (count++)
//        }
//        return(count);
// }

// =================== Chapter 35-38 --- Question 14 ===================  

// var c = calcCircumference(5)
// var a = calcArea(5);
// document.write(
//         "Circumferance of circle = "+ c+
//         "<br/>Area of circle = "+a
// );
// function calcCircumference(r){
//  var cir = 2 * 3.14 * r;
//  return cir.toFixed(2);
// }
// function calcArea(r)
// {
//    var a = 3.14 * r * r;
//    return  a.toFixed(2);
// }