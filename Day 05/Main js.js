console.clear();
console.log(" Problem Sheet");

// --------------------------------------------------
// 1) getUserInitials(user)
// --------------------------------------------------
function getUserInitials(user) {
  const first = user?.firstName?.trim()?.[0] || "";
  const last = user?.lastName?.trim()?.[0] || "";
  return (first + last).toUpperCase();
}

// --------------------------------------------------
// 2) countProperties(obj)
// --------------------------------------------------
function countProperties(obj) {
  return Object.keys(obj).length;
}

// --------------------------------------------------
// 3) invertObject(obj)
// --------------------------------------------------
function invertObject(obj) {
  const result = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[obj[key]] = key;
    }
  }
  return result;
}

// --------------------------------------------------
// 4) removeFalsyValues(arr)
// --------------------------------------------------
function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}

// --------------------------------------------------
// 5) groupByAge(people)
// --------------------------------------------------
function groupByAge(people) {
  return people.reduce((acc, person) => {
    const age = person.age;
    if (!acc[age]) acc[age] = [];
    acc[age].push(person);
    return acc;
  }, {});
}

// --------------------------------------------------
// 6) findMostFrequentElement(arr)
// --------------------------------------------------
function findMostFrequentElement(arr) {
  const freq = new Map();
  let best = null;
  let bestCount = 0;

  for (const x of arr) {
    const c = (freq.get(x) || 0) + 1;
    freq.set(x, c);

    if (c > bestCount) {
      bestCount = c;
      best = x;
    }
  }

  return best;
}

// --------------------------------------------------
// 7) flatten(arr) (any depth)
// --------------------------------------------------
function flatten(arr) {
  const result = [];

  function helper(a) {
    for (const x of a) {
      if (Array.isArray(x)) helper(x);
      else result.push(x);
    }
  }

  helper(arr);
  return result;
}

// --------------------------------------------------
// 8) mergeObjects(...objects) – deep merge
// --------------------------------------------------
function isPlainObject(val) {
  return val !== null && typeof val === "object" && !Array.isArray(val);
}

function mergeObjects(...objects) {
  const result = {};

  for (const obj of objects) {
    for (const key in obj) {
      if (!Object.prototype.hasOwnProperty.call(obj, key)) continue;

      const val = obj[key];

      if (isPlainObject(val) && isPlainObject(result[key])) {
        result[key] = mergeObjects(result[key], val);
      } else {
        result[key] = val;
      }
    }
  }

  return result;
}

// --------------------------------------------------
// 9) rotateArray(arr, k)
// --------------------------------------------------
function rotateArray(arr, k) {
  const n = arr.length;
  if (n === 0) return arr;

  k = k % n;
  if (k === 0) return arr;

  return arr.slice(-k).concat(arr.slice(0, n - k));
}

// --------------------------------------------------
// 10) intersection(nums1, nums2) (no duplicates)
// --------------------------------------------------
function intersection(nums1, nums2) {
  const set1 = new Set(nums1);
  const result = new Set();

  for (const x of nums2) {
    if (set1.has(x)) result.add(x);
  }

  return [...result];
}

// --------------------------------------------------
// 11) groupAnagrams(words)
// --------------------------------------------------
function groupAnagrams(words) {
  const map = new Map();

  for (const word of words) {
    const key = word.split("").sort().join("");
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(word);
  }

  return [...map.values()];
}

// --------------------------------------------------
// 12) moveZerosToEnd(arr) (in-place)
// --------------------------------------------------
function moveZerosToEnd(arr) {
  let write = 0;

  for (let read = 0; read < arr.length; read++) {
    if (arr[read] !== 0) {
      arr[write] = arr[read];
      write++;
    }
  }

  while (write < arr.length) {
    arr[write] = 0;
    write++;
  }

  return arr;
}

// --------------------------------------------------
// 13) longestConsecutiveSequence(nums)
// --------------------------------------------------
function longestConsecutiveSequence(nums) {
  const set = new Set(nums);
  let best = 0;

  for (const num of set) {
    if (!set.has(num - 1)) {
      let current = num;
      let streak = 1;

      while (set.has(current + 1)) {
        current++;
        streak++;
      }

      best = Math.max(best, streak);
    }
  }

  return best;
}

// --------------------------------------------------
// 14) productExceptSelf(nums) (no division)
// --------------------------------------------------
function productExceptSelf(nums) {
  const n = nums.length;
  const result = new Array(n).fill(1);

  let prefix = 1;
  for (let i = 0; i < n; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }

  return result;
}

// --------------------------------------------------
// 15) deepEqual(obj1, obj2)
// --------------------------------------------------
function deepEqual(a, b) {
  if (a === b) return true;

  if (typeof a !== typeof b) return false;
  if (a === null || b === null) return false;

  // arrays
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (!deepEqual(a[i], b[i])) return false;
    }
    return true;
  }

  // objects
  if (typeof a === "object" && typeof b === "object") {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) return false;

    for (const key of keysA) {
      if (!Object.prototype.hasOwnProperty.call(b, key)) return false;
      if (!deepEqual(a[key], b[key])) return false;
    }

    return true;
  }

  return false;
}

// --------------------------------------------------
// 16) serializeObject & deserializeObject
// --------------------------------------------------
function serializeObject(obj) {
  return JSON.stringify(obj, (key, value) => {
    if (value === undefined) return { __type: "Undefined" };

    if (value instanceof Date) {
      return { __type: "Date", value: value.toISOString() };
    }

    if (value instanceof Map) {
      return { __type: "Map", value: [...value.entries()] };
    }

    if (value instanceof Set) {
      return { __type: "Set", value: [...value.values()] };
    }

    return value;
  });
}

function deserializeObject(str) {
  return JSON.parse(str, (key, value) => {
    if (!value || typeof value !== "object") return value;

    if (value.__type === "Undefined") return undefined;
    if (value.__type === "Date") return new Date(value.value);
    if (value.__type === "Map") return new Map(value.value);
    if (value.__type === "Set") return new Set(value.value);

    return value;
  });
}

// ==================================================
//  TEST CASES (Console Output)
// ==================================================
console.log("\n--- TEST CASES ---");

// 1
console.log("1) getUserInitials:", getUserInitials({ firstName: "Rahul", lastName: "Sharma" }));

// 2
console.log("2) countProperties:", countProperties({ a: 1, b: 2, c: 3 }));

// 3
console.log("3) invertObject:", invertObject({ a: 1, b: 2 }));

// 4
console.log("4) removeFalsyValues:", removeFalsyValues([0, 1, false, 2, "", 3, null, undefined]));

// 5
console.log("5) groupByAge:", groupByAge([
  { name: "A", age: 24 },
  { name: "B", age: 30 },
  { name: "C", age: 24 },
]));

// 6
console.log("6) findMostFrequentElement:", findMostFrequentElement([1, 2, 2, 3, 3, 3]));

// 7
console.log("7) flatten:", flatten([1, [2, 3], [4, [5, 6]]]));

// 8
console.log("8) mergeObjects:", mergeObjects(
  { user: { name: "A", age: 20 }, city: "Chennai" },
  { user: { age: 21 }, active: true }
));

// 9
console.log("9) rotateArray:", rotateArray([1, 2, 3, 4, 5], 2));

// 10
console.log("10) intersection:", intersection([1, 2, 2, 3], [2, 2, 4]));

// 11
console.log("11) groupAnagrams:", groupAnagrams(["eat","tea","tan","ate","nat","bat"]));

// 12
const mz = [0, 1, 0, 3, 12];
console.log("12) moveZerosToEnd:", moveZerosToEnd(mz));

// 13
console.log("13) longestConsecutiveSequence:", longestConsecutiveSequence([100,4,200,1,3,2]));

// 14
console.log("14) productExceptSelf:", productExceptSelf([1, 2, 3, 4]));

// 15
console.log("15) deepEqual:",
  deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } }),
  deepEqual([1,2,[3]], [1,2,[4]])
);

// 16
const original = {
  name: "Dharu",
  x: undefined,
  dob: new Date("2020-01-01"),
  skills: new Set(["JS", "HTML"]),
  marks: new Map([["math", 95], ["cs", 99]])
};

const serialized = serializeObject(original);
const deserialized = deserializeObject(serialized);

console.log("16) serialized:", serialized);
console.log("16) deserialized:", deserialized);
console.log("16) Date?", deserialized.dob instanceof Date);
console.log("16) Set?", deserialized.skills instanceof Set);
console.log("16) Map?", deserialized.marks instanceof Map);
