import Post from '../components/Post';
import useJob from '../hooks/useJob';



const Main = () => {
     const data = useJob();
     console.log(data);

  return (
    <>
       {data.map((post,index) => (
         <Post key={index} name={post.name} title={post.title}  position={post.position}  />
       ))}
    </>
  );
};



export default Main;