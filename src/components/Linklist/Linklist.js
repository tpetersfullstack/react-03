import React, { useState, Fragment } from "react";
import "./LList.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { LinkedList } from "./LLfunctions.js";

const LLInst = new LinkedList();

function LList() {
  //  setting state
  const [subject, setSubject] = useState("");
  const [amount, setAmount] = useState("");
  const [current, setCurrent] = useState("");
// onclick  event
  const subjectInputChange = event => {
    setSubject(event.target.value);
  };

  const amountInputChange = event => {
    setAmount(event.target.value);
  };

  const pressEnter = event => {
    if (event.key === "Enter" || event.target.name === "enterButton") {
      subject !== "" && amount !== ""
        ? handleAdd()
        : alert("Subject and Amt Fields cannot be empty ");
      // document.getElementById(subject).focus();
    }
  };

  const handleAdd = () => {
    LLInst.add(subject, amount);
    setCurrent(LLInst.current);
    // LLInst.showList();

    setSubject("");
    setAmount("");
  };

  const handleFirst = e => {
    //consolelog("Target: ", e.target.name);
    // LLInst.first();
    setCurrent(LLInst.first());
    //consolelog("First/Current ", LLInst.current);
  };

  const handlePrevious = e => {
    //consolelog("Target: ", e.target.name);
    setCurrent(LLInst.prev());
    //consolelog("Prev/Current ", LLInst.current);
  };

  const handleDelete = e => {
    //consolelog("Target: ", e.target.name);
    setCurrent(LLInst.delete());
  };

  const handleNext = e => {
    //consolelog("Target: ", e.target.name);
    setCurrent(LLInst.next());
    //consolelog("Next: ", LLInst.current);
  };

  const handleLast = e => {
    //consolelog("Target: ", e.target.name);
    setCurrent(LLInst.last());
  };
  const renderAmount = () => {
    while (LLInst.headNode) {
      let sumAmount = `Sum: ${LLInst.listAmount}`;
      return sumAmount;
    }
  };

  const renderNodes = () => {
    const markCurrent = {
      color: "blue",
      fontWeight: "bold",
      backgroundColor: "white"
    };
    // let nodes = [];
    while (LLInst.current) {
      // console.log("showlist: ", LLInst.showList());
      let llistArr = [];
      llistArr = LLInst.showList();
      // console.log("llistArr", LLInst.current);

      return llistArr.map(nodes => {
        // console.log("llistArr curr", LLInst.current);
        // console.log("llistArr head", LLInst.headNode);
        // console.log("nodes", nodes);

        return nodes[0] === current.subject ? (
          <Fragment key={nodes[0] + nodes[1]}>
            <p key={nodes[0] + nodes[1]} style={markCurrent}>
              {nodes[0]}, {nodes[1]},{nodes[2]}
            </p>
          </Fragment>
        ) : (
          <Fragment key={nodes[0] + nodes[1]}>
            <p key={nodes[0] + nodes[1]}>
              {nodes[0]}, {nodes[1]},{nodes[2]}
            </p>
          </Fragment>
        );
      });
    }
  };

  return (
    <section>
      <h1>LinkedList</h1>
      <div id="idPanelContainer">
        <div id="idLeftPanel">
          <fieldset id="idInputs" name="Data in LinkedList">
            <legend>Inputs</legend>
            Subject :
            <input
              id="subject"
              name="subject"
              type="text"
              className="left-input"
              placeholder="Enter Subject"
              autoFocus={true}
              value={subject}
              onChange={subjectInputChange}
            />
            <br />
            Amount:
            <input
              id="amount"
              name="amount"
              type="number"
              className="left-input"
              placeholder="Enter Amount"
              step="0.01"
              value={amount}
              onChange={amountInputChange}
              onKeyPress={pressEnter}
            />
            <br />
            <Button
              // type="button"
              // className="btn btn-secondary"
              id="reset" 
              variant="primary"
              name="enterButton"
              onClick={pressEnter}
            >
              Enter
            </Button>
          </fieldset>
          <br />

          <Button
            onClick={handleFirst}
            id="reset"
            variant="primary"
            name="first"
          >
            First
          </Button>
          <Button
            onClick={handlePrevious}
            id="reset"
            variant="primary"
            name="prev"
          >
            Previous
          </Button>

          <Button
            onClick={handleDelete}
            id="reset"
            variant="primary"
            name="delete"
          >
            Delete
          </Button>
          <Button onClick={handleNext}id="reset"  variant="primary" name="next">
            Next
          </Button>
          <Button onClick={handleLast} id="reset" variant="primary" name="last">
            Last
          </Button>
        </div>

        <div id="idRightPanel">
          {renderNodes()}
         <br></br> {renderAmount()}
        </div>
      </div>
    </section>
  );
}

export default LList;
