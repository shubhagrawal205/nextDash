import styles from "../../../../app/ui/dashboard/users/singleUser/singleUser.module.css";
// import styles from "../../../../"
import Image from "next/image";

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.imgContainer}>
                <Image src="/noavatar.png" alt="" fill />
            </div>
            John Doe
        </div>
        <div className={styles.formContainer}>
        <form action="" className={styles.form}>
            <label>Username</label>
            <input type="text" name="username" placeholder="John Doe" />
            <label>Email</label>
            <input type="email" name="email" placeholder="JohnDoe@gmail.com" />
            <label>Password</label>
            <input type="passowrd" name="passowrd" />
            <label>Phone</label>
            <input type="text" name="phone" placeholder="+91-7767456385" />
            <label>Address</label>
            <input type="text" name="address" placeholder="Czech Republic" />
            <label>isAdmin?</label>
            <select name="isAdmin" id="isAdmin">
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select>
            <label>isActive?</label>
            <select name="isActive" id="isActive">
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select>
            <button>Update</button>
        </form>
        </div>
    </div>
  )
}

export default SingleUserPage