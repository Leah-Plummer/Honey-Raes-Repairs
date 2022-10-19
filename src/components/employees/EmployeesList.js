import { useEffect, useState } from "react"
import { Employee } from "./Employee"
import "./Employees.css"

    // this function will set initial state, which is all employees
export const EmployeesList = () => {
    
    //set up state variable
    const [employees, setEmployees] = useState([])

    //useEffect to observe change in state, and update component state
    useEffect(
        () => {
            fetch(`http://localhost:8088/users?isStaff=true`)
            .then(res => res.json())
            .then((employeeArray) => {
                setEmployees(employeeArray)
            })
        }, 
        [] 

    )

    //jsx
    return <article className="employees">
        {
            employees.map(employee => <Employee key={`employee--${employee.id}`}
                id={employee.id} 
                fullName={employee.fullName} 
                email={employee.email} />)

        }
    </article>

}