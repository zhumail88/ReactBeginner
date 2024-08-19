import React, { useState } from 'react'
import './SelectBox.css'

export default function SelectBox({ person1, person2 }) {
  const [selectedPerson, setSelectedPerson] = useState("");


  const handleInformation = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === person1.pName) {
      setSelectedPerson(person1);
    } else if (selectedValue === person2.pName) {
      setSelectedPerson(person2);
    }
  }

  return (

    <div className="selectBoxMainDiv">
      <div className="selectBox">
        <p>Choose the person whose details you want? </p>

        <label>

          <input
            type="radio"
            name="option"
            value={person1.pName}
            checked={selectedPerson.pName === person1.pName}
            onChange={handleInformation}

          />
          {person1.pName}
        </label>
        <label>
          <input
            type="radio"
            name="option"
            value={person2.pName}
            checked={selectedPerson.pName === person2.pName}
            onChange={handleInformation}
          />
          {person2.pName}
        </label>

      </div>

      <div className="displayInfo">
        {selectedPerson &&
          (
            <>
              <p>Name : {selectedPerson.pName}</p>
              <p>Age : {selectedPerson.pAge}</p>
              <p>Degree : {selectedPerson.pDegree}</p>
              <p>Profession : {selectedPerson.pProfession}</p>

            </>)}

      </div>
    </div>
  )
}
