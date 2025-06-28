// src/components/ExplainFields.jsx
import React from "react";

function ExplainFields() {
  return (
    <div id="explain">
      <div id="song-form-wrap">
          <div id="song-genre-wrap">
            <div id="song-mood-wrap">
              <div id="song-mood">
                <img src="" alt="무드 들어갈 공간" />
                <ul id="mood-list">
                  <li><input type="file" /></li>
                  <li><input type="image" alt="무드버튼1"/></li>
                  <li><input type="image" alt="무드버튼2"/></li>
                  <li><input type="image" alt="무드버튼3"/></li>
                  <li><input type="image" alt="무드버튼4"/></li>
                  <li><input type="image" alt="무드버튼5"/></li>
                </ul>
              </div>
            </div>
            <div id="form-title-wrap">
              <div id="form-title">
                <div className="ftw">
                  <h1 className="ftw-bl">Title*</h1>
                  <p className="ftw-gr">한 줄로 질문을 표현해보세요.</p>
                </div>
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
              placeholder="ex) 140 bpm, B major, 제가 머스타드 DJ를 좋아해서 만들어본 곡입니다. 평소에 K-pop을 즐겨들어서 
                          둘이 합해서 만들어보려고 해봤어요. 드라이브하면서 들으면 좋겠다라는 느낌을 내고 싶었고 
                          보컬은 청하같은 청량한 여보컬을 위에 얹을 계획입니다. "
            ></textarea>
            </div>
          </div>
        </div>
          <div id="form-QnA">
            <h1>요청사항*</h1>
            <p>
              전반적인 피드백 <span>요청사항</span>을 적어주세요. (최대 300자)
            </p>
            <textarea
              id="txt-QnA"
              name="QnA"
              maxLength="300"
            ></textarea>
          </div>
        </div>
    </div>
  );
}

export default ExplainFields;
