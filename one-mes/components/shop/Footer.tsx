import React from "react";
import Image from "next/image";

export default function Footer({}) {
  return (
    <>
      <footer className="footer border-solid border-t border-gray-300 mt-10 pb-16">
        <div className="  lg:w-[1140px] mx-auto">
          <div id="footer" className="p-5 lg:p-0">
            <div
              className="inner_footer pb-5 flex flex-col justify-between sm:flex-col md:flex-row"
              style={{ wordBreak: "keep-all" }}
            >
              <div className="lg:w-[399px]">
                <div className="pt-0  lg:w-[550px] flex">
                  <a href="/" className=" mt-7 mr-6 ">
                    <Image
                      width={237}
                      height={57}
                      className="logo float-left"
                      src="/images/logo.png"
                      alt="피노 로고"
                    />
                  </a>
                  <div className="">
                    <h2 className="tit_cc pt-7 pb-1 leading-6 font-bold text-xl text-slate-800">
                      피노마켓 고객센터
                    </h2>
                    <div className="cc_view cc_call pt-0 h-16">
                      <h3>
                        <span className="tit">1644-0247</span>{" "}
                      </h3>
                      <br />
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <div>
                      <dl className="list">
                        <dt>평일 09:00 ~ 18:00 / 점심시간 12:00 ~ 13:00</dt>
                        <dd className="text-">주말 및 공휴일 휴무</dd>
                      </dl>
                    </div>
                    <div className="cc_view cc_kakao flex flex-row   mt-5">
                      <h3>
                        <a
                          target="_blank"
                          href="https://pf.kakao.com/_Wdwls/chat"
                          rel="noreferrer"
                        >
                          <Image
                            width={190}
                            height={48}
                            src="/images/kakao.png"
                            className="mr-3"
                            alt="로고"
                          />
                        </a>
                      </h3>
                      <h3 className="ml-5">
                        <a href="/custom/all">
                          <Image
                            width={190}
                            height={48}
                            src="/images/custom_img.png"
                            className="mr-3"
                            alt="문의"
                          />
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-7 from-neutral-800 leading-5 font-medium md:w-[552px] ml-2 text text-neutral-500  text-sm">
                <ul className="list flex justify-between md:w-[400px] mb-8 ">
                  <li>
                    <a
                      className="link text-sm  text-gray-800"
                      href="http://pinot.co.kr/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      회사소개
                    </a>
                  </li>
                  <li>
                    <a className="link text-sm text-gray-800" href="/partner">
                      제휴문의
                    </a>
                  </li>
                  <li>
                    <a className="link text-sm text-gray-800" href="/contract">
                      이용약관
                    </a>
                  </li>
                  <li>
                    <a className="link text-sm text-gray-800" href="/privacy">
                      개인정보처리방침
                    </a>
                  </li>
                </ul>
                <div className="mb-0 text-xl  font-extrabold  text-neutral-900">
                  주식회사 피노
                </div>
                <div className="inline-block">
                  사업자등록번호 : 584-86-01781{" "}
                </div>
                <span className="bar mx-2 text-gray-300 text-opacity-0 sm:text-opacity-100">
                  I
                </span>
                <div className="inline-block "> 팩스 : 043 - 236 - 9882</div>
                <br />
                통신판매업 : 제 2020-충북청주-1093호
                <span className="bar mx-2 text-gray-300 text-opacity-0 sm:text-opacity-100">
                  I
                </span>{" "}
                <div className="inline-block ">
                  개인정보보호책임자 : 김성수, 김종태
                </div>
                <br />
                충청북도 청주시 흥덕구 가로수로 988 (휴암동 318-12)
                <br />
                <div className="inline-block mr-1">
                  이메일 :{" "}
                  <a
                    href="mailto:market@pinot.co.kr"
                    className="link text-stone-700"
                  >
                    market@pinot.co.kr
                  </a>{" "}
                </div>
                <span className="bar mx-2 text-gray-300 text-opacity-0 sm:text-opacity-100">
                  I
                </span>
                <div className="inline-block">
                  대량주문 문의 :{" "}
                  <a
                    href="mailto:pinot@pinot.co.kr"
                    className="link  text-stone-700"
                  >
                    pinot@pinot.co.kr
                  </a>
                </div>
                <br />
                <em className="copy pt-0 not-italic">
                  ©2020-2021 PINOT Co., Ltd All Rights Reserved.
                </em>
                <br />
                <em className="copy pt-3 not-italic text-neutral-900   block text-sm">
                  피노마켓의 모든 콘텐츠는 저작권법의 보호를 받으므로 무단복제
                  및 배포를 금지합니다.
                </em>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
