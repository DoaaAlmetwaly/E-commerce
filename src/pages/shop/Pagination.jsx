import React from 'react'

const Pagination = ({productsPerPage,totalProducts,pagination,activePage}) => {
  const pageNumber=[];
  for(let i ; i<=Math.ceil(totalProducts/productsPerPage);i++){
    pageNumber.push(i);
  }
    return (
  <ul className="pagination justify-content-center ">
  {
    pageNumber.map((number)=>(

      <li class={`page-item ${number===activePage ?'bg-warning': ''}`} key={number}>
   <button onClick={()=>pagination(number)} className=''>{number}</button>
    </li>
  
    ))
  }
  </ul>


  )
}

export default Pagination