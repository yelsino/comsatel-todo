import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const Welcome = () => {

  const [nickname, setNickname] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    localStorage.getItem("nickname") ? setNickname(localStorage.getItem("nickname") as string) : navigate('/mi-nombre')
  }, [])
  return (
    <div>
      <p className="text-5xl font-black text-gray-400 font-catamaran text-text1 leading-tight">
        <span className='text-secondary-100'>Hello ,</span><br /> <span className="text-black text-secondary-100">{nickname}</span>
      </p>
    </div>
  )
}
