import React from 'react'
import Cards from '../Cards/Cards'
import SelectBox from '../SelectBox/SelectBox'


export default function HomePage() {
    let persons = [
        {
            pName: "Shumail", pImage: "src/assets/zhumail3.jpg", pDescription: "I am a Bachelor's student in Software Engineering currently in my 5th semester. I’m actively learning React and working on various front-end projects, including a task management application and a project involving dynamic content display.I am currently working on diverse projects.",
            pAge: '21', pDegree: 'BSE', pProfession: 'Developer'
        },

        {
            pName: "Shariq", pImage: "src/assets/zhariq.jpg", pDescription: 'pursuing a Bachelor of Business Administration (BBA), where they are focused on gaining comprehensive knowledge in business management, marketing, and finance. They are dedicated to understanding core business concepts and developing strategic skills to excel in the dynamic field of business.',
            pAge: '22', pDegree: 'BBA', pProfession: 'CEO'
        },

        {
            pName: "Zafar", pImage: "src/assets/zhumail.jpg", pDescription: 'Passionate about technology and design, I am deeply engaged in exploring the latest trends in web development and user experience. With a keen interest in creating intuitive and visually compelling digital solutions, I am currently working on diverse projects that range from dynamic web applications.',
            pAge: '18', pDegree: 'BSE', pProfession: 'Student'
        },


    ]

    return (
        <>
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

                    <Cards
                        img={persons[2].pImage}
                        name={persons[2].pName}
                        description={persons[2].pDescription}
                    />

                </div>

                

            </div>

            <div className="selectBoxArea">
                <SelectBox
                    person1={persons[0]}
                    person2={persons[1]}
                    person3={persons[2]}

                />
            </div>

        </>

    )

}