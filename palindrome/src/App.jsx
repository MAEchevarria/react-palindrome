import { useState } from 'react'
import TextInput from './components/TextInput'
import OutputLabel from './components/OutputLabel'
import './App.css'

function App() {
  const [palindromeCheck, setPalindrome] = useState("")

  // checks for palindrome words and phrases; strips special characters and whitespace
  const palindromeChecker = (word) => {
    word = word.toString();
    let regWord = word.match(/[a-z0-9]+/gi);
    let forwardWord = regWord.join("").toUpperCase();
    let reversedWord = regWord.join("").split("").reverse().join("").toUpperCase();
    if (forwardWord === reversedWord){
      setPalindrome(true)
    }
    else {
      setPalindrome(false)
    }
  }

  return (
    <div>
      <TextInput palindromeChecker={palindromeChecker}/>
      <OutputLabel palindromeCheck={ palindromeCheck }/>
    </div>
  )
}

export default App
