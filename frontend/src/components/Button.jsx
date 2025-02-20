

const Button = ({title,onClick,className}) => { 
   

    return (
        <>
        <button className={'bg-green-900 text-white hover:bg-green-600 m-4 sm:m-2 p-2 px-4 sm:p-0 sm:text-sm sm:w-[100px] sm:h-[30px] rounded-full aleo-regular text-normal' || className} onClick={onClick}>{title}</button>
        </>
    )
}


export default Button;
