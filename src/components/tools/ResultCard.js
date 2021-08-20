import React from 'react'
import { Card, Typography } from "antd"
import { Button, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core'
import './ResultCard.scss'
import InputIcon from '@material-ui/icons/Input';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const ResultCard = (props) => {
  console.log("props", props)
  const classes = useStyles();
  let i = parseInt(props.number);

    return (
      <>
      <div className="container">
        <div className="d_top">
          <span className="d_left">
            <div>
              <img alt="icon" style={{width:150}} src="https://play-lh.googleusercontent.com/-BfPn7rqsvb40wz3suUZxDgk-AQ1CnZvqy4c37ws4dBoFXR2diX7sjKaS_pkBoxu5qQ=s180-rw" />
            </div>
            <div>
              <Button variant="outlined" endIcon={<InputIcon />}>앱으로 이동</Button>
            </div>
            <div>
              <Button variant="outlined" endIcon={<InputIcon />}>웹으로 이동</Button>
            </div>
            {/* <p>2</p> */}
          </span>
          <span className="d_right">
            <div className="title">
              <p> {props.list[i].title} </p>
            </div>
            <div className="oneline">
              <p> {props.list[i].main} </p>
            </div>
            <div className="description">
              {props.list[i].desc}
            </div>
            <div className="infos">
              <span> 
                <p className="info_title">
                  추천지수
                </p>
                <p className="info_desc">
                  {props.list[i].nps} 
                </p>
                </span>
              <span>  
                <p className="info_title">
                  유용함
                </p>
                <p className="info_desc">
                  {props.list[i].useful}
                </p>
              </span>
              <span>
                <p className="info_title">
                  어떤사람들에게 추천?
                </p>
                <p className="info_desc">
                  {props.list[i].recommend}
                </p>
              </span>
            </div>
          </span>
        </div>
        <div className="reviews">
          <Accordion style={{width:'100%'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>사람들이 남긴 TOP3 리뷰 보기</Typography>
            </AccordionSummary>
            <AccordionDetails style={{width:'100%'}}>
              <span className="rv"> 
                <div>
                  <p>
                    리뷰 1 사용자 이름
                  </p>
                </div>
                <p>
                  {props.list[i].review1}
                </p>
                </span>
              <span className="rv">  
                <p>
                  리뷰 2 사용자 이름
                </p>
                <p>
                  {props.list[i].review2}
                </p>
              </span>
              <span className="rv">
                <p>
                  리뷰 3 사용자 이름
                </p>
                <p>
                  {props.list[i].review3}
                </p>
              </span>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="d_foot">
          <p>
            무료, 인앱결제
          </p>
          <p>
            플랫폼 : {props.list[i].platform}
          </p>
        </div>
      </div>
      </>
    )
}

export default ResultCard;