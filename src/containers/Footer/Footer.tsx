import React from 'react';
import Footer from '../../components/Footer';

export interface FooterContainerProps {
    
}
 
const FooterContainer: React.FC<FooterContainerProps> = () => {
    return (
        <Footer>
            <Footer.Row>
                <Footer.Col>
                    <Footer.Title>Get To know Us</Footer.Title>
                    <Footer.Link href="#">FAQ</Footer.Link>
                    <Footer.Link  href="#">Investor Relations</Footer.Link>
                    <Footer.Link  href="#">Ways to Watch</Footer.Link>
                    <Footer.Link  href="#">Corporate Information</Footer.Link>
                    <Footer.Link  href="#">Netflix Originals</Footer.Link>
                </Footer.Col>
                <Footer.Col>
                        <Footer.Title>Make Money With Us</Footer.Title>
                        <Footer.Link href="#">Help Center</Footer.Link>
                        <Footer.Link  href="#">Jobs</Footer.Link>
                        <Footer.Link  href="#">Terms of Use</Footer.Link>
                        <Footer.Link  href="#">Contact Us</Footer.Link>
                    </Footer.Col>

                    <Footer.Col>
                        <Footer.Title>Amazon Payment Products</Footer.Title>
                        <Footer.Link href="#">Account</Footer.Link>
                        <Footer.Link  href="#">Redeem Gift Cards</Footer.Link>
                        <Footer.Link  href="#">Privacy</Footer.Link>
                        <Footer.Link  href="#">Speed Test</Footer.Link>
                    </Footer.Col>

                    <Footer.Col>
                        <Footer.Title>Let Us Help You</Footer.Title>
                        <Footer.Link href="#">Media Centre</Footer.Link>
                        <Footer.Link  href="#">buy Gift Cards</Footer.Link>
                        <Footer.Link  href="#">Cookie Preferences</Footer.Link>
                        <Footer.Link  href="#">Legal Notices</Footer.Link>
                    </Footer.Col>
            </Footer.Row>
        </Footer>

      );
}
 
export default FooterContainer;