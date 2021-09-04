import React, {useState, useEffect} from 'react'
import './AllServicePage.scss'
import data from '../LandingPage/app2.json'
import Button from '@material-ui/core/Button';
import {Radio} from 'antd';
import ResultCard2 from '../../tools/ResultCard2'

function AllServicePage() {
    const [types,setTypes] = useState([])
    const [type,setType] = useState("")
    const [services,setServices] = useState([])

    useEffect(() => {
        let temp = []
        for(const d of data){
            if(temp.includes(d.Type)){
              continue
            }
            temp.push(d.Type)
        }
        temp.push("전체")
        setTypes(temp)

        if(type === "전체"){
            setServices(data)
        }else{
            let td = data;
            td = td.filter(t => t.Type === type)
            setServices(td)
        }
    },[type])



    const typesTable = types.map((t, index) => {
        let bcolor = 'rgba(128, 196, 179, 0.801)';

        if(type === t){
            bcolor = 'rgba(28, 96, 79, 0.5)';
        }

        return (
            <Button key={index} style={{ backgroundColor:`${bcolor}` }} onClick={e => {e.preventDefault(); setType(t);}} className="typebuttons">
                    {t}
            </Button>
        )
    });

    const serviceReturn = services.map((s, index) => {
        return (
            <ResultCard2 key={index} data={s} style={{margin:20}}/>
        )
    })

    return (
        <div className="Container">
            <div className="buttonsWrapper">
                {typesTable}
            </div>
            <div className="servicesWrapper">
                <span>
                {serviceReturn}
                </span>
            </div>
        </div>
    )
}

export default AllServicePage
