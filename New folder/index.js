const filterRangeInPlace = (arr, a, b) => {
    
    for(let i = 0; i < arr.length; i++){
        let val = arr[i]

        if(val > a && val < b){
            arr.splice(i, 1)
            i--;
        }
    }
}

const copySorted = arr => arr.slice().sort()

const array = [1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

const unsorted = [4, 5, 1, 2, 3, 100, 20, 9, 8, 7, 0]


console.table(copySorted(unsorted))