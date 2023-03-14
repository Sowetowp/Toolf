import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import a400 from "../Assets/Images/100.jpg"
import a100 from "../Assets/Images/a100.jpg"
import a200 from "../Assets/Images/a200.jpg"
import a300 from "../Assets/Images/a300.jpg"
import a500 from "../Assets/Images/a500.jpeg"
import a600 from "../Assets/Images/a600.jpeg"
import { admin_logout } from '../Redux/Actions/Adminaction'
import { get_all_tools, hire_tool } from '../Redux/Actions/ToolAction'
import "../Styles/styles.css"

const Admindisplay = () => {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        dispatch(admin_logout())
    }

    const a001 = <img src={a100} className="malgchairr"/>
    const a002 = <img src={a200} className="malgchairr"/>
    const a003 = <img src={a300} className="malgchairr"/>
    const a004 = <img src={a400} className="malgchairr"/>
    const a005 = <img src={a500} className="malgchairr"/>
    const a006 = <img src={a600} className="malgchairr"/>

	const getAllTools = useSelector((state) => state.getAllTools)
	const { loading, tools } = getAllTools

    const adminAuth = useSelector((state) => state.adminAuth)
    const {adminDetail} = adminAuth
  
    const toolHire = useSelector((state) => state.toolHire)
    const {success} = toolHire

    const hirehandler = (e, id) => {
    e.preventDefault()
    let data = {
        firstName: adminDetail.firstName,
        lastName: adminDetail.lastName,
        email: adminDetail.email,
        address: adminDetail.address
    }
    if(window.confirm("Are you sure you want to hire this tool?")) {
        dispatch(hire_tool(data, id)) 
    }
  }

    console.log(tools)
    console.log(loading)

    useEffect(() => {
        dispatch(get_all_tools())
    }, [dispatch])


  return (
    <>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-2 bg-dark text-light border-end'>
                    <p className='p1 mt-3 text-center'>ADMIN</p>
                    <a href='/add'><button className='ubutt mt-3'>Add User</button></a>
                    <a href='/users'><button className='ubutt mt-3'>View Users</button></a>
                    <a href='/asi'><button className='ubutt mt-3' onClick={logoutHandler}>LOG OUT</button></a>
                </div>
                <div className='container-fluid bg-dark col-md-10' style={{minHeight:"100vh"}}>
                    <p className='text-center py-5' style={{fontWeight:"700",fontSize:"22px",color:"white"}}>ALL TOOLS</p>
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
                                <button className='malcart'>{tool.availability == true ? "AVAILABLE" : "NOT AVAILABLE"}</button>
                                <br></br>
                                <button className='malcart my-3' onClick={(e) => hirehandler(e, tool._id)}>PLACE ORDER</button>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Admindisplay