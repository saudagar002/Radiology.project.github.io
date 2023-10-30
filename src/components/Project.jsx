import React from "react";
import "./Footer.js";
// import { GrCloudComputer } from "react-icons/gr";
import { NavLink } from "react-router-dom";

import "./style/Home.css";
import Footer from "./Footer.js";
import { CgWebsite } from "react-icons/cg";
import { BsClipboardDataFill } from "react-icons/bs";
// import { AiTwotoneApi, TbTransferIn, GrDocumentCloud, VscFileSubmodule, FaGalacticRepublic } from '../../path/to/actual/component/files';
import { FaPinterest } from "react-icons/fa";
import { AiOutlineTransaction } from "react-icons/ai";
import { FcDocument } from "react-icons/fc";
import { GoFileSubmodule } from "react-icons/go";
import { FaLeanpub } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { BsFillPeopleFill } from "react-icons/bs";
// import { FaPeopleCarry } from 'react-icons/fa';
// import { FaPeopleRoof } from 'react-icons/fa';
import { FaSatellite } from "react-icons/fa";
import { GiRollingEnergy } from "react-icons/gi";
import { FaFileSignature } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";

const Home = () => {
  return (
    <>
      <div className="home-page">
        <div className="heading">
          <h2>Harmonized Cancer Dataset</h2>
          <h1>Genomic Data Commons Data Portal</h1>
          <p>Get Started by exploring</p>
        </div>
        <div className="menu-box">
          <div className="menu-item">
            <div className="menu-logo">P</div>{" "}
            <NavLink to="/project"> project</NavLink>
          </div>

          <div className="menu-box">
            <div className="menu-item">
              <div className="menu-logo">E</div>{" "}
              <NavLink to="/Exploration"> Exploration</NavLink>
            </div>
          </div>

          <div className="menu-box">
            <div className="menu-item">
              <div className="menu-logo">A</div>{" "}
              <NavLink to="/Analysis"> Analyis</NavLink>
            </div>
          </div>

          <div className="menu-box">
            <div className="menu-item">
              <div className="menu-logo">R</div>{" "}
              <NavLink to="/Repositry"> Repositry</NavLink>
            </div>
          </div>
        </div>

        {/* /////////////////// */}
        <div className="searchbar">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="e.g. BRAF, Breast, TCGA-BLCA, TCGA-A5-A0G2"
          />
        </div>

        <div className="data-portal-summery">
          <h2>
            Data Portal Summery <span>Data Release 37.0 - July 26, 2023</span>
          </h2>

          <div className="summery-card">
            <div className="info">
              <p>Projects</p>
              <GrProjects />
              <span>78</span>
            </div>

            <div className="info">
              <p>Primary sites</p>
              <BsFillPeopleFill />
              <span>68</span>
            </div>

            <div className="info">
              <p>Cases</p>
              {/* <FaPeopleRoof/> */}
              {/* <FaPeopleLine/> */}
              <IoIosPeople />
              <span>86,000</span>
            </div>

            <div className="info">
              <p>Files</p>
              {/* <AiFillFileZip/> */}
              <FaFileSignature />
              <span>931,252</span>
            </div>

            <div className="info">
              <p>genes</p>
              <GiRollingEnergy />
              <span>22,255</span>
            </div>

            <div className="info">
              <p>mutaions</p>
              <FaSatellite />
              <span>2,252,255</span>
            </div>
          </div>
        </div>

        <div className="ApexChart"></div>
      </div>

      <div className="gdc-application">
        <div className="gdc-content">
          <h2>GDC Applications</h2>
          <p>
            The GDC Data Portal is a robust data-driven platform that allows
            cancer
          </p>
          <p>
            researchers and bioinformaticians to search and download cancer data
            for analysis. The GDC applications include:
          </p>
        </div>
        <div className="application">
          <div className="app">
            <div className="app-logo">
              <BsClipboardDataFill />
            </div>
            <p>Data-portal</p>
          </div>

          <div className="app">
            <div className="app-logo">
              <CgWebsite />
            </div>
            <p>Website</p>
          </div>

          <div className="app">
            <div className="app-logo">
              <FaPinterest />
            </div>
            <p>Api</p>
          </div>

          <div className="app">
            <div className="app-logo">
              <AiOutlineTransaction />
            </div>
            <p>Data Transfer Tool</p>
          </div>

          <div className="app">
            <div className="app-logo">
              <FcDocument />
            </div>
            <p>Documentation</p>
          </div>
          <div className="app">
            <div className="app-logo">
              <GoFileSubmodule />
            </div>
            <p>Submission Portal</p>
          </div>

          <div className="app">
            <div className="app-logo">
              <FaLeanpub />
            </div>
            <p>Publicatiion</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
