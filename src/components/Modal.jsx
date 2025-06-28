// src/components/Modal.jsx
import React from "react";

function Modal({ visible, linkInput, onChange, onConfirm, onCancel }) {
  if (!visible) return null;

  return (
    <div id="link-modal" className="modal-overlay">
      <div className="modal-content">
        <h2>링크 입력</h2>
        <input
          type="text"
          id="link-input"
          placeholder="유튜브 또는 사운드클라우드 URL을 입력하세요"
          value={linkInput}
          onChange={onChange}
        />
        <div className="modal-buttons">
          <button id="link-confirm" onClick={onConfirm}>
            확인
          </button>
          <button id="link-cancel" onClick={onCancel}>
            취소
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
