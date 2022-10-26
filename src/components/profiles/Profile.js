// staff-checker component to render either customer or employee form
import { EmployeeForm } from "./EmployeeForm"
import { CustomerForm } from "./CustomerForm"
import "./Profiles.css"

export const Profile = () => {

    const localHoneyUser = localStorage.getItem("honey_user")
    const honeyUserObject = JSON.parse(localHoneyUser)

    if (honeyUserObject.staff) {
        //return employee views 
        return <EmployeeForm /> 
    }
    else {
        //return customer views
        return <CustomerForm /> 
    }
}