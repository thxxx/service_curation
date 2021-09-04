import React, { useState } from 'react'
import './ShowLanding.scss'
import { Text, Typography, Image } from 'antd'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

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
            <div className="container3">
                <div className="main_title_big">
                    Service Curator
                </div>
                <div className="main_title">
                    서비스추천소에 오신걸 환영합니다.
                </div>
                <div className="sub_desc">
                    <p>
                        아래에서 본인에 해당하는 키워드를 선택한 후 제출을 누르시면 <br/>
                        필요한 서비스를 찾아 드립니다.
                    </p>
                </div>
                <div className="downDiv">
                    <span className="downButton">
                        <p className="downArrow">살펴보기</p>
                    </span>
                </div>
            </div>
        </div>
        </>
    )
}

export default ShowLanding
