import './App.css';
import AvatarUpload from './components/AvatarUpload';


export default function App () {
  return <AvatarUpload
    description='Drop the image here or click to browse' 
    errorDescription='Sorry, the upload failed.'
    fileType={"image/jpeg', 'image/jpg', 'image/png'"}
    label='Organization Logo' 
  />;
};
