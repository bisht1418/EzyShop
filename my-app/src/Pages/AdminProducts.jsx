import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AdminTableRow from '../Components/AdminTableRow'
import { getShoesDataforAdminAction} from '../Redux/ShoesReducer/action'
import styles from "../Styling/Admin.module.css"
import { Link } from 'react-router-dom';
import AdminNav from '../Components/AdminNav'




const AdminProducts = () => {

    const dispatch = useDispatch()
    const shoesdata = useSelector(store=>store.ShoesReducer.adminShoes)
       
    

    useEffect(()=>{
       dispatch(getShoesDataforAdminAction)
    },[])

    


  return (
    <div id={styles.adminDiv} className={styles.adminDiv}>
        <AdminNav />
        <div className={styles.ProductsParentDiv}>
            {shoesdata.map((item)=><AdminTableRow key={item.id} {...item}/>)}
        </div>
        {/* <table id={styles.adminTable}>
            <thead>
                <tr>
                    <th className={styles.adminCell}>Brand</th>
                    <th className={styles.adminCell}>Description</th>
                    <th className={styles.adminCell}>ID</th>
                    <th className={styles.adminCell}>Image</th>
                    <th className={styles.adminCell}>Price</th>                
                </tr>
            </thead>
            <tbody>
            {shoesdata.map((item)=><AdminTableRow key={item.id} {...item}/>)}
            </tbody>
        </table> */}
        
    </div>
  )
}

export default AdminProducts