import React, { useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Certificates.scss";

const Certificates = () => {


    const [activeFilter, setActiveFilter] = useState("All");
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
    const [certificates, setCertificates] = useState([]);
    const [filterCertificates, setFilterCertificates] = useState([]);

    useEffect(() => {
        const query = '*[_type == "certificates"]';

        client.fetch(query).then((data) => {
            setCertificates(data);
            setFilterCertificates(data);
        });
    }, []);

    const handleCertificatesFilter = (item) => {
        setActiveFilter(item);
        setAnimateCard([{ y: 100, opacity: 0 }]);

        setTimeout(() => {
            setAnimateCard([{ y: 0, opacity: 1 }]);


            if (item === 'All') {
                setFilterCertificates(certificates);
            } else {
                setFilterCertificates(certificates.filter((certificates) => certificates.tags.includes(item)))
            }
        })
    };
    return (
        <>
            <h2 className="head-text">
                Unlocking  <span>Achievements </span>
                <br />: Displaying  <span> my Certified Skills</span>.
            </h2>

            <div className="app__certificates-filter">
                {[
                    "Bootcamp",
                    "project_certificates",
                    "Almabetter_certificates",
                    "other",
                    "All",
                ].map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleCertificatesFilter(item)}
                        className={`app__certificates-filter-item app__flex p-text ${activeFilter === item ? "item-active" : " "
                            }`}
                    >
                        {item}
                    </div>
                ))}
            </div>

            <motion.div
                animate={animateCard}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__certificates-portfolio"
            >
                {filterCertificates.map((certificates, index) => (
                    <div className="app__certificates-item app__flex" key={index}>
                        <div className="app__certificates-img app_-flex">
                            <img src={urlFor(certificates.imgUrl)} alt={certificates.name} />

                            <motion.div
                                whileHover={{ opacity: [0, 1] }}
                                transition={{
                                    duration: 0.25,
                                    ease: "easeInOut",
                                    staggerChildren: 0.5,
                                }}
                                className="app__certificates-hover app__flex"
                            >
                                <a href={certificates.certificatesLink} target="_blank" rel="noreferer">
                                    <motion.div
                                        whileHover={{ scale: [1, 0.9] }}
                                        whileInView={{ scale: [0, 1] }}
                                        transition={{ duration: 0.25 }}
                                        className="app__flex"
                                    >
                                        <AiFillEye />
                                    </motion.div>
                                </a>

                            </motion.div>
                        </div>

                        <div className="app__certificates-content app__flex">
                            <h4 className="bold-text">{certificates.title}</h4>
                            <div className="app__certificates-tag app__flex">
                                <p className="p-text">{certificates.tags[0]}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </>
    );
};



export default AppWrap(
    MotionWrap(Certificates, "app__certificates"),
    "certificates",
    "app__certificatebg"
);