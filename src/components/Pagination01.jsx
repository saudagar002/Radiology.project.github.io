import React, { useState, useEffect } from "react";
import { addToCart, removeFromCart } from "./cartAction";
import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartActionTypes";
import { connect } from "react-redux";
import { displayFileName } from "./show";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import "./Style/Pagination.css";

const Pagination = ({ selectedItems, addToCart, removeFromCart }) => {
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./svs_files.txt");

        const text = await response.text();

        const Filess = text.split("\n");

        const filteredFiles = Filess.filter((file) => file.endsWith(".svs"));

        setData(filteredFiles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
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

  function generateViewerPageContent() {
    const content = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Button Click Example</title>
    </head>
    <body>
        <h1>Button Click Example</h1>

        <!-- Button element -->
        <button id="myButton">Click Me</button>

        <!-- JavaScript code to handle button click -->
        <script>
            // Function to handle button click
            function handleClick() {
                alert("Button clicked! This message is displayed in an alert dialog.");
                loadViewerScript();
            }

            // Function to load viewer.js
            function loadViewerScript() {
                var script = document.createElement('script');
                script.src = './components/pma-ui/js/viewer.js';
                document.head.appendChild(script);
            }

            // Add a click event listener to the button
            document.getElementById("myButton").addEventListener("click", handleClick);
        </script>
    </body>
    </html>

    `;

    console.log("Viewer Page Content:");
    console.log(content);
    return content;
  }

  function handleDisplay_() {
    const newWindow = window.open("", "_blank");

    if (newWindow) {
      const viewerHTML = `
     <!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>CAIB</title>

        <!-- Google Font: Source Sans Pro -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
        <!-- Font Awesome -->
        <link rel="stylesheet" href="https://caib.actrec.gov.in/public/assets/plugins/fontawesome-free/css/all.min.css">
        <!-- daterange picker -->
        <link rel="stylesheet" href="https://caib.actrec.gov.in/public/assets/plugins/daterangepicker/daterangepicker.css">
        <link rel="stylesheet" href="https://caib.actrec.gov.in/public/assets/plugins/datepicker/datepicker3.css">
        <!-- iCheck for checkboxes and radio inputs -->
        <link rel="stylesheet" href="https://caib.actrec.gov.in/public/assets/plugins/icheck-bootstrap/icheck-bootstrap.min.css">
        <!-- Bootstrap Color Picker -->
        <link rel="stylesheet" href="https://caib.actrec.gov.in/public/assets/plugins/bootstrap-colorpicker/css/bootstrap-colorpicker.min.css">
        <!-- Tempusdominus Bootstrap 4 -->
        <link rel="stylesheet" href="https://caib.actrec.gov.in/public/assets/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css">
        <!-- Select2 -->
        <link rel="stylesheet" href="https://caib.actrec.gov.in/public/assets/plugins/select2/css/select2.min.css">
        <link rel="stylesheet" href="https://caib.actrec.gov.in/public/assets/plugins/select2-bootstrap4-theme/select2-bootstrap4.min.css">
        <!-- Bootstrap4 Duallistbox -->
        <link rel="stylesheet" href="https://caib.actrec.gov.in/public/assets/plugins/bootstrap4-duallistbox/bootstrap-duallistbox.min.css">
        <!-- BS Stepper -->
        <link rel="stylesheet" href="https://caib.actrec.gov.in/public/assets/plugins/bs-stepper/css/bs-stepper.min.css">
        <!-- dropzonejs -->
        <link rel="stylesheet" href="https://caib.actrec.gov.in/public/assets/plugins/dropzone/min/dropzone.min.css">
        <!-- Theme style -->
        <link rel="stylesheet" href="https://caib.actrec.gov.in/public/assets/dist/css/adminlte.min.css">
        <link rel="stylesheet" href="https://caib.actrec.gov.in/public/assets/dist/css/radiobutton.css">
        <link rel="stylesheet" href="https://caib.actrec.gov.in/public/assets/plugins/flatpickr/flatpickr.min.css">
        <link rel="stylesheet" href="https://caib.actrec.gov.in/public/assets/plugins/toastr/toastr.min.css">
        <link href="https://caib.actrec.gov.in/public/assets/wsi/css/pma.ui.css" type="text/css" rel="stylesheet">
        <script src="https://caib.actrec.gov.in/public/assets/plugins/jquery/jquery.min.js"></script>

        <style type="text/css">
            .pma-ui-viewport-container {
                border: 1px solid #ddd
            }

            .aligned-text {
                display: inline-block;
                text-align: right;
                width: 70px;
            }

            .annotation-helper-icon i,
            .annotation-helper-icon span {
                display: none;
            }

            .annotation-helper-icon.loading i {
                display: initial;
            }

            .annotation-helper-icon.loading span {
                display: none;
            }

            .annotation-helper-icon.saved i,
            .annotation-helper-icon.saved span.badge-danger {
                display: none;
            }

            .annotation-helper-icon.saved span.badge-success {
                display: initial;
            }

            .annotation-helper-icon.error i,
            .annotation-helper-icon.error span.badge-success {
                display: none;
            }

            .annotation-helper-icon.error span.badge-danger {
                display: block;
            }
        </style>
    </head>
    <body class="hold-transition sidebar-mini">
        <div class="wrapper">
                        <!-- Main Sidebar Container -->
            <nav class="main-header navbar navbar-expand navbar-white navbar-light">
  <!-- Left navbar links -->
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
    </li>
  </ul>
</nav>
<div class="modal fade" id="changpModal">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="modal_title">Change Password</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form id="chngpfrm" method="post">
          <div class="modal-body" id="modal_data">
              <div class="row">
                <div class="col-sm-12">
                  <div class="form-group">
                    <label class="col-form-label" for="inputError">New Password<span style="color:red">&nbsp;*</span></label>
                    <input type="text" name="newp" id="newp" class="form-control" placeholder="New Password..." required>
                    <p id="state_error" class="text-danger"></p>
                  </div>
                </div>
                <div class="col-sm-12">
                  <div class="form-group">
                    <label class="col-form-label" for="inputError">Confirm Password<span style="color:red">&nbsp;*</span></label>
                    <input type="text" name="confp" id="confp" class="form-control" placeholder="Confirm Password..." required>
                    <p id="state_error" class="text-danger"></p>
                  </div>
                </div>
              </div>
          </div>
          <div class="modal-footer justify-content-between">
            <input type="hidden" name="usid" id="usid">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            <button type="submit" id="submitchangpass" class="btn btn-info">Update Password</button>
          </div>
          </form>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
    <script type="text/javascript">
      var site_url = "https://caib.actrec.gov.in";
    $(document).on('click','#changepass',function(e){
      e.preventDefault();
      var id = $(this).attr('data-id');

    //alert(uid); return false;
    $('#usid').val(id);
    $('#chngpfrm')[0].reset();
    $("#changpModal").modal('show');

  });

  $(document).on('click','#submitchangpass',function(e){
    e.preventDefault();
    $.ajax({
      url: site_url + "/admin/changepassword",
      type: "post",
      contentType: false,
      processData: false,
      data: new FormData($('#chngpfrm')[0]),
      success:function(data){
        var msg = JSON.parse(data);
        if (msg.status == 'success') {
          $('#chngpfrm')[0].reset();
          $('#usid').val('');
          $("#changpModal").modal('hide');
          toastr.success(msg.message);
        }
        else if(msg.status == 'error'){
          toastr.error(msg.message);
        }
      },error:function(){
        alert('Error');
      }
    });

  });
  </script>            <div class="content-wrapper">
                <section class="content" id="content">
                    <div class="container-fluid">
                        <div class="card card-outline card-success mt-2">
                            <div class="card-body">
                                <div class="row mb-2">
                                    <div class="col-md-4">
                                        <p>Hospital Path ID: <span class="font-weight-bold">000306/CE</span></p>
                                    </div>
                                    <div class="col-md-4">
                                        <p>Patient ID: <span class="font-weight-bold">CAIB-T00000414OC</span></p>
                                    </div>
                                    <div class="col-md-4">
                                        <p>Path ID: <span class="font-weight-bold">CAIB-T00000414OC01R01</span></p>
                                    </div>
                                    <div class="col-md-4">
                                        <p>Slide ID: <span class="font-weight-bold">CAIB-T00000414OC01R01P0201HE</span></p>
                                    </div>
                                    <div class="col-md-4">
                                        <p>Slide Name: <span class="font-weight-bold">CAIB-T00000414OC01R01P0201HE.svs</span></p>
                                    </div>
                                    <div class="col-md-4">
                                        <p>Scan Date-Time: <span class="font-weight-bold"></span></p>
                                    </div>
                                    <div class="col-md-4">
                                        <p>Stain: <span class="font-weight-bold">HE</span></p>
                                    </div>
                                    <div class="col-md-4">
                                        <p>Stain: <span class="font-weight-bold">Primary</span></p>
                                    </div>
                                    <div class="col-md-4">
                                        <p>Slide No: <span class="font-weight-bold">02</span></p>
                                    </div>
                                    <div class="col-md-4">
                                        <p>Block ID: <span class="font-weight-bold">01</span></p>
                                    </div>
                                    <div class="col-md-4">
                                        <p>Slide Contains Tumor: <span class="font-weight-bold">No</span></p>
                                    </div>
                                    <div class="col-md-4">
                                        <p>Slide Contains Normal: <span class="font-weight-bold">Yes</span></p>
                                    </div>
                                    <div class="col-md-4">
                                        <p>Slide Contains Involved Node : <span class="font-weight-bold">No</span></p>
                                    </div>
                                    <div class="col-md-4">
                                        <p>Slide Contains Uninvolved Node : <span class="font-weight-bold">No</span></p>
                                    </div>
                                    <div class="col-md-4">
                                        <p>Slide Contains Non-neoplastic Pathology: <span class="font-weight-bold">No</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-md-12 mb-3">
                                <div id="gallery"></div>
                            </div>
                            <div class="col-md-12" id="viewer_div">
                                <div id="viewer" style="height: 700px"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <footer class="main-footer">
    <div class="float-right d-none d-sm-block">
      <b>CAIB</b>
    </div>
    <strong>Copyright &copy; 2021-2022 <a href="#"></a>.</strong> All rights reserved.
  </footer>        </div>
    </body>

    <script src="https://caib.actrec.gov.in/public/assets/wsi/js/pma.ui.js" type="text/javascript"></script>

    <script type="text/javascript">

        console.log("PMA.UI loaded: " + PMA.UI.getVersion());

        // create a context
        var context = new PMA.UI.Components.Context({ caller: "PMA.UI demo" });

        var annotations = null;

        // add an autologin authentication provider
        new PMA.UI.Authentication.AutoLogin(context, [{ serverUrl: 'https://caib-pma.actrec.gov.in/core/', username: 'caib@actrec.gov.in', password: 'XpMlHwq?' }]);

        // create an image loader that will allow us to load images easily
        var slideLoader = new PMA.UI.Components.SlideLoader(context, {
            element: "#viewer",
            annotations: {
                visible: true,
                labels: true,
                imageBaseUrl: "https://caib-pma.actrec.gov.in/core/CAIB_WSI/CAIB/CAIB-T00000414OC/CAIB-T00000414OC01R01/CAIB-T00000414OC01R01P0201HE/",
                imageScale: 0.5
            },
            theme: PMA.UI.View.Themes.Modern,
            digitalZoomLevels: 2,
            colorAdjustments: true,
            scaleLine: true,
            filename: false,
            loadingBar: true,
            snapshot: false,
            overview: {
                collapsed: false
            },
            dimensions: {
                collapsed: true
            },
        });

        // load an image with the context
        slideLoader.load("https://caib-pma.actrec.gov.in/core/", "CAIB_WSI/CAIB/CAIB-T00000414OC/CAIB-T00000414OC01R01/CAIB-T00000414OC01R01P0201HE/CAIB-T00000414OC01R01P0201HE.svs");

        slideLoader.listen(PMA.UI.Components.Events.SlideLoaded, function (args) {
            $("button, input").removeAttr("disabled");
            if(args.path.split('.').pop()=='isyntax'){
                slideLoader.mainViewport.setContrast(1.13);
            }else{
                slideLoader.mainViewport.setContrast(1.0);
            }
        });
    </script>
</html>

    `;

      newWindow.document.open();
      newWindow.document.write(viewerHTML);
      newWindow.document.close();
    } else {
      alert("Unable to open a new window. Please check your browser settings.");
    }
  }

  const toggleCheckbox = (item) => {
    if (selectedItems.includes(item)) {
      removeFromCart(item);
    } else {
      addToCart(item);
    }
  };

  const handleItemsPerPageChange = (event) => {
    const newItemsPerPage = parseInt(event.target.value, 10);
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
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
          {currentItems.map((Files, index) => (
            <tr key={index}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedItems.includes(Files)}
                  onChange={() => toggleCheckbox(Files)}
                  aria-label={`Select file ${Files}`}
                />
              </td>
              <td>{Files}</td>
              <td>
                <button onClick={() => handleDisplay_(Files)}>Show</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div></div>
      <div className="items-per-page">
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
      </div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
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
              className={`page-item ${
                currentPage === index + 1 ? "active" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
          <li
            className={`page-item ${
              currentPage === totalPages ? "disabled" : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage + 1)}
              aria-label="Next"
            >
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        </ul>
      </nav>
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
