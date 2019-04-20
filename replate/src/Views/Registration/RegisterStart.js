import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

const RegStartPage = styled.div`
    max-width: 800px;
    margin: 0 auto;
    margin-top: 80px;
    display: flex;
    justify-content: space-between;

    .selection {
        max-width: 340px;
    border: 2px solid #8bc53e;
    padding: 20px;
    border-radius: 5px;
    margin-top: 60px;
    -webkit-box-shadow: 0px 0px 28px 8px rgba(0,0,0,0.14);
    -moz-box-shadow: 0px 0px 28px 8px rgba(0,0,0,0.14);
    box-shadow: 0px 0px 28px 8px rgba(0,0,0,0.14);
    }

    button {
        background-color: #8bc53e;
        color: #fff;
        width: 125px;
        margin: 0 auto;
        margin-top: 25px;
        margin-bottom: 25px;
        border: 2px solid #8bc53e;
        border-radius: 3px;
        padding: 15px 20px;
        font-size: 14px;
        cursor: pointer;

        :hover {
            background-color: #006837;
            border: 2px solid #006837;
            color: #fff;
            -moz-transform: translate(-2px, -2px);
            -ms-transform: translate(0, -2px);
            -o-transform: translate(0, -2px);
            -webkit-transform: translate(0, -2px);
            transform: translate(0, -2px);
            transition: 0.4s;
            -webkit-box-shadow: 1px 6px 14px -4px rgba(0,0,0,0.28);
            -moz-box-shadow: 1px 6px 14px -4px rgba(0,0,0,0.28);
            box-shadow: 1px 6px 14px -4px rgba(0,0,0,0.28);
        }
    }

    p {
        color: #888;
    }

    h2 {
        color: #006837;
        font-size: 30px;
    }

    a {
        color: #8bc53e;
        text-decoration: none;
    }
    

`



const RegisterStart = props => {

    

    return (
        <RegStartPage>
            <div className='selection'>
                <h2>Volunteer Registration</h2>
                <p>As a volunteer, you'll help by picking up excess food from businesses and restaurants and deliver them to local food banks, missions, and kitchens to help feed those in need.</p>
                <Link to='/volunteer-registration'>
                <button>Register As a Volunteer</button>
                </Link>
            </div>
            <div className='selection'>
            <h2>Business Registration</h2>
            <p>As a business, you'll help by donating leftover food from your company luncheons, or if you're a restaurant, all food that is getting ready to expire, or is no longer needed.</p>
            <Link to='/business-registration'>
            <button>Register As a Business</button>
            </Link>
            </div>

        </RegStartPage>
    )
    
}

export default RegisterStart