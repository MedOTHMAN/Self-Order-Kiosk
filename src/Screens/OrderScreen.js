import React from 'react'
import {
    Avatar,
    Box,
    CircularProgress,
    Grid,
    ListItem,
  } from "@material-ui/core";
  import { useStyles } from "../styles";
import { List } from '@material-ui/icons';
import { useEffect } from 'react';
import { listCategories } from '../actions';
import { useContext } from 'react';
import { store } from '../Store';
import { Alert } from '@material-ui/lab';
import Logo from '../components/Logo';

  

export default function OrderScreen() {
    const style = useStyles();
    const { state, dispatch} = useContext(store);
    const { categories, loading, error } = state.categoryList;

    useEffect(() => {
        listCategories(dispatch);
    }, [dispatch]);

    return (
        <Box className={style.root}>
            <Box className={style.root}>

            <Grid container>
                <Grid item md={2}>
                <List>
                    {loading ? (
                        <CircularProgress />
                       ) : error ? (
                            <Alert severity="error">{error}</Alert>
                        ) : 
                        (
                            <>
                            <ListItem button>
                                <Logo></Logo>
                            </ListItem>
                            {categories.map((category) => (
                                <ListItem button key={category.name}>
                                    <Avatar alt={category.name} src={category.image}></Avatar>
                                </ListItem>
                            ))}
                            </>
                        )}
                </List>
                </Grid>
                <Grid item md={10}>

                </Grid>
            </Grid>

            </Box>
        </Box>
    )
}
