import { FiShoppingCart } from "react-icons/fi";
import { CiDeliveryTruck } from "react-icons/ci";
import { GrSecure } from "react-icons/gr";
import { LiaSmsSolid } from "react-icons/lia";
import { AiOutlineDiscord } from "react-icons/ai";
import styles from './css2/About.module.css';
import bannerImage from "../assets/bannerImage.jpg";
import secondImg from "../assets/secondImg.jpg";
import thirdImg from "../assets/thirdImg.jpg";

const About = () => {
    return (
        <div className={styles.aboutWrapper}>
            <nav className={styles.breadcrumbs}>
                <a href="#">Home</a> / <a href="#">About Us</a>
            </nav>

            <header className={styles.headerSection}>
                <div className={styles.headerText}>
                    <h1>About Us</h1>
                    <p>
                        Empowering Shopping. Enabling Businesses. Welcome to (Website Name) — your trusted digital marketplace for everything from daily essentials and gadgets to professional supplies and industrial solutions. Whether you're an individual shopper or a business, we built this platform with you in mind.
                    </p>
                </div>
                <div className={styles.headerImage}>
                    <img src={bannerImage} alt="Team collaboration" />
                </div>
            </header>

            <section className={styles.whoWeAreSection}>
                <h2>Who We Are</h2>
                <h3>(Website Name) is a next-generation eCommerce company created with a clear mission:</h3>
                <p>
                    To simplify online shopping for consumers and streamline procurement for businesses across India. We serve both B2C and B2B customers through a unified platform with curated products, robust technology, and a customer-first approach.
                </p>
            </section>

            <section className={styles.featuresSection}>
                <h2>Why Choose Us</h2>
                <div className={styles.featureCards}>
                    <div className={styles.card}>
                        <div className={styles.icon}><FiShoppingCart /></div>
                        <h3>One Platform, Two Markets</h3>
                        <p>We serve both retail and enterprise customers with tailored solutions.</p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.icon}><CiDeliveryTruck /></div>
                        <h3>Reliable Logistics</h3>
                        <p>Fast, trackable delivery across India via trusted partners.</p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.icon}><GrSecure /></div>
                        <h3>Secure & Scalable</h3>
                        <p>Enterprise-grade tech with strong security, uptime, and performance.</p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.icon}><LiaSmsSolid /></div>
                        <h3>Customer-First</h3>
                        <p>Live chat, easy returns, and rewards — your satisfaction is our priority.</p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.icon}><AiOutlineDiscord /></div>
                        <h3>Innovation-Driven</h3>
                        <p>AI-powered recommendations and personalized shopping experience.</p>
                    </div>
                </div>
            </section>

            <section className={styles.visionSection}>
                <div className={styles.visionImage}>
                    <img src={secondImg} alt="Vision" />
                </div>
                <div className={styles.visionText}>
                    <h2>Our Vision</h2>
                    <p className={styles.quote}>
                        “To become India's most customer-centric and trusted digital commerce platform, blending value, variety, and innovation.”
                    </p>
                    <p>
                        We believe online commerce should be fast, fair, and flexible — whether you're buying a single item or managing a company’s procurement.
                    </p>
                </div>
            </section>

            <section className={styles.growthSection}>
                <h2>Let's Grow Together</h2>
                <p>
                    Whether you're a student, a small business, or a large company — (Website Name) is built to serve you.
                </p>
                <div className={styles.growthImage}>
                    <img src={thirdImg} alt="Growth and partnership" />
                </div>
            </section>

            <section className={styles.teamSection}>
                <h2>Our Team</h2>
                <div className={styles.teamGrid}>
                    {[...Array(5)].map((_, i) => (
                        <div className={styles.teamMember} key={i}>
                            <img src={`https://placehold.co/150x150/FFE4E6/313131?text=TM${i + 1}`} alt={`Team member ${i + 1}`} />
                            <h3>Member {i + 1}</h3>
                            <p>Role {i + 1}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default About;
