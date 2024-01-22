// массив из сотрудников.

const employees = [
    { name: 'Alice', salary: 5000 },
    { name: 'Bob', salary: 6000 },
    { name: 'Charlie', salary: 4500 }
  ];
  //У вас есть массив объектов, представляющих сотрудников с полями "имя" и "зарплата". Используя метод map, удвойте зарплату каждого сотрудника.
  const result = employees
        .map ((itVar)=>{return{...itVar,salary:itVar.salary*2};});
         console.log(result);

//Используя метод filter, отфильтруйте сотрудников, у которых зарплата выше 5500.
const result1= employees
        .filter(({salary})=>salary>5500)
        .map(({name})=>name);
        console.log(result1);

// Используя метод reduce, вычислите общую зарплату всех сотрудников.
const result2= employees.reduce(
    (acc,elem) => acc + elem.salary,
    0);
    console.log(result2);

// Используя метод map, преобразуйте имена всех сотрудников к верхнему регистру.
const result3 = employees
.map(({name, salary}) => { return { name: name.toUpperCase(), salary: salary };  });
    
    console.log(result3);


    