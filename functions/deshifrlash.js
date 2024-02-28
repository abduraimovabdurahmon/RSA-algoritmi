const deshifrlash = (d, n, raqam)=>{
    try {

        console.log(d, n, raqam)

        return Number((BigInt(raqam)**BigInt(d))%BigInt(n));
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = deshifrlash;