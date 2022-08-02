import React, { useState } from 'react'
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { CgPentagonUp } from "react-icons/cg";


const Insta = ({ userName, caption, postUrl })=>{
    const[color,setColor]=useState("white")

    return(
        // Body
        <div className="main-body">       

                <div className="user">
                    <div className="profile-img">
                        <img src="https://www.lunapic.com/editor/premade/crop-circle.gif" alt="profileimg"></img>
                    </div>
                    <div className="username">
                        <h2>{userName}</h2>
                    </div>
                </div>
                <div className="insta_posts">
                    <img src={postUrl} alt="post1"></img>
                </div>
                <div className="likes_icon">
                    <button className="heart_icon">
                        <AiOutlineHeart size="2rem" onClick={()=>setColor('red')}/>
                    </button>
                    <button className="comment">
                        <FaRegComment size="2rem"/>
                    </button>
                    <button className="forward">
                        <IoPaperPlaneOutline size="2rem"/>
                    </button>
                    <div className="save">
                        <CgPentagonUp size="3rem"/>
                    </div>
                </div>  
                <div className="caption">
                    <h3><strong>{userName}:</strong>{caption}</h3>
                </div>


        </div>
    )
}
export default Insta;