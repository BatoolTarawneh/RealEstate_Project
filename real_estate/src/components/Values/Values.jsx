import React,{useState} from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./Values.css";
import data from "../../utils/accordion";
const Values = () => {
    const [className, setClassName] = useState(null)
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left */}
        <div className="v-left">
          <div className="image-container">
            <img src="./assets/key.jpg" alt="" srcset="" />
          </div>
        </div>
        {/* right */}
        <div className="flexColStart v-right">
          {/* span for title */}
          <span className="redText">Our Values</span>
          <span className="primaryText">
            We prioritize honesty and transparency in all our dealings.
          </span>
          <span className="secondaryText">
            {" "}
            We value the trust placed in us by our clients and work tirelessly
            to build and maintain strong, long-lasting relationships.{" "}
          </span>

          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              return (
                <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordionButton">
                        <AccordionItemState>
                            {({expended})=>expended?setClassName("expended") :setClassName("collapsed")}
                        </AccordionItemState>
                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="primaryText">{item.heading}</span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Values;
