import React from 'react'
import Cards from '../Cards/Cards'
import SelectBox from '../SelectBox/SelectBox'


export default function CardDetails() {
    let persons = [
        { pName: "Shumail", pImage: "src/assets/zhumail3.jpg", pDescription: "Sample"  , pAge:'21' , pDegree: 'BSE' , pProfession: 'Developer'},
        { pName: "Shariq", pImage: "src/assets/zhariq.jpg", pDescription: 'Sample' , pAge:'22' , pDegree: 'BSE' , pProfession: 'Developer' },
    ]

    return (
        <div className="cardContainer">
            <div className="cardLayout">
                <Cards
                    img={persons[0].pImage}
                    name={persons[0].pName}
                    description={persons[0].pDescription}
                />

                <Cards
                    img={persons[1].pImage}
                    name={persons[1].pName}
                    description={persons[1].pDescription}
                />

            </div>

            <div className="selectBoxArea">
                <SelectBox
                    person1={persons[0]}
                    person2={persons[1]}

                />
            </div>

        </div>
    )

}