"use client";
import React, { useRef, useState } from "react";
import { Avatar, Button, Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import check from "../public/check.svg";
import { motion, useScroll } from "framer-motion";
import trust from "../public/Clip path group.svg";
import check2 from "../public/simple-line-icons_check.svg";
import bot from "../public/bot.svg";
import phone1 from "../public/Personal Chat1.svg";
import phone2 from "../public/Personal Chat2.svg";
import stars from "../public/stars.svg";
import hipaa from "../public/HIPAA-square-logo 1.svg";
import tick from "../public/correct tick.svg";
import wrong from "../public/wrong.svg";
import flatArrow from "../public/flatarrow.svg"

export default function Home() {
  const [activeTab, setActiveTab] = useState("MONTHLY");
  const [scrollX, setscrollX] = useState(0); // For detecting start scroll postion
  const [scrolEnd, setscrolEnd] = useState(false); // For detecting end of scrollin
  const containerRef = useRef<any>();
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.4,
        duration: 0.4,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  const handleScroll = (scrollAmount: number) => {
    containerRef.current.scrollLeft += scrollAmount;
    setscrollX(scrollX + scrollAmount); // Updates the latest scrolled postion

    //For checking if the scroll has ended
    if (
      Math.floor(
        containerRef.current.scrollWidth - containerRef.current.scrollLeft
      ) <= containerRef.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="xl:h-screen bg-gradient-to-bl from-[#7B11F9] via-[#7922D8] to-[#3636B2] py-8">
        <div className="flex flex-col justify-center lg:top-16 relative p-2 md:p-56  items-center h-full w-full">
          <motion.h4
            variants={container}
            viewport={{ once: false }}
            transition={{ delay: 0.7 }}
            initial="hidden"
            whileInView="show"
            className="text-white text-xl md:text-2xl mb-4 font-light mt-24"
          >
            Your AI medical scribe
          </motion.h4>

          <motion.h1
            variants={{
              hidden: { y: 60, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ ease: "linear", delay: 0.7 }}
            viewport={{ once: false }}
            className="text-white text-4xl md:text-6xl mb-6 text-center font-bold"
          >
            Experience the future of healthcare documentation with Mpilo
          </motion.h1>
          <motion.p
            variants={{
              hidden: { y: 60, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ ease: "linear", delay: 0.7 }}
            viewport={{ once: false }}
            className="text-gray-400 mb-6 font-light sm:w-[600px] lg:w-[900px] text-sm md:text-xl text-center"
          >
            Mpilo is an innovative scribing assistant, specifically designed to
            revolutionize the way healthcare professionals create SOAP notes
            during consultations.
          </motion.p>
          <Button
            size="lg"
            className="text-white px-8 py-4 md:px-16 md:py-6 bg-[#F74D4D]"
          >
            Try for Free
          </Button>

          <p className="mt-4 text-white font-light text-sm">
            [HIPPA Compliant]
          </p>

          <div className="flex flex-col flex-wrap mt-20 md:flex-row md:mt-36 md:gap-20 space-y-8 md:space-y-0 justify-center">
            <div className="flex items-center justify-center w-[340px]">
              <Image src={check} alt="check" className="mr-4" />
              <p className="text-white text-lg md:text-xl">
                Easy to use in your web browser
              </p>
            </div>
            <div className="flex items-center justify-center w-[340px]">
              <Image src={check} alt="check" className="mr-4" />
              <p className="text-white text-lg md:text-xl">
                AI medical scribing tool
              </p>
            </div>
            <div className="flex items-center justify-center w-[340px]">
              <Image src={check} alt="check" className="mr-4" />
              <p className="text-white text-lg md:text-xl">No data stored</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted Patner */}
      <section>
        <div className="">
          <div className="flex flex-col justify-center items-center">
            <motion.h1
              variants={{
                hidden: { y: 60, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ ease: "linear", delay: 0.7 }}
              viewport={{ once: false }}
              className="text-center text-2xl md:text-4xl p-20 font-semibold lg:w-[900px]"
            >
              Your trusted partner in modern healthcare documentation.
            </motion.h1>
          </div>

          {/* First div */}
          <motion.div
            variants={{
              hidden: { y: 60, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ ease: "linear", delay: 0.7 }}
            viewport={{ once: false }}
            className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-10 p-4 space-x-6  justify-between items-center"
          >
            <div className="">
              <p className="text-[#F74D4D] mb-4">Efficiency Multiplied</p>
              <h1 className="text-xl md:text-3xl mb-10 font-medium md:max-w-[500px]">
                Streamline Your Documentation with Flawless AI SOAP Notes
              </h1>
              <p className="text-sm font-light mb-10 md:max-w-[600px]">
                Reclaim Hours with Your Trusted Clinical Partner. Keep Patient
                Engagement Intact While Crafting Impeccable Notes.
              </p>
              <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-10 mt-20 md:mt-0">
                <div className="flex gap-2">
                  <Image src={check2} alt="" />
                  <p className="font-light text-md">
                    Transcribe Your Patient&apos;s Visit Dialogue
                  </p>
                </div>
                <div className="flex gap-2">
                  <Image src={check2} alt="" />
                  <p className="font-light text-md">
                    Craft Visit Summaries Effortlessly
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-20 mt-10">
                <div className="flex gap-2">
                  <Image src={check2} alt="" />
                  <p className="font-light text-md">
                    Craft Visit Summaries Effortlessly
                  </p>
                </div>
                <div className="flex gap-2">
                  <Image src={check2} alt="" />
                  <p className="font-light text-md">
                    Utilize Confidential Notes
                  </p>
                </div>
              </div>
            </div>
            <div className="ml-0 mt-4 md:mt-0  flex justify-center items-center ">
              <Image className="" src={trust} alt="" />
            </div>
          </motion.div>
        </div>
      </section>
      <section>
        {/* Second div */}
        <div className="mt-8 md:mt-52">
          <motion.div
            variants={{
              hidden: { y: 60, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ ease: "linear", delay: 0.7 }}
            viewport={{ once: false }}
            className="max-w-[1280px] mx-auto flex flex-col-reverse lg:flex-row gap-10 p-4   justify-between items-center"
          >
            <div className="ml-0 mt-4 md:mt-0  flex justify-center items-center ">
              <Image src={bot} alt="" />
            </div>
            <div className="">
              <p className="text-[#F74D4D] mb-4">Efficiency Multiplied</p>
              <h1 className="text-xl md:text-3xl mb-10 font-medium md:max-w-[500px]">
                Streamline Your Documentation with Flawless AI SOAP Notes
              </h1>
              <p className="text-sm font-light mb-10 md:max-w-[600px]">
                Reclaim Hours with Your Trusted Clinical Partner. Keep Patient
                Engagement Intact While Crafting Impeccable Notes.
              </p>
              <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-10 mt-20 md:mt-0">
                <div className="flex gap-2">
                  <Image src={check2} alt="" />
                  <p className="font-light text-md">
                    Transcribe Your Patient&apos;s Visit Dialogue
                  </p>
                </div>
                <div className="flex gap-2">
                  <Image src={check2} alt="" />
                  <p className="font-light text-md">
                    Craft Visit Summaries Effortlessly
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-20 mt-10">
                <div className="flex gap-2">
                  <Image src={check2} alt="" />
                  <p className="font-light text-md">
                    Craft Visit Summaries Effortlessly
                  </p>
                </div>
                <div className="flex gap-2">
                  <Image src={check2} alt="" />
                  <p className="font-light text-md">
                    Utilize Confidential Notes
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-10 md:py-20 px-4 max-w-[1280px] mx-auto">
        <div className="mx-auto max-w-xl md:max-w-none">
          <div className="flex justify-between">
            <h1 className="text-2xl md:text-4xl font-semibold">Testimonial</h1>
            <div className="flex gap-8">
              <Button
                isIconOnly
                className={`bg-[#F74D4D] bg-opacity-40  p-5 rounded-full ${
                  scrollX === 0 && "filter grayscale "
                }`}
                onClick={() => handleScroll(-200)}
                disabled={scrollX === 0 && true}
                startContent={
                  <Image
                    alt="arrow"
                    className="w-[120px] max-w-[unset] rotate-180"
                    src={flatArrow}
                    width={100}
                  ></Image>
                }
              ></Button>
              <Button
                isIconOnly
                className={`bg-[#F74D4D] bg-opacity-40 p-5 rounded-full ${
                  scrolEnd && "filter grayscale "
                }`}
                onClick={() => handleScroll(200)}
                disabled={scrolEnd && true}
                startContent={
                  <Image
                    alt="arrow"
                    className="relative z-50 w-8 max-w-[unset]"
                    src={flatArrow}
                    width={100}
                  ></Image>
                }
              ></Button>
            </div>
          </div>

          <div
            className="flex w-full gap-6 md:gap-20 mt-20 overflow-x-auto pb-7"
            ref={containerRef}
          >
            <motion.div
              variants={{
                hidden: { y: 60, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ ease: "linear", delay: 0.7 }}
              viewport={{ once: false }}
              className="flex flex-col sm:min-w-[350px] min-w-[250px] max-w-[400px]"
            >
              <Card className="bg-blue-100 flex-1">
                <CardBody className="flex flex-col md:flex-row gap-3 flex-1">
                  <div>
                    <div className="flex gap-3">
                      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                      <div className="flex flex-col">
                        <h1>John Doe</h1>
                        <Image src={stars} alt="" />
                      </div>
                    </div>
                    <p>
                      These guys are incredible to work with. Like seriously!
                      They did everything so good, that I did not even imagine
                      it would come up this awesome! Really looking forward to
                      working with them again.
                    </p>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
            {/* Second Card */}

            <motion.div
              variants={{
                hidden: { y: 60, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ ease: "linear", delay: 0.7 }}
              viewport={{ once: false }}
              className="flex flex-col sm:min-w-[350px] min-w-[250px] max-w-[400px]"
            >
              <Card className="bg-blue-100 flex-1">
                <CardBody className="flex flex-col md:flex-row gap-3 flex-1">
                  <div>
                    <div className="flex gap-3">
                      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                      <div className="flex flex-col">
                        <h1>Jane Smith</h1>
                        <Image src={stars} alt="" />
                      </div>
                    </div>
                    <p>
                      Absolutely amazing experience working with this team.
                      Their professionalism and dedication are unmatched. Highly
                      recommend!
                    </p>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why choose mpilo */}
      <div>
        <section>
          <div className="">
            <div className="flex flex-col justify-center items-center">
              <motion.h1
                variants={{
                  hidden: { y: 60, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ ease: "linear", delay: 0.7 }}
                viewport={{ once: false }}
                className="text-center text-2xl md:text-4xl p-20 font-semibold md:w-[900px]"
              >
                Why Choose mpilo
              </motion.h1>
            </div>

            {/* First div */}
            <motion.div
              variants={{
                hidden: { y: 60, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ ease: "linear", delay: 0.7 }}
              viewport={{ once: false }}
              className="max-w-[1280px] mx-auto flex flex-col sm:flex-row gap-10 p-4   justify-between items-center"
            >
              <div className="">
                <h1 className="text-xl md:text-3xl mb-10 font-medium md:max-w-[500px]">
                  Efficiency
                </h1>
                <p className="text-sm font-light mb-10 md:max-w-[600px]">
                  Say goodbye to tedious manual documentation. Mpilo automates
                  the documentation process, allowing you to focus on patient
                  care.
                </p>
                <p className="text-sm font-light mb-10 md:max-w-[600px]">
                  Reclaim 60% of your day from documentation tasks; focus on
                  what truly matters.
                </p>

                <Button className="bg-[#F74D4D] px-10 text-white">
                  Try For Free
                </Button>
              </div>
              <div className="ml-0 mt-4 md:mt-0  flex justify-center items-center ">
                <Image
                  className="md:w-auto sm:w-[80%] mx-auto"
                  src={phone1}
                  alt=""
                />
              </div>
            </motion.div>
          </div>
        </section>
        <section>
          {/* Second div */}
          <div className="mt-8 md:mt-52">
            <motion.div
              variants={{
                hidden: { y: 60, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ ease: "linear", delay: 0.7 }}
              viewport={{ once: false }}
              className="max-w-[1280px] mx-auto flex flex-col-reverse sm:flex-row gap-10 p-4  justify-between items-center"
            >
              <div className="ml-0 mt-4 md:mt-0  flex justify-center items-center ">
                <Image className="md:w-auto sm:w-[80%]" src={phone2} alt="" />
              </div>
              <div className=" justify-center flex-col flex">
                <h1 className="text-xl md:text-3xl mb-10 font-medium md:max-w-[500px]">
                  Seamless AI Integration
                </h1>
                <p className="text-sm font-light mb-10 md:max-w-[600px]">
                  Mpilo seamlessly integrates into your existing systems,
                  minimizing disruption and maximizing the benefits of
                  AI-powered documentation within your practice.
                </p>
                <Button className="bg-[#F74D4D] w-40 px-10 text-white">
                  Try For Free
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Data Privacy */}
      <section>
        <motion.div
          variants={{
            hidden: { y: 60, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ ease: "linear", delay: 0.9 }}
          viewport={{ once: false }}
          className="h-full flex flex-col py-40 px-3  items-center"
        >
          <p className="text-[#F74D4D] mb-4">
            Safeguarding your data is our top priority.
          </p>
          <h1 className="font-medium text-2xl text-center md:text-4xl mb-8">
            DATA PRIVACY AND SECUIRITY
          </h1>

          <p className="text-lg font-light text-center mb-10 md:max-w-[900px]">
            We understand the critical nature of the information shared during
            patient encounters, and we are committed to maintaining the highest
            standards of security and privacy.
          </p>
          <p className="text-lg  text-center font-light mb-10 md:max-w-[900px]">
            Our platform employs robust encryption protocols to ensure that all
            data transmitted and stored within Mpilo remains secure and
            confidential. We adhere to strict compliance regulations, including
            HIPAA guidelines, to protect patient privacy and uphold
            confidentiality standards.
          </p>

          <Image src={hipaa} alt="" />

          <Button size="lg" className="bg-[#F74D4D] px-20 text-white mt-6">
            Try For Free
          </Button>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mt-20">
            {/* First column */}
            <div className="flex flex-col items-center">
              <div className="text-center font-bold text-2xl mb-4">2 hours</div>
              <p className="text-center text-lg text-[#808080] w-80">
                saved per day on clinical documentation
              </p>
            </div>

            {/* Second column */}
            <div className="flex flex-col items-center">
              <div className="text-center font-semibold text-2xl mb-4">90%</div>
              <p className="text-center text-lg text-[#808080] w-80">
                of clinicians experience a reduction of fatigue when using Mpilo
              </p>
            </div>

            {/* Third column */}
            <div className="flex flex-col items-center">
              <div className="text-center font-semibold text-2xl mb-4">
                30 Seconds
              </div>
              <p className="text-center text-lg text-[#808080] w-80">
                to get started and try Copilot in a real consultation
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Pricing */}
      <section>
        <div className="bg-[#F8FBFF] flex flex-col w-full min-h-screen p-10 lg:p-40 gap-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0 md:mr-10">
              <h1 className="text-2xl md:text-4xl mb-4 font-bold">
                Simple, transparent pricing
              </h1>
              <p className="text-lg text-[#808080] max-w-xs md:max-w-none">
                No contracts, No surprise fees.
              </p>
            </div>
            {/* Tabs */}
            <div className="flex justify-center items-center">
              <div className="flex items-center bg-[#e8eaf1] rounded-full gap-2 p-2 px-2">
                <div
                  className={`cursor-pointer mr-4 py-2 px-4 ${
                    activeTab === "MONTHLY"
                      ? "bg-[#F74D4D] rounded-full  text-white font-semibold"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("MONTHLY")}
                >
                  MONTHLY
                </div>
                <div
                  className={`cursor-pointer py-2 px-4 ${
                    activeTab === "YEARLY"
                      ? "bg-[#F74D4D] rounded-full py-2 px-4 text-white font-semibold"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("YEARLY")}
                >
                  YEARLY
                </div>
              </div>
            </div>
          </div>
          {/* Prices */}
          <div className="flex flex-wrap justify-between items-center w-full">
            <div className="lg:block hidden">
              <ul className="flex flex-col gap-8 pt-13 relative top-7 text-start justify-start text-[#848199] font-normal text-lg">
                <li>All limited links</li>
                <li>Own analytics platform</li>
                <li>Chat support</li>
                <li>Number of users</li>
                <li>Optimize hashtags</li>
                <li>Account manager</li>
                <li>Number of articles</li>
                <li>Satisfaction guarant</li>
              </ul>
            </div>
            <motion.ul
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    delayChildren: 0.4,
                    staggerChildren: 0.4,
                    duration: 0.4,
                  },
                },
              }}
              viewport={{ once: false }}
              className="flex flex-wrap justify-evenly gap-10"
            >
              <motion.li
                variants={{
                  hidden: { y: 60, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                transition={{ ease: "linear", delay: 0.5 }}
                className="flex flex-col gap-10 items-center justify-center p-10 transition-all duration-75 bg-white sm:bg-none hover:bg-white hover:scale-105 hover:shadow-lg "
              >
                <p className="font-bold text-2xl">Starter</p>
                {activeTab === "MONTHLY" ? (
                  <p>
                    <span className=" font-bold  text-4xl">$20</span>
                    <span className="text-[#848199] font-normal ">/month</span>
                  </p>
                ) : (
                  <p>
                    <span className=" font-bold  text-4xl">$110</span>
                    <span className="text-[#848199] font-normal ">/year</span>
                  </p>
                )}
                <div className="flex gap-2">
                  <div>
                    <ul className="flex lg:hidden  flex-col gap-8 pt-13 relative top-7 text-start justify-start text-[#848199] font-normal text-lg">
                      <li>All limited links</li>
                      <li>Own analytics platform</li>
                      <li>Chat support</li>
                      <li>Number of users</li>
                      <li>Optimize hashtags</li>
                      <li>Account manager</li>
                      <li>Number of articles</li>
                      <li>Satisfaction guarant</li>
                    </ul>
                  </div>
                  <div className="flex flex-col relative items-center justify-center top-7 gap-11">
                    <Image src={tick} alt="" />
                    <Image src={tick} alt="" />
                    <Image src={tick} alt="" />
                    <p>1 user</p>
                    <Image src={tick} alt="" />
                    <Image src={wrong} alt="" />
                    <Image src={wrong} alt="" />
                    <Image src={tick} alt="" />
                  </div>
                </div>
                <Button
                  radius="full"
                  size="lg"
                  className="bg-[#F74D4D] text-white  relative top-5"
                >
                  Choose plan
                </Button>
              </motion.li>
              <motion.li
                variants={{
                  hidden: { y: 60, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                transition={{ ease: "linear", delay: 0.7 }}
                className="flex flex-col gap-10 items-center justify-center p-10 transition-all duration-75 bg-white sm:bg-none hover:bg-white hover:scale-105 hover:shadow-lg "
              >
                <p className="font-bold text-2xl">Pro</p>
                {activeTab === "MONTHLY" ? (
                  <p>
                    <span className=" font-bold  text-4xl">$100</span>
                    <span className="text-[#848199] font-normal ">/month</span>
                  </p>
                ) : (
                  <p>
                    <span className=" font-bold  text-4xl">$1000</span>
                    <span className="text-[#848199] font-normal ">/year</span>
                  </p>
                )}
                <div className="flex gap-2">
                  <div>
                    <ul className="flex lg:hidden  flex-col gap-8 pt-13 relative top-7 text-start justify-start text-[#848199] font-normal text-lg">
                      <li>All limited links</li>
                      <li>Own analytics platform</li>
                      <li>Chat support</li>
                      <li>Number of users</li>
                      <li>Optimize hashtags</li>
                      <li>Account manager</li>
                      <li>Number of articles</li>
                      <li>Satisfaction guarant</li>
                    </ul>
                  </div>
                  <div className="flex flex-col  items-center justify-center relative top-7 gap-11">
                    <Image src={tick} alt="" />
                    <Image src={tick} alt="" />
                    <Image src={tick} alt="" />
                    <p>3 user</p>
                    <Image src={tick} alt="" />
                    <Image src={tick} alt="" />
                    <Image src={wrong} alt="" />
                    <Image src={tick} alt="" />
                  </div>
                </div>

                <Button
                  radius="full"
                  size="lg"
                  className="bg-[#F74D4D] text-white  relative top-5"
                >
                  Choose plan
                </Button>
              </motion.li>
              <motion.li
                variants={{
                  hidden: { y: 60, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ ease: "linear", delay: 0.9 }}
                viewport={{ once: false }}
                className="flex flex-col gap-10 items-center justify-center p-10 transition-all duration-75 bg-white sm:bg-none hover:bg-white hover:scale-105 hover:shadow-lg "
              >
                <p className="font-bold text-2xl">Group Plan</p>
                {activeTab === "MONTHLY" ? (
                  <p>
                    <span className=" font-bold  text-4xl">$200</span>
                    <span className="text-[#848199] font-normal ">/month</span>
                  </p>
                ) : (
                  <p>
                    <span className=" font-bold  text-4xl">$2200</span>
                    <span className="text-[#848199] font-normal ">/year</span>
                  </p>
                )}
                <div className="flex gap-2">
                  <div>
                    <ul className="flex lg:hidden  flex-col gap-8 pt-13 relative top-7 text-start justify-start text-[#848199] font-normal text-lg">
                      <li>All limited links</li>
                      <li>Own analytics platform</li>
                      <li>Chat support</li>
                      <li>Number of users</li>
                      <li>Optimize hashtags</li>
                      <li>Account manager</li>
                      <li>Number of articles</li>
                      <li>Satisfaction guarant</li>
                    </ul>
                  </div>
                  <div className="flex flex-col relative items-center justify-center top-7 gap-11">
                    <Image src={tick} alt="" />
                    <Image src={tick} alt="" />
                    <Image src={tick} alt="" />
                    <p>Unlimited</p>
                    <Image src={tick} alt="" />
                    <Image src={tick} alt="" />
                    <Image src={tick} alt="" />
                    <Image src={tick} alt="" />
                  </div>
                </div>

                <Button
                  radius="full"
                  size="lg"
                  className="bg-[#F74D4D] text-white  relative top-5"
                >
                  Choose plan
                </Button>
              </motion.li>
            </motion.ul>
          </div>
        </div>
      </section>
    </div>
  );
}
