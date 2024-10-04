import { useState } from "react"

export default function Login({isLogged, handleLogin}){

    

    return(
        <div className="flex gap-4 items-center">
        {isLogged && <p>ola usuario</p>}
        <button onClick={handleLogin} className={`${isLogged ? 'bg-white' : 'bg-green-700'} text-purple-800 px-4 py-1`}>{isLogged ? 'logout' : 'login'}</button>
        </div>
    )
}