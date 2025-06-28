// src/components/FileUploader.jsx
import React, { useState } from "react";

function FileUploader() {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file ? file.name : "");
  };

  return (
    <div id="upload">
      <div className="file-link-fiend">
        <input
          type="file"
          id="file-link"
          name="file-link"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        <label htmlFor="file-link" className="upload-label">
          <img src="/img/ico-fileupload.svg" alt="파일 업로드" className="upload-icon" />
          <span>파일 업로드</span>
        </label>
        <span id="file-name" className="file-name">
          {fileName}
        </span>
      </div>
    </div>
  );
}

export default FileUploader;
