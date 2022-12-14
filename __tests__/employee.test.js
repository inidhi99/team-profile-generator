const Employee = require("../lib/employee")

describe("Employee Class", () => {
    describe("Initialization", () => {
        it("should make an object with name, id & email properties", () => {
            const employee = new Employee('Nidhi', 50, 'username1@gmail.com');
            expect(employee.name).toEqual(expect.any(String));
            expect(employee.id).toEqual(expect.any(Number));
            expect(employee.email).toEqual(expect.any(String));
        })

        it("should retrive the employee's name", () => {
            const employee = new Employee('Nidhi', 50, 'username1@gmail.com');
            expect(employee.getName()).toEqual(expect.any(String));
        });
        
        
        it("should retrive the employee's ID", () => {
            const employee = new Employee('Nidhi', 50, 'username1@gmail.com');
            expect(employee.getId()).toEqual(expect.any(Number));
        });
        
        
        it("should retrive the employee's ID", () => {
            const employee = new Employee('Nidhi', 50, 'username1@gmail.com');
            expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
        });
        
        it("should retrive the employee's role", () => {
            const employee = new Employee('Nidhi', 50, 'username1@gmail.com');
            expect(employee.getRole()).toEqual("Employee");
        }); 
    })
})