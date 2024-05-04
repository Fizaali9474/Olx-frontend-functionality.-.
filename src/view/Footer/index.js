import "./index.css"



function Footer(){


    return(
        <div className='footer'  >

        
        
        <section className="">
        
            <footer className=" footer bg-body-tertiary">
          
              <div className=" container p-4">
        
                <div className="row">
      
                  <div className="col-lg-3 col-md-12 mb-4 mb-md-0">
                    <h5 className="text-uppercase">Popular category</h5>
                     <ul className="list-unstyled mb-0">
                        <li>Cars</li>
                        <li>Flats for rent</li>
                        <li>Mobile Phones</li>
                        <li>Jobs</li>
        
                     </ul>
                  </div>
                  {/*Grid column*/}
                  {/*Grid column*/}
                  <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase">TRENDING SEARCHES</h5>
                    <ul className="list-unstyled mb-0">
                      <li>
                        <a href="#!" className="text-body l">
                        Bikes
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-body l">
                        Watches
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-body l">
                        Books
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-body l">
                        Dogs
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase mb-0">About Us</h5>
                    <ul className="list-unstyled">
                      <li>
                        <a href="#!" className="text-body i">
                        About Dubizzle Group
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-body i">
                          Link 2
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-body i">
                        Contact Us
        
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-body i">
                        OLX for Businesses
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/*Grid column*/}
                  {/*Grid column*/}
                  <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase mb-0">OLX</h5>
                    <ul className="list-unstyled">
                      <li>
                        <a href="#!" className="text-body s">
                        Help
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-body s">
                          Sitemap
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-body s">
                        Terms of use
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-body s">
                        Privaciy Policy
                        </a>
                      </li>
                    </ul>
                  </div>
                   {/*Grid column*/}
                  {/*Grid column*/}
                  <div className="col-lg-2 col-md-6 mb-4 mb-md-0 follow">
                    <h5 className="text-uppercase mb-0">Follow us</h5>
                    <ul className="list-unstyled">
                      <li>
                        <a href="#!" className="text-body">
                        <img className="log" src="https://www.olx.com.pk/assets/iconTwitter_noinline.6037fa7d9a7b9d6408fb1b3d70524b97.svg" alt="" />
                        <img className="log" src="https://www.olx.com.pk/assets/iconFacebook_noinline.773db88c5b9ee5aaab365e61cdb750da.svg" alt="" />
                        <img className="log" src="https://www.olx.com.pk/assets/iconYoutube_noinline.c85bd6801ec83d6a3b498059550bef26.svg" alt="" />
                        <img className="log" src="https://www.olx.com.pk/assets/iconInstagram_noinline.d7d5811ebc44e03a674c8d0b5ff3f232.svg" alt="" />
                        </a>
                      </li>
                      <li className="im1">
                        <img className="logs" src="https://www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg" alt="" />
                        <img className="logs" src="https://www.olx.com.pk/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg" alt="" />
                        <img className="logs" src="https://www.olx.com.pk/assets/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg" alt="" />
                      </li>
                    </ul>
                  </div>
        
                  
                  {/*Grid column*/}
                </div>
                {/*Grid row*/}
              </div>
              {/* Grid container */}
              {/* Copyright */}
              <div
                className="text-center p-3 div"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
              >
                Free Classifieds in Pakistan . © 2006-2024 OLX
            
              </div>
              {/* Copyright */}
            </footer>
            {/* Footer */}
          </section>
        
            </div>
          
    )
};
export default Footer;