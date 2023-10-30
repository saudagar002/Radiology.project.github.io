import React, { useState, useEffect } from "react";
import "./style/pagination.css";
import { addToCart, removeFromCart } from "./cartActions";
import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartActionTypes";
import { connect } from "react-redux";

const Pagination = ({ selectedItems, addToCart, removeFromCart }) => {
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/svs_files.txt");
      const text = await response.text();
      const Filess = text.split("\n").filter((Files) => Files.endsWith(".svs"));
      setData(Filess);
    };
    fetchData();
  }, []);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const toggleCheckbox = (item) => {
    if (selectedItems.includes(item)) {
      removeFromCart(item);
    } else {
      addToCart(item);
    }
  };
  y;
  const handleItemsPerPageChange = (event) => {
    const newItemsPerPage = parseInt(event.target.value, 10);
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  };

  return (
    <div>
      {/* <div className="items-per-page">
        <label htmlFor="itemsPerPage">Items per page:</label>
        <select
          id="itemsPerPage"
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
        >
          <option value="15">15</option>
           <option value="20">20</option> 
           <option value="25">25</option>
           
        </select>
      </div> */}
      {/* <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage - 1)}
              aria-label="Previous"
            >
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>
          {Array.from({ length: totalPages }, (_, index) => (
            <li
              key={index}
              className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage + 1)}
              aria-label="Next"
            >
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        </ul>
      </nav> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedItems: state.cart.selectedItems,
  };
};

export default connect(mapStateToProps, { addToCart, removeFromCart })(
  Pagination
);
