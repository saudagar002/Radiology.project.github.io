import React, { useState } from "react";
import "./Style/Radiology.css";

import { Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Pagination from "./Pagination.jsx";
import Apexchart1 from "./Apexchart1";
import Navbar from "./Navbar";
import Pagination01 from "./Pagination01";

const Radiology = () => {
  const [key, setKey] = useState("home");

  return (
    <>
      <Navbar />
      <div className="project-page">
        <div className="sidebar">
          <Accordion defaultActiveKey="1" alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Search Projects</Accordion.Header>
              <Accordion.Body>
                <input
                  type="search"
                  name="psearch"
                  id="psearch"
                  placeholder="e.g. TCGA-GBA, Brain"
                />
                <button className="search-btn">Search</button>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Primary Sites</Accordion.Header>
              <Accordion.Body>
                <div className="psites">
                  <div>
                    <input type="checkbox" name="psite" id="psite" />
                    <label htmlFor="">bronchus and lung</label>
                  </div>
                  <div>
                    <input type="checkbox" name="psite" id="psite" />
                    <label htmlFor="">Kidney</label>
                  </div>

                  <div>
                    <input type="checkbox" name="psite" id="psite" />
                    <label htmlFor="">Breast</label>
                  </div>

                  <div>
                    <input type="checkbox" name="psite" id="psite" />
                    <label htmlFor="">Himatipoitic</label>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Primary Sites</Accordion.Header>
              <Accordion.Body>
                <div className="psites">
                  <div>
                    <input type="checkbox" name="psite" id="psite" />
                    <label htmlFor="">bronchus and lung</label>
                  </div>
                  <div>
                    <input type="checkbox" name="psite" id="psite" />
                    <label htmlFor="">Kidney</label>
                  </div>

                  <div>
                    <input type="checkbox" name="psite" id="psite" />
                    <label htmlFor="">Breast</label>
                  </div>

                  <div>
                    <input type="checkbox" name="psite" id="psite" />
                    <label htmlFor="">Himatipoitic</label>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Primary Sites</Accordion.Header>
              <Accordion.Body>
                <div className="psites">
                  <div>
                    <input type="checkbox" name="psite" id="psite" />
                    <label htmlFor="">bronchus and lung</label>
                  </div>
                  <div>
                    <input type="checkbox" name="psite" id="psite" />
                    <label htmlFor="">Kidney</label>
                  </div>

                  <div>
                    <input type="checkbox" name="psite" id="psite" />
                    <label htmlFor="">Breast</label>
                  </div>

                  <div>
                    <input type="checkbox" name="psite" id="psite" />
                    <label htmlFor="">Himatipoitic</label>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Primary Sites</Accordion.Header>
              <Accordion.Body>
                <div className="psites">
                  <div>
                    <input type="checkbox" name="psite" id="psite" />
                    <label htmlFor="">bronchus and lung</label>
                  </div>
                  <div>
                    <input type="checkbox" name="psite" id="psite" />
                    <label htmlFor="">Kidney</label>
                  </div>

                  <div>
                    <input type="checkbox" name="psite" id="psite" />
                    <label htmlFor="">Breast</label>
                  </div>

                  <div>
                    <input type="checkbox" name="psite" id="psite" />
                    <label htmlFor="">Himatipoitic</label>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Primary Sites</Accordion.Header>
              <Accordion.Body>
                <div className="psites">
                  <div>
                    <input type="checkbox" name="psite" id="psite" />
                    <label htmlFor="">bronchus and lung</label>
                  </div>
                  <div>
                    <input type="checkbox" name="psite" id="psite" />
                    <label htmlFor="">Kidney</label>
                  </div>

                  <div>
                    <input type="checkbox" name="psite" id="psite" />
                    <label htmlFor="">Breast</label>
                  </div>

                  <div>
                    <input type="checkbox" name="psite" id="psite" />
                    <label htmlFor="">Himatipoitic</label>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Primary Sites</Accordion.Header>
              <Accordion.Body>
                <div className="psites">
                  <div>
                    <input type="checkbox" name="psite" id="psite" />
                    <label htmlFor="">bronchus and lung</label>
                  </div>
                  <div>
                    <input type="checkbox" name="psite" id="psite" />
                    <label htmlFor="">Kidney</label>
                  </div>

                  <div>
                    <input type="checkbox" name="psite" id="psite" />
                    <label htmlFor="">Breast</label>
                  </div>

                  <div>
                    <input type="checkbox" name="psite" id="psite" />
                    <label htmlFor="">Himatipoitic</label>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Primary Sites</Accordion.Header>
              <Accordion.Body>
                <div className="psites">
                  <div>
                    <input type="checkbox" name="psite" id="psite" />
                    <label htmlFor="">bronchus and lung</label>
                  </div>
                  <div>
                    <input type="checkbox" name="psite" id="psite" />
                    <label htmlFor="">Kidney</label>
                  </div>

                  <div>
                    <input type="checkbox" name="psite" id="psite" />
                    <label htmlFor="">Breast</label>
                  </div>

                  <div>
                    <input type="checkbox" name="psite" id="psite" />
                    <label htmlFor="">Himatipoitic</label>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Program</Accordion.Header>
              <Accordion.Body>
                <div className="psites">
                  <div>
                    <input type="checkbox" name="psite" id="psite" />
                    <label htmlFor="">bronchus and lung</label>
                  </div>
                  <div>
                    <input type="checkbox" name="psite" id="psite" />
                    <label htmlFor="">Kidney</label>
                  </div>

                  <div>
                    <input type="checkbox" name="psite" id="psite" />
                    <label htmlFor="">Breast</label>
                  </div>

                  <div>
                    <input type="checkbox" name="psite" id="psite" />
                    <label htmlFor="">Himatipoitic</label>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Disease Type</Accordion.Header>
              <Accordion.Body>
                <div className="psites">
                  <div>
                    <input type="checkbox" name="psite" id="psite" />
                    <label htmlFor="">bronchus and lung</label>
                  </div>
                  <div>
                    <input type="checkbox" name="psite" id="psite" />
                    <label htmlFor="">Kidney</label>
                  </div>

                  <div>
                    <input type="checkbox" name="psite" id="psite" />
                    <label htmlFor="">Breast</label>
                  </div>

                  <div>
                    <input type="checkbox" name="psite" id="psite" />
                    <label htmlFor="">Himatipoitic</label>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>Data Category</Accordion.Header>
              <Accordion.Body>
                <div className="psites">
                  <div>
                    <input type="checkbox" name="psite" id="psite" />
                    <label htmlFor="">bronchus and lung</label>
                  </div>
                  <div>
                    <input type="checkbox" name="psite" id="psite" />
                    <label htmlFor="">Kidney</label>
                  </div>

                  <div>
                    <input type="checkbox" name="psite" id="psite" />
                    <label htmlFor="">Breast</label>
                  </div>

                  <div>
                    <input type="checkbox" name="psite" id="psite" />
                    <label htmlFor="">Himatipoitic</label>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5">
              <Accordion.Header> Category</Accordion.Header>
              <Accordion.Body>
                <div className="psites">
                  <div>
                    <input type="checkbox" name="psite" id="psite" />
                    <label htmlFor="">bronchus and lung</label>
                  </div>
                  <div>
                    <input type="checkbox" name="psite" id="psite" />
                    <label htmlFor="">Kidney</label>
                  </div>

                  <div>
                    <input type="checkbox" name="psite" id="psite" />
                    <label htmlFor="">Breast</label>
                  </div>

                  <div>
                    <input type="checkbox" name="psite" id="psite" />
                    <label htmlFor="">Himatipoitic</label>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>Experimental Strategy</Accordion.Header>
              <Accordion.Body>
                <div className="psites">
                  <div>
                    <input type="checkbox" name="psite" id="psite" />
                    <label htmlFor="">bronchus and lung</label>
                  </div>
                  <div>
                    <input type="checkbox" name="psite" id="psite" />
                    <label htmlFor="">Kidney</label>
                  </div>

                  <div>
                    <input type="checkbox" name="psite" id="psite" />
                    <label htmlFor="">Breast</label>
                  </div>

                  <div>
                    <input type="checkbox" name="psite" id="psite" />
                    <label htmlFor="">Himatipoitic</label>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>

        <div className="project-summery">
          <div className="titel-info">
            <p>Start searching by selecting a facet</p>
          </div>

          <div className="project-page">
            <div className="pagination-section">
              <Apexchart1 />
              {/* <Pagination/>   */}
              <Pagination01 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Radiology;
