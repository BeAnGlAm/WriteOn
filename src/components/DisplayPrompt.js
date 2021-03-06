// Hides/displays the daily writing prompt on click

import PromptButton from "./PromptButton"

function DisplayPrompt({ onHide }) {
  return (
    <div>
      <PromptButton text='hide' onClick={onHide} />
    </div>
  )
}

export default DisplayPrompt
