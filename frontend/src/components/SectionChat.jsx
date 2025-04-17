const SectionChat = ({community,members}) => { 
    return (
        <>
        <button>
        <div className="border rounded-lg bg-white p-4 w-[340px] h-full mt-4 overflow-hidden shadow-md">
            <h3>
                <span className="text-xl font-italics text-gray-700 font-bold">{community}</span>
            </h3>
            <h4>
                <span className="text-md font-italics text-gray-700 font-bold">{members}</span>
            </h4>
        </div>
    </button>
    </>
    )
}


export default SectionChat;