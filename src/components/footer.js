import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="pb-10 bg-black text-white">
      <div className="md:grid grid-cols-4 gap-10">
        <div className="m-4 font-semibold font-mono">
          <Link to="#">ABOUT</Link> <br />
          <Link to="#">CONTACT US</Link> <br />
          <Link to="#">ACCESSIBILITY</Link> <br />
          <Link to="#">CAREERS</Link> <br />
          <Link to="#">REQUEST BROCHURE</Link> <br />
          <Link to="#">NEWSLETTER SIGNUP</Link> <br />
          <Link to="#">PRESS RELEASES</Link> <br />
          <Link to="#">CALIFORNIA PRIVACY</Link> <br />
          <Link to="#">LEGAL</Link> <br />
          <Link to="#">COOKIE CONSENT OPTIONS</Link> <br />
          <Link to="#">MANAGE PREFERENCES</Link> <br />
          <Link to="#">NEWSLETTER SIGNUP</Link> <br />
          <Link to="/Hybrid">UX Hybrid</Link> <br/>
          <Link className="pt-2 text-xl " to="/Suv"> 
          RZ 450e
        </Link> <br/>
        
        </div>
        <div className="m-4">
          <h1>LEASING & FINANCE</h1> <br />
          <Link className="font-thin" to="#">
            APPLY FOR CREDIT
          </Link>
          <br />
          <Link className="font-thin" to="#">
            REWARD & FINANCE PROGRAMS
          </Link>
          <br />
          <Link className="font-thin" to="#">
            END OF LEASE OPTIONS
          </Link>
          <br />
          <Link className="font-thin" to="#">
            BUY OR LEASE QUIZ
          </Link>
          <br />
          <Link className="font-thin" to="#">
            MOTORSPORTS
          </Link>
        </div>
        <div className="m-4">
          <h1>OWNERS</h1> <br />
          <Link className="font-thin" to="#">
            OWNER BENEFITS
          </Link>
          <br />
          <Link className="font-thin" to="#">
            MOBILE PHONE APPS
          </Link>
          <br />
          <Link className="font-thin" to="#">
            PAY MY BILL
          </Link>
          <br />
          <Link className="font-thin" to="#">
            DRIVERS WEBSITE
          </Link>
          <br />
          <Link className="font-thin" to="#">
            SHOP ACCESSORIES
          </Link>
          <br />
          <Link className="font-thin" to="#">
            SHOP PARTS
          </Link>
          <br />
          <Link className="font-thin" to="#">
            MOTORSPORTS
          </Link>
          <br />
        </div>
        <div className="m-4">
          <h1>SERVICE & WARRANTY</h1> <br />
          <Link className="font-thin " to="#">
            FIND A DEALER
          </Link>
          <Link className="font-thin " to="#">
            SERVICE BY LEXUS
          </Link>
          <br />
          <Link className="font-thin" to="#">
            MAINTENANCE SCHEDULE
          </Link>
          <br />
          <Link className="font-thin" to="#">
            LEXUS TIRE CENTER
          </Link>
          <br />
          <Link className="font-thin" to="#">
            MAINTENANCE SCHEDULE
          </Link>
          <br />
          <Link className="font-thin" to="#">
            LEXUS INTERNATIONAL
          </Link>
        </div>
      </div>
      <h1 className="text-center pt-4 px-2 md:pt-40 text-sm">
        ©2006-2022 Lexus, a Division of Toyota Motor Sales, U.S.A., Inc. All
        information contained herein applies to U.S. vehicles only.
      </h1>
    </footer>
  );
}

export default Footer;
