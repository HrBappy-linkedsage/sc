import React, { useState } from 'react'

export default function FAQs() {
    const [showArrow1, setShowArrow1] = useState(true);
    const [showArrow2, setShowArrow2] = useState(true);
    const [showArrow3, setShowArrow3] = useState(true);
    const [showArrow4, setShowArrow4] = useState(true);

    return (
        <div className="row">
            <div className="col-md-12">
                <h3 className="mb-5">FAQs</h3>
            </div>

            <div className="faqs_section col-md-12">
                <div id="accordion">
                    <div className="card w-100">
                        <div className="card-header shadow-sm w-100" id="headingOne">
                            <h5 className="m-0 w-100">
                                <button className="btn btn-link w-100" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" onClick={() => { setShowArrow1(!showArrow1); setShowArrow2(true); setShowArrow3(true); setShowArrow4(true) }}>
                                    <p className="tx-left">Why do I need a health checkup?</p>
                                    <p className="text-righ">{showArrow1 ? <i className="fas fa-angle-down" /> : <i className="fas fa-angle-up" />}</p>
                                </button>
                            </h5>
                        </div>

                        <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                            <div className="card-body">
                                A timely medical checkup helps in ensuring that your health is in track and detect any early signs of medical conditions that may be
                                life-threatening in the long run. Early diagnosis through a full body checkup increases your
                                chances of effective treatment and cure. It also helps in reducing heavy medical expenses in
                                the future.
                            </div>
                        </div>
                    </div>
                    <div className="card mt_-1">
                        <div className="card-header shadow-sm" id="headingTwo">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" onClick={() => { setShowArrow2(!showArrow2); setShowArrow1(true); setShowArrow3(true); setShowArrow4(true) }}>
                                    <p>How often should I get a health checkup?</p>
                                    <p className="float-righ">{showArrow2 ? <i className="fas fa-angle-down" /> : <i className="fas fa-angle-up" />}</p>
                                </button>
                            </h5>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                            <div className="card-body">
                                In general, it is best to opt for a full body checkup every year after
                                you’ve crossed the age of 30. You can also take up a full body exam if you are currently
                                having a stressful or hectic day-to-day routine and exhibit early symptoms of various
                                lifestyle diseases. A medical checkup will help assess hereditary
                                illnesses and the development of any pre-existing disease.
                            </div>
                        </div>
                    </div>
                    <div className="card mt_-1">
                        <div className="card-header shadow-sm" id="headingThree">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" onClick={() => { setShowArrow3(!showArrow3); setShowArrow2(true); setShowArrow1(true); setShowArrow4(true) }}>
                                    <p>How do regular health checkups benefit me?</p>
                                    <p className="float-righ">{showArrow3 ? <i className="fas fa-angle-down" /> : <i className="fas fa-angle-up" />}</p>
                                </button>
                            </h5>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                            <div className="card-body">
                                Apart from the relief that you are in the pink of health, regular full body tests offer the following benefits:<br /><br />
                                <ul>
                                    <li><span>Early diagnosis of diseases: </span> With heart attacks and cancer being a few of the common causes of death in individuals, it is always better to opt for
                                        preventive health checkups on an annual basis. Not only will this increase the chances for survival for the individual, but it will also help in reducing the course of treatment. </li>

                                    <li><span>Subsidized medical costs: </span>A shorter duration of treatment due to the early diagnosis of a disease will automatically
                                        contribute to subsidized medical expenses. A regular health screening will also offer the incomparable
                                        benefit of knowing you are in sound health – which is priceless.</li>

                                    <li><span>Variety of tests included: </span>A health screening or full body checkup includes a variety of blood tests that check for a plethora of diseases. From diabetes,
                                        cancer and anemia to high blood pressure and other cardiovascular diseases, you will be checked for all conditions. </li>

                                    <li><span>Functioning of body organs: </span>A regular health screening or annual doctor checkup also ensures the sound functioning of vital body organs including the heart, lungs, thyroid and liver.</li>

                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="card mt_-1">
                        <div className="card-header shadow-sm" id="headingThree">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree" onClick={() => { setShowArrow4(!showArrow4); setShowArrow2(true); setShowArrow3(true); setShowArrow1(true) }}>
                                    <p>What are the types of health checkups?</p>
                                    <p className="float-righ">{showArrow4 ? <i className="fas fa-angle-down" /> : <i className="fas fa-angle-up" />}</p>
                                </button>
                            </h5>
                        </div>
                        <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                            <div className="card-body">
                                There are a variety of health checkups available as per the symptoms you exhibit and the various lifestyle habits you indulge in. Following are the broad health packages you can opt for:<br /><br />
                                <ul>
                                    <li><span>Full body check: </span> This is the best type of health checkup that can be taken up on an annual basis. You can choose from advanced full body checkup for men, advanced full
                                        body checkup for women, a full body check of 50+ tests or a basic full body check of 35 tests.</li>

                                    <li><span>Conditions health packages: </span>These health packages are best taken when you exhibit early symptoms of common diseases. Conditions health packages also include risk assessments
                                        that check if you are at the risk of getting a particular disease. A few of the common condition health packages include thyroid care, diabetes screening, full blood count, and vitamin D test, etc.</li>

                                    <li><span>Lifestyle health packages: </span>With the rise in hectic work schedules and pollution levels, many individuals are prone to lifestyle diseases that need to be diagnosed immediately for effective
                                        treatment. The most common lifestyle health packages include cardiac risk assessment, obesity risk, stress assessment, and alcohol risk assessment, etc.</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}