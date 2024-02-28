const areCoprimes = (a, b)=>{
    try {
        const kichik = a>b?b:a
        
        if(a%2 == 0 && b%2==0) return false;

        for(let i = 2; i < kichik; i++){
            const shart1 = a%i == 0;
            const shart2 = b%i == 0;

            if(shart1 && shart2) return false
        }
        return true
    } catch (error) {
        console.log(error);
    }
}

module.exports = areCoprimes;