import React from "react";

function Header() {
  return (
    <header id="header">
      <div className="container">
        <div id="head-option-wrap">
          <div id="head-first-option-wrap">
            <div id="head-logo">
              <a href="#">
                <img src="/img/ico-feepleLogo.svg" alt="헤더 로고" />
              </a>
            </div>
            <nav id="gnb">
              <ul>
                <li><a href="#">서비스 소개</a></li>
                <li><a href="#">홈</a></li>
                <li><a href="#">피드백 요청</a></li>
                <li><a href="#">피드백 제공</a></li>
                <li><a href="#">고객지원</a></li>
              </ul>
            </nav>
          </div>
          <div id="head-semi-option-wrap">
            <div className="btn-black"><a href="#">피드백 요청하기</a></div>
            <div className="circle"><a href="#"></a></div>
            <div className="circle"><a href="#"></a></div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
