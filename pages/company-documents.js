import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import React from "react";
import Head from "next/head";

import doc1 from "../public/assets/img/documents/doc2.png";
import doc2 from "../public/assets/img/documents/doc5.png";
import doc3 from "../public/assets/img/documents/doc4.png";
import doc4 from "../public/assets/img/documents/doc3.png";
import doc5 from "../public/assets/img/documents/doc1.png";

export default function App() {
  return (
    <div id="company-documents">
      <Head>
        <title>Company Document -- Shafa Care</title>
        <meta
          name="keyboard"
          content="Shafa Care, Online Doctor,Medical Help,Online Medical Help, Company Document, Shafa Care Company Document"
        />
      </Head>
      <Navbar />

      <div className="documents-body">
        <div className="container pt-100">
          <div className="row pb-5">
            <div className="col-md-12 pt-5 pb-5">
              <h1>Company documents</h1>
            </div>

            <div className="col-md-4">
              <a href="https://api-admin.shafa.care/api/v3/auth/publicFile/file/ACFrOgDVxSVGeri65nUhsNbTorOJKG8zHSvtfyOWnC0xmlli9FSCapczLo-eLHl1tLcUJXyXUhCcOUE-3Szb1AsaSRofEslxPJZzan9-UmVK2PC7nRyhMFbMT3_gakHh2kK_Fgs87A-G3eNHIBla1632332591654.pdf">
                <img src={doc1} alt="documents" />
              </a>
            </div>

            <div className="col-md-4">
              <a href="https://api-admin.shafa.care/api/v3/auth/publicFile/file/ACFrOgDbxyHE8iIS7R6VvxZITjv3QV2nC8YJPLKdimEGACoTDg-AUiMj2XXDrX7F_ecOeWBxa-7SJJCJd7YX_gHdvZCRVzvj2JvIbpjJ_wOyHiQMawSCI9AMoqVWKmtJ35nFv4if4O9uY3dICb0T1632332457275.pdf">
                <img src={doc2} alt="Certificate of Incorporation" />
              </a>
            </div>

            <div className="col-md-4">
              <a href="https://api-admin.shafa.care/api/v3/auth/publicFile/file/ACFrOgBNZZk04ZaAUi74aQT92Xrxy0RihoyQFmb9fB3qILeWJ-EjUWFN2rWlfzgIONR2_IrhNev3Xc2mH2MZl4DKD8t4qaf7ulfo19zw3mMa2G058PDyNDHsQ5whsjhhh0gyDmL3F_ZiYd9H0c3-1632332408139.pdf">
                <img src={doc3} alt="TIN Certificate" />
              </a>
            </div>

            <div className="col-md-4">
              <a href="https://api-admin.shafa.care/api/v3/auth/publicFile/file/ACFrOgBA2_RsFTxBlMUs72kaD4MHQ-ZiQnz_f5O5uANM-0RJQs1SxC0ieLZtEAoYoVzc5vU29Dt3dXERh-Ut6H-a6SviTOQOde-7JbBLrK80qkTzpreJ-xxfVbyWLxKW1QKw-fUL0f3g9GJH44SK1632332362226.pdf">
                <img src={doc4} alt="companies act" />
              </a>
            </div>

            <div className="col-md-4">
              <a href="https://api-admin.shafa.care/api/v3/auth/publicFile/file/ACFrOgAOtb8lyTPnIWkZr6E1tyyuKgutfY_gsbOlgAisclq-xhdJpGB1svlcGDgRIBknspWOwtdcbUrypmTe0V4WFvvCXrZA0FxM4zXYdwr8BbueBnAGVAB5pcelznEknPqbCrPzj4eFdnOIoaLL1632331966327.pdf">
                <img src={doc5} alt="trade licence" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
