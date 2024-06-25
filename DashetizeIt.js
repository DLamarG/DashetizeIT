function dashatize(num) {
    let numberSL = num.toString().length
   let numberS = num.toString()
   if(numberSL==2&&numberS[0]=='-'){return numberS.substring(1,)}
   let numRR = num.toString()=="NaN" ? [] : num.toString().split('')
   let numRR2 =  numRR.map((x,index)=>index!=0 && parseInt(x)%2!=0 ? parseInt(x)%2!=0 && index==0 ? x+'-' : '-'+x+'-' : x)
   let numRR3 = numRR2.map((x,index)=> index==0 && parseInt(x)%2!=0 ? x+'-' : x)
   let chnNum = numRR3;
   let proStr = chnNum.join('').replace(/\--/g, '-');
   if(numRR==''){return "NaN"}
   if(proStr[proStr.length -1]!='-' && proStr[0]!='-'){
     return proStr
   }
   if(proStr[proStr.length -1]=='-' && proStr[0]!='-'){
     return proStr.substring(0,proStr.length -1)
   }
   if(proStr[proStr.length -1]!='-' && proStr[0]=='-'){
     return proStr.substring(1,)
   }
   if(proStr[proStr.length -1]=='-' && proStr[0]=='-'){
     return proStr.substring(1,proStr.length -1)
   }
 }

 console.log(dashatize(274)) //"2-7-4"
 console.log(dashatize(5311))//"5-3-1-1"
 console.log(dashatize(86320))//"86-3-20"
 console.log(dashatize(974302))//"9-7-4-3-02"