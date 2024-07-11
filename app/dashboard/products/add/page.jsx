import styles from "../../../../app/ui/dashboard/products/addProduct/addProduct.module.css";
import { addProduct } from "../../../lib/actions";

const AddProductPage = () => {
  return (
    <div className={styles.container}>
        <form action={addProduct} className={styles.form}>
            <input type="text" placeholder="title" name="title" required />
            <select name="cat" id="cat">
                <option value="kitechen">Choose a category</option>
                <option value="kitechen">Kitchen</option>
                <option value="kitechen">Phone</option>
                <option value="kitechen">Computer</option>
            </select>
            <input type="number" placeholder="price" name="price" />
            <input type="number" placeholder="stock" name="stock" />
            <input type="text" placeholder="color" name="color" />
            <input type="text" placeholder="size" name="size" />
            <textarea
                name="desc"
                id="desc"
                rows="16"
                placeholder="Description"
            ></textarea>
            <button type="submit">Submit</button>
        </form>
    </div>
  );
};

export default AddProductPage