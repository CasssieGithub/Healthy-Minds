// import { Formik, FormikConsumer } from "formik";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import "./GAD7Form.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";

const GAD7Form = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const account = useSelector((state: RootState) => state.auth.account);
  const userId = account?.id;

  const formik = useFormik({
    initialValues: {
      answer1: 0,
      answer2: 0,
      answer3: 0,
      answer4: 0,
      answer5: 0,
      answer6: 0,
      answer7: 0,
      userId: userId,
    },
    onSubmit: (values) => {
      const allValuesAddedTogether =
        +values.answer1 +
        +values.answer2 +
        +values.answer3 +
        +values.answer4 +
        +values.answer5 +
        +values.answer6 +
        +values.answer7;
      console.log(allValuesAddedTogether);
      axios
        .post("http://localhost:8000/api/GAD7Form", {
          ...values,
          Overallscore: allValuesAddedTogether,
          date: Date.now(),
        })
        .then((res) => {
          navigate("/Profile");
        });
      setLoading(true);
    },
    validationSchema: Yup.object({
      answer1: Yup.number().required("Answer Required"),
      answer2: Yup.number().required("Answer Required"),
      answer3: Yup.number().required("Answer Required"),
      answer4: Yup.number().required("Answer Required"),
      answer5: Yup.number().required("Answer Required"),
      answer6: Yup.number().required("Answer Required"),
      answer7: Yup.number().required("Answer Required"),
      userId: Yup.number().required("User Id Required"),
    }),
  });
  console.log(formik.errors);
  return (
    <div>
      <div className="linksOnFormsPage">
        <Link className="backToProfileBtnOnFormPage" to="/Profile">
          {" "}
          Back to Profile
        </Link>
        <Link className="homeBtnOnFormPage" to="/">
          Home
        </Link>
      </div>

      <div className="titleOnFormPage">GAD-7 Questionnaire</div>
      <form onSubmit={formik.handleSubmit} className="formsContainer">
        <div className="containsInstructionsForForm">
          <div>
            Over the last 2 weeks, how often have you been bothered
            <br /> by any of the following problems? (Use “✔” to indicate your
            answer)
          </div>
          <div className="containsAllCheckBoxes">
            <div className="checkboxRange"> Not at all</div>
            <div className="checkboxRange">Several days</div>
            <div className="checkboxRange">More than half the days</div>
            <div className="checkboxRange">Nearly every </div>
          </div>
        </div>
        <div className="formContainer">
          <div className="formQuestions">
            <div className="firstQuestionOnForm">
              <label htmlFor="answer1">
                {" "}
                1. Feeling nervous, anxious, or on edge{" "}
              </label>
            </div>
            <div className="checkboxesForFormContainer">
              <div className="holdingTheCheckboxes">
                <div>
                  <input
                    type="radio"
                    name="answer1"
                    value={0}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>

                <div>
                  <input
                    type="radio"
                    name="answer1"
                    value={1}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <div>
                  <input
                    type="radio"
                    name="answer1"
                    value={2}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <div>
                  <input
                    type="radio"
                    name="answer1"
                    value={3}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="formQuestions">
            <div className="firstQuestionOnForm">
              <label htmlFor="answer2">
                {" "}
                2. Not being able to stop or control worrying{" "}
              </label>
            </div>
            <div className="checkboxesForFormContainer">
              <div className="holdingTheCheckboxes">
                <div>
                  <input
                    type="radio"
                    name="answer2"
                    value={0}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <div>
                  <input
                    type="radio"
                    name="answer2"
                    value={1}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <div>
                  <input
                    type="radio"
                    name="answer2"
                    value={2}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <div>
                  <input
                    type="radio"
                    name="answer2"
                    value={3}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="formQuestions">
            <div className="firstQuestionOnForm">
              <label htmlFor="answer3">
                {" "}
                3. Worrying too much about different things{" "}
              </label>
            </div>
            <div className="checkboxesForFormContainer">
              <div className="holdingTheCheckboxes">
                <div>
                  <input
                    type="radio"
                    name="answer3"
                    value={0}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <div>
                  <input
                    type="radio"
                    name="answer3"
                    value={1}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <div>
                  <input
                    type="radio"
                    name="answer3"
                    value={2}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <div>
                  <input
                    type="radio"
                    name="answer3"
                    value={3}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="formQuestions">
            <div className="firstQuestionOnForm">
              <label htmlFor="answer4"> 4. Trouble relaxing </label>
            </div>
            <div className="checkboxesForFormContainer">
              <div className="holdingTheCheckboxes">
                <div>
                  <input
                    type="radio"
                    name="answer4"
                    value={0}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>

                <div>
                  <input
                    type="radio"
                    name="answer4"
                    value={1}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <div>
                  <input
                    type="radio"
                    name="answer4"
                    value={2}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <div>
                  <input
                    type="radio"
                    name="answer4"
                    value={3}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="formQuestions">
            <div className="firstQuestionOnForm">
              <label htmlFor="answer5">
                {" "}
                5. Being so restless that it's hard to sit still{" "}
              </label>
            </div>
            <div className="checkboxesForFormContainer">
              <div className="holdingTheCheckboxes">
                <div>
                  <input
                    type="radio"
                    name="answer5"
                    value={0}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <div>
                  <input
                    type="radio"
                    name="answer5"
                    value={1}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <div>
                  <input
                    type="radio"
                    name="answer5"
                    value={2}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <div>
                  <input
                    type="radio"
                    name="answer5"
                    value={3}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="formQuestions">
            <div className="firstQuestionOnForm">
              <label htmlFor="answer6">
                {" "}
                6. Becoming easily annoyed or Irritable{" "}
              </label>
            </div>
            <div className="checkboxesForFormContainer">
              <div className="holdingTheCheckboxes">
                <div>
                  <input
                    type="radio"
                    name="answer6"
                    value={0}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>

                <div>
                  <input
                    type="radio"
                    name="answer6"
                    value={1}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <div>
                  <input
                    type="radio"
                    name="answer6"
                    value={2}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <div>
                  <input
                    type="radio"
                    name="answer6"
                    value={3}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="formQuestions">
            <div className="firstQuestionOnForm">
              <label htmlFor="answer7">
                {" "}
                7. Feeling afraid as if something awful might happen{" "}
              </label>
            </div>
            <div className="checkboxesForFormContainer">
              <div className="holdingTheCheckboxes">
                <div>
                  <input
                    type="radio"
                    name="answer7"
                    value={0}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <div>
                  <input
                    type="radio"
                    name="answer7"
                    value={1}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <div>
                  <input
                    type="radio"
                    name="answer7"
                    value={2}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <div>
                  <input
                    type="radio"
                    name="answer7"
                    value={3}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="formQuestions">
            <div className="firstQuestionOnForm">
              <label htmlFor="questionsOnForm">
                {" "}
                8.. If you checked off any problem on this questionnaire so far,
                how difficult have these problems made it for you to do your
                work, take care of things at home, or get along with other
                people?{" "}
              </label>
            </div>
            <div className="checkboxesForFormContainer">
              <div className="holdingTheCheckboxes">
                <input
                  type="checkbox"
                  id="questionsOnForm"
                  name="questionsOnForm"
                  value="questionsOnForm"
                />

                <div>
                  <input type="checkbox" />
                </div>
                <div>
                  <input type="checkbox" />
                </div>
                <div>
                  <input type="checkbox" />
                </div>
              </div>
            </div>
          </div> */}
          <div className="btnContainer">
            <button
              className="submitBtnOnFormsPage"
              type="submit"
              disabled={loading}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default GAD7Form;
