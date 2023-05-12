import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteShoeDataAction, getShoesDataforAdminAction, patchShoeAction } from '../Redux/ShoesReducer/action'
import styles from '../Styling/Admin.module.css'
import AdminEditProd from '../Pages/AdminEditProd'
import { Link } from 'react-router-dom'



//useDispatch
//deleteShoeDataAction
//useSelector


const AdminTableRow = ({id, brand, description, image, price}) => {

  const data = useSelector(store=>store.ShoesReducer.adminShoes)
  // console.log(data)

  const dispatch = useDispatch()

    const HandleDelete = ()=>{
        //const id = item.id
        // console.log(id);
        dispatch(deleteShoeDataAction(id)).finally(()=>dispatch(getShoesDataforAdminAction))
    }

   

  

    

  return (
    <div className={styles.indiDiv}>
      <div className={styles.imagediv}><img src={image} alt="image" /></div>
      <div className={styles.detailsdiv}>
        <p>{`Brand: ${brand}`}</p>
        <p>{`Description: ${description}`}</p>
        <p>{`Id: ${id}`}</p>
        <p>{`Price: ${price}`}</p>
        <div id={styles.btndiv}>
          
          <button className={styles.adminButton} id={styles.editbtn}><Link to={`/editProd/${id}`} >Edit</Link></button> 
          <button className={styles.adminButton} onClick={HandleDelete} id={styles.deletebtn}>Delete</button>
        </div>
      </div>
    </div>
    // <tr>
    //       <td className={styles.adminCell}>{brand}</td>
    //       <td className={styles.adminCell}>{description}</td>
    //       <td className={styles.adminCell}>{id}</td>
    //       <td className={styles.adminCell}><img src={image} alt="img" id={styles.adminImage}/></td>
    //       <td className={styles.adminCell}>{price}</td>
    //       <td className={styles.adminCell}><button className={styles.adminButton}><Link to={`/editProd/${id}`}>Edit</Link></button></td>
    //       <td className={styles.adminCell}><button className={styles.adminButton} onClick={HandleDelete}>Delete</button></td>
    // </tr>
  )
}

export default AdminTableRow