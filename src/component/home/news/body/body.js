import React, { useState, useEffect } from 'react';
import './body.css';
import NDDC from '../../../../asset/nddc.png';
import Tolulope from '../../../../asset/Arotile.jpg';
import BBN from '../../../../asset/BBN.jpg';
import axios from 'axios';

const Body = () => {

    const [author, setAuthor] = useState('Tunde');

const [readMore, setReadMore ] = useState(false);
const [data, setData] = useState()

useEffect(() => {


    axios({
        method: 'GET',
        url: 'http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=688432c0912e4c519ab33e5b2d7dd681'
    }).then(res => {
        setData(res.data.articles);
    }).catch(error => {
        console.log('error')
    });


}, []);

const resource = data;


console.log(resource);
    

const extratext = 
    <div>
        <p>
         aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                        . Excepteur sint occaecat cupidatat non proident, sunt in culpa
                        qui officia deserunt mollit anim id est laborum.</p>
    </div>

    const linkName = readMore? 'Read Less': 'Read More';

    const togglerReadMore = () => {
        setReadMore(!readMore);
    }


    return(
        <div className = 'Body'>    

        {/* <div>
            {
                data.map(data => {
                    return (
                    <div>
                    <img src= { NDDC } alt = 'nddc saga' />
                    <div className = 'News-div'>
                        <h3>NDDC Saga and it's possible outcome.</h3>
                        <p>According to Channels news "Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                            ea commodo consequat. Duis aute irure dolor in reprehenderit
                            in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                            . Excepteur sint occaecat cupidatat non proident, sunt in culpa
                            qui officia deserunt mollit anim id est laborum. <span onClick ={ togglerReadMore }>{linkName}</span></p>
                    </div>
                    
                    <div className = 'Source'>
                        <p>Author { author }</p>
                        <p>Date : {  }</p>
                    </div>
                    </div>
                    )
                })
            }
        </div> */}


           


            <div>
                <img src= { Tolulope } alt = 'tolulope' />

                <div className = 'News-div'>
                    <h3>Such a talent wasted</h3>
                    <p>The Nigerian Airforce released an official statement saying "Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                        . Excepteur sint occaecat cupidatat non proident, sunt in culpa
                        qui officia deserunt mollit anim id est laborum. <span>{linkName}</span></p>
                </div>
                
                <div className = 'Source'>
                    <p>Author : {  }</p>
                    <p>Date : {  }</p>
                </div>
            </div>


            <div>
                <img src= { BBN } alt = 'bbn' />

                <div className = 'News-div'>
                    <h3>Big Brother Naija's Dorothy!</h3>
                    <p>Ebuka on Sunday night being the premier night of the show said, "Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                        . Excepteur sint occaecat cupidatat non proident, sunt in culpa
                        qui officia deserunt mollit anim id est laborum. <span>{linkName}</span></p>
                </div>
                
                <div className = 'Source'>
                    <p>Author : {  }</p>
                    <p>Date : {  }</p>
                </div>
            </div>


            
            
        </div>
    )
}

export default Body;