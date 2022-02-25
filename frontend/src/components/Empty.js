import React,{useState} from 'react'
import {ReactComponent as EmptyS} from "./Empty.svg"
import { Link } from "react-router-dom";
import { RiArrowRightSLine  ,BsArrowBarRight} from "react-icons/all";
import {useSelector} from 'react-redux'

const Empty = () => {
    const [arrow, setarrow] = useState(false)
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    return (
        <div className = 'Emptycart'>
            <EmptyS className = 'illustration'/>
            <div className = 'textempty'>
            <h1>
                Wow Such an empty Cart
            </h1>
            {userInfo ? (<Link to = '/shop' className ='goshop' onMouseOver = {()=>{setarrow(true)}} onMouseLeave = {()=>{setarrow(false)}}>
            Go to shop
            {!arrow ? <RiArrowRightSLine className = 'arrow' /> : <BsArrowBarRight className = 'arrow'/> }
            </Link>
                                
                            ) : <Link to = '/register' className ='goshop' onMouseOver = {()=>{setarrow(true)}} onMouseLeave = {()=>{setarrow(false)}}>
                            Go to register
                            {!arrow ? <RiArrowRightSLine className = 'arrow' /> : <BsArrowBarRight className = 'arrow'/> }
                            </Link>}
           
            </div>

            

        </div>
    )
}

export default Empty
