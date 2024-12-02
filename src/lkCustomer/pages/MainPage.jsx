import React from 'react'
import ProfileCard from '../components/main/ProfileCard'
import { useSelector } from 'react-redux'

const MainPage = () => {

    const customer = useSelector(state => state.castomers.castomers)

  return (
    <ProfileCard data={customer[0]}/>
  )
}

export default MainPage
