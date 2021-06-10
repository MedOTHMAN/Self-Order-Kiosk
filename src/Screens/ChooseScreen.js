import {
  Box,
    Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Fade,
  Typography,
} from "@material-ui/core";
import React, { useContext } from "react";
import { setOrderType } from "../actions";
import Logo from "../components/Logo";
import { store } from "../Store";
import { useStyles } from "../styles";

export default function ChooseScreen(props) {
  const styles = useStyles();
  const { dispatch} = useContext(store);

    const chooseHandler = (orderType) => {
        setOrderType(dispatch, orderType);
        props.history.push('/order');
    };

  return (
    <Fade in={true}>
      <Box className={[styles.root, styles.navy]}>
        <Box className={[styles.main, styles.center]}>
          <Logo large></Logo>
          <Typography
            component="h3"
            variant="h3"
            className={styles.center}
            gutterBottom
          >
            Where will you be eating today?
          </Typography>
          <Box className={styles.cards}>
            <Card className={[styles.card, styles.space]}>
              <CardActionArea onClick={() => chooseHandler('Take in')}>
                <CardMedia
                  component="img"
                  alt="Eat in"
                  image="/images/eatin.png"
                  className={styles.media}
                ></CardMedia>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h4"
                    color='textPrimary'
                    component="p"
                  >
                      Eat In
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card className={[styles.card, styles.space]}>
              <CardActionArea onClick={() => chooseHandler('Take out')}>
                <CardMedia
                  component="img"
                  alt="Takeout"
                  image="/images/Takeout.png"
                  className={styles.media}
                ></CardMedia>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h4"
                    color='textPrimary'
                    component="p"
                  >
                      Take out
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        </Box>
      </Box>
    </Fade>
  );
}
;
