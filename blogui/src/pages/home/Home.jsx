import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import {useEffect, useState} from "react";
import "./home.css";
import authFetch from "../../customRequest";
import {useLocation} from "react-router-dom";


function Home() {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();

  useEffect(() => {
    const fetchPosts = async ()=>{
      const res = await authFetch.get("/posts" + search)
      setPosts(res.data)
    }
    fetchPosts();
  },[search])

  return (
    <>
        <Header/>
    <div className="home">
        <Posts posts={posts}/>
        <Sidebar/>
    </div>
    
    </>
  )
}

export default Home