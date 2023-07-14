import defaultProfileImage from '../../assets/images/defaultProfile.png'
import {useEffect, useState} from "react";
import axios from "axios";


const Registration = ({}) => {

    const [profileImageUrl, setProfileImageUrl] = useState(defaultProfileImage)

    // Data for server
    const [imageFile, setImageFile] = useState()
    const [userName, setUsername] = useState("")
    const [nickName, setNickname] = useState("")
    const [passWord, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleProfileImage = (event) => {
        const file = event.target.files[0]

        console.log(file)
        try {
            const url = URL.createObjectURL(file)
            setImageFile(file)
            setProfileImageUrl(url)
        } catch (error) {

        }
    }

    const submitRegForm = () => {

        if (userName.length < 10 || userName.length > 50) {
            setError("userName")
            return;
        }
        if (nickName.length < 10 || nickName.length > 50) {
            setError("nickName")
            return;
        }
        if (passWord < 8 || passWord > 40) {
            setError("passWord")
            return;
        }

        const formData = new FormData()
        formData.append('username', userName)
        formData.append('nickname', nickName)
        formData.append('image_file', imageFile)
        formData.append('password', passWord)

        axios.post('http://68.183.214.2:8666/api/auth/signup/', formData)
            .then((response) => {
                console.log(response)
            }).catch((error) => {
                console.log(error)
            })
        setImageFile()
        setUsername("")
        setNickname("")
        setPassword("")
    }

    useEffect(() => {
        fetch(defaultProfileImage)
            .then(res => res.arrayBuffer())
            .then(buf => {
                const file = new File([buf], 'defaultProfile.png', buf)
                setImageFile(file)
            })
    }, [])

    return (
        <div className="form">
            <label htmlFor="imageInput" className="imageForm">
                <img
                    src={profileImageUrl}
                    alt="Profile image"
                    className="profileImage"
                />
                <p>Добавить фото</p>
            </label>

            <input
                type="text"
                value={userName}
                placeholder="Username"
                onChange={(event) => {
                    setUsername(event.target.value)
                }}
            />

            <input
                type="text"
                value={nickName}
                placeholder="Nickname"
                onChange={(event) => {
                    setNickname(event.target.value)
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

            <button
                onClick={() => submitRegForm()}
                className="submitButton"
            >Регистрация
            </button>

            <p>Ошибка: {error}</p>

            {/* Display None */}
            <input
                type="file"
                className={"imageInput"}
                id={"imageInput"}
                accept="image/jpeg, image/png, image/jpg"
                onChange={(event) => handleProfileImage(event)}
            />

        </div>
    )
}

export default Registration