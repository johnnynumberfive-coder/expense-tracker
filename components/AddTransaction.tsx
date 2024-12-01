"use client";
import addTransaction from "@/app/actions/addTransaction";
import { toast } from "react-toastify";

const AddTransaction = () => {
    const clientAction = async (formData: FormData) => {
        const result = await addTransaction(formData);

        if (result.error) {
            toast.error(result.error);
        } else {
            toast.success('Transaction Added');
            console.log(result);
        }
    };

    return (
         <>
      <h3>Add Transaction</h3>
       <form action={ clientAction }>
         <div className="form-control">
           <label htmlFor="text">Text</label>
           <input type="text" id="text" name="text" placeholder="Enter Text..." />
         </div> 
         <div className="form-control">
            <label htmlFor="amount">Amount <br /> (negative - expense, positive - income)</label>
            <input type="number" name="amount" id="amount" placeholder="Enter amount..." step="0.01" />
         </div>
         <button className="btn">Add Transaction</button>
       </form> 
    </> );
}
 
export default AddTransaction;