import React, { useState } from 'react'
import './ShowLanding.scss'

function ShowLanding() {
    const [users, setUsers] = useState("")
    const onClickShow = () => {
        setUsers({
            close:"close"
        })
    }
    return (
        <>

        <div style={{display: 'block', alignItems: 'center', justifyContent: 'center'}}>
            <div className="main_title">
                Service Curator - 서비스추천소에 오신걸 환영합니다.
            </div>
            <span className="sub_desc">
                아래에서 본인에 해당하는 키워드를 선택한 후 제출을 누르시면
                필요한 서비스를 찾아 드립니다.
            </span>
        {users ? <button onClick={onClickShow}> 클릭 </button> : <p>이미 로그인</p>}
        </div>
        </>
    )
}

export default ShowLanding
