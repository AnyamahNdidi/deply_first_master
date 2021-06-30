import React from 'react'
import CartIn from './CartIn'
import { Button } from "antd"
import img from "./img/1.jpg"
import axios from "axios"
import { connect, useDispatch, useSelector } from 'react-redux'
import { addMovie } from '../State/actionState'


function CartAll({ watch }) {
  const dispatch = useDispatch()



  return (
    <div>
      <div
        style={{
          display: "flex",
          height: "auto",


        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "300px",
            height: "300px",
            alignContent: "center",
            justifyContent: "space-around",
            paddingLeft: "30px"



          }}
        >
          <div>Summary</div>
          <div>Total Iteam Selected : 0</div>
          <div>Total Cost : 0</div>

        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            height: "500px",
            height: "auto",


          }}

        >{
            watch.map((el) => (
              <CartIn key={el.id} q={el} />
            ))
          }







        </div>

      </div>
    </div>
  )
}

const mapSateTopProps = (state) => {
  return {
    watch: state.movie.watchlist
  }
}


export default connect(mapSateTopProps)(CartAll)
