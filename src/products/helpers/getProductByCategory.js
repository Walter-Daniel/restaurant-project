import { useAuth } from "../../context/AuthContext";


export const getProductByCategory = ( category ) => {
    const auth = useAuth();

    const validCategory = ['Sandwiches', 'Empanadas', 'Pizzas'];
    if ( !validCategory.includes( category )) {
        throw new Error (`${ category } is not a valid category`)
    }

    console.log(auth.product)
  return auth.product.data.products.filter( product => product.category.name === category);
}
