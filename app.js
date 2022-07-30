// Question-1

// function power(a,b){
//     return a**b
// }
// alert(power(3,3));



// Question-2

// function leapyear(year){
//     if((year % 4 == 0) && (year % 100 !== 0) || (year % 400 == 0)){
//         alert(year+" is leap year");
//     }
//     else{
//         alert(year+" is not a leap year")
//     }

// }
// var year = prompt("Enter Year: ");
// leapyear(year)


// Question-3


// function Side(a,b,c){
//     return (a+b+c) / 2

//    }

// function Area(a,b,c){
//     result = Side(a,b,c)*(Side(a,b,c)-a)*(Side(a,b,c)-b)*(Side(a,b,c)-c);
//     console.log(result)
// }
// Area(3,3,4)

// Question-4
// console.log(arr1.reduce((a,b) => a+b,0))

// function avg(sub1,sub2,sub3){
//     var arr1 = []
//     var sum = 0;
//     arr1.push(sub1,sub2,sub3)
//     var len = arr1.length
//     for(i=0; i<len ;i++){
//         sum += arr1[i]
//     }
//     // var avg = sum/len;
//     return sum/len    
    
// }

// // console.log(avg(sub1,sub2,sub3))

// function per(sub1,sub2,sub3){
//     var add1 = sub1+sub2+sub3
//     var total = 300;
//     return (add1/total)*100
// }
// // console.log(per(sub1,sub2,sub3));
//     function mainfunction(){
//         var sub1 = +prompt("Enter Subject 1: ");
//         var sub2 = +prompt("Enter Subject 2: ");
//         var sub3 = +prompt("Enter Subject 3: ");

//         console.log("Average is: " +avg(sub1,sub2,sub3))
//         console.log("Percentage is: " +per(sub1,sub2,sub3))
        
//     }

// mainfunction()

// Question-5

// var a = 'abcdefghi';
// function indexOf(letter){
// flag = 0
// var ind = 0
//     for(i=0;i<a.length;i++){
//         if(letter === a[i]){
//             flag = 1;
//             ind = i
                 
//         }
//     }
//     console.log(ind)
// }
// indexOf('e')


// Question-6

// var str = "My Name Is Aman Nasir";
// res = str.replace(/[aeiouAEIOU]/g,'')
// console.log(res)


// Question-7

// var s = "Pleases read this application and give me gratuity";
// var n = s.length;
// // var vow = ['A','a','E','e','I','i','O','o','U','u']
// function isVowel(ch){
//     switch(ch){
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//             return true
//         default:
//             return false
//     }
// }
// function vowpairs(s,n){
//     var cnt = 0
//     for(i=0; i<n-1; i++){
//         if(isVowel(s[i]) && isVowel(s[i+1])){
//             cnt++;
//         }
//     }
//     return cnt
// }

// console.log(vowpairs(s,n));


// Question-8

// function meter(dis){
//     return dis*1000 
// }
// function feet(dis){
//     return dis*3280
// }
// function inches(dis){
//     return dis * 39370
// }
// function cm(dis){
//     return dis * 100000
// }
// function main(){
//     var dis = +prompt("Enter Distance Between Karachi And Multan In Km: ");
//     console.log("Distance between Karachi and Multan is: "+meter(dis)+" meters");
//     console.log("Distance between Karachi and Multan is: "+feet(dis)+" feet");
//     console.log("Distance between Karachi and Multan is: "+inches(dis)+" inches");
//     console.log("Distance between Karachi and Multan is: "+cm(dis)+" cm");

// }
// main()


// Question-9

// function overtime(){
//     var dis = +prompt("Enter Your Hrs for a week: ")
//     var hrs = 40;
//     var overTimeRate = 12
//     var result = 0
//     var diff = dis - hrs
//     if(dis > hrs){
//         result = diff*overTimeRate;
//     }
//     else{  
//         console.log("No OverTime Did")

//     }
//     console.log("You did "+diff+"hrs overtime");
//     console.log("Your OverTime Paid is "+result)
// }

// overtime()

// Question-10


// function CountingNotes(){
//     var money = +prompt("Enter Your Money: ");
//     var intToStr = money.toString();
//     // var StrToInt = parseInt(intToStr)
//     // console.log(intToStr[1] - 5)
//     var diff = intToStr[1] - 5
//     if(intToStr.length === 3){
//         if(diff < 0){
//             console.log("You Have "+intToStr[0]+" hundred notes "+intToStr[1]+" ten notes ")
//         }
//         else if(diff > 0){
//             console.log("You Have "+intToStr[0]+ " hundred notes "+"1 fifty note "+diff+" ten notes")

//         }
//         else{
//             console.log("You Have "+intToStr[0]+" hundred notes "+"1 fifty notes")
//         }
        
//     }
// }
// CountingNotes()