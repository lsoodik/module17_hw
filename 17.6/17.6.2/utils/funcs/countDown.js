// функция countDown(n), получает число {n} в качестве аргумента и печатает обратный отсчет, начиная с этого числа.

export function countDown(n) {
    let arr = [];

    if (n <= 0 || typeof n !== 'number' ){
        return ("ошибка")
    } 
    
    else {
        for (let i = n; i >=1 ; --i) {
        arr.push(Math.round(i*100)/100);
    }
    return arr;
    }
}
