function Random (prop) {
    const {min, max} = prop;
    const numRandom = Math.floor(Math.random()*(max +1 - min))+ min
    const arrow = "=>"


    return(
        <div id="someCard">
        <p>Random value between {min} and {max} {arrow} {numRandom}</p>
        </div>
    )
}
export default Random