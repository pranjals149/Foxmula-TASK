import { Button } from '@material-ui/core'
import React from 'react'
import AddIcon from '@material-ui/icons/Add';

import './Activity.css'

function Activity() {
    return (
        <>
            <div className="activity">
                <div className="activity__info">
                    <p style={{ color: "#515151" }}>Activities | 26th Apr, 2020</p>
                </div>

                <div className="activity__button">
                    <Button variant="contained" color="primary">
                        <AddIcon style={{ paddingRight: "10px" }} />
                    Schedule Activity
                </Button>
                </div>
            </div>

            <div className="activity__calender">
                <div className="activity__months">
                    <p>MON</p>
                    <p>TUE</p>
                    <p>WED</p>
                    <p>THU</p>
                    <p>FRI</p>
                    <p>SAT</p>
                    <p>SUN</p>
                </div>
            </div>
        </>
    )
}

export default Activity
