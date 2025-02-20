

const Button = ({title,onClick,className}) => { 
   

    return (
        <>
        <button className={' bg-blue-500 hover:bg-blue-700 text-whitem-4 sm:m-2 p-2 px-4 sm:p-0 sm:text-sm sm:w-[100px] sm:h-[30px] rounded-full aleo-regular text-normal' || className} onClick={onClick}>{title}</button>
        </>
    )
}


export default Button;
