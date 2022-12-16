const payroll = {
    employees: [
        { name: 'John', dept: 'IT', salary: 1000 },
        { name: 'Maria', dept: 'Finance', salary: 2000 },
        { name: 'David', dept: 'Finance', salary: 3000 }
    ],
    hikePercentage: {
        IT: 10,
        Finance: 20
    },
    
    // approach #1
    // use arrow function for the iterator function passed to forEach() to carry over the "this" from raise() into the iterator function
    raise: function() {
        this.employees.forEach(( employee ) => {
            const dept = employee.dept;
            const salary = employee.salary;
            const hikePercentage = this.hikePercentage[dept];

            employee.salary = ((100 + hikePercentage) / 100) * salary;
        });
    },
    
    // approach #2: alternative approach
    // store the "this" of raise in a variable, and use it within the iterator function passed to forEach()
    // raise: function() {
    //     const that = this;

    //     this.employees.forEach(function( employee ) {
    //         const dept = employee.dept;
    //         const salary = employee.salary;
    //         const hikePercentage = that.hikePercentage[dept];

    //         employee.salary = ((100 + hikePercentage) / 100) * salary;
    //     });
    // }
}

payroll.raise();
console.log(payroll.employees);