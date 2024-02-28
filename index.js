const input = require("input");
const isPrime = require("./functions/isPrime");
const colors = require("colors");
const areCoprimes = require("./functions/areCoprimes");
const shifrlash = require("./functions/shifrlash");
const deshifrlash = require("./functions/deshifrlash");


async function kalit( ) {
    // p, q, n, e, 

    let p, q, n, Phi, e, d;


    // p ni kiritish
    while (true) {
        const kiruvchiRaqam = Number(await input.text("p tub sonini kiriting".blue));

        if (isPrime(kiruvchiRaqam)) {
            p = kiruvchiRaqam;
            break;
        }
        else {
            console.log("Siz kiritgan raqam tub son emas !".red);
        }
    }

    // q ni kiritish
    while (true) {
        const kiruvchiRaqam = Number(await input.text("p bilan teng bo'lmagan q tub sonini kiriting".blue));

        if (isPrime(kiruvchiRaqam)) {
            if (p == kiruvchiRaqam) {
                console.log("p va q sonlari teng bo'lishi mumkin emas!".red)
            }
            else {
                q = kiruvchiRaqam;
                break;
            }
        }
        else {
            console.log("Siz kiritgan raqam tub son emas!".red);
        }
    }


    // n soni
    n = p*q;

    // Phini topish
    Phi = (p-1)*(q-1);

    // e sonini kiritish
    while(true){
        const kiruvchiRaqam = Number(await input.text(`Shunday e sonini kiritingki u ${Phi} bilan o'zaro tub bo'lsin.`));

        if(areCoprimes(kiruvchiRaqam, Phi)){
            e = kiruvchiRaqam;
            break;
        }
        else{
            console.log(`Siz kiritgan raqam ${Phi} bilan o'zaro tub emas!`.red);
        }
    }
    

    // d ni topish
    while(true){
        const kiruvchiRaqam = Number(await input.text(`x*${e}mod${n}=1 shartni qanoatlantiruvchi xni kiriting`));

        if((kiruvchiRaqam*e)%Phi == 1){
            d = kiruvchiRaqam;
            break;
        }
        else{
            console.log("Siz kiritgan raqam shartni qanoatlantirmaydi!".red);
        }
    }



    // ochiq kalitlar (e, n)
    // yopiq kalitlar (d, n)


    console.log(`Ochiq kalit: ${e}, ${n}\nYopiq kalit: ${d}, ${n}`);
}



async function main(){
    


    // aniqlash
    const type = await input.select(['kalit yaratish', 'shifrlash', 'deshifrlash']);


    if(type == 'kalit yaratish'){
        return kalit();
    }
    else if(type == 'shifrlash'){
        const e = Number(await input.text("Shifrlash uchun e qiymatini kiriting: "));
        const n = Number(await input.text("Shifrlash uchun n qiymatini kriting: "));
        const raqam = Number(await input.text("Shifrlash uchun raqamni kiriting: "));
        
        if(e && n && raqam){
            console.log(shifrlash(e, n, raqam));
        }
        else{
            console.log("Xatolik! Hamma qiymatlarni kiritganingizga ishonch komil qiling!");
        }
    }
    else if(type == 'deshifrlash'){
        const d = Number(await input.text("Deshifrlash uchun d qiymatini kiriting: "));
        const n = Number(await input.text("Shifrlash uchun n qiymatini kriting: "));
        const raqam = Number(await input.text("Shifrlash uchun raqamni kiriting: "));

        if(d && n && raqam){
            console.log(deshifrlash(d, n, raqam));
        }
        else{
            console.log("Xatolik! Hamma qiymatlarni kiritganingizga ishonch komil qiling!");
        }
    }
    else{
        console.log("xatolik!");
    }


}


main();