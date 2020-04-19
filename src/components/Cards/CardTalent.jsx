import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const imageDefault = require("./images/placeholder-actor.png")

const theme = {
  palette: {
      primary: {
          //light: '#757ce8',
          main: '#47536b',
          //dark: '#002884',
          //contrastText: '#fff',
      },
      secondary: {
          //light: '#ff7961',
          main: '#e1251b',
          //dark: '#ba000d',
          //contrastText: '#000',
      },
      grayColor: {
          main: '#212224'
      },
      fontColorPrimary: {
          main: '#99CBFF'
      },
      colorActive: {
          main: '#47536b'
      }
  },
  shadowBox: {
      generic: '0 3px 5px 2px rgba(0, 0, 0, .4)'
  },
  typography: {
      //fontFamily: ['Roboto'].join(','),
      subtitle1: {
          fontSize: 12,
      },
      body1: {
          fontWeight: 500,
      },
      button: {
          fontStyle: 'italic',
      },
  },
};

const useStyles = makeStyles(() => ({
  containerCardTalent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardTalent: ({ width, height, bgSize, borderRadius, image }) => ({
    backgroundImage: `url(${image || imageDefault })`,
    position: "relative",
    margin: height * 0.06,
    backgroundSize: bgSize || 'cover',
    backgroundPosition: "center",
    border: `1px solid ${theme && theme.palette && theme.palette.primary && theme.palette.primary.main}`,
    borderRadius: borderRadius || "50%",
    height: height || 88,
    width: width || 88,

    "&:hover": {
      width: width + width * 0.06,
      height: height + height * 0.06,
      backgroundSize: bgSize + bgSize * 0.13,
      border: `3px solid ${theme && theme.palette && theme.palette.primary && theme.palette.primary.main}`,
      margin: 0
    },
    "&:focus": {
      width: width + width * 0.13,
      height: height + height * 0.13,
      backgroundSize: bgSize + bgSize * 0.13,
      border: `3px solid ${theme && theme.palette && theme.palette.primary && theme.palette.primary.main}`,
      margin: 0
    }
  }),
  infoCard: {
    textAlign: 'center'
  },
  typographyTitle: ({ width }) => ({
    color: "black",
    //marginTop: 5,
    fontSize: 15,
    textAlign: "center",
    width: width
  }),
  typographyRol: ({ width }) => ({
    color: "black",
    fontSize: 12,
    textAlign: "center",
    width: width
  })
}));

const CardTalent = ({
  width,
  height,
  bgSize,
  borderRadius,
  title,
  image,
  children,
  infoTalent,
  focusHandler,
  data,
  clickHandler,
  history,
  sendToPlay,
  isFocusable
}) => {
  const classes = useStyles({ width, height, bgSize, borderRadius, image });

  return (
    <div className={classes.containerCardTalent}>
      <div
        className={`${classes.cardTalent} ${isFocusable ? 'focusable': ''}`}
        tabIndex="0"
        onClick={e => {}}
        data-sn-right={`#i .focusable`}
        data-sn-left={`#i .focusable`}
        onFocus={e => {}}
        onKeyUp={e => {}}
      >
        {children}
      </div>
      <div className={classes.infoCard}>
        <Typography className={classes.typographyTitle} variant="body1">
          {title}
        </Typography>
        {false && infoTalent && (
          <Typography className={classes.typographyRol} variant="body2" noWrap>
            {infoTalent}
          </Typography>
        )}
      </div>
    </div>
  );
};
export default CardTalent;