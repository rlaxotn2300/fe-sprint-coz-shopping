import React,{useEffect, useState} from 'react';
import './App.css';
import Header from './component/Header'
import Footer from './component/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios';

import Section from './Page/Section';

const App = () => {

    const [isData,setIsData] = useState([])

    const getData = () => {
        return axios.get('http://cozshopping.codestates-seb.link/api/v1/products')
            .then((res) => {
                console.log(res.data)
                setIsData(res.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getData();
    },[])

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Section isData={isData}/>} />
                {/* <Route path='/' element={<Section />}/>
                        <Route path='/' element={<Section />}/> */}
            </Routes>
            <Footer />
        </BrowserRouter>
    )
    // return (
    //   // <BrowserRouter>
    //   //   <div className='main'>
    //   //     <header></header>
    //   //     <section>
    //   //       <Routes>
    //   //         <Route path='/' element={<Section />} />
    //   //       </Routes>
    //   //     </section>
    //   //     <footer></footer>
    //   //   </div>
    //   // </BrowserRouter>
    // )
}

export default App