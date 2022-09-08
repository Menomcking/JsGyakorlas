let array = [];

for(let i = 0; i < 20; i++){
    array.push({
        nev: "Cirmos"+ (i + 1),
        eletkor: Math.floor(Math.random() * 9) + 2,
    });
}
for(let i = 0; i < 20; i++){
    if(array[i].eletkor == 2){
        console.log(array[i].nev);
    }
}