import React, { useEffect } from 'react';
import lottieJson from '../plant_animation.json'
import ProgressBar from "./progress-bar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'font-awesome/css/font-awesome.min.css';
import Lottie from 'react-lottie-player'
import { json } from 'express';


const InputGarden = () => {

  // const getGoal = async () => {
  //   try {
  //     const response = await fetch ('http://localhost/8080/garden')
  //     const jsonData = await response.json();

  //     console.log(jsonData)
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // }



  // useEffect(() =>{
  //   // getGoal();
  // })

  const testData = [
    { bgcolor: "#6a1b9a", completed: 80 },
    { bgcolor: "#6a1b9a", completed: 30 },
    { bgcolor: "#6a1b9a", completed: 100 },
  ];




  return(
  <>
    <div className='plant'>
      {testData.map((item, idx) => (<>
        <div className='goalName'>
          name of goal
        </div>
        <div className='edits'>
          <button>edit</button>
        </div>
        
        <Lottie className='plant-img'
          animationData={lottieJson}
          play
          segments={[0, item.completed]}
          loop={false}
          style={{ width: 150, height: 150 }}
        />
        <div className="progressBar">
          <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
        </div>
        <div className='amounts'>
          <div className='tAmount'>
            tracked amount
          </div>
          <div className='gAmount'>
            goal amount in $
          </div>
        </div>
      </>))}
    </div>
  </>
)};


export default InputGarden