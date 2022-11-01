import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Users = () => {
    const [users, setUsers] = useState(localStorage.getItem("users")
        ? JSON.parse(localStorage.getItem("users")) : ["One", "Two", "Three"])
    const navigate = useNavigate(); // to navigate and send data
    const location = useLocation(); // To readt data sent from other components

    const addNewUser = () => {
        navigate("/users/add", { state: { users: users } }) // We send the list to add page to work on it
    }

    useEffect(() => {
        if (location.state && location.state.users) { // we check if we got a list from add page
            setUsers(location.state.users) // we update the list with the one we got from add page
            localStorage.setItem("users", JSON.stringify(location.state.users)) 
        }
    }, [])

    return (
        <div>
            {console.log(location)}
            {users.map((value, index) => {
                return (
                    <h1 key={index}>{value}</h1>
                )
            })}
            <button onClick={() => addNewUser()}>Add new user</button>
        </div>
    )
}
export default Users;