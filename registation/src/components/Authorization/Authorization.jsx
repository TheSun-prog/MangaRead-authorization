import closeImage from '../../assets/images/close_X.svg'
import Registration from "../Registration/Registration";
import Login from "../Login/Login";
import {useState} from "react";


const Authorization = ({  }) => {

    const [isLogin, setIsLogin] = useState(true)
    const [isRegister, setIsRegister] = useState(false)

    const changeToLogin = () => {
        setIsLogin(true)
        setIsRegister(false)
    }

    const changeToRegister = () => {
        setIsLogin(false)
        setIsRegister(true)
    }

    return(
        <div className="auth">
            <img src={closeImage} alt="X" className="auth-close"/>

            <div className="auth__menu">

                <p
                    className={ isLogin ? "active" : "" }
                    onClick={ changeToLogin }
                >Вход</p>

                <p
                    className={ isRegister ? "active" : "" }
                    onClick={ changeToRegister }
                >Регистрация</p>

            </div>

            { isLogin && <Login/> }
            { isRegister && <Registration/> }
        </div>
    )
}

export default Authorization