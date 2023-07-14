import {useState} from "react";
import axios from "axios";


const Login = ({}) => {

    const [userName, setUsername] = useState("")
    const [passWord, setPassword] = useState("")

    const submitLogForm = () => {

        console.log(userName, typeof(userName))
        console.log(passWord, typeof(passWord))


        axios.post('http://68.183.214.2:8666/api/auth/signin', {
            "username": userName,
            "password": passWord
        })
            .then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
        setUsername("")
        setPassword("")
    }

    return (
        <div className="form">
            <input
                type="text"
                value={userName}
                placeholder="Username"
                onChange={(event) => {
                    setUsername(event.target.value)
                }}
            />

            <input
                type="password"
                value={passWord}
                placeholder="Password"
                onChange={(event) => {
                    setPassword(event.target.value)
                }}
            />

            <label htmlFor="checkbox" className="checkboxForm">
                <input
                    type="checkbox"
                    className="checkbox"
                    id="checkbox"
                />
                <p>Запомнить меня</p>
            </label>

            <button
                onClick={() => submitLogForm()}
                className="submitButton"
            >Вход
            </button>

        </div>
    )
}

export default Login