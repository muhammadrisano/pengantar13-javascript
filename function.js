function penjumlahan(val1, val2){
   
    const result = val1 + val2
    // console.log(result)
    return result
    console.log('function penjunmlahan dijalankan')
}

function perkalian(val1, val2){
    if(typeof(val1) !== 'number' ||  typeof(val2) !== 'number'){
        return 'parameter harus number'
    }
    const result = val1 * val2
    return result
}

// hitunga perkalian nilai1 + nilai2 * nilai 3
const nilai1 = 10
const nilai2 = 20
const nilai3 = 'budi'

const hasilPertambahan = penjumlahan(nilai1, nilai2)

const hasilPerkalian = perkalian(hasilPertambahan, nilai3)

console.log(hasilPerkalian)

// const hasilPenjulahan = penjumlahan(10,30)
// console.log(hasilPenjulahan)

// function sayHelo (nama){
//     const wording = 'helo my nama is '+ nama

//     console.log(wording)
// }

// const myName = "risano"
// sayHelo(myName)