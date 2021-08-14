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
  const classes = useStyles();

    return (
      <>
      <div className="container">
        <div className="d_top">
          <span className="d_left">
            <div>
              <img alt="ww" style={{width:150}} src="https://play-lh.googleusercontent.com/FNXV9IWrS7n2VMq1R_bRqWXQw-n69fkSxovQ-Wt6BiW7S3T8UuYfymZ4hTXanrhyaaQ=s360-rw" />
            </div>
            <div>
              <Button variant="outlined" endIcon={<InputIcon />}>앱으로 이동</Button>
            </div>
            <div>
              <Button variant="outlined" endIcon={<InputIcon />}>웹으로 이동</Button>
            </div>
            <p>{props.number}</p>
          </span>
          <span className="d_right">
            <div className="title">
              <p> 챌린저스 </p>
            </div>
            <div className="oneline">
              <p> 늘어진 생활패턴을 다시 바로 잡고 싶다면 무기력한 일상에 활력을 되찾고 싶다면 지금 챌린지를 시작하세요. </p>
            </div>
            <div className="description">
              <p> ■ 200+개 이상의 챌린지
일찍 일어나기, 운동, 영어 공부까지,
스스로 지키고 싶은 약속이 있다면 도전하세요.
원하는 챌린지가 없다면, 직접 만들 수도 있어요.
<br />
■ 평균 2주의 행동 중심 목표
토익 만점이 아닌 하루 30분 공부하기처럼
결과보다 행동 중심으로 설계된 챌린지!
짧은 시간으로 부담없이 시작하고
반복으로 좋은 습관을 쌓아나가요.
<br />
■ 나를 움직이는 강력한 알람, 돈!
챌린지를 시작하기 전 참가비를 걸어두세요.
시간이 지날 수록 약해지는 의지,
시작할 때 돈을 걸어두면 끝까지 해내게 됩니다.
<br />
■ 성취감을 높이는 환급과 상금
챌린지를 인증할 때마다 참가비를 돌려받아요.
85% 이상 달성하면 참가비 100% 환급
100% 달성하면 쏠쏠한 상금까지 추가로 획득!
**85% 미만 달성 시 달성률만큼 참가비가 부분 환급됩니다 </p>
            </div>
            <div className="infos">
              <span> 
                <p className="info_title">
                  추천지수
                </p>
                <p className="info_desc">
                  40 
                </p>
                </span>
              <span>  
                <p className="info_title">
                  유용함
                </p>
                <p className="info_desc">
                  NPS
                </p>
              </span>
              <span>
                <p className="info_title">
                  어떤사람들에게 추천?
                </p>
                <p className="info_desc">
                  NPS
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
                  <p>
                    리뷰 1 별점
                  </p>
                </div>
                <p>
                  리뷰 1 내용
                </p>
                </span>
              <span className="rv">  
                <p>
                  리뷰 2 사용자 이름
                </p>
                <p>
                  리뷰 2 내용
                </p>
              </span>
              <span className="rv">
                <p>
                  리뷰 3 사용자 이름
                </p>
                <p>
                  리뷰 3 내용
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
            플랫폼 : 앱, 웹
          </p>
        </div>
      </div>
      </>
    )
}

export default ResultCard;