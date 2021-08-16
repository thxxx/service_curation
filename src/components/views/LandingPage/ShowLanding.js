import React, { useState } from 'react'
import './ShowLanding.scss'
import { Text, Typography } from 'antd'

function ShowLanding() {
    const [users, setUsers] = useState("")
    const onClickShow = () => {
        setUsers({
            close:"close"
        })
    }
    return (
        <>

        <div className="container2">
            <div className="main_title">
                Service Curator - 서비스추천소에 오신걸 환영합니다.
            </div>
            <div className="sub_desc">
                아래에서 본인에 해당하는 키워드를 선택한 후 제출을 누르시면
                필요한 서비스를 찾아 드립니다.
            </div>
        </div>
        </>
    )
}

export default ShowLanding
