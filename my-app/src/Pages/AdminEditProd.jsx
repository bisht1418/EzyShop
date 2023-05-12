

import React, { useEffect, useState } from 'react'
import { getShoesDataforAdminAction, patchShoeAction } from '../Redux/ShoesReducer/action'
import styles from "../Styling/Admin.module.css"
import AdminNav from '../Components/AdminNav'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'




const AdminEditProd = () =>{

    const {id} = useParams()
    const Navigate = useNavigate()

    const [dataobj, setdataobj] = useState("")
    const dispatch = useDispatch()

    const shoesarr = useSelector((store)=>store.ShoesReducer.adminShoes)
    //console.log(shoesarr);

    useEffect(()=>{
        const neededProd = shoesarr.find((item)=>item.id === Number(id))
        setdataobj(neededProd)
    },[])

    const HandleChange=(e)=>{
        //console.log(e.target.name, e.target.value)
        const name = e.target.name
        const value = e.target.value

        setdataobj((prev)=>{
            return {...prev, [name]:value}
        })
    }
    
    
    const HandleEditProduct = (e)=>{
        e.preventDefault()
        // console.log(dataobj)
        
        dispatch(patchShoeAction(dataobj, id)).finally(()=>dispatch(getShoesDataforAdminAction))
        alert("Product Edited")
        Navigate("/adminProducts")
    }

    // useEffect(()=>{
    //     dispatch(getShoesDataforAdminAction)
    // },[patchShoeAction])

  return (
    <div className={styles.adminDiv}>
        <AdminNav />
        <form onSubmit={HandleEditProduct} id={styles.adminForm} >
                <h3>EDIT PRODUCT</h3>
                <input type="text" value={dataobj.brand} placeholder='brand' onChange={ HandleChange} name="brand"/><br />
                <input type="text" value={dataobj.description} placeholder='description' onChange={HandleChange} name="description"/><br />
                <input type="text"  value={dataobj.image} placeholder='image' onChange={HandleChange} name="image"/><br />
                <input type="number" value={dataobj.price} placeholder='price' onChange={ HandleChange} name="price"/><br />
                <button type='submit' className={styles.adminButton}>Click to Edit</button>
        </form>
    </div>
  )
}



export default AdminEditProd





