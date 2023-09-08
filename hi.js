function noOfDayRequired(capacity, weight) {
  let day = 1;
  let currentCapacity = 0;

  for (i = 0; i < weight.length; i++) {
    currentCapacity += weight[i];
    if (currentCapacity <= capacity) {
      continue;
    } else {
      day = day + 1;
      currentCapacity = weight[i];
    }
  }
  return day;
}

let maxInArray = Math.max(...weights);
let sumOfArray = 0;
for (j = 0; j < weights.length; j++) {
  sumOfArray += weights[j];
}

let s = maxInArray;
let e = sumOfArray;
let ans = -1;
while (s <= e) {
  let mid = Math.floor((s + e) / 2);
  if (noOfDayRequired(mid, weights) <= days) {
    ans = mid;
    e = mid - 1;
  } else {
    s = mid + 1;
  }
}
return ans;
