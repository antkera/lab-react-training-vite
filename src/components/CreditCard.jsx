function CreditCard ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {
    const hideNumber = (string) => "⁎⁎⁎⁎ ⁎⁎⁎⁎ ⁎⁎⁎⁎ " + [...string].splice(-4).join("")
    const expires = (month, year) => `Expires ${month.length === 2? month : "0" + month} / ${year[2]}${year[3]}`
const creditCardStyle = {
    backgroundColor: bgColor,
    color : color
}
    return(
        <div id="colorCard" style={creditCardStyle}>
        <div id="logoContainer"><img id="logo" src= {type === "Visa"? "src/assets/images/visa.png": "src/assets/images/master-card.svg"} alt="logo" /></div>
        <p id="cardNum" >{hideNumber(number)}</p>
        <div id="cardInfo" className="flex">
        <div className="flex column ">
        <div id="dataBank" className="flex">
        <p >{expires(expirationMonth, expirationYear)}</p>
        <p >{bank}</p>
        </div>
        <p>{owner}</p>



        </div>
        </div>
        </div>
    )
}
export default CreditCard


