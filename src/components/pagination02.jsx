


import React, { useState, useEffect } from "react";
import { addToCart, removeFromCart } from "./cartAction";
import { connect } from "react-redux";
import { displayFileName } from "./show";
import ReactPaginate from "react-paginate";
import "./Style/Pagination.css";

const Pagination = ({ selectedItems, addToCart, removeFromCart }) => {
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); // Adjusted the initial page to 0

  useEffect(() => {
    // Your data fetching logic here
  }, []);

 
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Calculate the range of items to display on the current page
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  // Function to handle page change
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div>
      <table className="Files-table">
        <thead>
          <tr>
            <th>Select</th>
            <th>Files</th>
            <th>Display</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((file, index) => (
            <tr key={index}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedItems.includes(file)}
                  onChange={() => toggleCheckbox(file)}
                  aria-label={`Select file ${file}`}
                />
              </td>
              <td>{file}</td>
              <td>
                <button onClick={() => handleDisplay(file)}>Show</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination component */}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

// Add the toggleCheckbox and handleDisplay functions as you've defined them

const mapStateToProps = (state) => {
  return {
    selectedItems: state.cart.selectedItems,
  };
};

export default connect(mapStateToProps, { addToCart, removeFromCart })(Pagination);
