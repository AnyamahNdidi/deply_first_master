import React from 'react'
import { Header } from 'antd/lib/layout/layout';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom"
// import img from "../Card/images/smal.png"
import { connect } from "react-redux"


function HomeHeader({ view }) {
  const [counter, setCounter] = React.useState(0)


  React.useEffect(() => {
    let newCounter = 0;

    view.forEach((el) => {
      newCounter += el.qty;
    })
    setCounter(newCounter)
  }, [counter, view])

  return (
    <div>
      <Header >
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          width: "200px"
        }}>
          <div>

            <Link
              to="/"
            >
              <img
                // src={img}
                style={{
                  width: "80px",
                  height: "50px",
                  objectFit: "cover",
                  borderRadius: "5px"
                }}
              />
            </Link>
          </div>
          <Link to="/cart" style={{
            color: "white"
          }}>
            <div style={{
              fontSize: "20px"
            }}>WatchList:{counter}</div>
          </Link>

        </div>
      </Header>

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    view: state.movie.watchlist
  }
}

export default connect(mapStateToProps)(HomeHeader)
