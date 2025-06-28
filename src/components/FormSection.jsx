// src/components/FormSection.jsx
import React from "react";
import GenreSelector from "./GenreSelector";
import FileUploader from "./FildUploader";
import ExplainFields from "./ExplainFields";
import ReferenceInputs from "./ReferenceInputs";
import ExtraOpinion from "./ExtraOpinion";

function FormSection({
  activeGenre,
  setActiveGenre,
  title,
  setTitle,
  onOpenModal,
  setLinkInput,
}) {
  return (
    <section id="bd-2">
      <div className="container">
        <div id="bd-2-wrap">
          <GenreSelector
            activeGenre={activeGenre}
            setActiveGenre={setActiveGenre}
          />
          <FileUploader />
          <ExplainFields
            title={title}
            setTitle={setTitle}
          />
          <ReferenceInputs onOpenModal={onOpenModal} setLinkInput={setLinkInput} />
          <ExtraOpinion />
        </div>
      </div>
    </section>
  );
}

export default FormSection;