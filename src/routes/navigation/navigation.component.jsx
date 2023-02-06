import { Fragment ,useContext} from 'react';
import { Outlet, Link } from 'react-router-dom';
import { UserContext } from '../../context/user.context';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { FaShoppingCart } from "react-icons/fa";
import './navigation.styles.scss';
import { signOutUser } from '../../utils/firebase/firebase.utils';

const Navigation = () => {

const {currentUser,setCurrentUser} = useContext(UserContext);

const signOutHandler = async () =>{
  const res = await signOutUser();
  setCurrentUser(null);
}

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
            <CrwnLogo className='logocart' />
        </Link>

        <div className='navlinkBar'>
          <Link className='nav-link' to='/shop'>SHOP</Link>
          {
            currentUser ?
              (<span className = 'nav-link' onClick={signOutHandler}>SIGN OUT</span>)
               :
              (<Link className='nav-link' to='/auth'>SIGN IN</Link>)
          }
          
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
