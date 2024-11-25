import React from 'react'
import CardNutrition from './NutritionCard'
import styled from 'styled-components'

const DivCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const NutritionList = ({nutritions}) => {
  return (
    <DivCardContainer>
      {nutritions.map((nutrition) => (
          <CardNutrition dataDish={nutrition} />
        ))}
    </DivCardContainer>
  )
}

export default NutritionList
