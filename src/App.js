import React from 'react';
import './App.css';
import Header from './Header'
import Footer from './Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Section from './Page/Section';

const App = () => {
    return (
        <div>
            <Header />
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Section />}/>
                        {/* <Route path='/' element={<Section />}/>
                        <Route path='/' element={<Section />}/> */}
                    </Routes>
                </BrowserRouter>
            <Footer />
        </div>
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