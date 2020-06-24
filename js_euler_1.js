function multiples(){
    sum = 0
    i = 0
    while (i < 1000){
        if (i % 3 == 0){
            sum += i
        } else if (i % 5 == 0){
            sum += i
        }
        i++
    }
    console.log(sum)
}

multiples()