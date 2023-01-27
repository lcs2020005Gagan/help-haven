import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
const Footer = ()=>{
    return(
        <>
            <div className="footer">
                <div className="social-media">
                    <TwitterIcon/>
                    <InstagramIcon/>
                    <EmailIcon/>
                    <LocalPhoneIcon/>
                </div>
                <div className="copyright">
                <span>©</span>   Copyright HelpHaven
                </div>
            </div>
        </>
    )
}

export default Footer;