// import logo from './logo.svg';
import { useState } from 'react';
import { TbSquarePlus } from "react-icons/tb";
import { FaFacebookMessenger } from "react-icons/fa";

import './App.css';
import Insta from './Instgram /Insta';
// import Reducer from './component/Reducer';
// import Purecomp from './component/Purecomp';
// import Intro from './component/Intro';
// import Input from './component/Input';

function App() {
      const [posts,setPosts] = useState([
        {
            userName:"Aruna",
            caption:"Hi Welcome,Let's get started",
            postUrl:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        },
        {
          userName:"Jothi",
          caption:"Hi All Welcome to this page",
          postUrl:"https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
        },
        {
          userName:"Devi",
          caption:"Hi All Welcome to this page",
          postUrl:"https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg"
        },
        {
          userName:"Bala",
          caption:"Hi All Welcome to this page",
          postUrl:"https://spaceplace.nasa.gov/gallery-sun/en/solar-flare.en.jpg"
        },
        {
          userName:"Magesh",
          caption:"Hi All Welcome to this page",
          postUrl:"https://www.gettyimages.in/gi-resources/images/500px/983794168.jpg"
        },
      ]);
  
        return (
      //  {/* <Intro name={'Aruna'}/> */}
      //  {/* <Input/> */}
      //  {/* <Purecomp/> */}
      //  {/* <Reducer/> */}
    <div className="App">
      <div className="App-header">
                <div className="head1">
                    {/* instagram logo */}
                    <div className="logo-img">
                        <img src="data:image/png;base64,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" alt="img"></img>
                    </div>
                    {/* header icons */}
                    <div className="headicons">
                        <div className="inside">
                            <div className="icon1">
                              <TbSquarePlus color="white" size="2rem"/>                            
                            </div>
                            <div className="icon2">
                               <FaFacebookMessenger size="2rem"/>
                            </div>   
                        </div>
                    </div>
                </div>
      </div>
      {
        posts.map(post=>(
          <Insta userName={post.userName} caption={post.caption} postUrl={post.postUrl}/>
          ))
        }

    </div>
  );
}

export default App;
