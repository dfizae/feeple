import React from "react";

function Footer({ 
  onSubmit,
  feedbackText = "전문가 피드백 ＋ 추가피드백3회",
  name,
  price,
 }) {
  return (
    <footer id="footer">
      <div className="container">
        <div id="profile-foot">
          <div id="profile-img-foot">
            <img src="" alt="프로필사진" />
            <img src="/img/ico-feepleLogo_2.svg" alt="feeple 로고" />
          </div>
          <div id="profile-comment-foot">
            <div id="personal-foot">
              <span>{feedbackText}</span>
              <span>{name}</span>
              <span>{price}</span>
            </div>
          </div>
        </div>
        <span id="foot-button">
          {/* <input
            type="button"
            value="미리보기"
            onClick={() => alert("미리보기 기능은 준비 중입니다.")}
          />
          <input
            type="button"
            value="임시저장"
            onClick={() => onSubmit("save")}
          /> */}
          <input
            type="button"
            value="결제"
            onClick={() => onSubmit("pay")}
          />
        </span>
      </div>
    </footer>
  );
}

export default Footer;
