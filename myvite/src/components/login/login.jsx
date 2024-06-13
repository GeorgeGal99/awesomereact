import { useState } from "react";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    validateFields(name,value)
  };

  const validateFields=(fieldName,inputValue)=>{
let newErrors={...errors}
if(fieldName==='email'){
if(inputValue){
  newErrors.email='email is required'
}else if(emailRegex.test(inputValue){
  
}
}

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted form");
  };
  return (
    <form>
      <div className="login_input">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="login_input">
        <input
          type="password"
          name="password"
          onChange={handleChange}
          required
        />
        <span></span>
      </div>
      <button type="submit">Login</button>
    </form>
  );
}
export default Login;
