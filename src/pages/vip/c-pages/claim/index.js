import React, {useState, useEffect} from 'react'


export default function Claim() {

  const [loginName, setLoginName] = useState("");

  useEffect(() => {
    setLoginName(localStorage.getItem("vip"))
    console.log(loginName)
  })

  return (
    <div>
      claim
    </div>
  )
}
