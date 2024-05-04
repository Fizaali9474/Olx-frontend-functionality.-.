

// import './App.css';
import Router from "./config/router"
/*import Dashboard from './view/Dashboard/app';
import Detail from './view/Detail';
import Header from './view/Header/index';
import Category from './view/Category';
import Footer from './view/Footer/index'*/

import { store, persistor } from './config/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

function App(){
return(
<div className='App' >
<div  className='App-header' >
<div  className='header'>

    
</div>

<Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          {/* <Header /> */}
          <Router />
        </div>
      </PersistGate>
    </Provider>






</div>
</div>

)
}
export default App;



