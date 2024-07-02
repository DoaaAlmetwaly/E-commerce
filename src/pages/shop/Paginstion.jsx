import React from 'react'

const Paginstion = ({productsPerPage,totalProducts,pagination,activePage}) => {
  const pageNumber=[];
  for(let i ; i<=Math.ceil(totalProducts/productsPerPage);i++){
    pageNumber.push(i);
  }
    return (
    <div>Paginstion</div>
  )
}

export default Paginstion