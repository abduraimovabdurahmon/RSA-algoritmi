const isPrime = (raqam)=>{
    try {

        if(raqam == 1) return false;

        for(let i = 2;  i <= Math.sqrt(raqam); i++){
            if(raqam%i==0) return false
        }

        return true;
        
    } catch (error) {
        console.log(error);
    }
}

module.exports = isPrime;