import { useEffect } from "react";
import { useState } from "react";
import { notification } from 'antd';
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { ProductsTable } from "./ProductsTable";


const URL = 'http://rolling-food.herokuapp.com/api/product';

const openNotification = (message, description, type) => {
  notification[type]({
    message: message,
    description: description,
    placement: 'bottom'
  });
};

export const Products = () => {

    const auth= useAuth();
    const [products, setProducts] = useState([]);
    const [productToEdit, setProductToEdit] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const openModal = () => {
      setIsModalVisible(true);
    }
    const closeModal = () => {
      setIsModalVisible(false);
    }

    useEffect(() => {
      getProducts();
    }, [])
    

    async function getProducts() {
        const productsDB = await axios(URL, {
                headers: {
                    'Authorization': 'Bearer ' + auth.token
                }
        })
        const productList= productsDB.data.products;
        setProducts(productList)
        console.log(productList)

    };

    async function deleteProduct(id) {
      try {
        const deletedProduct = await axios.delete(`${URL}/${id}` , {
          headers:  {
            'Authorization': 'Bearer ' + auth.token
                    }
        }) 
        const newProduct = products.filter( product => product._id !== id);
        setProducts(newProduct);
        openNotification('Eliminado', 'El producto ha sido eliminado de la base de datos', 'success')
        
      } catch (error) {
        openNotification('Error', 'Error al intentar borrar un producto', 'error')
      }
    }

    async function editProduct(id) {
      try {
        console.log('edit product', id);
        // await axios.put(`${URL}/${id}`)
        // const newProduct = products.filter( product => product._id !== id);
        // setProducts(newProduct);
        // openNotification('Usuario Borrado', 'El usuario ha sido eliminado de la base de datos', 'error')
        
      } catch (error) {
        openNotification('Error', 'Error al intentar borrar un usuario', 'error')
      }
    }
  return (
    <>
        <h1>Profuctos</h1>
        <h1>Profuctos</h1>
      
        <h1>Profuctos</h1>
        
        <ProductsTable products={products} deleteProduct={deleteProduct} editProduct={editProduct} product ={productToEdit} closeModal={closeModal} isModalVisible={isModalVisible} />
    </>
  )
}
