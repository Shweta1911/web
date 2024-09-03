function countOcc(string1){
    let vowels=0
            let whiteSpace=0
            for(let i=0;i<string1.length;i++){
                if(string1.charAt(i)=='a' ||string1.charAt(i)=='e'||string1.charAt(i)=='i'||string1.charAt(i)=='o'||string1.charAt(i)=='u'){
                    vowels++
                }    
                if(string1.charAt(i)==' ')  
                whiteSpace++          
            }
            let consonants=string1.length-(vowels+whiteSpace)
            console.log(`Number of vowels are ${vowels}`)
            console.log(`Number of consonants are ${consonants}`)
}

countOcc("Hi I am shweta")

