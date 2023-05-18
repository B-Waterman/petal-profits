import { useState } from "react";

export default function EditForm(props) {

  const [amount, setAmount] = useState(props.amount)

  // props.onCancel()
  // props.onSave(props.category, 1)

  return (
    <div className="edit-form">

      <form autoComplete="off" onSubmit={e => e.preventDefault()}>
        <input
          name="Spending Goal"
          type="text"
          placeholder={amount}
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
      </form>
      <button>Save</button>
      <button>Cancel</button>
    </div>
  )
}