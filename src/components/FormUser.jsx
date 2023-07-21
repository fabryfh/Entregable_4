import { useForm } from "react-hook-form";
import { useEffect } from "react";
import './styles/FormUser.css'

const FormUser = ({ createNewUser, updateInfo }) => {
  const { register, reset, handleSubmit } = useForm();

  useEffect(() => {
    reset(updateInfo);
  }, [updateInfo]);

  const submit = (data) => {
    if (updateInfo) {
      //Update
      updateUserById("/users", updateInfo.id, data);
      setUpdateInfo();
    } else {
      //Create
      updateUserById("/user", data);
    }

    createNewUser("/users", data);
    reset({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      brithday: "",
    });
  };

  return (

    <div className="formuser-container">

    <form className="formuser" onSubmit={handleSubmit(submit)}>

      <h2 className="formuser__title">{updateInfo ? "Update" : "New User"}</h2>
      <div className="formuser__close">X</div>
      <div className="formuser__group">

        <label className="formuser__label" htmlFor="first_name">
          First Name
        </label>
        <input
          className="formuser__input"
          {...register("first_name")}
          type="text"
          id="first_name"
        />
      </div>
      <div className="formuser__group">
        <label className="formuser__label" htmlFor="last_name">
          Last Name
        </label>
        <input
          className="formuser__input"
          {...register("last_name")}
          type="text"
          id="last_name"
        />
      </div>
      <div className="formuser__group">
        <label className="formuser__label" htmlFor="email">
          Email
        </label>
        <input
          className="formuser__input"
          {...register("email")}
          type="text"
          id="email"
        />
      </div>
      <div className="formuser__group">
        <label className="formuser__label" htmlFor="password">
          Password
        </label>
        <input
          className="formuser__input"
          {...register("password")}
          type="text"
          id="password"
        />
      </div>
      <div className="formuser__group">
        <label className="formuser__label" htmlFor="birthday">
          Birthday
        </label>
        <input
          className="formuser__input"
          {...register("birthday")}
          type="text"
          id="birthday"
        />
      </div>
      <button className=" formuser__btn">
        {updateInfo ? "Update this user" : "Add a new user"}
      </button>
    </form>
    </div>
  );
};

export default FormUser;
