import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "./cartAction";
import cartAction from "./cartAction";
import "./Style/Cart.css";

const Cart = ({ selectedFiles, removeFromCart }) => {
  const handleRemove = (file) => {
    removeFromCart(file);
  };

  const handleDownloadAll = () => {
    // Code to download all selected files
    const content = selectedFiles.join("\n");
    const blob = new Blob([content], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "selected_files.txt";
    link.click();
  };

  const handleAlertSelectedFiles = () => {
    // Code to display an alert with selected files
    alert(`Selected Files: ${selectedFiles.join(", ")}`);
  };

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      <table className="Files-table">
        <thead>
          <tr>
            <th>Files</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {selectedFiles.map((file, index) => (
            <tr key={index}>
              <td>{file}</td>
              <td>
                <button className="three" onClick={() => handleRemove(file)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedFiles.length > 0 && (
        <div>
          {/* <a
            className='two'
            href="svs_files.txt"
            download="svs_files.txt"
            onClick={handleDownloadAll}
          >
            Download all
          </a> */}
          <button className="two" onClick={handleDownloadAll}>
            Download
          </button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedFiles: state.cart.selectedItems,
});

export default connect(mapStateToProps, { removeFromCart })(Cart);
