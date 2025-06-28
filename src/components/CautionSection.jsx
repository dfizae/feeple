import React, { useState } from "react";

function CautionSection() {
  const [allChecked, setAllChecked] = useState(false);
  const [checks, setChecks] = useState({
    chk2: false,
    chk3: false,
    chk4: false,
  });

  // 전체 동의
  const handleAllChange = (e) => {
    const checked = e.target.checked;
    setAllChecked(checked);
    setChecks({
      chk2: checked,
      chk3: checked,
      chk4: checked,
    });
  };

  // 개별 체크
  const handleCheckChange = (key) => (e) => {
    const updated = { ...checks, [key]: e.target.checked };
    setChecks(updated);

    // 모두 켜졌는지 검사
    const all = Object.values(updated).every((v) => v);
    setAllChecked(all);
  };

  return (
    <section id="bd-3">
      <div className="container">
        <div id="caution-wrap">
          <h1>피드백 요청 전 안내사항</h1>
          <ol id="caution">
            <li>1. 피드백 요청서의 제목은 일부 변경될 수 있습니다.</li>
            <li>2. 등록된 글은 포털 사이트에 일부 공개됩니다.<br />(음원 미공개 선택)</li>
            <li>3. 업로드하신 음원은 동의 없이 외부에 노출되지 않습니다.</li>
            <li>4. AI 사용 시 작업물 설명란에 꼭 언급해주세요.</li>
            <li>5. 가이드라인에 따라 구체적으로 작성해주세요.</li>
            <li>
              6. 아래 사항에 해당되면 서비스 이용이 제한될 수 있으며 환불이 불가합니다.
              <ul id="tt-add">
                <li>표절, 타인 저작물 침해</li>
                <li>광고성 콘텐츠, 스팸성 요청</li>
              </ul>
            </li>
            <li>7. 심층 피드백은 1회 기본 + 추가질문 최대 3회까지 포함됩니다.</li>
            <li>
              8. 24시간 이내 피드백 미제공 시 전액 환불됩니다.
              <span>(결제 규정 참고)</span>
            </li>
          </ol>
          <div id="caution-chkbox">
            {/* 전체 동의 */}
            <div className="chkbox-wrap line">
              <label>
                <input
                  type="checkbox"
                  id="chk"
                  checked={allChecked}
                  onChange={handleAllChange}
                />
                <span className="chk-text">아래 내용에 전체 동의합니다.</span>
              </label>
            </div>

            {/* 개별 동의 */}
            <div className="chkbox-wrap">
              <label>
                <input
                  type="checkbox"
                  checked={checks.chk2}
                  onChange={handleCheckChange("chk2")}
                />
                <span className="chk-text">상단 안내사항 확인 및 동의</span>
              </label>
            </div>
            <div className="chkbox-wrap">
              <label>
                <input
                  type="checkbox"
                  checked={checks.chk3}
                  onChange={handleCheckChange("chk3")}
                />
                <span className="chk-text">feeple 서비스 이용 약관 동의</span>
              </label>
              <span className="chk-det">보기</span>
            </div>
            <div className="chkbox-wrap">
              <label>
                <input
                  type="checkbox"
                  checked={checks.chk4}
                  onChange={handleCheckChange("chk4")}
                />
                <span className="chk-text">
                  환불 안내 및 결제 관련 규정 동의
                </span>
              </label>
              <span className="chk-det">보기</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CautionSection;
