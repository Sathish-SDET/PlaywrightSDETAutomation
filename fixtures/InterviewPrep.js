// 1. Get the occurence of a character in a string
   function charCount(str)
    {
        const map = new Map();
        for(let char of str)
        {
            map.set(char,(map.get(char)||0)+1);
        }
        return Object.fromEntries(map);
    }
    console.log("The occurence of a character in a String");
    console.log(charCount("automation"));
    
// 2. Print Fibonacci numbers
    function fibonacci (n)
    {
        let a=0,b=1;
        for (let i=0;i<n;i++)
        {
            console.log(a);
            [a,b] = [b,a+b];
        }
    }
    console.log("Printing Fibonacci");
    console.log(fibonacci(10));

//3. Find even numbers
    function findEvenno(arr)
    {
       return arr.filter(num => num%2===0);
    }
    console.log("Get Even numbers");
    console.log(findEvenno([1,2,3,4,5,6,7,8,9,8]));

//4. Reverse String
    function reverseString(str)
    {
        return str.split("").reverse().join("");
    }
    console.log("Reverse String")
    console.log(reverseString("SDET"));

    function reverseManual(str)
    {
        let reversed = "";
        for(let i= str.length - 1; i>=0;i--)
        {
            reversed+= str[i];
        }
        return reversed;
    }
    console.log("Reverse String manually");
    console.log(reverseManual("zyxwvutsrqponmlkjihgfedcba"));

// 5. Check if Palindrome 
    function isPalindrome(num)
    {
        const str = num.toString();
        return str === str.split("").reverse().join("");
    }
    console.log("Is Palindrome");
    console.log(isPalindrome(12321))

    function PalindromeManual(num)
    {
        let original = num;
        let reversed =0;

        while(num>0)
        {
            reversed = reversed*10 + (num%10);
            num = Math.floor(num/10);
        }
        return original === reversed;
    }
    console.log("Is Palindrome Manual");
    console.log(PalindromeManual(12321));

// 6. Remove Duplicates
    function removeDups(str)
    {
        return [...new Set(str)].join("");
    }
    console.log(removeDups("aabbccdd"));

// 7. Bubble Sort
    function bubbleSort(arr)
    {
        for ( let i=0; i<arr.length; i++)
        {
            for(let j=0;j<arr.length-i-1;j++)
            {
                if(arr[j]>arr[j+1])
                {
                    [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                }
            }
        }
        return arr;
    }
    console.log(bubbleSort([5,3,8,2]));

//8. Transform
    function transform(str)
    {
        return str.split(" ").join("-");
    }
    console.log(transform("Im looking for SDET"));

// 9. Return characters that appear more than once (case-sensitive) 
    function repeatedCharacters(str)
    {
        const map={};
        let result="";
        for ( let char of str)
        {
            let lower = char.toLowerCase();
            map[lower] = (map[lower]||0)+1;
        }
        const added = new Set();
        for ( let char of str)
        {
            let lower = char.toLowerCase();
            if(map[lower]>1 && !added.has(lower))
            {
                for( let c of str)
                {
                    if(c.toLowerCase()===lower)
                    {
                        result+=c;
                    }
                }
                added.add(lower);
            }
        }
        return result;
    }
    console.log(repeatedCharacters("aBCcDdAabcd"));
// Task
// 1.Print the string reverse
function reverseWords(sentence)
{
    return sentence.trim().split(/\s+/).reverse().join(" ");
} 
console.log(reverseWords("I love JS"));

// 2. First Non-Repeating Character
function firstNonRepeating(str)
{
    const map = {};
    for(let char of str)
    {
        map[char] = (map[char]||0)+1;
    }
    for (let char of str)
    {
        if(map[char]===1) return char;
    }
    //return char;
} 
console.log(firstNonRepeating("swiss"));

// 3. Flatten Nested Array
function flattenArray(arr)
{
    let result = [];
    for(let item of arr)
    {
        if(Array.isArray(item))
        {
            result= result.concat(flattenArray(item));
        }
        else
        {
            result.push(item);
        }
    }
     return result;
}
console.log(flattenArray([1,[2,[3,4]],5]));