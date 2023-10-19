function txtSize (txt, num ){
    let newtxt=""
    if (num<txt.length){
        for (i=0; i<num; i++){
            newtxt +=txt.at(i)
        }
        } else {
      console.log("error")
                }
    
    console.log(newtxt)
 }
 txtSize("abcdefghijklmnñ",55)