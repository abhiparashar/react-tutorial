import React from "react"
import ReactDom from "react-dom"
import './index.css'

function People() {
    return (
        <div>
            <Person name="abhishek parasharr" job=" Software Engineer" />
            <Person name="John Doe" job=" Jewellery Designer" />
            <Person name="Sunny Doe" job=" ASrtist" age="22" />

            {/* <Person1/> */}
        </div>
    )
}

function Person(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.job}</p>
            <p>{props.age}</p>
            <hr />
        </div>
    )
}

// function Person1(){
//   return(
//     <div>
//       <h1>bob Doe</h1>
//       <p>Designer</p>
//       <hr/>
//     </div>
//   )
// }


ReactDom.render(<People />, document.getElementById("root"));