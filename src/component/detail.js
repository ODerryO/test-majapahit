import React from "react"

function Detail (props) {
  let detail = props.detailId
  console.log(props.detailId," ini data")
  return (
    <div>
      <div>
        <p> {detail.title}</p>
        <p> {detail.body}</p>
      </div>

    </div>


  )
}

export default Detail