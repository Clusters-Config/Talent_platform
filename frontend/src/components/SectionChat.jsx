const SectionChat = ({community,members}) => { 
    return (
        <>
        <button>
        <div className="border rounded-lg bg-white w-96 h-[500px] overflow-hidden shadow-md">
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