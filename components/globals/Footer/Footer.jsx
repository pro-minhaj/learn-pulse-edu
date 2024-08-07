import Link from "next/link";
import Logo from "../Logo/Logo";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
// Payment methods Image
import stripeIcon from "@/assets/Footer/Payment-Card-Photos/stripe.png";
import masterIcon from "@/assets/Footer/Payment-Card-Photos/master.png";
import visaIcon from "@/assets/Footer/Payment-Card-Photos/visa.png";
import Image from "next/image";

// Footer Nav Items
const navItems = [
    {
        name: 'Home',
        path: "/"
    },
    {
        name: "Courses",
        path: '/courses'
    },
    {
        name: "Blog",
        path: "/blog"
    },
    {
        name: "Contact",
        path: "/contact"
    },
    {
        name: 'About',
        path: "/about"
    }
]

// Footer Social Links
const socialLinks = [
    {
        icon: <Facebook />,
        path: "https://www.facebook.com/fxminhaj1002"
    },
    {
        icon: <Instagram />,
        path: "https://www.instagram.com/fxminhaj"
    },
    {
        icon: <Linkedin />,
        path: "https://www.linkedin.com/in/pro-minhaj"
    },
    {
        icon: <Github />,
        path: "https://github.com/prominhaj"
    },
]

const Footer = () => {
    return (
        <div className="container px-4 py-3 md:px-8 md:py-6">
            <div className="flex items-center justify-center gap-2 md:justify-start">
                <Logo />
                <h2>Learn Pulse Edu</h2>
            </div>
            {/* Nav Links And Social Links */}
            <div className="flex flex-col items-center justify-between gap-3 py-4 md:flex-row">
                <div className="flex flex-wrap items-center gap-3">
                    {
                        navItems.map((item, index) => {
                            return (
                                <Link className="flex items-center text-lg font-medium text-gray-700 transition-colors hover:text-foreground/80 sm:text-sm dark:text-gray-300" href={item.path} key={index}>{item.name}</Link>
                            )
                        })
                    }
                </div>
                <div className="flex flex-wrap items-center gap-3">
                    {
                        socialLinks.map((item, index) => {
                            return (
                                <a target="_blank" className="flex items-center text-lg font-medium text-gray-700 transition-colors dark:hover:text-white hover:text-black sm:text-sm dark:text-gray-300" href={item.path} key={index}>
                                    {item.icon}
                                </a>
                            )
                        })
                    }
                </div>
            </div>
            {/* Payment system */}
            <div className="py-3 border-t">
                <h2 className="mb-2 text-center md:text-start">Pay With</h2>
                <div className="flex items-center justify-center gap-2 md:justify-start">
                    {
                        [stripeIcon, masterIcon, visaIcon].map((item, index) => {
                            return (
                                <div className="w-10 h-10 px-1.5 py-1 border-2 rounded" key={index}>
                                    <Image className="w-full h-full" width={50} height={50} src={item} alt={`payment image ${index + 1}`} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {/* Copyright */}
            <div className="flex items-center justify-center">
                <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Learn Pulse Edu</p>
            </div>
        </div>
    );
};

export default Footer;