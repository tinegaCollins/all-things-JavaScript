
const names = ['adam', 'eve', 'abel']
//adds to the end of an array
names.push('cain')
//adds to the start of an array
names.unshift('abra')
//removes the last array 
names.pop()
//removes the first array
names.shift()
//clones the array 
let newNames = names.slice()
//determines if value is an array
Array.isArray(names)

//destructuring
//asigns a,b,c to respective array indexes
let [a,b,c] = names

const vegetables = ['🍅','🍆','🥕','🫑','☹️','🎆','🧨']
let [tomato,eggplant,carrot,pepper] = vegetables


//asigning a default value 

const fruits = ['🍇','🍈','🍐','🍑','🍏','🍎','🥭','🍍']
let [paw,melon, mango = '🥭'] = fruits


//spread operator , rest parameter
//rest parameter, gets the last elements
let[one,two,three, ...rest] = vegetables
let[a1,b1,c1,...allTheRest] = fruits

//spread operator creates a clone

let newFruits = [...fruits]
//merging two arrays with spread operator

let fruitsNvegetables = [...fruits,...vegetables]

//concat array method merges two arrays
let merged = vegetables.concat(fruits)
const first = [1, 2, 3];
const second = [4, 5, 6];
const third = [7, 8, 9];

const mergedArray = first.concat(second, third);


//join joins all elements of an array
let joinedArray = fruits.join()


//fill fills the elements of an array with a static value

let animals = ['dogs','cats','ducks','cheetah','hen','lion']
animals.fill('pathers',1,2)

//includes: whether an arry has the element or not
animals.includes('pathers') //returns true

//indexof : position of an element
animals.indexOf('pathers');

//lastindexof: the last index of multiple occuring element

animals.push('dogs')
animals.lastIndexOf('dogs'); //returns 6

//reverse reverses the order of elements 
animals.reverse()

// sort converts elements into strings and sorts them

animals.sort()// sorts string in ascending order

let sortNumbers =  [1, 10, 100, 13, 23, 37, 5, 56, 9]
sortNumbers.sort((a, b) => (b-a))

//splice: to remove and add

let spliceArray = ['tinega','audrey','gryfin','kygo']
spliceArray.splice(1,0,'mika')// adding at index one and deleting none
spliceArray.splice(1,1,'eminem')// adds em at index one and deleting one element
spliceArray.splice(2,3,'trevor')// adds trevor at index 2 and deleting three elements after that

//array.from extracts arrays from array-like structures eg html collections





//array itterstion methods in javascript

let students = [
    {
       'id': 001,
       'f_name': 'Alex',
       'l_name': 'B',
       'gender': 'M',
       'married': false,
       'age': 22,
       'paid': 250,  
       'courses': ['JavaScript', 'React']
    },
    {
       'id': 002,
       'f_name': 'Ibrahim',
       'l_name': 'M',
       'gender': 'M',
       'married': true,
       'age': 32,
       'paid': 150,  
       'courses': ['JavaScript', 'PWA']
    },
    {
       'id': 003,
       'f_name': 'Rubi',
       'l_name': 'S',
       'gender': 'F',
       'married': false,
       'age': 27,
       'paid': 350,  
       'courses': ['Blogging', 'React', 'UX']
    },
    {
       'id': 004,
       'f_name': 'Zack',
       'l_name': 'F',
       'gender': 'M',
       'married': true,
       'age': 36,
       'paid': 250,  
       'courses': ['Git', 'React', 'Branding']
    } 
 ]

 //filter creates a new array with all the elements that satisfy the condition 

const femaleStudents = students.filter((element)=>{
    return element.gender === 'F'
})

const richKids = students.filter((element)=>{
    return element.paid > 300
})


//map creates new array with logic started

const fullNames = students.map((element)=>{
    return element.f_name + ' ' + element.l_name
})
const ages = students.map((element)=>{
    return element.age
})

//reduce conducts expresions 

const totalPaid = students.reduce((accumulator,element)=>{
    accumulator = accumulator + element.paid
    return accumulator
},0)


//some returns a boolean whether an element has passed a condition

const brokePeople = students.some((element)=>{
    return element.paid < 200
})

//find returns first matched element of the condition given

const rich = students.find((element)=>{
    return element.paid > 250
})

//every detects if all elements pass a condition 

const atleastAcource = students.every((element)=>{
    return element.courses.length > 1
})

