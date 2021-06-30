import React from 'react'
import { Button } from "antd"


function CartIn({ q }) {
  return (
    <div>
      <br />
      <center>
        <div className="con_all">
          <div style={{
            height: "250px",
            width: "100%",
            background: "pink",
            borderRadius: "5px",
            objectFit: "cover"
          }}>
            <img src={q.image} style={{ height: "100%", width: "100%" }} />

          </div>
          <div style={{
            height: "60px",
            width: "60px",
            borderRadius: "60px",
            background: "black",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: "230px",
            left: "20px"
          }}>
            <div style={{
              height: "50px",
              width: "50px",
              borderRadius: "50px",
              background: "black",
              border: "4px solid red",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>
              {q.price}

            </div>

          </div>

          <div style={{

            height: "auto"
          }}>
            <div
              style={{
                position: "absolute",
                top: "290px",
                left: "20px"

              }}
            >{q.title}</div>
            <div
              style={{
                position: "absolute",
                top: "310px",
                left: "20px"
              }}
            >{q.category}</div>
          </div>
          <br />
          <div style={{
            display: "flex",
            position: "absolute",
            top: "335px",
            left: "20px",
            width: "270px",
            justifyContent: "space-between"
          }}>
            <Button>Watch</Button>
            <Button>Remove</Button>
          </div>
        </div>
      </center>


    </div>
  )
}

export default CartIn
