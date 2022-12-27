import React from "react";
import "./Idea.scss";
import IdeaTabsGeneral from "./idea-general/IdeaTabsGeneral";
import SliderContainer from "./Slider";

export default function Idea() {
  return (
    <div className="wrapper wrapper--idea">
      <h1 className="base-title">Idea title</h1>

      <div className="idea-section">
        {/* Copyright */}
        <div className="idea-copy">
          <p>
            {new Date().getFullYear()} <span>&copy;</span> A. Tsiomakh
          </p>
        </div>
        <IdeaTabsGeneral />

        <SliderContainer />
      </div>
    </div>
  );
}
