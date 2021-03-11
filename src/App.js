import React from 'react'
import Header from "./Components/Header";
import Layout from "./Components/Layout";
import Footer from "./Components/Footer";
import bg2 from './Components/Layout/pics/bg2.jpg'
import bg3 from './Components/Layout/pics/bg3.jpg'


const App = () => {

    return (


        <div>
            <Header title={'This is title!'} descr={'This is Description!'}/>
            <Layout urlBg={bg2}/>
            <Layout colorBg={'#e2e2e2'}/>
            <Layout urlBg={bg3}/>
            <Footer/>
        </div>

    )
}

export default App
