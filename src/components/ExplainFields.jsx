// src/components/ExplainFields.jsx
import React from "react";

function ExplainFields() {
  return (
    <div id="explain">
      <div id="song-form-wrap">
        <div id="song-form">
          <div id="form-title">
            <div className="ftw">
              <h1 className="ftw-bl">기본 정보*</h1>
              <p className="ftw-gr">한 줄로 질문을 표현해보세요.</p>
            </div>
            <label htmlFor="txt-title"></label>
            <input
              type="text"
              id="txt-title"
              name="title"
              placeholder="ex) 래칫장르 K-POP으로 만들어봤는데 전반적으로 어떤가요?"
              required
            />
          </div>
          <div id="form-explain">
            <label htmlFor="txt-explain">
              곡에 대한 <span>설명</span>을 간략히 적어주세요. (최대 300자)
            </label>
            <textarea
              id="txt-explain"
              name="explain"
              maxLength="300"
              placeholder="ex) 140 bpm, B major..."
            ></textarea>
          </div>
          <div id="form-QnA">
            <label htmlFor="txt-QnA">
              전반적인 피드백 <span>요청사항</span>을 적어주세요. (최대 300자)
            </label>
            <textarea
              id="txt-QnA"
              name="QnA"
              maxLength="300"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExplainFields;
