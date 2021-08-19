import React from 'react'
import { useState, useEffect } from 'react'
import ResultCard from '../../tools/ResultCard'
import ShowLanding from './ShowLanding'
import { Card, Row, Col, Image } from "antd";
import { Button } from '@material-ui/core'
import './LandingPage.scss'
import data from './ppc.json'
import * as ExcelJS from "exceljs";
import { saveAs } from "file-saver";


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
    const [results, setResults] = useState([{
        title: "",
        main:"",
        desc:"",
        icon_image:"",
        app_link:"",
        web_link:"",
        nps:"",
        useful:"",
        recommend:"",
        review1:"",
        review2:"",
        review3:"",
        platform:"",
    }]);
    const [Categories, setCategories] = useState(["disease","workout","tool","schoolStudy","saveMoney","scheduleMoney","selfImprovement","healing","hobby","lifestyle","funny"]);
    const [visible, setVisible] = useState('none')
    const [loading, setLoading] = useState('none')

    useEffect(() => {
        console.log("tlwkr turfurhk", results.length)
    }, [results])
    

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

    const handleExcel = async () => { 
        // const workbook = new ExcelJS.Workbook(); 
        // const worksheet = workbook.addWorksheet("My Sheet"); // sheet 이름이 My Sheet 
        // // sheet 데이터 설정 
        // worksheet.columns = [ 
        //     { header: "Id", key: "id", width: 10 }, 
        //     { header: "Name", key: "name", width: 32 }, 
        //     { header: "D.O.B.", key: "DOB", width: 10, outlineLevel: 1 }, 
        // ]; 
        // worksheet.addRow({ id: 1, name: "John Doe", dob: new Date(1970, 1, 1) }); 
        // worksheet.addRow({ id: 2, name: "Jane Doe", dob: new Date(1965, 1, 7) }); 
        // // 다운로드 
        // const mimeType = { 
        //     type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" 
        // }; 
        // const buffer = await workbook.xlsx.writeBuffer(); 
        // const blob = new Blob([buffer], mimeType); 
        // saveAs(blob, "testExcel.xlsx"); 
        console.log("ㅁㅁㅁ");
    };

    const trySetResult = (option) => {    
        let i = Math.floor(Math.random() *3) + 1
        const oneData = data[i]
        
        let body = 
            {
                title: oneData.A,
                main:oneData.B,
                desc:oneData.C,
                icon_image:oneData.D,
                app_link:oneData.E,
                web_link:oneData.F,
                nps:oneData.G,
                useful:oneData.H,
                recommend:oneData.I,
                review1:oneData.J,
                review2:oneData.K,
                review3:oneData.L,
                platform:oneData.M
            }
        setResults([...results, body])

        console.log("결과", results)
    }

    const returnResult = () => {
        console.log("결과 출력")

        setLoading('flex')
        setVisible('none')
        trySetResult(options)
        handleExcel()
        setTimeout(() => {
            setVisible('flex')
            setLoading('none')
        }, 1000)
    }


    return (
        <>
        <div className="app" style={{height: '1000%'}}>
        <ShowLanding />
            <Row gutter={32, 16} style={{display:'inline-flex', justifyContent:'center', width:'100%'}}>
                    {categoryTable}
            </Row>
        </div>

        <div style={{display:'block', justifyContent:'center'}}>
            <div style={{display:'flex', justifyContent:'center',width:'100%', margin:'8% 0%'}}>
                <Button onClick={returnResult} className="resultButton" color="secondary">결과 보기</Button>
            </div>

            <div style={{display:'inline-flex', justifyContent:'center', width:'100%'}}>
                <div style={{display:loading}}>
                    <p style={{fontSize:'3em'}}>로딩중...</p>
                </div>
                <div style={{display:visible}}>
                    <ResultCard number={results.length-1} list={results}/>
                </div>
            </div>
        </div>
            
        </>
    )
}

export default LandingPage