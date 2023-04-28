import { FormikConsumer } from "formik";
import { Link } from "react-router-dom";
import "./Forms.css";

const Forms = () => {
  return (
    <div className="formsContainer">
      <div className="phq-9Title">PHQ-9 Questionnaire</div>
      <div className="containsInstructionsForPHQ-9">
        <div>
          Over the last 2 weeks, how often have you been bothered
          <br /> by any of the following problems? (Use “✔” to indicate your
          answer)
        </div>
        <div className="containsAllCheckBoxes">
          <div className="phq-9Range"> Not at all</div>
          <div className="phq-9Range">Several days</div>
          <div className="phq-9Range">More than half the days</div>
          <div className="phq-9Range">Nearly every </div>
        </div>
      </div>
      <div className="phq-9Container">
        <div className="phq-9Questions">
          <div className="firstQuestionPHQ-9">
            <label htmlFor="questionOnePHQ-9">
              {" "}
              1. Little interest or pleasure in doing things{" "}
            </label>
          </div>
          <div className="checkboxesForPHQ-9Container">
            <div className="holdingTheCheckboxes">
              <input
                type="checkbox"
                id="questionOnePHQ-9"
                name="questionOnePHQ-9"
                value="questionOnePHQ-9"
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
        </div>
        <div className="phq-9Questions">
          <div className="firstQuestionPHQ-9">
            <label htmlFor="questionOnePHQ-9">
              {" "}
              2. Feeling down, depressed, or hopeless{" "}
            </label>
          </div>
          <div className="checkboxesForPHQ-9Container">
            <div className="holdingTheCheckboxes">
              <input
                type="checkbox"
                id="questionOnePHQ-9"
                name="questionOnePHQ-9"
                value="questionOnePHQ-9"
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
        </div>
        <div className="phq-9Questions">
          <div className="firstQuestionPHQ-9">
            <label htmlFor="questionOnePHQ-9">
              {" "}
              3. Trouble falling or staying asleep, or sleeping too much{" "}
            </label>
          </div>
          <div className="checkboxesForPHQ-9Container">
            <div className="holdingTheCheckboxes">
              <input
                type="checkbox"
                id="questionOnePHQ-9"
                name="questionOnePHQ-9"
                value="questionOnePHQ-9"
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
        </div>
        <div className="phq-9Questions">
          <div className="firstQuestionPHQ-9">
            <label htmlFor="questionOnePHQ-9">
              {" "}
              4. Feeling tired or having little energy{" "}
            </label>
          </div>
          <div className="checkboxesForPHQ-9Container">
            <div className="holdingTheCheckboxes">
              <input
                type="checkbox"
                id="questionOnePHQ-9"
                name="questionOnePHQ-9"
                value="questionOnePHQ-9"
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
        </div>
        <div className="phq-9Questions">
          <div className="firstQuestionPHQ-9">
            <label htmlFor="questionOnePHQ-9">
              {" "}
              5. Poor appetite or overeating{" "}
            </label>
          </div>
          <div className="checkboxesForPHQ-9Container">
            <div className="holdingTheCheckboxes">
              <input
                type="checkbox"
                id="questionOnePHQ-9"
                name="questionOnePHQ-9"
                value="questionOnePHQ-9"
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
        </div>
        <div className="phq-9Questions">
          <div className="firstQuestionPHQ-9">
            <label htmlFor="questionOnePHQ-9">
              {" "}
              6. Feeling bad about yourself — or that you are a failure or have
              let yourself or your family down{" "}
            </label>
          </div>
          <div className="checkboxesForPHQ-9Container">
            <div className="holdingTheCheckboxes">
              <input
                type="checkbox"
                id="questionOnePHQ-9"
                name="questionOnePHQ-9"
                value="questionOnePHQ-9"
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
        </div>
        <div className="phq-9Questions">
          <div className="firstQuestionPHQ-9">
            <label htmlFor="questionOnePHQ-9">
              {" "}
              7. Trouble concentrating on things, such as reading the newspaper
              or watching television{" "}
            </label>
          </div>
          <div className="checkboxesForPHQ-9Container">
            <div className="holdingTheCheckboxes">
              <input
                type="checkbox"
                id="questionOnePHQ-9"
                name="questionOnePHQ-9"
                value="questionOnePHQ-9"
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
        </div>
        <div className="phq-9Questions">
          <div className="firstQuestionPHQ-9">
            <label htmlFor="questionOnePHQ-9">
              {" "}
              8. Moving or speaking so slowly that other people could have
              noticed? Or the opposite
              <br />
              being so fidgety or restless that you have been moving around a
              lot more than usual{" "}
            </label>
          </div>
          <div className="checkboxesForPHQ-9Container">
            <div className="holdingTheCheckboxes">
              <input
                type="checkbox"
                id="questionOnePHQ-9"
                name="questionOnePHQ-9"
                value="questionOnePHQ-9"
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
          <div className="phq-9Questions">
            <div className="firstQuestionPHQ-9">
              <label htmlFor="questionOnePHQ-9">
                {" "}
                9. Thoughts that you would be better off dead or of hurting
                yourself in some way{" "}
              </label>
            </div>
            <div className="checkboxesForPHQ-9Container">
              <input
                type="checkbox"
                id="questionOnePHQ-9"
                name="questionOnePHQ-9"
                value="questionOnePHQ-9"
              />
              <input type="checkbox" />
              <input type="checkbox" />
              <input type="checkbox" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Forms;
