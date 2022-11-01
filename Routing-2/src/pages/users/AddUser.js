import { useNavigate, useLocation } from "react-router-dom";

const AddUser = () => {
    let username = "";
    const navigate = useNavigate();
    const location = useLocation();

    const submitForm = (e) => {
        e.preventDefault();
        if (location.state && location.state.users) { // We check if we got a copy of users list from users
            const users = location.state.users;
            users.push(username);
            navigate("/users", { state: { users: users } }) // we sent the new list back to work on it
        } else {
            navigate("/")
        }

        /*  console.log(location);
         console.log(users); */

        //navigate("/users", { state: { username: username } })
    }

    return (
        <div>
            <form onSubmit={(e) => submitForm(e)}>
                <input type="text" placeholder="Username" onChange={(e) => username = e.target.value} />
                <input type="submit" value="Add user" />
            </form>
        </div>
    )
}
export default AddUser;