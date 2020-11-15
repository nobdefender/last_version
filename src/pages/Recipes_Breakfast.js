import '../App.css';
import React from 'react';
import { Grid, Paper} from "@material-ui/core"
import {Link} from "react-router-dom";
import Dinner from '../image/Dinner.jpg'

var imageItem3 = {
    backgroundImage: "url(" + Dinner + ")"
};


function Recipes_Breakfast(props) {
    let imageItem1 = {
        backgroundImage: "url(" + props.photo_circle_1 + ")"
    };
    let imageItem2 = {
        backgroundImage: "url(" + props.photo_circle_2 + ")"
    };
    let imageItem3 = {
        backgroundImage: "url(" + Dinner + ")" //не использую еще
    };

    return (
        <div>
            <h1 className="headerText">
                Книга Вкуса
            </h1>
            <div className="content">

                <div className="ItemCon">
                    <Grid container spacing={8}>
                        <Grid item xs={12} sm={4}>
                            <Link to ="./Breakfast/Recipe_Breakfast_1">
                            <div className="ItemCircle" style={imageItem1}>
                                <div className="ItemName">
                                    {props.name1}
                                </div>
                            </div>
                            </Link>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Link to = "./Breakfast/Recipe_Breakfast_2">
                                <div className="ItemCircle" style={imageItem2}>
                                    <div className="ItemName">
                                        {props.name2}
                                    </div>
                                </div>
                            </Link>
                        </Grid>
                    </Grid>
                </div>

            </div>
        </div>
    )};

export default Recipes_Breakfast;
