
import "./footer.css"
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";


function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon /> <TwitterIcon /> <FacebookIcon />
      </div>
      <p> &copy; 2023 CommuniCare.</p>
    </div>
  );
}

export default Footer;