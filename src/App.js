
import './App.css';
import Users from "./components/users";
import {useState} from "react";
import UserDeteil from "./components/userDeteil";
import Posts from "./components/posts";

function App() {
    const [userDetail,setUserDetail] = useState(null)
    const [showPosts,setShowPosts]=useState(false)

  return (
    <div className="App">
        <div className={'top'}><Users setUserDetail={setUserDetail} setShowPosts={setShowPosts}/>
            {userDetail && <UserDeteil user={userDetail}  setShowPosts={setShowPosts}  />}
        </div>
        {showPosts && <Posts userId = {userDetail.id}/>}
    </div>
  );
}

export default App;
