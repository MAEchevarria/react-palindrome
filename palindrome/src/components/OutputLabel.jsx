function OutputLabel(props) {
    const palindromeCheck = props.palindromeCheck
    if (palindromeCheck === "") {
        return null;
    }
    return (
        <div>
            <h1>{ palindromeCheck ? 'True' : 'False' }</h1>
        </div>
    )
}
export default OutputLabel