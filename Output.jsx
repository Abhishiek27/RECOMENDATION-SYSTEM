import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../App';

const Output = () => {
    const { result, setResult, name, setName, college, setCollege, skill, setSkill } = useContext(AppContext)
    useEffect(() => {
        result.map((a) => {
            console.log(a.similarity)
        })
    })
    return (
        <div id="recommendation" class="section recommendation">
            <div class="container">
                <h1>HERE IS YOUR RECOMMENDATION</h1>
                <div id="recommendation-form" >
                    <div className='job'>
                        <table>
                            <tr>
                                <th>Job</th>
                                <th>Similarity</th>
                            </tr>
                            {result.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.job}</td>
                                    <td>{item.similarity}</td>      
                                </tr>
                            ))}
                        </table>
                    </div>
                </div>
                <div id="recommendation-results"></div>
            </div>
        </div>
    );
};

export default Output;
