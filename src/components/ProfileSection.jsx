import React from "react";

function ProfileSection({subtitle = "전문가에게 피드백을 받아보세요.", showProfile = true}) {
  return (
    <section id="bd-1">
      <div className="container">
        <div id="bd-1-wrap">
          <h1>피드백 요청하기</h1>
          <h5>{subtitle}</h5>
          {showProfile && (<div id="profile">
            <div id="profile-img">
              <img src="" alt="프로필사진" />
              <img src="/img/ico-feepleLogo_2.svg" alt="feeple 로고" />
            </div>
            <div id="profile-comment">
              <div id="personal">
                <span>전문가</span>
                <span>장기원</span>
              </div>
              <div id="career">
                <span>
                  Dragon Studio출신<br />
                  작곡/작사가
                </span>
              </div>
            </div>
          </div>)}
        </div>
      </div>
    </section>
  );
}

export default ProfileSection;
