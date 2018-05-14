function ArrayList() {
    let arr = [];
    this.insert = function (item) {
        arr.push(item);
    }
    this.toString = function () {
        return arr.join();
    }
    this.bubbleSort = function () {
        let len = arr.length;
        for (let i = 0; i < len; i++) {
            for (j = i + 1; j < len; j++) {
                console.log(arr[i], arr[j]);
                if (arr[i] > arr[j]) {
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
            console.log(arr);
        }
        return arr;
    }
    this.bubbleSort1 = function () {
        let len = arr.length;
        for (let i = 0; i < len; i++) {
            for (j = 0; j < len - 1; j++) {
                console.log(arr[j], arr[j + 1]);
                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
            console.log(arr);
        }
        return arr;
    }
    this.bubbleSort1_1 = function () {
        let len = arr.length;
        for (let i = 0; i < len; i++) {
            for (j = 0; j < len - 1 - i; j++) {
                console.log(arr[j], arr[j + 1]);
                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
            console.log(arr);
        }
        return arr;
    }
    this.selectionSort = function () {
        let len = arr.length, indexMin;
        for (let i = 0; i < len; i++) {
            indexMin = i;
            // 找到最小值
            for (let j = i + 1; j < len; j++) {
                if (arr[j] < arr[indexMin]) {
                    indexMin = j;
                }
            }
            // 最小值非本值时交换
            if (indexMin !== i) {
                let temp = arr[i];
                arr[i] = arr[indexMin];
                arr[indexMin] = temp;
            }
            console.log(arr, indexMin);
        }
        return arr;
    }
    this.insertionSort = function () {
        let len = arr.length, j, temp;
        for (let i = 1; i < len; i++) {
            j = i;
            temp = arr[i];
            console.log(temp, arr[j - 1]);
            while (j > 0 && arr[j - 1] > temp) {
                arr[j] = arr[j - 1];
                j--;
            }
            arr[j] = temp;
        }
        return arr;
    }
}