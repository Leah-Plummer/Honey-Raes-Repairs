import { TicketSearch } from "./TicketSearch"
import { TicketList } from "./TicketList"
import { useState } from "react"


export const TicketContainer = () => {
   // set up state variable for search terms here
    const [searchTerms, setSearchTerms] = useState("")

    return <> 
        {/* parent component needs to pass a reference to child TicketSearch */}
        <TicketSearch setterFunction={setSearchTerms} />

        {/*TicketList needs to know what the current search terms (or state) are
        in order to filter tickets accordingly*/}
        <TicketList searchTermState={searchTerms} />
    </>
}