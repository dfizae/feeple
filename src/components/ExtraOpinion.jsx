import React from "react";

function ExtraOpinion() {
  return (
    <div id="extra">
      <textarea
        id="extra-option"
        name="추가 의견 작성"
        placeholder="추가로 작성하고 싶은 부분이 있다면 입력해주세요. (최대 150자)"
        maxLength="150"
      ></textarea>
    </div>
  );
}

export default ExtraOpinion;
