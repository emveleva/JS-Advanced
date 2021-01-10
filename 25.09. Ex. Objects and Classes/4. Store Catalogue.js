function solve(input){
    let obj = {}
  let arr = []
  input.sort((a, b) => a.toUpperCase().localeCompare(b.toUpperCase()))
 
  for(let i = 0; i<input.length ; i++){
      let currentWord = input[i]
      let currentLetter = currentWord[0]
      currentLetter = currentLetter.toUpperCase()
      let nextWord = input[i+1] || input[i]
      let nextLetter = nextWord[0]
      nextLetter = nextLetter.toUpperCase()
 
      arr.push(currentWord)
      obj[currentLetter] = arr
 
      if(currentLetter !== nextLetter){
          arr = []
      }  
  }
 
  for(let el in obj){
      console.log(el);
 
      for(let word of obj[el]){
          word = word.split(' : ')
          console.log(`  ${word[0]}: ${word[1]}`);
      }
  }
}