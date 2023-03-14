import { user_logout } from '../Redux/Actions/userAction'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import a400 from "../Assets/Images/100.jpg"
import a100 from "../Assets/Images/a100.jpg"
import a200 from "../Assets/Images/a200.jpg"
import a300 from "../Assets/Images/a300.jpg"
import a500 from "../Assets/Images/a500.jpeg"
import a600 from "../Assets/Images/a600.jpeg"
import { get_all_tools, get_available_tools } from '../Redux/Actions/ToolAction'
import "../Styles/styles.css"


const Oproducts = () => {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        dispatch(user_logout())
    }

    const a001 = <img src={a100} className="malgchairr"/>
    const a002 = <img src={a200} className="malgchairr"/>
    const a003 = <img src={a300} className="malgchairr"/>
    const a004 = <img src={a400} className="malgchairr"/>
    const a005 = <img src={a500} className="malgchairr"/>
    const a006 = <img src={a600} className="malgchairr"/>

	const getAvailableTools = useSelector((state) => state.getAvailableTools)
	const { loading, tools } = getAvailableTools

  
    console.log(tools)
    console.log(loading)

    useEffect(() => {
        dispatch(get_available_tools())
    }, [dispatch])


  return (
    <>
        <div className='container-fluid bg-dark' style={{minHeight:"100vh"}}>
            <p className='text-center py-5' style={{fontWeight:"700",fontSize:"22px",color:"white"}}>AVAILABLE TOOLS</p>
            <div className='row'>
            {tools && tools.map(tool => <div className='col-md-3 py-3'>
                <div className="malgridd bg-light">
                    {tool.image == "a100" ? a001 : null}
                    {tool.image == "a200" ? a002 : null}
                    {tool.image == "a300" ? a003 : null}
                    {tool.image == "a400" ? a004 : null}
                    {tool.image == "a500" ? a005 : null}
                    {tool.image == "a600" ? a006 : null}
                    <p className='text-muted malwrop'>NAME: {tool.toolName}</p>
                    <p className='text-dark maldoll'>${tool.price}</p>
                    <button className='malcart'>PLACE ORDER</button>
                </div>
            </div>)}
            </div>
            <a href='/csi'><button className='ubutt my-3' onClick={logoutHandler}>LOG OUT</button></a>
        </div>
    </>
  )
}

export default Oproducts