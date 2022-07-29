function TextInput(props) {
    const handleSubmit = () => {
        let userInput = document.getElementById('user-input')
        if (userInput) {
            props.palindromeChecker(userInput.value)
        }
    }
    return (
        <div>
            <h1>Palindrome?</h1>
            <input id="user-input" type="text" placeholder="Enter word here"/>
            <button onClick={ handleSubmit } type='submit'>Submit</button>
        </div>
    )
}
export default TextInput