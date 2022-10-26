import React, { useState } from "react";
import Indicator from "./Indicator/Indicator";
import CardBegin from "./Infos/CardBegin";
import CardEnd from "./Infos/CardEnd";
import DietForm from "./SubForms/DietForm";
import FoodStyle from "./SubForms/FoodStyle";
import Allergies from "./SubForms/Allergies";
import HateLove from "./SubForms/HateLove";
import "./MultiForm.css";

export default function MultiForm() {
  const [formIndex, setFormIndex] = useState(1);
  const [allFormData, setAllFormData] = useState({
    dietForm: "",
    foodStyle: [],
    allergies: [],
    prefs: {},
  });

  const modifyIndex = (index, data) => {
    setFormIndex(index);

    if (data) {
      // Copie de notre objet allFormData
      const newData = { ...allFormData };
      // Object.keys = renvoie un tableau avec les propriétés de l'objet
      // on prend la 1ere propriété de l'objet data qu'on reçoit (dietForm)
      const firstPropNewData = Object.keys(data)[0];
      // l'objet qu'on a copié "dietForm" est égal au "dietForm" venant de l'obejt data (de DietForm.js)
      newData[firstPropNewData] = data[firstPropNewData];
      setAllFormData(newData);
    }
  };

  console.log(allFormData);

  const elements = [
    <CardBegin modifyIndex={modifyIndex} />,
    <DietForm modifyIndex={modifyIndex} />,
    <FoodStyle modifyIndex={modifyIndex} />,
    <Allergies modifyIndex={modifyIndex} />,
    <HateLove modifyIndex={modifyIndex} />,
    <CardEnd modifyIndex={modifyIndex} />,
  ];

  return (
    <div className="container-multiform">
      {/* passé formIndex pour animer l'indicator */}
      <Indicator formIndex={formIndex}></Indicator>

      {elements.map((item, index) => {
        if (index + 1 === formIndex) {
          return elements[index];
        }
      })}

      {/* {formIndex === 1 ? <CardBegin modifyIndex={modifyIndex} /> 
      : formIndex === 2 ? <DietForm modifyIndex={modifyIndex} /> 
      : formIndex === 3 ? <FoodStyle modifyIndex={modifyIndex} /> 
      : formIndex === 4 ? <Allergies modifyIndex={modifyIndex} /> 
      : formIndex === 5 ? <HateLove modifyIndex={modifyIndex} /> 
      : formIndex === 6 ? <CardEnd modifyIndex={modifyIndex} /> 
      : ""} */}
    </div>
  );
}
