import { useRouter } from "next/router";
import ReactHtmlParser from "react-html-parser";
import Head from "next/head";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import loading from "../public/assets/img/loading.gif";
// import Head from 'next/head'

const HealthDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  var healthDetailsList = [
    {
      id: 1,
      title: "Diabetes care",
      description:
        "Diabetes is the name given to a group of different conditions in which the body cannot maintain healthy levels of glucose (a type of sugar) in the blood. Glucose builds up in the blood leading to high blood glucose levels which cause the health problems linked to diabetes. <br /><br />There are two main types of diabetes:<br /><br />### Type 1 diabetes: <br />Where the body doesn't produce enough insulin, or the body's cells don't react to insulin.",
      symptom:
        "The main symptoms of diabetes are:<br /> <ol><li>Feeling very thirsty.</li><li>Urinating more frequently than usual, particularly at night.</li><li>Weight loss and loss of muscle bulk.</li><li>Feeling very tired.</li><li>Itching around the penis or vagina, or frequent episodes of thrush.</li><li>Cuts or wounds that heal slowly.</li><li>Blurred vision.</li></ol><br />Type 1 diabetes can develop quickly over weeks or even days.<br />Many people have type 2 diabetes for years without realising because the early symptoms tend to be general.  ",
      home_remedies:
        "<ol><li>Monitor your blood sugar regularly.</li><li>You may use sugar substitutes appropriate for diabetes.</li></ol>",
      expect:
        "<ol><li>Diabetes is not a curable condition. However it can be managed with medications, insulin and self care. </li><li>To diagnose the condition the doctor will need to know your medical history, symptoms and conduct a physical examination.You may also need tests such as blood test and oral glucose tolerance test.</li></ol>",
      nutrition:
        "<ol><li>Take a balanced diabetic diet containing plenty of whole grains, fruits and vegetables.</li><li>Avoid foods containing saturated fats.</li><li>Avoid processed foods and foods containing carbohydrates.</li><li>Drink plenty of fluids.</li></ol>",
      life_style:
        "<ol><li>Maintain healthy body weight by regular moderate exercise. </li><li>Reduce alcohol intake.</li><li>Quit smoking.</li><li>Get adequate rest and sleep.</li><li>Manage stress with relaxation techniques such as yoga and meditation.</li><li>Consult your doctor for regular medical check up including eye examination.</li></ol>",
      FAQs: "<h5>What is the cause of diabetes?</h5>Common causes for diabetes are inactive lifestyle, irregular and junk eating habits, overweight, obesity and age over 45 years . <br /><h5>What is the outcome of the disease?</h5>Diabetes is a progressive disease which can be controlled by medication and lifestyle modifications. If untreated or uncontrolled it can lead to related health problems can be severe including blindness, kidney disease, heart disease, nerve damage, paralysis of one side of body, infection , poor healing of wounds leading to complete removal of limb or part of a limb.<br /><h5>Are there any lifestyle modifications that I need?</h5>Lifestyle modifications form a very essential part of diabetes. One may eat low starchy, low sugary food items, taking short frequent meals maybe help in better digestion. Keeping yourself hydrated and physically fit by doing basic exercises like walking, jogging, stretching, yoga and meditation. Also, checking blood sugar levels regularly to keep a track of diabetes may be helpful.<br /><h5>How do I prevent this from happening again?</h5>Diabetes can't be prevented but treatment and lifestyle changes can prevent worsening of condition.",
    },
    {
      id: 2,
      title: "Polycystic ovarian syndrome (PCOS) care",
      description:
        "Polycystic ovary syndrome (PCOS) is a common condition that affects how a woman’s ovaries work. It is a hormonal disorder causing enlarged ovaries with small cysts on the outer edges. The three main features of PCOS are:<br /><br />There are two main types of diabetes:<br /><br /><ol><li>Ovaries don't regularly release eggs (ovulation).</li><li>High levels of male hormonesin your body.</li><li>Your ovaries become enlarged and contain many fluid-filled sacs (follicles) which surround the eggs.</li></ol>",
      symptom:
        "Signs and symptoms of PCOS usually become apparent during your late teens or early twenties. They include:<br /> <ol><li>Menstrual irregularity-irregular periods or no periods at all.</li><li>Difficulty getting pregnant as a result of irregular ovulation or failure to ovulate (infertility).</li><li>Excessive hair growth (hirsutism) – usually on the face, chest, back or buttocks.</li><li>Weight gain.</li><li>Thinning hair and hair loss from the head.</li><li>Oily skin or acne.</li></ol>",
      home_remedies: "You may try taking vitamin D  supplements.",
      expect:
        "<ol><li>PCOS is not a curable condition. However its symptoms can be managed with medications and hormonal therapies.</li><li>To diagnose the condition the doctor will need to know your medical history, symptoms and conduct a physical and pelvic examination.You may also need tests such as blood test and ultrasound.</li></ol>",
      nutrition:
        "<ol><li>Take a balanced low calorie diet containing whole grains, fruits and vegetables.</li><li>Avoid fatty foods and processed foods.</li><li>Reduce carbohydrate intake.</li></ol>",
      life_style:
        "<ol><li>Exercise regularly to maintain healthy body weight.</li></ol>",
      FAQs: "<h5>What is the cause of this condition?</h5>It is caused by the hormonal imbalance causing development of cysts in ovary.<br /><h5>What is the outcome of the disease?</h5>Outcome is good if treated and well controlled, if left untreated may lead to problems with fertility, acne, hirsutism and weight gain.<br /><h5>Are there any lifestyle modifications that I need?</h5>You should lose weight. You should follow up with your doctor.",
    },
    {
      id: 3,
      title: "Heart attack care",
      description:
        "Diabetes is the name given to a group of different conditions in which the body cannot maintain healthy levels of glucose (a type of sugar) in the blood. Glucose builds up in the blood leading to high blood glucose levels which cause the health problems linked to diabetes. <br /><br />There are two main types of diabetes:<br /><br />### Type 1 diabetes: <br />Where the body doesn't produce enough insulin, or the body's cells don't react to insulin.",
      symptom:
        "The main symptoms of diabetes are:<br /> <ol><li>Feeling very thirsty.</li><li>Urinating more frequently than usual, particularly at night.</li><li>Weight loss and loss of muscle bulk.</li><li>Feeling very tired.</li><li>Itching around the penis or vagina, or frequent episodes of thrush.</li><li>Cuts or wounds that heal slowly.</li><li>Blurred vision.</li></ol><br />Type 1 diabetes can develop quickly over weeks or even days.<br />Many people have type 2 diabetes for years without realising because the early symptoms tend to be general.  ",
      home_remedies:
        "<ol><li>Monitor your blood sugar regularly.</li><li>You may use sugar substitutes appropriate for diabetes.</li></ol>",
      expect:
        "<ol><li>Diabetes is not a curable condition. However it can be managed with medications, insulin and self care. </li><li>To diagnose the condition the doctor will need to know your medical history, symptoms and conduct a physical examination.You may also need tests such as blood test and oral glucose tolerance test.</li></ol>",
      nutrition:
        "<ol><li>Take a balanced diabetic diet containing plenty of whole grains, fruits and vegetables.</li><li>Avoid foods containing saturated fats.</li><li>Avoid processed foods and foods containing carbohydrates.</li><li>Drink plenty of fluids.</li></ol>",
      life_style:
        "<ol><li>Maintain healthy body weight by regular moderate exercise. </li><li>Reduce alcohol intake.</li><li>Quit smoking.</li><li>Get adequate rest and sleep.</li><li>Manage stress with relaxation techniques such as yoga and meditation.</li><li>Consult your doctor for regular medical check up including eye examination.</li></ol>",
      FAQs: "<h5>What is the cause of diabetes?</h5>Common causes for diabetes are inactive lifestyle, irregular and junk eating habits, overweight, obesity and age over 45 years . <br /><h5>What is the outcome of the disease?</h5>Diabetes is a progressive disease which can be controlled by medication and lifestyle modifications. If untreated or uncontrolled it can lead to related health problems can be severe including blindness, kidney disease, heart disease, nerve damage, paralysis of one side of body, infection , poor healing of wounds leading to complete removal of limb or part of a limb.<br /><h5>Are there any lifestyle modifications that I need?</h5>Lifestyle modifications form a very essential part of diabetes. One may eat low starchy, low sugary food items, taking short frequent meals maybe help in better digestion. Keeping yourself hydrated and physically fit by doing basic exercises like walking, jogging, stretching, yoga and meditation. Also, checking blood sugar levels regularly to keep a track of diabetes may be helpful.<br /><h5>How do I prevent this from happening again?</h5>Diabetes can't be prevented but treatment and lifestyle changes can prevent worsening of condition.",
    },
    {
      id: 4,
      title: "Stoke care",
      description:
        "Diabetes is the name given to a group of different conditions in which the body cannot maintain healthy levels of glucose (a type of sugar) in the blood. Glucose builds up in the blood leading to high blood glucose levels which cause the health problems linked to diabetes. <br /><br />There are two main types of diabetes:<br /><br />### Type 1 diabetes: <br />Where the body doesn't produce enough insulin, or the body's cells don't react to insulin.",
      symptom:
        "The main symptoms of diabetes are:<br /> <ol><li>Feeling very thirsty.</li><li>Urinating more frequently than usual, particularly at night.</li><li>Weight loss and loss of muscle bulk.</li><li>Feeling very tired.</li><li>Itching around the penis or vagina, or frequent episodes of thrush.</li><li>Cuts or wounds that heal slowly.</li><li>Blurred vision.</li></ol><br />Type 1 diabetes can develop quickly over weeks or even days.<br />Many people have type 2 diabetes for years without realising because the early symptoms tend to be general.  ",
      home_remedies:
        "<ol><li>Monitor your blood sugar regularly.</li><li>You may use sugar substitutes appropriate for diabetes.</li></ol>",
      expect:
        "<ol><li>Diabetes is not a curable condition. However it can be managed with medications, insulin and self care. </li><li>To diagnose the condition the doctor will need to know your medical history, symptoms and conduct a physical examination.You may also need tests such as blood test and oral glucose tolerance test.</li></ol>",
      nutrition:
        "<ol><li>Take a balanced diabetic diet containing plenty of whole grains, fruits and vegetables.</li><li>Avoid foods containing saturated fats.</li><li>Avoid processed foods and foods containing carbohydrates.</li><li>Drink plenty of fluids.</li></ol>",
      life_style:
        "<ol><li>Maintain healthy body weight by regular moderate exercise. </li><li>Reduce alcohol intake.</li><li>Quit smoking.</li><li>Get adequate rest and sleep.</li><li>Manage stress with relaxation techniques such as yoga and meditation.</li><li>Consult your doctor for regular medical check up including eye examination.</li></ol>",
      FAQs: "<h5>What is the cause of diabetes?</h5>Common causes for diabetes are inactive lifestyle, irregular and junk eating habits, overweight, obesity and age over 45 years . <br /><h5>What is the outcome of the disease?</h5>Diabetes is a progressive disease which can be controlled by medication and lifestyle modifications. If untreated or uncontrolled it can lead to related health problems can be severe including blindness, kidney disease, heart disease, nerve damage, paralysis of one side of body, infection , poor healing of wounds leading to complete removal of limb or part of a limb.<br /><h5>Are there any lifestyle modifications that I need?</h5>Lifestyle modifications form a very essential part of diabetes. One may eat low starchy, low sugary food items, taking short frequent meals maybe help in better digestion. Keeping yourself hydrated and physically fit by doing basic exercises like walking, jogging, stretching, yoga and meditation. Also, checking blood sugar levels regularly to keep a track of diabetes may be helpful.<br /><h5>How do I prevent this from happening again?</h5>Diabetes can't be prevented but treatment and lifestyle changes can prevent worsening of condition.",
    },
    {
      id: 5,
      title: "Asthma care",
      description:
        "Diabetes is the name given to a group of different conditions in which the body cannot maintain healthy levels of glucose (a type of sugar) in the blood. Glucose builds up in the blood leading to high blood glucose levels which cause the health problems linked to diabetes. <br /><br />There are two main types of diabetes:<br /><br />### Type 1 diabetes: <br />Where the body doesn't produce enough insulin, or the body's cells don't react to insulin.",
      symptom:
        "The main symptoms of diabetes are:<br /> <ol><li>Feeling very thirsty.</li><li>Urinating more frequently than usual, particularly at night.</li><li>Weight loss and loss of muscle bulk.</li><li>Feeling very tired.</li><li>Itching around the penis or vagina, or frequent episodes of thrush.</li><li>Cuts or wounds that heal slowly.</li><li>Blurred vision.</li></ol><br />Type 1 diabetes can develop quickly over weeks or even days.<br />Many people have type 2 diabetes for years without realising because the early symptoms tend to be general.  ",
      home_remedies:
        "<ol><li>Monitor your blood sugar regularly.</li><li>You may use sugar substitutes appropriate for diabetes.</li></ol>",
      expect:
        "<ol><li>Diabetes is not a curable condition. However it can be managed with medications, insulin and self care. </li><li>To diagnose the condition the doctor will need to know your medical history, symptoms and conduct a physical examination.You may also need tests such as blood test and oral glucose tolerance test.</li></ol>",
      nutrition:
        "<ol><li>Take a balanced diabetic diet containing plenty of whole grains, fruits and vegetables.</li><li>Avoid foods containing saturated fats.</li><li>Avoid processed foods and foods containing carbohydrates.</li><li>Drink plenty of fluids.</li></ol>",
      life_style:
        "<ol><li>Maintain healthy body weight by regular moderate exercise. </li><li>Reduce alcohol intake.</li><li>Quit smoking.</li><li>Get adequate rest and sleep.</li><li>Manage stress with relaxation techniques such as yoga and meditation.</li><li>Consult your doctor for regular medical check up including eye examination.</li></ol>",
      FAQs: "<h5>What is the cause of diabetes?</h5>Common causes for diabetes are inactive lifestyle, irregular and junk eating habits, overweight, obesity and age over 45 years . <br /><h5>What is the outcome of the disease?</h5>Diabetes is a progressive disease which can be controlled by medication and lifestyle modifications. If untreated or uncontrolled it can lead to related health problems can be severe including blindness, kidney disease, heart disease, nerve damage, paralysis of one side of body, infection , poor healing of wounds leading to complete removal of limb or part of a limb.<br /><h5>Are there any lifestyle modifications that I need?</h5>Lifestyle modifications form a very essential part of diabetes. One may eat low starchy, low sugary food items, taking short frequent meals maybe help in better digestion. Keeping yourself hydrated and physically fit by doing basic exercises like walking, jogging, stretching, yoga and meditation. Also, checking blood sugar levels regularly to keep a track of diabetes may be helpful.<br /><h5>How do I prevent this from happening again?</h5>Diabetes can't be prevented but treatment and lifestyle changes can prevent worsening of condition.",
    },
    {
      id: 6,
      title: "Dengue fever care",
      description:
        "Diabetes is the name given to a group of different conditions in which the body cannot maintain healthy levels of glucose (a type of sugar) in the blood. Glucose builds up in the blood leading to high blood glucose levels which cause the health problems linked to diabetes. <br /><br />There are two main types of diabetes:<br /><br />### Type 1 diabetes: <br />Where the body doesn't produce enough insulin, or the body's cells don't react to insulin.",
      symptom:
        "The main symptoms of diabetes are:<br /> <ol><li>Feeling very thirsty.</li><li>Urinating more frequently than usual, particularly at night.</li><li>Weight loss and loss of muscle bulk.</li><li>Feeling very tired.</li><li>Itching around the penis or vagina, or frequent episodes of thrush.</li><li>Cuts or wounds that heal slowly.</li><li>Blurred vision.</li></ol><br />Type 1 diabetes can develop quickly over weeks or even days.<br />Many people have type 2 diabetes for years without realising because the early symptoms tend to be general.  ",
      home_remedies:
        "<ol><li>Monitor your blood sugar regularly.</li><li>You may use sugar substitutes appropriate for diabetes.</li></ol>",
      expect:
        "<ol><li>Diabetes is not a curable condition. However it can be managed with medications, insulin and self care. </li><li>To diagnose the condition the doctor will need to know your medical history, symptoms and conduct a physical examination.You may also need tests such as blood test and oral glucose tolerance test.</li></ol>",
      nutrition:
        "<ol><li>Take a balanced diabetic diet containing plenty of whole grains, fruits and vegetables.</li><li>Avoid foods containing saturated fats.</li><li>Avoid processed foods and foods containing carbohydrates.</li><li>Drink plenty of fluids.</li></ol>",
      life_style:
        "<ol><li>Maintain healthy body weight by regular moderate exercise. </li><li>Reduce alcohol intake.</li><li>Quit smoking.</li><li>Get adequate rest and sleep.</li><li>Manage stress with relaxation techniques such as yoga and meditation.</li><li>Consult your doctor for regular medical check up including eye examination.</li></ol>",
      FAQs: "<h5>What is the cause of diabetes?</h5>Common causes for diabetes are inactive lifestyle, irregular and junk eating habits, overweight, obesity and age over 45 years . <br /><h5>What is the outcome of the disease?</h5>Diabetes is a progressive disease which can be controlled by medication and lifestyle modifications. If untreated or uncontrolled it can lead to related health problems can be severe including blindness, kidney disease, heart disease, nerve damage, paralysis of one side of body, infection , poor healing of wounds leading to complete removal of limb or part of a limb.<br /><h5>Are there any lifestyle modifications that I need?</h5>Lifestyle modifications form a very essential part of diabetes. One may eat low starchy, low sugary food items, taking short frequent meals maybe help in better digestion. Keeping yourself hydrated and physically fit by doing basic exercises like walking, jogging, stretching, yoga and meditation. Also, checking blood sugar levels regularly to keep a track of diabetes may be helpful.<br /><h5>How do I prevent this from happening again?</h5>Diabetes can't be prevented but treatment and lifestyle changes can prevent worsening of condition.",
    },
    {
      id: 7,
      title: "Tuberculosis care",
      description:
        "Diabetes is the name given to a group of different conditions in which the body cannot maintain healthy levels of glucose (a type of sugar) in the blood. Glucose builds up in the blood leading to high blood glucose levels which cause the health problems linked to diabetes. <br /><br />There are two main types of diabetes:<br /><br />### Type 1 diabetes: <br />Where the body doesn't produce enough insulin, or the body's cells don't react to insulin.",
      symptom:
        "The main symptoms of diabetes are:<br /> <ol><li>Feeling very thirsty.</li><li>Urinating more frequently than usual, particularly at night.</li><li>Weight loss and loss of muscle bulk.</li><li>Feeling very tired.</li><li>Itching around the penis or vagina, or frequent episodes of thrush.</li><li>Cuts or wounds that heal slowly.</li><li>Blurred vision.</li></ol><br />Type 1 diabetes can develop quickly over weeks or even days.<br />Many people have type 2 diabetes for years without realising because the early symptoms tend to be general.  ",
      home_remedies:
        "<ol><li>Monitor your blood sugar regularly.</li><li>You may use sugar substitutes appropriate for diabetes.</li></ol>",
      expect:
        "<ol><li>Diabetes is not a curable condition. However it can be managed with medications, insulin and self care. </li><li>To diagnose the condition the doctor will need to know your medical history, symptoms and conduct a physical examination.You may also need tests such as blood test and oral glucose tolerance test.</li></ol>",
      nutrition:
        "<ol><li>Take a balanced diabetic diet containing plenty of whole grains, fruits and vegetables.</li><li>Avoid foods containing saturated fats.</li><li>Avoid processed foods and foods containing carbohydrates.</li><li>Drink plenty of fluids.</li></ol>",
      life_style:
        "<ol><li>Maintain healthy body weight by regular moderate exercise. </li><li>Reduce alcohol intake.</li><li>Quit smoking.</li><li>Get adequate rest and sleep.</li><li>Manage stress with relaxation techniques such as yoga and meditation.</li><li>Consult your doctor for regular medical check up including eye examination.</li></ol>",
      FAQs: "<h5>What is the cause of diabetes?</h5>Common causes for diabetes are inactive lifestyle, irregular and junk eating habits, overweight, obesity and age over 45 years . <br /><h5>What is the outcome of the disease?</h5>Diabetes is a progressive disease which can be controlled by medication and lifestyle modifications. If untreated or uncontrolled it can lead to related health problems can be severe including blindness, kidney disease, heart disease, nerve damage, paralysis of one side of body, infection , poor healing of wounds leading to complete removal of limb or part of a limb.<br /><h5>Are there any lifestyle modifications that I need?</h5>Lifestyle modifications form a very essential part of diabetes. One may eat low starchy, low sugary food items, taking short frequent meals maybe help in better digestion. Keeping yourself hydrated and physically fit by doing basic exercises like walking, jogging, stretching, yoga and meditation. Also, checking blood sugar levels regularly to keep a track of diabetes may be helpful.<br /><h5>How do I prevent this from happening again?</h5>Diabetes can't be prevented but treatment and lifestyle changes can prevent worsening of condition.",
    },
    {
      id: 8,
      title: "Chronic kidney disease care",
      description:
        "Diabetes is the name given to a group of different conditions in which the body cannot maintain healthy levels of glucose (a type of sugar) in the blood. Glucose builds up in the blood leading to high blood glucose levels which cause the health problems linked to diabetes. <br /><br />There are two main types of diabetes:<br /><br />### Type 1 diabetes: <br />Where the body doesn't produce enough insulin, or the body's cells don't react to insulin.",
      symptom:
        "The main symptoms of diabetes are:<br /> <ol><li>Feeling very thirsty.</li><li>Urinating more frequently than usual, particularly at night.</li><li>Weight loss and loss of muscle bulk.</li><li>Feeling very tired.</li><li>Itching around the penis or vagina, or frequent episodes of thrush.</li><li>Cuts or wounds that heal slowly.</li><li>Blurred vision.</li></ol><br />Type 1 diabetes can develop quickly over weeks or even days.<br />Many people have type 2 diabetes for years without realising because the early symptoms tend to be general.  ",
      home_remedies:
        "<ol><li>Monitor your blood sugar regularly.</li><li>You may use sugar substitutes appropriate for diabetes.</li></ol>",
      expect:
        "<ol><li>Diabetes is not a curable condition. However it can be managed with medications, insulin and self care. </li><li>To diagnose the condition the doctor will need to know your medical history, symptoms and conduct a physical examination.You may also need tests such as blood test and oral glucose tolerance test.</li></ol>",
      nutrition:
        "<ol><li>Take a balanced diabetic diet containing plenty of whole grains, fruits and vegetables.</li><li>Avoid foods containing saturated fats.</li><li>Avoid processed foods and foods containing carbohydrates.</li><li>Drink plenty of fluids.</li></ol>",
      life_style:
        "<ol><li>Maintain healthy body weight by regular moderate exercise. </li><li>Reduce alcohol intake.</li><li>Quit smoking.</li><li>Get adequate rest and sleep.</li><li>Manage stress with relaxation techniques such as yoga and meditation.</li><li>Consult your doctor for regular medical check up including eye examination.</li></ol>",
      FAQs: "<h5>What is the cause of diabetes?</h5>Common causes for diabetes are inactive lifestyle, irregular and junk eating habits, overweight, obesity and age over 45 years . <br /><h5>What is the outcome of the disease?</h5>Diabetes is a progressive disease which can be controlled by medication and lifestyle modifications. If untreated or uncontrolled it can lead to related health problems can be severe including blindness, kidney disease, heart disease, nerve damage, paralysis of one side of body, infection , poor healing of wounds leading to complete removal of limb or part of a limb.<br /><h5>Are there any lifestyle modifications that I need?</h5>Lifestyle modifications form a very essential part of diabetes. One may eat low starchy, low sugary food items, taking short frequent meals maybe help in better digestion. Keeping yourself hydrated and physically fit by doing basic exercises like walking, jogging, stretching, yoga and meditation. Also, checking blood sugar levels regularly to keep a track of diabetes may be helpful.<br /><h5>How do I prevent this from happening again?</h5>Diabetes can't be prevented but treatment and lifestyle changes can prevent worsening of condition.",
    },
  ];

  if (id) {
    return (
      <>
        <Head>
          <title>{healthDetailsList[id - 1].title} -- Shafa Care</title>
          <meta
            name="keyboard"
            content="Shafa Care, Online Doctor,Medical Help,Online Medical Help, Health Assisstant"
          />
        </Head>
        <Navbar />
        <section className="health_details pt-100">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h3 className="text-center mb-4">
                  {healthDetailsList[id - 1].title}
                </h3>
                <div className="health_card d-flex flex-column">
                  <h4>Description</h4>
                  <div>
                    <hr />
                  </div>
                  <p>
                    {ReactHtmlParser(healthDetailsList[id - 1].description)}
                  </p>
                </div>
                <div className="health_card d-flex flex-column">
                  <h4>Symptom</h4>
                  <div>
                    <hr />
                  </div>
                  <p>{ReactHtmlParser(healthDetailsList[id - 1].symptom)}</p>
                </div>

                <div className="health_card d-flex flex-column">
                  <h4>Home remedies</h4>
                  <div>
                    <hr />
                  </div>
                  <p>
                    {ReactHtmlParser(healthDetailsList[id - 1].home_remedies)}
                  </p>
                </div>

                <div className="health_card d-flex flex-column">
                  <h4>What to expect</h4>
                  <div>
                    <hr />
                  </div>
                  <p>{ReactHtmlParser(healthDetailsList[id - 1].expect)}</p>
                </div>
                <div className="health_card d-flex flex-column">
                  <h4>Nutrition</h4>
                  <div>
                    <hr />
                  </div>
                  <p>{ReactHtmlParser(healthDetailsList[id - 1].nutrition)}</p>
                </div>

                <div className="health_card d-flex flex-column">
                  <h4>Lifestyle</h4>
                  <div>
                    <hr />
                  </div>
                  <p>{ReactHtmlParser(healthDetailsList[id - 1].life_style)}</p>
                </div>
                <div className="health_card d-flex flex-column">
                  <h4>FAQs</h4>
                  <div>
                    <hr />
                  </div>
                  <p>{ReactHtmlParser(healthDetailsList[id - 1].FAQs)}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  } else
    return (
      <>
        <div className="pre__loader">
          <img src={loading} alt="pre loader" />
        </div>
      </>
    );
};

export default HealthDetails;
