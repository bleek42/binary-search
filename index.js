/*
  ? Given a sorted array of size N and an integer K, find the position at which K is present in the array using binary search.
  /**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} k
 * @returns {number}
*/

function binarysearch(arr = [1, 2, 3, 4, 5], n = arr.length, k = 4) {
	let i = 0;
	let result = -1;
	while (n > i) {
		if (arr[i] === k) result = i;
		i++;
	}
	return result;
}
