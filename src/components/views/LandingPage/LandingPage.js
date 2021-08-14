import React from 'react'
import { useState, useEffect } from 'react'
import ResultCard from '../../tools/ResultCard'
import ShowLanding from './ShowLanding'
import { Card, Button, Row, Col } from "antd";
import './LandingPage.scss'

function LandingPage() {
    const [showType, setShowType] = useState("none")
    const [options, setOptions] = useState({
        disease:false,
        workout:false,
        tool:false,
        schoolStudy:false,
        saveMoney:false,
        scheduleMoney:false,
        selfImprovement:false,
        healing:false,
        hobby:false,
        lifestyle:false,
        funny:false
    })
    const [results, setResults] = useState([1,2,3]);
    const [ResultLoad, setResultLoad] = useState(false);
    const [Categories, setCategories] = useState(["disease","workout","tool","schoolStudy","saveMoney","scheduleMoney","selfImprovement","healing","hobby","lifestyle","funny"]);

    useEffect(() => {
        console.log('Hello welcome!');
    }, [])
    

    const checkOptions = (category) => {
        switch(category){
            case "disease":
                setOptions({...options, disease:!options["disease"]});
                break;
            case "workout":
                setOptions({...options, workout:!options["workout"]});
                break;
            case "tool":
                setOptions({...options, tool:!options["tool"]});
                break;
            case "schoolStudy":
                setOptions({...options, schoolStudy:!options["schoolStudy"]});
                break;
            case "saveMoney":
                setOptions({...options, saveMoney:!options["saveMoney"]});
                break;
            case "scheduleMoney":
                setOptions({...options, scheduleMoney:!options["scheduleMoney"]});
                break;
            case "selfImprovement":
                setOptions({...options, selfImprovement:!options["selfImprovement"]});
                break;
            case "healing":
                setOptions({...options, healing:!options["healing"]});
                break;
            case "hobby":
                setOptions({...options, hobby:!options["hobby"]});
                break;
            case "lifestyle":
                setOptions({...options, lifestyle:!options["lifestyle"]});
                break;
            case "funny":
                setOptions({...options, funny:!options["funny"]});
                break;
            default:
                break;
        }
        console.log(`체크 했음 ${category}`);
    }



    
    const categoryTable = Categories.map((category, index) => {
        let bcolor;

        options[category.toString()] ?  bcolor = "rgb(93, 216, 88)" : bcolor = "rgb(219, 255, 218)"

        return (
            // Col에 대해서 파악
            <Col key={index} lg={5} md={10} xs={24} style={{margin:'10px'}}> 
                <Button key={index} onClick={e => checkOptions(category)} style={{width: '80%', height: '100px', backgroundColor: `${bcolor}`}}>
                    {category}
                </Button>
            </Col>
        )
    });

    return (
        <>
        <div className="app">
        <ShowLanding />
            <Row gutter={32, 16} style={{display:'inline-flex', justifyContent:'center', width:'100%'}}>
                    {categoryTable}
            </Row>
        </div>

        <div style={{display:'flex', justifyContent:'center'}}>
        <ResultCard />
        </div>
            

        </>
    )
}

export default LandingPage