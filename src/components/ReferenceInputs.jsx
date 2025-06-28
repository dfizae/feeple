// src/components/ReferenceInputs.jsx
import React, { useState } from "react";

function ReferenceInputs({onOpenModel}) {
  const [references, setReferences] = useState([
    { url: "", description: "" }
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [linkInput, setLinkInput] = useState("");

  const addReference = () => {
    setReferences([...references, { url: "", description: "" }]);
  };

  const removeReference = () => {
    if (references.length > 1) {
      setReferences(references.slice(0, -1));
    } else {
      alert("최소 1개의 레퍼런스는 남겨두어야 합니다.");
    }
  };

  const openModal = (index) => {
    setCurrentIndex(index);
    setLinkInput("");
    setModalVisible(true);
  };

  const confirmLink = () => {
    if (!linkInput.trim()) {
      alert("링크를 입력해주세요.");
      return;
    }
    // 유효성 검사
    if (!/^https?:\/\//i.test(linkInput)) {
      alert("http:// 또는 https:// 로 시작하는 링크를 입력해주세요.");
      return;
    }
    const allowedDomains = ["youtube.com", "youtu.be", "soundcloud.com"];
    const isValid = allowedDomains.some((domain) => linkInput.includes(domain));
    if (!isValid) {
      alert("유효한 링크만 입력 가능합니다.\n(유튜브 또는 사운드클라우드)");
      return;
    }

    let url = linkInput.trim();
    // 유튜브 embed 변환
    if (url.includes("youtube.com/watch?v=")) {
      const videoId = url.split("v=")[1].split("&")[0];
      url = `https://www.youtube.com/embed/${videoId}`;
    } else if (url.includes("youtu.be/")) {
      const videoId = url.split("youtu.be/")[1].split("?")[0];
      url = `https://www.youtube.com/embed/${videoId}`;
    }

    const updated = [...references];
    updated[currentIndex].url = url;
    setReferences(updated);
    setModalVisible(false);
  };

  return (
    <>
      <div id="reference-container">
        <div className="ref-title">
          <h1>
            참고한 <span>레퍼런스</span>의 링크를 '붙여넣기' 해주세요.
          </h1>
          <p>유튜브, 사운드클라우드 링크만 가능합니다.</p>
        </div>
        {references.map((ref, index) => (
          <div className="reference-item" key={index}>
            <div className="ref-opi-wrap">
              <div className="left-column">
                {ref.url ? (
                  <iframe
                    className="ref-frame"
                    src={ref.url}
                    title={`레퍼런스-${index}`}
                  ></iframe>
                ) : (
                  <div
                    className="ref-frame"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#888",
                      fontSize: "14px"
                    }}
                  >
                    링크 미첨부
                  </div>
                )}
                <div className="button-group">
                  <button
                    type="button"
                    className="add-link-btn"
                    onClick={() => openModal(index)}
                  >
                    <img
                      src="/img/ico-fileupload.svg"
                      alt="링크 첨부 아이콘"
                      className="upload-icon"
                    />
                    링크 첨부
                  </button>
                </div>
              </div>
              <textarea
                className="ref-textarea"
                placeholder="참고한 내용을 적어주세요.(최대 100자)"
                maxLength="100"
                value={ref.description}
                onChange={(e) => {
                  const updated = [...references];
                  updated[index].description = e.target.value;
                  setReferences(updated);
                }}
              ></textarea>
            </div>
          </div>
        ))}
      </div>
      <div id="ref-buttons">
        <button type="button" onClick={addReference}>
          레퍼런스 추가 ➕
        </button>
        <button type="button" onClick={removeReference}>
          레퍼런스 제거 🗑️
        </button>
      </div>

      {modalVisible && (
        <div className="modal-overlay" style={{ display: "flex" }}>
          <div className="modal-content">
            <h2>링크 입력</h2>
            <input
              type="text"
              placeholder="유튜브 또는 사운드클라우드 URL"
              value={linkInput}
              onChange={(e) => setLinkInput(e.target.value)}
            />
            <div className="modal-buttons">
              <button onClick={confirmLink}>확인</button>
              <button onClick={() => setModalVisible(false)}>취소</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ReferenceInputs;
