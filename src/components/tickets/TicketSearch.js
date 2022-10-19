
// this function will return an input field 

export const TicketSearch = ({ setterFunction }) => {     
return (
    <div>
        <input 
            onChange={
                (changeEvent) => {
                //change the state in the parent component (TicketContainer)
                   setterFunction(changeEvent.target.value) 
                }

            }
        type="text" placeholder="Enter search terms" />
    </div>
    )
}
