import React, { useEffect, useState } from 'react'
import { useStateValue } from '../StateProvider'
import styles from './Leaderboard.module.css'
import trophy from '../assets/trophy.png'
import avatar from '../assets/avatar.png'

export const Leaderboard = () => {

  const url=''
  const [prediction,setPrediction]=useState([])
  async function callAPI(data){
      const res=await fetch(url,
      {
        method:"GET",
        body: JSON.stringify(data),
        headers: { "Content-Type" : "application/json"},
        redirect: "follow"
      })
  }
  useEffect(()=>{
      callAPI.then(result=>setPrediction(result))
  },[])

  return (
    <>
      <div className={styles.leaderboard}>
        <h1 className={styles.heading}>
          <img src={trophy} className={styles.trophy}></img>
          High Scores
          <img src={trophy} className={styles.trophy2}></img>
        </h1>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <th className={styles.head}>Rank</th>
              <th className={styles.head}>Name</th>
              <th className={styles.head}>Score</th>
            </tr>
          </thead>
          <tbody>
            
            
              {prediction.map((item, i) => (
          <tr key={i} className={styles.tablerow}>
            
                <td className={styles.row}>{item.name}</td>
                <td className={styles.img}>
                  <img src={avatar}></img>
                </td>
                <td className={styles.row}>{item.score}</td>
              </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
