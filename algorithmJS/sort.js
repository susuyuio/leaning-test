function ArrayList() {
    var arr = [];
    this.insert = function (item) {
        arr.push(item);
    }
    this.toString = function () {
        return arr.join();
    }
    this.bubbleSort = function () {
        var len = arr.length;
        for (var i = 0; i < len; i++) {
            for (j = i + 1; j < len; j++) {
                // console.log(arr[i], arr[j]);
                if (arr[i] > arr[j]) {
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
            // console.log(arr);
        }
        return arr;
    }
}