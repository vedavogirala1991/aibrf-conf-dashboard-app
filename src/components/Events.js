import React,{Component} from 'react'
import {connect} from 'react-redux'

const Events = (props) => {

  const {petIds,className} = props

  if(petIds.length===0) {
    let emptyText = 'You do not have any pets adopted'

    return (
      <div className='empty-question'>
        <span>{emptyText}</span>
      </div>
    )
  }

  return (
    <div className={className}>
      These are your cute little fur babies
      <ul className='question'>
          {petIds &&
            petIds.map((id) =>(
            <li key={id}>
              <Pet id={id}/>
            </li>
          ))}
      </ul>
    </div>
  )
}

const mapStateToProps = ({pets}, {petIds,id,className}) => {
  console.log('Pets page : ',pets)
  console.log('Pets page petIds : ',petIds)
  //const petIds = petIds ? Object.keys(pets).filter((id) => petIds.includes(id)) : null
  return {
    petIds : petIds ? Object.keys(pets).filter((id) => petIds.includes(id)) : null,
    className,
    id,
  }
}

export default connect(mapStateToProps)(Events)
