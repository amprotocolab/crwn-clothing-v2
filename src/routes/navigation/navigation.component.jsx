<<<<<<< Updated upstream
import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { FaShoppingCart } from "react-icons/fa";
import './navigation.styles.scss';

const Navigation = () => {
=======
import { Fragment ,  useContext} from 'react';
import { Outlet} from 'react-router-dom';
//import { UserContext } from '../../context/user.context';
import { CartContext } from '../../context/cart.context';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component';
import { useSelector } from 'react-redux';
import {NavigationContainer,LogoContainer,NavLinkBar,NavLink} from './navigation.styles';
import { selectCurrentUser } from '../../store/user/user.selector';



const Navigation = () => {

  // const {currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);

//Use Selector to extract values from Reducer Object

  const currentUser = useSelector(selectCurrentUser);




>>>>>>> Stashed changes
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
            <CrwnLogo className='logocart' />
        </Link>

        <div className='navlinkBar'>
          <Link className='nav-link' to='/shop'>SHOP</Link>
          <Link className='nav-link' to='/auth'>SIGN IN</Link>
          <Link className = "cart" to = "/cart" >
              < FaShoppingCart />
          </Link>
                
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
