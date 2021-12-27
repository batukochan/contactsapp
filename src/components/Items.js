import React from 'react'

const Items = ({item}) => {
    return (
        <div>
            {item.name}
            {item.number}
        </div>
    )
}

export default Items
