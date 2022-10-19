// this code is copied from the modified version of ApplicationViews.js, 
//    which customizes the links for ticktet views in a similar way 


import { EmployeeNav } from "./EmployeeNav"
import { CustomerNav } from "./CustomerNav"
import "./NavBar.css"

export const NavBar = () => {

    const localHoneyUser = localStorage.getItem("honey_user")
    const honeyUserObject = JSON.parse(localHoneyUser)

    if (honeyUserObject.staff) {
        //return employee views 
        return <EmployeeNav /> 
    }
    else {
        //return customer views
        return <CustomerNav /> 
    }
}

