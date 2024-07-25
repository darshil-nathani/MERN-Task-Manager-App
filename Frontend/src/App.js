import React, { useState } from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header"
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import Posts from "./components/Posts";
import PostsProvider from "./store/Posts-store";


function App() {

    const[sidebarTab, setSidebarTab] = useState("Home");

  return (
    <PostsProvider>
    <>
      <div className="app-container">
        <Sidebar sidebarTab={sidebarTab} setSidebarTab={setSidebarTab}/> 
        <div className="content">
          <Header />
          {sidebarTab === "Home"?<Posts />:<CreatePost />}
          <Footer />
        </div>
      </div>
    </>
    </PostsProvider>
  );
}

export default App;
