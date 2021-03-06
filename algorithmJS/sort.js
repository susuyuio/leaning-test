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
    // 冒泡排序
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
    // 选择排序
    this.selectionSort = function () {
        let len = arr.length,
            indexMin;
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
    // 插入排序
    this.insertionSort = function () {
        let len = arr.length,
            j, temp;
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
    // 归并排序 - 排序合并
    let merge = function (left, right) {
        let result = [],
            il = 0,
            ir = 0;
        while (il < left.length && ir < right.length) {
            if (left[il] < right[ir]) {
                result.push(left[il++]);
            } else {
                result.push(right[ir++]);
            }
        }
        while (il < left.length) {
            result.push(left[il++]);
        }
        while (ir < right.length) {
            result.push(right[ir++]);
        }
        return result;
    }
    // 归并排序 - 分割数组
    let mergeSortRec = function (arr) {
        if (arr.length === 1) {
            return arr;
        }
        let mid = Math.floor(arr.length / 2),
            left = arr.slice(0, mid),
            right = arr.slice(mid);
        return merge(mergeSortRec(left), mergeSortRec(right));
    }
    // 归并排序
    this.mergeSort = function () {
        return mergeSortRec(arr);
    }
    // 快速排序 - 划分过程
    let parition = function (arr, left, right) {
        let i = left,
            j = right,
            pivot = arr[Math.floor((left + right) / 2)];
        while (i <= j) {
            while (arr[i] < pivot) {
                i++;
            }
            while (arr[j] > pivot) {
                j--;
            }
            console.log('i', i, 'j', j);
            if (i <= j) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                i++;
                j--;
            }
            console.log(arr);
        }
        return i;
    }
    // 快速排序 - 快排递归
    let quick = function (arr, left, right) {
        let index;
        if (arr.length > 0) {
            index = parition(arr, left, right);
            if (left < index - 1) {
                console.log('1-1', arr, left, index - 1);
                quick(arr, left, index - 1)
            }
            if (index < right) {
                console.log('1-2', arr, index, right);
                quick(arr, index, right);
            }
        }
    }
    // 快速排序
    this.quickSort = function () {
        quick(arr, 0, arr.length - 1);
        return arr;
    }

    // 二分查找
    this.select = function (val, sortArr, left, right) {
        sortArr = sortArr ? sortArr : arr.sort(function (a, b) {
            return a - b
        });
        left = left ? left : 0;
        right = right ? right : sortArr.length - 1;
        let mid = Math.floor((left + right) / 2);
        if (val === sortArr[mid]) {
            return mid;
        } else if (val < sortArr[mid]) {
            return this.select(val, sortArr, 0, mid - 1);
        } else if (val > sortArr[mid]) {
            return this.select(val, sortArr, mid + 1, arr.length - 1);
        } else {
            return -1;
        }
    }
}