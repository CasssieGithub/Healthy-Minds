import { Formik, FormikConsumer } from "formik";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import "./PHQ9Form.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";

const PHQ9Form = () => {
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
      answer8: 0,
      answer9: 0,
      userId: userId,
    },
    onSubmit: (values) => {
      // add overall score here
      // need to change value to number versus string.
      const allValuesAddedTogether =
        +values.answer1 +
        +values.answer2 +
        +values.answer3 +
        +values.answer4 +
        +values.answer5 +
        +values.answer6 +
        +values.answer7 +
        +values.answer8 +
        +values.answer9;

      axios
        .post("http://localhost:8000/api/PHQ9Form", {
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
      <div className="titleOnFormPage">PHQ-9 Questionnaire</div>
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
            <div className="checkboxRange">
              More than <br /> half the days
            </div>
            <div className="checkboxRange">Nearly every </div>
          </div>
        </div>
        <div className="formContainer">
          <div className="formQuestions">
            <div className="firstQuestionOnForm">
              <label htmlFor="answer1">
                {" "}
                1. Little interest or pleasure in doing things{" "}
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
                2. Feeling down, depressed, or hopeless{" "}
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
                3. Trouble falling or staying asleep, or sleeping too much{" "}
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
              <label htmlFor="answer4">
                {" "}
                4. Feeling tired or having little energy{" "}
              </label>
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
              <label htmlFor="answer5"> 5. Poor appetite or overeating </label>
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
                6. Feeling bad about yourself — or that you are a failure or
                have let yourself or your family down.{" "}
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
                7. Trouble concentrating on things, such as reading the
                newspaper or watching television{" "}
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
          <div className="formQuestions">
            <div className="firstQuestionOnForm">
              <label htmlFor="answer8">
                {" "}
                8. Moving or speaking so slowly that other people could have
                noticed? Or the opposite
                <br />
                being so fidgety or restless that you have been moving around a
                lot more than usual{" "}
              </label>
            </div>
            <div className="checkboxesForFormContainer">
              <div className="holdingTheCheckboxes">
                <div>
                  <input
                    type="radio"
                    name="answer8"
                    value={0}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <div>
                  <input
                    type="radio"
                    name="answer8"
                    value={1}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <div>
                  <input
                    type="radio"
                    name="answer8"
                    value={2}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <div>
                  <input
                    type="radio"
                    name="answer8"
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
              <label htmlFor="answer9">
                {" "}
                9. Thoughts that you would be better off dead or of hurting
                yourself in some way{" "}
              </label>
            </div>
            <div className="checkboxesForFormContainer">
              <div className="holdingTheCheckboxes">
                <div>
                  <input
                    type="radio"
                    name="answer9"
                    value={0}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <div>
                  <input
                    type="radio"
                    name="answer9"
                    value={1}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <div>
                  <input
                    type="radio"
                    name="answer9"
                    value={2}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <div>
                  <input
                    type="radio"
                    name="answer9"
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
export default PHQ9Form;
