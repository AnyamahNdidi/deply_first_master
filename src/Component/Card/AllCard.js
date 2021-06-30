import React from 'react'
import Card from './Card'
import img from "./img/1.jpg"
import axios from "axios"
import { connect, useDispatch, useSelector } from 'react-redux'
import { addMovie } from '../State/actionState'

const AllCard = ({ views }) => {
  const dispatch = useDispatch()

  const getData = async () => {
    const res = await axios.get('https://fakestoreapi.com/products')
    console.log(res)
    if (res) {
      dispatch(addMovie(res.data))

    }
  }
  React.useEffect(() => {
    getData()
  }, [])
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {views.map(el => (
          <Card key={el.id} q={el} />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    views: state.movie.movieDataBase,
  };
};

export default connect(mapStateToProps)(AllCard)
