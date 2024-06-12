//==============================================================Arrow function introduce in es6 alternate of functions
//==============================================================1) Function declaration
// function abc(){
//     console.log("function declaration call...")
// };
// abc()
//==============================================================2) Function expression / anonymous function

//==============================================================3) arrow function / fat arrow function 


// let func = ()=>{
//     console.log("arrow function")
// }
// func()


//==============================================================arrow function me single line hoto {} nahi lagayenge
//     let func = (a,b)=>a+b
//     func(10,20)
//==============================================================agar funtion ko 1 argument de rahe ho or function 1 parameter reseve krraha ho to () round bracket nahi lagayenge

//==============================================================HIGHER ORDER FUNCTION
// HIGHER ORDER FUNCTION WO FUNCTION HOTEY HE JO APNEY PARAMETER ME DOSRA FUNCTION RESEVE KRTE HEN


// let abc = (a)=>{
//     return a()
//     // console.log("abd function call ...")
// }
// let xyz = ()=>{
//     console.log("xyz function call ...")
// }
// abc(xyz)
// xyz()


// let abc = ()=>{
//     return ()=>{
//         console.log("call abc()()")
//         return "call console.log(abc()()) "
//     }
// }
// abc()()
// console.log(abc()());


// let num= (a)=>{
//     return (b)=>{
//         return (c)=>{
//             return (d)=>{
//                 console.log(a + b + c + d)
//             }
//         }
//     }
// }
// num(5)(5)(10)(2)


// let abc =()=>{
//     console.log("abdullah print after 3 second")
// }

//==============================================================ARRAY METHOD
//==============================================================1) Map()

// let arr = [1,2,3,4,5,6,7,8,9];
// let newArray = arr.map((element,index)=>{
//     console.log(element,index)
//     return 100
//     return element + 10
// });
// console.log(newArray)


// let arr = [1,2,3,4,5,6,7,8,9];
// arr.forEach((element,index)=>{
//     console.log(element,index)
// })


// let arr = [ {num:1},{num:2},{num:3},{num:4},{num:5},{num:6},{num:7}];
// let total = arr.reduce((s,e)=>{
//     return s + e.num;
// }, 0);
// console.log(total);

// let cities = ["karachi","lahoe","peshawar","islamabad"];
// let newcities = cities.findIndex((ele,index)=>{
//     return ele === "karachi"
// })
// console.log(newcities);