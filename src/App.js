import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication';
<<<<<<< Updated upstream
=======
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setCurrentUser } from './store/user/user.action';
import { onAuthStateChangedListener,createUserDocumentFromAuth  } from './utils/firebase/firebase.utils';

>>>>>>> Stashed changes

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const App = () => {
<<<<<<< Updated upstream
=======

const dispatch = useDispatch()

useEffect(()=>{
        const unsubscribe = onAuthStateChangedListener((user)=>{ 
            if(user){
                        createUserDocumentFromAuth(user);
                    }
            dispatch(setCurrentUser(user));
            
        });

        return unsubscribe;
    },[]);              // the dispatch is just for initializing so dispatch never updates
                                //thus [dispatch] not necessary


>>>>>>> Stashed changes
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
