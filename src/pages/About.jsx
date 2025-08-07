import { IoMenu, IoCartOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
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
        <>

            <div className={styles.pageContainer}>
                <nav className={styles.breadcrumbs}>
                    <a href="#">Home</a> / <a href="#">About Us</a>
                </nav>

                <header className={styles.sectionHeader}>
                    <div className={styles.headerContent}>
                        <h1>About us</h1>
                        <p>
                            Empowering Shopping. Enabling Businesses. Welcome to (Website
                            Name) - your trusted digital marketplace for everything from daily
                            essentials and gadgets to professional supplies and industrial
                            solutions. Whether you're an individual shopper looking for
                            convenience or a business in need of bulk sourcing, we've built
                            this platform with you in mind.
                        </p>
                    </div>
                    <div className={styles.headerImage}>
                        <img src={bannerImage} alt="A team of professionals in a meeting" />
                    </div>
                </header>

                <main>
                    <section className={styles.sectionWhoWeAre}>
                        <h2>Who we are</h2>
                        <h3>
                            (Website Name) is a next-generation eCommerce company created with
                            a clear mission:
                        </h3>
                        <p className={styles.missionStatement}>
                            To simplify online shopping for consumers and streamline
                            procurement for businesses across India. With a robust catalog of
                            curated products, cutting-edge technology, and a customer-first
                            approach, we are proud to serve both B2C (retail) and B2B
                            (enterprise) customers through a unified, reliable platform.
                        </p>
                    </section>

                    <section className={styles.sectionWhyChooseUs}>
                        <h2>Why choose us</h2>
                        <div className={styles.featuresGrid}>
                            <div className={styles.featureCard}>
                                <div className={styles.featureIcon}>
                                    <FiShoppingCart />
                                </div>
                                <h3>One Platform, Two Markets</h3>
                                <p>
                                    We understand your unique needs and provide customized hiring
                                    strategies to ensure the perfect match
                                </p>
                            </div>
                            <div className={styles.featureCard}>
                                <div className={styles.featureIcon}>
                                    <CiDeliveryTruck />
                                </div>
                                <h3>Reliable Logistics</h3>
                                <p>
                                    Fast, trackable delivery across India powered by trusted
                                    courier and warehousing partners.
                                </p>
                            </div>
                            <div className={styles.featureCard}>
                                <div className={styles.featureIcon}>
                                    <GrSecure />
                                </div>
                                <h3>Secure & Scalable</h3>
                                <p>
                                    Built on enterprise-grade infrastructure with strong data
                                    protection, uptime, and performance.
                                </p>
                            </div>
                            <div className={styles.featureCard}>
                                <div className={styles.featureIcon}>
                                    <LiaSmsSolid />
                                </div>
                                <h3>Customer-First</h3>
                                <p>
                                    Live chat, loyalty rewards, easy returns - we put your
                                    satisfaction at the core of everything we do.
                                </p>
                            </div>
                            <div className={styles.featureCard}>
                                <div className={styles.featureIcon}>
                                    <AiOutlineDiscord />
                                </div>
                                <h3>Innovation-Driven</h3>
                                <p>
                                    Al-powered product recommendations, smart filters, and
                                    personalized experiences that evolve with you.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className={styles.sectionVision}>
                        <div className={styles.visionImage}>
                            <img src={secondImg} alt="Vision" />
                        </div>
                        <div className={styles.visionContent}>
                            <h2>Our Vision</h2>
                            <p className={styles.quote}>
                                To become India's most customer-centric and trusted digital
                                commerce platform, blending value, variety, and innovation"
                            </p>
                            <p>
                                We believe online commerce should be fast, fair, and
                                flexible-whether you're buying a single item or managing a
                                company's procurement.
                            </p>
                        </div>
                    </section>

                    <section className={styles.sectionGrowTogether}>
                        <h2>Let's Grow Together</h2>
                        <p>
                            Whether you're a college student looking for the best gadget deal,
                            a fashion-forward shopper, a small business sourcing office
                            supplies, or a large company managing procurement at scale-
                            (Website Name) is built to serve you.
                        </p>
                        <div className={styles.growBannerImage}>
                            <img src={thirdImg} alt="Growth Banner" />
                        </div>
                    </section>

                    <section className={styles.sectionTeam}>
                        <h2 className={styles.sectionTeamH2}>Our Team</h2>
                        <div className={styles.teamGrid}>
                            {[...Array(5)].map((_, i) => (
                                <div className={styles.teamMember} key={i}>
                                    <img
                                        src={`https://placehold.co/150x150/FFE4E6/313131?text=TM${i + 1
                                            }`}
                                        alt={`Team member ${i + 1}`}
                                    />
                                    <h3>Member {i + 1}</h3>
                                    <p>Role {i + 1}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>
            </div>

           
        </>
    );
};

export default About;


