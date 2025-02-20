import Post from '../components/Post';
import useJob from '../hooks/useJob';



const Main = () => {
     const data = useJob();
    
  return (
    <>
       {data.map((post,index) => (
         <Post key={index} name={post.name} title={post.title}  position={post.position}  />
       ))}
    </>
  );
};



export default Main;