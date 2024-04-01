import React, { useState, useContext } from 'react';
import { AppContext } from '../App';
import axios from 'axios';
import Loader from './Loader';
import { useNavigate } from "react-router-dom";

const RecomendationForm = () => {
    const navigate = useNavigate();

  const { result, setResult, name, setName, college, setCollege, skill, setSkill, loading, setLoading } = useContext(AppContext);

  const submitHandler = async(e) => {
    e.preventDefault();
    console.log(name, skill, college)
    setLoading(true)
    try {
      const endPoint = `http://127.0.0.1:8000/result/${skill}`;
      const {data} = await axios.post(endPoint);
      if (data) {
        setResult(data);
        setLoading(false)
        navigate("/output");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div id="recommendation" className="section recommendation">
        {loading ? <Loader/> : 
      <div className="container">
        <h1 className="animated-text">ENTER YOUR DETAILS</h1>
        <form id="recommendation-form" onSubmit={submitHandler}>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
            required
            className="animated-input"
          />
          <input
            type="text"
            id="skills"
            placeholder="Skills"
            onChange={(e) => setSkill(e.target.value)}
            required
            className="animated-input"
          />
          <input
            type="text"
            id="college"
            placeholder="College"
            onChange={(e) => setCollege(e.target.value)}
            required
            className="animated-input"
          />
          <button type="submit" className="animated-button">
            Get Recommendations
          </button>
        </form>
        <div id="recommendation-results"></div>
      </div>}
    </div>
  );
};

export default RecomendationForm;
