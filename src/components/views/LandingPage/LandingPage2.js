import React from 'react'
import { useState, useEffect } from 'react'
import ResultCard from '../../tools/ResultCard'
import ResultCard2 from '../../tools/ResultCard2'
import ShowLanding from './ShowLanding'
import { Card, Row, Col, Image } from "antd";
import './LandingPage.scss'
import data from './app2.json'
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
    const [type, setType] = useState([''])
    const [types, setTypes] = useState([])
    const [questions, setQuestions] = useState([])
    const [situation, setSituation] = useState('')
    const [service, setService] = useState({})


    useEffect(() => {
      let temp = []
      for(const d of data){
          if(temp.includes(d.Type)){
            continue
          }
          temp.push(d.Type)
      }
      setTypes(temp)
      let tq = []
      let questions = []
      tq = data.filter(t => t.Type === type)
      for(const s of tq){
        questions.push(s.Situation)
      }
      setQuestions(questions)
      let one = []
      one = data.filter(t => t.Situation === situation)
      console.log("????????? ??????", one)
      setService(one[0])
    }, [results, type, situation])

    const typesTable = types.map((t, index) => {
      let tbcolor = 'rgba(128, 196, 179, 0.801)'

      if(t===type){
        tbcolor = 'rgba(28, 96, 79, 0.801)'
      }

        return (
                <Button key={index} style={{backgroundColor:`${tbcolor}`}} onClick={e => {e.preventDefault(); setType(t); setVisible('none');}} className="typebuttons">
                    {t}
                </Button>
        )
    });

    const questionsTable = questions.map((q, index) => {
      let qbcolor = 'rgba(156, 156, 156, 0.1)'

      if(q===situation){
        qbcolor = 'rgba(28, 96, 79, 0.801)'
      }

        return (
                <Button key={index} style={{backgroundColor:`${qbcolor}`}} onClick={e => {e.preventDefault(); console.log(q); setSituation(q); setVisible('flex')}} className="questionButtons">
                    {q}
                </Button>
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

        console.log("??????", results)
    }

    const returnResult = () => {
        console.log("?????????",service)

        setLoading('flex')
        setVisible('none')
        trySetResult(options)
        setTimeout(() => {
            setVisible('flex')
            setLoading('none')
            //selectionDataSave.push(options); // firebase??? options ???????????? ???????????? ??????????????? ??????.
        }, 1000)
    }

    const classes = useStyles();

    return (
        <>
        <div className="app" style={{height: '1000%'}}>
        <ShowLanding />
        <hr style={{width:'80%', marginTop:20, border: '2px solid black'}}/>
        <div className="all_container">
            <div className="all_container2">
                <div className="selectDescText">
                    {/* <p className="selectText">???????????? ???????????? ???????????? ????????? ?????? ???????????????. <br/>???????????? ????????? ?????? ??? ????????? ???????????? ?????? ????????? ???????????????.</p> */}
                </div>
                <div className="selectDescText2">
                    <p className="typeQuestion">???????????? ????????? ????????? ????????? ????????????????</p>
                </div>
                <Row gutter={32, 16} style={{display:'inline-flex', textAlign:'center',justifyContent:'center', alignItems:'center', width:'100%', marginTop:'0%'}}>
                        {typesTable}
                </Row>
            </div>
        </div>

            <div className="secondContainer">
                <div className="questionWrapper">
                    {questionsTable}
                </div>
                <div style={{display:'flex', justifyContent:'center',width:'100%', margin:'8% 0%'}}>
                    {/* <ColorButton onClick={returnResult} variant="contained" color="primary" className={classes.margin}>
                        ????????? ????????????
                    </ColorButton> */}
                </div>

                <div style={{display:'inline-flex', justifyContent:'center', width:'100%', marginBottom:'10%'}}>
                    <div style={{display:loading}}>
                        <p style={{fontSize:'3em'}}>?????????...</p>
                    </div>
                    <div style={{display:visible, justifyContent:'center', }}>
                        <ResultCard2 data={service}/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default LandingPage