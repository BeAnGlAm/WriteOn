// Displays/hides the user suggestion submission form on click

import PromptButton from "./PromptButton";

function PromptSubmit({ onShow }) {
  return (
    <div className="promptSubmit">
      <h3>Click here to submit a prompt</h3>
      <PromptButton text='Add' onClick={onShow} />
    </div>
  )
}

export default PromptSubmit
