const shifrlash = (e, n, raqam)=>{
    try {
        

        return Number((BigInt(raqam)**BigInt(e))%BigInt(n));

    } catch (error) {
        console.log(error);
    }
}

module.exports = shifrlash;