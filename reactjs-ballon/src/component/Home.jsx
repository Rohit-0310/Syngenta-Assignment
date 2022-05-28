import React from 'react'
import "./style.css"
const Home = () => {
  return (
    <div className='top'>
        <h1>Home</h1>

        <div className="main">
            <div>
                <p>Empty div</p>
                <div className="empty"></div>
            </div>
            <div>
                <p>5 Circle</p>
                <div className='div_1'>1</div>  <br/>
                <div className='div_2'>2</div>  <br/>
                <div className='div_3'>3</div>  <br/>
                <div className='div_4'>4</div>  <br/>
                <div className='div_5'>5</div>  <br/>
            </div>
            <div>
                <input type="number" placeholder="Circle No" /> <br/>
                <button type="submit">Submit</button>
            </div>
        </div>
    </div>
  )
}

export default Home