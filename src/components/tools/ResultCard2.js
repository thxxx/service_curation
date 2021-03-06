import React, {useState} from 'react'
import { Card, Typography } from "antd"
import { Button, Accordion, AccordionSummary, AccordionDetails, Popover } from '@material-ui/core'
import './ResultCard.scss'
import InputIcon from '@material-ui/icons/Input';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightRegular,
    color: 'white',
  },
  typography: {
    padding: theme.spacing(2),
  },
}));

const ResultCard = ({data}) => {
  const classes = useStyles();


  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  if(typeof(data) !== 'undefined'){
    return (
      <>
      <div className="container">
        <div className="d_top">
          <span className="d_left">
            <div>
              <img alt="icon" style={{width:120}} src={data.Icon} />
            </div>
            <div className="move_button">
              <a variant="outlined" endIcon={<InputIcon />} href={"https://play.google.com/store/apps/details?id="+data.Package}>앱으로 이동</a>
            </div>
            <div className="move_button">
              <a variant="outlined" endIcon={<InputIcon />} href={data.Website}>웹으로 이동</a>
            </div>
            {/* <p>2</p> */}
          </span>
          <span className="d_right">
            <div className="title">
              <p> {data.Name} </p>
            </div>
            <div className="oneline">
              <p> {data.Desc} </p>
            </div>
            <div className="description">
              {/* {data.Desc} */}
            </div>
            <div className="infos">
              <span> 
                <p variant="contained" className="info_title">
                  별점
                </p>
                <p className="info_desc">
                  {data.Rating} 
                </p>
              </span>
              <span>
                <p variant="contained" onClick={handleClick} className="info_title">
                  유용함
                </p>
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                >
                  <Typography className={classes.typography}>자체적으로 추정한 지표입니다.</Typography>
                </Popover>
                <p className="info_desc">
                  {Math.floor((data.Five + data.Four)*100/(data.Five + data.Four + data.Three + data.Two + data.One))}
                </p>
              </span>
              <span>
                <p variant="contained" className="info_title">
                  다운로드 수
                </p>
                <p className="info_desc">
                  {data.Download}
                </p>
              </span>
            </div>
          </span>
        </div>
        <div className="reviews">
          <Accordion style={{width:'100%', backgroundColor:'rgba(199, 199, 199, 0.2)'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>사람들이 남긴 TOP3 리뷰 보기</Typography>
            </AccordionSummary>
            <AccordionDetails style={{width:'100%'}} className="reviewWrapper">
              <span className="rv"> 
                  <p className="reviewNum">
                    리뷰 1
                  </p>
                <p>
                  {data.Review1}
                </p>
                </span>
              <span className="rv">  
                <p className="reviewNum">
                  리뷰 2
                </p>
                <p>
                  {data.Review2}
                </p>
              </span>
              <span className="rv">
                <p className="reviewNum">
                  리뷰 3
                </p>
                <p>
                  {data.Review3}
                </p>
              </span>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="d_foot">
          <p>
            # {data.Tag1}
          </p>
          <p>
            # {data.Tag2}
          </p>
        </div>
      </div>
      </>
    )
  }else{
    return(
      <span>없다</span>
    )
  }
}

export default ResultCard;