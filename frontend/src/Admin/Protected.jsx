import React from 'react'

const Protected = (props) => {
    const {protectedComponent} = props
  return (
    <div>    
        <protectedComponent/>
    </div>
  )
}

export default Protected