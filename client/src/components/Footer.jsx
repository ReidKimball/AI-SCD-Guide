import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { ChefHat } from 'lucide-react';

export default function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer>
                <div className='footer-content gap-8 py-8 flex flex-col flex-wrap content-center md:flex-row md:justify-center'>
                    {/* Company Info */}
                    <div className="space-y-4">
                        <div className='flex items-center space-x-2'>
                            <ChefHat size={20}/>
                            <h3 className="text-lg font-semibold text-white">SCD Guide</h3>
                        </div>                        
                        <div className="flex items-center space-x-2">
                            <Heart size={20} className="text-red-500" />
                            <span className="text-sm"> Making the world better one gut at a time.</span>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Contact Us</h3>
                        <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                            <Mail size={16} />
                            <a href="mailto:rkimball+support@gmail.com" className="text-sm hover:text-white"> support@webapp.com</a>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Phone size={16} />
                            <a href="tel:+1234567890" className="text-sm hover:text-white"> +1 (555) 555-5555</a>
                        </div>
                        <div className="flex items-center space-x-2">
                            <MapPin size={16} />
                            <span className="text-sm"> 123 Business St, City, Country</span>
                        </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                        <ul className="space-y-2">
                        <li>
                            <a href="/about" className="text-sm hover:text-white">About</a>
                        </li>
                        <li>
                            <a href="/services" className="text-sm hover:text-white">Services</a>
                        </li>
                        <li>
                            <a href="/privacy" className="text-sm hover:text-white">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="/terms" className="text-sm hover:text-white">Terms of Service</a>
                        </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className='flex justify-center items-center py-8'>
                    © {currentYear} SCD Guide by Reid Kimball Design. All rights reserved.
                </div>
            </footer>
        </>
    )
}