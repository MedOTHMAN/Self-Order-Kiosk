import { Box, Card, CardActionArea, Typography } from '@material-ui/core'
import TouchAppIcon from '@material-ui/icons/TouchApp'
import React from 'react'
import Logo from '../components/Logo';
import {useStyles} from '../styles'


export default function HomeScreen() {
    const styles = useStyles();

    return (
        <Card>
            <CardActionArea>
                <Box className={[styles.root, styles.red]}>
                    <Box className={[styles.main, styles.center]}>
                        <Typography component="h6" variant="h6">
                            Fast & Easy
                        </Typography>
                        <Typography component="h1" variant="h1">
                            Order <br /> & pay <br/> here
                        </Typography>
                        <TouchAppIcon fontSize="large"></TouchAppIcon>
                    </Box>
                    <Box className={[styles.center, styles.green]}>
                        <Logo large></Logo>
                        <Typography variant="h3"> Touch to start
                        </Typography>    
                    </Box>
                </Box>
            </CardActionArea>
        </Card>
    )
}
