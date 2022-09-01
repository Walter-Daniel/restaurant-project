import { useEffect } from "react";
import { useState } from "react";
import { notification, Modal } from 'antd';
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { ProductsTable } from "./ProductsTable";
import { Title } from "../components";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const { confirm } = Modal;


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
    const [isModalCreateVisible, setIsModalCreateVisible] = useState(false);

    const openModal = () => {
      setIsModalVisible(true);
    }
    const closeModal = () => {
      setIsModalVisible(false);
    }
    const openModalCreate = () => {
      setIsModalCreateVisible(true);
    }
    const closeModalCreate = () => {
      setIsModalCreateVisible(false);
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
      confirm({
        title: 'Confirmar la operación',
        icon: <ExclamationCircleOutlined />,
        content: 'Al darle OK se eliminara al producto de la base de datos',
        
        async onOk() {
          const deletedProduct = await axios.delete(`${URL}/${id}` , {
            headers:  {
              'Authorization': 'Bearer ' + auth.token
                      }
          }) 
          const newProduct = products.filter( product => product._id !== id);
          setProducts(newProduct);
          openNotification('Eliminado', 'El producto ha sido eliminado de la base de datos', 'success')
        },
        onCancel() {
          openNotification('Operación cancelada', 'El producto no se ha sido eliminado', 'error')
        },
      });
    }

    async function createProduct() {
      try {
       
        openModalCreate();
        
      } catch (error) {
        console.log(error)
      }
    }
    async function editProduct(id) {
      try {
       
        const newProduct = products.find( product => product._id === id);
        setProductToEdit(newProduct);
        console.log('edit product', id);
        openModal();
        
      } catch (error) {
        console.log(error)
      }
    }
    const title = 'Productos'
  return (
    <>
        <div className="admin">
          <Title title={title} /> 
          <hr />
          <ProductsTable products={products} deleteProduct={deleteProduct} editProduct={editProduct} createProduct={createProduct} product ={productToEdit} closeModal={closeModal} isModalVisible={isModalVisible} closeModalCreate={closeModalCreate} isModalCreateVisible={isModalCreateVisible} />
        </div>
    </>
  )
}
