import React from "react";
import BackGround from "./background";
import { Outlet } from "react-router-dom";
import { IoIosArrowForward, IoIosArrowRoundForward } from "react-icons/io";
import RecentCard from "../cords/recentCard";
import Search from "./search";
import Tittle from "./tittle";
import ScrollFade from "./scrollFade";

const BlogSingle = () => {
  const services = [
    { data: "Financial Planning" },
    { data: "Investments Management" },
    { data: "Business Loan" },
    { data: "Taxes Consulting" },
    { data: "Insurance Consulting" },
    { data: "Retirement Planning" },
    { data: "Risk Management" },
    { data: "Technology Consulting" },
  ];

  const recentImage = [
    { imag: "/image_1.jpg" },
    { imag: "/image_2.jpg" },
    { imag: "/image_3.jpg" },
  ];

  const tag = [
    { tagCloud: "FINANCE" },
    { tagCloud: "FUND" },
    { tagCloud: "CONSALT" },
    { tagCloud: "BUSINESS" },
    { tagCloud: "FUNDING" },
    { tagCloud: "MONEY" },
    { tagCloud: "INVEST" },
    { tagCloud: "PLAN" },
    { tagCloud: "TAX" },
  ];

  const finance = [
    { tagCloud: "FINANCE" },
    { tagCloud: "FUNDS" },
    { tagCloud: "INVEST" },
    { tagCloud: "BUSINESS" },
  ];
  return (
    <div>
      <BackGround
        to="/"
        link="/Blog"
        name="HOME"
        name2="BLOG"
        row={<IoIosArrowForward className="text-xl text-white/80" />}
        page="BLOG SINGLE"
        pageName="Blog Details"
      />
      <main>
        <Outlet />
      </main>{" "}
      <div className="bg-[#f9faff]">
        <div className="flex">
          <div className="justify-center mt-30 pt-20 pl-25 pb-20">
            <img src="/image_7.jpg" alt="image" className="h-160 w-900" />
            <Tittle
              head2="Incorporation is A Big Milestone for Your Business"
              p1="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora."
              p2="Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis repellat sunt doloribus nesciunt! Minima laborum magni reiciendis qui voluptate quisquam voluptatem soluta illo eum ullam incidunt rem assumenda eveniet eaque sequi deleniti tenetur dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor minima esse vero ut ea, repudiandae suscipit!"
            />
            <Tittle
              head2="#2. Creative WordPress Themes"
              p1="Temporibus ad error suscipit exercitationem hic molestiae totam obcaecati rerum, eius aut, in. Exercitationem atque quidem tempora maiores ex architecto voluptatum aut officia doloremque. Error dolore voluptas, omnis molestias odio dignissimos culpa ex earum nisi consequatur quos odit quasi repellat qui officiis reiciendis incidunt hic non? Debitis commodi aut, adipisci."
              p2={<img src="/image_3.jpg" alt="image" />}
              p3="Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur suscipit veritatis nulla quos quia aspernatur perferendis, libero sint. Error, velit, porro. Deserunt minus, quibusdam iste enim veniam, modi rem maiores."
            />
            <div className="flex gap-3 pt-20 pb-20">
              {finance.map((info, index) => (
                <div key={index} className="text-blue-500">
                  <a className="p-2 bg-blue-500/15 font-semibold rounded-sm">
                    {info.tagCloud}
                  </a>
                </div>
              ))}
            </div>

            <div className="bg-[#f4f6ff] p-10 w-235 h-70 flex">
              <div className="w-100">
                <img
                  src="/person_1.jpg"
                  alt="image"
                  className="rounded-full h-25 w-25"
                />
              </div>
              <div>
                <ScrollFade>
                  <h1 className="text-4xl text-black mb-5">John Henderson</h1>
                  <p className="text-2xl text-black/50">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ducimus itaque, autem necessitatibus voluptate quod mollitia
                    delectus aut, sunt placeat nam vero culpa sapiente
                    consectetur similique, inventore eos fugit cupiditate
                    numquam!
                  </p>
                </ScrollFade>
              </div>
            </div>
            <div className="mt-30">
              <h1 className="text-5xl text-black">6 Comments</h1>
              <div className="flex mt-20">
                <div className="w-40">
                  <img
                    src="/person_1.jpg"
                    alt="image"
                    className="w-15 h-15 rounded-full"
                  />
                </div>
                <div className="pl-10">
                  <ScrollFade>
                    <h1 className="text-3xl text-black">John Doe</h1>
                    <p className="text-base mb-5 text-black/50 font-semibold">
                      January 27, 2021 at 7:20am
                    </p>
                    <p className="text-2xl text-black/50 mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Pariatur quidem laborum necessitatibus, ipsam impedit
                      vitae autem, eum officia, fugiat saepe enim sapiente iste
                      iure! Quam voluptas earum impedit necessitatibus, nihil?
                    </p>
                    <button className="font-semibold px-4 py-1 rounded-sm text-white bg-green-500 hover:bg-black duration-300 cursor-pointer">
                      REPLY
                    </button>
                  </ScrollFade>
                </div>
              </div>

              {/* second comment */}
              <div className="flex mt-20">
                <div className="w-40">
                  <img
                    src="/person_1.jpg"
                    alt="image"
                    className="w-15 h-15 rounded-full"
                  />
                </div>
                <div className="pl-10">
                  <ScrollFade>
                    <h1 className="text-3xl text-black">John Doe</h1>
                    <p className="text-base mb-5 text-black/50 font-semibold">
                      January 27, 2021 at 7:20am
                    </p>
                    <p className="text-2xl text-black/50 mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Pariatur quidem laborum necessitatibus, ipsam impedit
                      vitae autem, eum officia, fugiat saepe enim sapiente iste
                      iure! Quam voluptas earum impedit necessitatibus, nihil?
                    </p>
                    <button className="font-semibold px-4 py-1 rounded-sm text-white bg-green-500 hover:bg-black duration-300 cursor-pointer">
                      REPLY
                    </button>
                  </ScrollFade>
                </div>
              </div>

              {/* third comment */}
              <div className="flex mt-20 ml-15">
                <div className="w-40">
                  <img
                    src="/person_1.jpg"
                    alt="image"
                    className="w-15 h-15 rounded-full"
                  />
                </div>
                <div className="pl-10">
                  <ScrollFade>
                    <h1 className="text-3xl text-black">John Doe</h1>
                    <p className="text-base mb-5 text-black/50 font-semibold">
                      January 27, 2021 at 7:20am
                    </p>
                    <p className="text-2xl text-black/50 mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Pariatur quidem laborum necessitatibus, ipsam impedit
                      vitae autem, eum officia, fugiat saepe enim sapiente iste
                      iure! Quam voluptas earum impedit necessitatibus, nihil?
                    </p>
                    <button className="font-semibold px-4 py-1 rounded-sm text-white bg-green-500 hover:bg-black duration-300 cursor-pointer">
                      REPLY
                    </button>
                  </ScrollFade>
                </div>
              </div>

              {/* four comment */}
              <div className="flex mt-20 ml-25">
                <div className="w-40">
                  <img
                    src="/person_1.jpg"
                    alt="image"
                    className="w-15 h-15 rounded-full"
                  />
                </div>
                <div className="pl-10">
                  <ScrollFade>
                    <h1 className="text-3xl text-black">John Doe</h1>
                    <p className="text-base mb-5 text-black/50 font-semibold">
                      January 27, 2021 at 7:20am
                    </p>
                    <p className="text-2xl text-black/50 mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Pariatur quidem laborum necessitatibus, ipsam impedit
                      vitae autem, eum officia, fugiat saepe enim sapiente iste
                      iure! Quam voluptas earum impedit necessitatibus, nihil?
                    </p>
                    <button className="font-semibold px-4 py-1 rounded-sm text-white bg-green-500 hover:bg-black duration-300 cursor-pointer">
                      REPLY
                    </button>
                  </ScrollFade>
                </div>
              </div>

              {/* five comment */}
              <div className="flex mt-20">
                <div className="w-40">
                  <img
                    src="/person_1.jpg"
                    alt="image"
                    className="w-15 h-15 rounded-full"
                  />
                </div>
                <div className="pl-10">
                  <ScrollFade>
                    <h1 className="text-3xl text-black">John Doe</h1>
                    <p className="text-base mb-5 text-black/50 font-semibold">
                      January 27, 2021 at 7:20am
                    </p>
                    <p className="text-2xl text-black/50 mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Pariatur quidem laborum necessitatibus, ipsam impedit
                      vitae autem, eum officia, fugiat saepe enim sapiente iste
                      iure! Quam voluptas earum impedit necessitatibus, nihil?
                    </p>
                    <button className="font-semibold px-4 py-1 rounded-sm text-white bg-green-500 hover:bg-black duration-300 cursor-pointer">
                      REPLY
                    </button>
                  </ScrollFade>
                </div>
              </div>

              <div className="mt-30">
                <ScrollFade>
                  <h1 className="text-5xl">Leave a comment</h1>
                </ScrollFade>
                <div className="h-190 w-230 bg-[#ffffff] mt-15">
                  <ScrollFade>
                    <table>
                      <div className="p-20 space-y-10">
                        <div className="flex gap-7">
                          <span>
                            <span className="text-blue-500 text-base font-bold">
                              NAME*
                            </span>
                            <br />
                            <input
                              type="text"
                              className="border border-black/20 focus:border-blue-500 outline-none p-3 w-90 in-focus-within:to-blue-500"
                            />
                          </span>
                          <span>
                            <span className="text-blue-500 text-base font-bold">
                              EMAIL*
                            </span>
                            <br />
                            <input
                              type="text"
                              className="border border-black/20 focus:border-blue-500 outline-none p-3 w-90 in-focus-within:to-blue-500"
                            />
                          </span>
                        </div>
                        <span className="text-blue-500 text-base font-bold">
                          WEBSITE
                        </span>
                        <br />
                        <input
                          type="text"
                          className="border border-black/20 focus:border-blue-500 outline-none p-3 w-187 in-focus-within:to-blue-500"
                        />
                        <span className="text-blue-500 text-base font-bold">
                          MESSAGE
                        </span>
                        <textarea
                          name="Message"
                          id="5"
                          rows={11}
                          className="border border-black/20 focus:border-blue-500 outline-none p-3 w-187 in-focus-within:to-blue-500"
                        />
                        <button className="px-8 py-5 font-bold bg-blue-500 text-white rounded-sm cursor-pointer">
                          POST COMMENT
                        </button>
                      </div>
                    </table>
                  </ScrollFade>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-60 ml-15">
            <Search />
            <ScrollFade>
              <div className="space-y-8 mt-10">
                <h1 className="text-black text-3xl font-semibold">
                  Our Services
                </h1>
                {services.map((dat, index) => (
                  <div key={index}>
                    <p className="flex text-2xl text-black/60">
                      <IoIosArrowRoundForward className="text-2xl pt-2 text-blue-500" />
                      {dat.data}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollFade>
            <div className="mt-10">
              <ScrollFade>
                <h1 className="text-black text-3xl font-semibold">
                  Recent Blog
                </h1>

                <div>
                  {recentImage.map((recent, index) => (
                    <div key={index}>
                      <RecentCard recentimg={recent.imag} />
                    </div>
                  ))}
                </div>
              </ScrollFade>
            </div>

            <div className="mt-10 ">
              <ScrollFade>
                <h1 className="text-black text-3xl font-semibold mb-10">
                  Tag Cloud
                </h1>
                <div className="grid grid-cols-4 gap-5">
                  {tag.map((data, index) => (
                    <div key={index}>
                      <a
                        href=""
                        className="text-blue-500 text-base font-semibold rounded-sm p-2 bg-blue-500/20"
                      >
                        {data.tagCloud}
                      </a>
                    </div>
                  ))}
                </div>
              </ScrollFade>
            </div>

            <div className="mt-10">
              <ScrollFade>
                <h1 className="text-black text-3xl font-semibold mb-10">
                  Paragraph
                </h1>
                <p className="text-xl text-black/50 mr-25 ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus itaque, autem necessitatibus voluptate quod mollitia
                  delectus aut, sunt placeat nam vero culpa sapiente consectetur
                  similique, inventore eos fugit cupiditate numquam!
                </p>
              </ScrollFade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSingle;
