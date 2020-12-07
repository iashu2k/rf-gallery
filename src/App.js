import React, { useState } from "react";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";
import Title from "./components/Title";
import UploadForm from "./components/UploadForm";
import { useAuth } from "./firebase/authContext";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const { user, googleSignUp, logout } = useAuth();

  return (
    <div className="App">
      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={googleSignUp}>Google Sign Up</button>
      )}
      {user && (
        <div>
          {/* <h1>{`${user.displayName} and ${user.email}`}</h1> */}
          <img src={user.photoURL} alt="profile pic" />
        </div>
      )}

      <Title />
      <UploadForm />
      <ImageGrid setSelectedImage={setSelectedImage} />
      {selectedImage && (
        <Modal
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
    </div>
  );
}

export default App;
