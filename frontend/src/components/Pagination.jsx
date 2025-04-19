import { Pagination } from "flowbite-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextPage, prevPage } from "../features/pagination/page.selector";

const Pages = ()=> {
//   const [currentPage, setCurrentPage] = useState(1);

//   const onPageChange = (page) => setCurrentPage(page);

const totalPages = useSelector((state) => state.pages.totalPages);
const currentPage = useSelector((state) => state.pages.page);
const dispatch = useDispatch();
const onPageChange = (page) => {
    if (page > currentPage) {
        dispatch(nextPage(page));
    } else if (page < currentPage) {
        dispatch(prevPage(page));
    }
}

  return (
    <div className="flex overflow-x-auto sm:justify-center ">
      <Pagination layout="table" currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} className="mx-auto" />
    </div>
  );
}

export default Pages;
