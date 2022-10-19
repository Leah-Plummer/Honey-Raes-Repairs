import { Outlet, Route, Routes } from "react-router-dom"
import { TicketList } from "../tickets/TicketList"
import { TicketForm } from "../tickets/TicketForm"
import { TicketSearch } from "../tickets/TicketSearch"
import { TicketContainer } from "../tickets/TicketContainer"
export const ApplicationViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Honey Rae Repair Shop</h1>
                    <div>Your one-stop-shop to get all your electronics fixed</div>

                    <Outlet />
                </>
            }>

            {/* when the route is "tickets", both the TicketSearch and TicketList 
            components will be the Route's elements   */}

                <Route path="tickets" element={<TicketContainer />} />

                <Route path="ticket/create" element={ <TicketForm /> } />
            </Route>
        </Routes>
    )
}




/******************* fetchTemplate******************** 

    return fetch(``)
        .then(res => res.json())
        .then(() => {
            
        })
/**************************************************** */ 