import React from 'react'
import { useState, useEffect } from 'react'
import ResultCard from '../../tools/ResultCard'
import ShowLanding from './ShowLanding'
import { Card, Row, Col, Image } from "antd";
import './LandingPage.scss'
import data from './ppc.json'
import * as ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import firebase from '../../../util/firebase'

import { createTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, purple, red } from '@material-ui/core/colors';
import question from '../../tools/questions'

const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    height:300,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: 'rgba(255,255,255,1)',
    '&:hover': {
      backgroundColor: red[700],
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    height:70,
  },
}));

const theme = createTheme({
  palette: {
    primary: green,
  },
});


function LandingPage() {
    const selectionDataSave = firebase.database().ref("selectionData")

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
        console.log("tlwkr turfurhk", question)
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

        options[category.toString()] ?  bcolor = "rgba(0,0,0,0.5)" : bcolor = "rgba(255,255,255,0.1)"

        return (
            // Col에 대해서 파악
            <Col key={index} lg={5} md={10} xs={7} style={{margin:'10px'}}> 
                <Button key={index} onClick={e => checkOptions(category)} style={{width: '80%', height: '100px', 
                    backgroundColor: `${bcolor}`,
                    border:"2px solid black"
                }}>
                    {question[category]}
                </Button>
            </Col>
        )
    });

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
        setTimeout(() => {
            setVisible('flex')
            setLoading('none')
            // selectionDataSave.push(options); // firebase에 options 데이터를 전송해서 저장하도록 한다.
        }, 1000)
    }

    const classes = useStyles();

    return (
        <>
        <div className="app" style={{height: '1000%'}}>
        <ShowLanding />
        <hr style={{width: '80%', marginTop:100, border: '2px solid black'}}/>
        <div className="all_container">
            <div className="all_container2">
            <div className="selectDescText">
                <p className="selectText">아래에서 본인에게 해당하는 사항을 전부 골라주세요. <br/>자세하게 선택할 수록 더 알맞은 서비스를 찾을 확률이 늘어납니다.</p>
            </div>
            <div className="selectDescText2">
                <p className="selectText2">본인에게 필요한 종류의 도움은 무엇인가요?</p>
            </div>
            <Row gutter={32, 16} style={{display:'inline-flex', justifyContent:'center', alignItems:'center', width:'100%', marginTop:'0%'}}>
                    {categoryTable}
            </Row>
            </div>
        </div>

            <div style={{display:'block', justifyContent:'center'}}>
                <div style={{display:'flex', justifyContent:'center',width:'100%', margin:'8% 0%'}}>
                    <ColorButton onClick={returnResult} variant="contained" color="primary" className={classes.margin}>
                        서비스 알아보기
                    </ColorButton>
                </div>

                <div style={{display:'inline-flex', justifyContent:'center', width:'100%', marginBottom:'10%'}}>
                    <div style={{display:loading}}>
                        <p style={{fontSize:'3em'}}>로딩중...</p>
                    </div>
                    <div style={{display:visible, justifyContent:'center', }}>
                        <ResultCard number={results.length-1} list={results}/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default LandingPage