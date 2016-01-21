function sort(arr) {
    var len = arr.length;
    var tmpl = '';
    for (var i=0;i<len;i++) {
        for (var j = 0; j < len; j++) {
            if (arr[i] < arr[j]) {
                tmpl = arr[j];
                arr[j] = arr[i];
                arr[i] = tmpl;
            }
        }
    }

    return arr;
}

sort([1,3,4,2,5,6,2,4,2]);

function find(arr, val) {
    var low = 0;
    var high = arr.length - 1;
    var mid = '';

    while(low <= high) {
        mid = Math.floor((high + low)/2);
        if (arr[mid] === val) {
            return mid;
        }
        else if (arr[mid] > val) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }
    return -1;
}

find([1,3,2,4,5,6,7,3], 8);
