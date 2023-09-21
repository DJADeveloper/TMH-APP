import Image from "next/image";
import Link from "next/link";

import Author from "../../../public/assets/imgs/blog/detail/author.svg";
import Detail1 from "../../../public/assets/imgs/blog/detail/1.png";
import Detail2 from "../../../public/assets/imgs/blog/detail/2.jpg";
import Detail3 from "../../../public/assets/imgs/blog/detail/3.jpg";
import { useEffect, useRef } from "react";
import animationWordCome from "@/lib/utils/animationWordCome";

const BlogDetails1 = () => {
  const wordAnim = useRef();
  const wordAnim2 = useRef();
  useEffect(() => {
    animationWordCome(wordAnim.current);
    animationWordCome(wordAnim2.current);
  }, []);
  return (
    <>
      <section className="blog__detail">
        <div className="container g-0 line pt-140">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-8 col-xl-10 offset-xxl-2 offset-xl-1">
              <div className="blog__detail-top">
                <h2
                  className="blog__detail-date animation__word_come"
                  ref={wordAnim}
                >
                  Social Media Marketing <span>18 Sep 2023</span>
                </h2>
                <h3
                  className="blog__detail-title animation__word_come"
                  ref={wordAnim2}
                >
                  Level Up Your Startup with a Robust Social Media Strategy
                </h3>
                <div className="blog__detail-metalist">
                  <div className="blog__detail-meta">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Author}
                      alt="Author Picture"
                    />
                    <p>
                      Written by <span>Darryl Adams</span>
                    </p>
                  </div>
                  <div className="blog__detail-meta">
                    <p>
                      Viewed <span>3 min read</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-12">
              <div className="blog__detail-thumb">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={Detail1}
                  alt="Blog Thumbnail"
                  data-speed="0.5"
                />
              </div>
            </div>
            <div className="col-xxl-8 col-xl-10 offset-xxl-2 offset-xl-1">
              <div className="blog__detail-content">
                <p>
                  A well-executed social media marketing strategy can be a
                  game-changer, especially for startups aiming to carve out a
                  niche in a competitive market. The first step on this journey
                  involves identifying your target audience and choosing the
                  right platforms to reach them.
                </p>
                <p>
                  In the hyper-connected world we live in, communication and
                  consistency are key. Maintaining a regular posting schedule
                  not only ensures a steady stream of content but also helps in
                  building a community around your brand. Encourage
                  user-generated content and interact with your followers to
                  foster a deeper connection.
                </p>
                <Image
                  priority
                  width={850}
                  style={{ height: "auto" }}
                  src={Detail2}
                  alt="Social Media Icons"
                />
                <h2>Paid Advertising and Influencer Partnerships</h2>
                <p>
                  Leveraging paid advertising and forging influencer
                  partnerships can amplify your startup's reach, bringing your
                  message to a broader audience. However, the strategies don't
                  end here; analyzing performance metrics and continually
                  adjusting your approach is vital for sustained growth.
                </p>
                <h2>Analytics and Continuous Improvement</h2>
                <p>
                  By diving deep into performance analytics, you can understand
                  what works for your brand and what doesn't, allowing for
                  informed decisions and refined strategies. This process of
                  analysis and adjustment is central to evolving and improving
                  your social media marketing strategy over time.
                </p>
                <ul>
                  <li>Target Audience Analysis</li>
                  <li>Content Strategy</li>
                  <li>User Engagement</li>
                  <li>Influencer Partnerships</li>
                  <li>Performance Analytics</li>
                </ul>
                <h2>Get Started with The Mastery House</h2>
                <p>
                  Ready to elevate your startup's online presence? The Mastery
                  House is here to support your business success with a custom
                  website design crafted just for you. Based in Florida, we
                  offer a range of digital solutions, including web development
                  services in Tampa. Connect with us and stay competitive in the
                  online landscape.
                </p>
                <Image
                  priority
                  width={850}
                  style={{ height: "auto" }}
                  src={Detail3}
                  alt="Mastery House Banner"
                />
              </div>
              <div className="blog__detail-tags">
                <p className="sub-title-anim">
                  tags: <Link href="/blog">Social Media Marketing</Link>,{" "}
                  <Link href="/blog">Startup Strategy</Link>,
                  <Link href="/tag">Digital Solutions</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails1;
