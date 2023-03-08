import {CategoryContainer,CategoryTitle} from "./category.styles.jsx";

import { useParams } from "react-router-dom";
import { useContext , useState, useEffect } from "react";
import { CategoriesContext } from "../../context/categories.context";
import ProductCard from "../../components/product-card/product-card.component";

const Category = () =>{

    const {category} = useParams();
    const {categoriesMap} = useContext(CategoriesContext)
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    },[category,categoriesMap])


    return(
        <>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            <CategoryContainer>
            {
                products && //check: only renders when "products" is present
                products.map((product) => (
                <ProductCard key={product.id} product={product}/>
                ))
            }
            </CategoryContainer>
    </>    
    );
}
export default Category;