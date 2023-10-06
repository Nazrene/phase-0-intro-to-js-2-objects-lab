const employee = {
    name: "John Doe",
    streetAddress: "123 Main St",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee, [key]: value };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

console.log(employee);
console.log(updateEmployeeWithKeyAndValue(employee, "name", "Jane Doe"));
console.log(employee);
console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Elm St"));
console.log(employee);
console.log(deleteFromEmployeeByKey(employee, "name"));
console.log(employee);
console.log(destructivelyDeleteFromEmployeeByKey(employee, "streetAddress"));
console.log(employee);// Write your solution in this file!
