import React, { useEffect, useState } from "react";
import { register } from "./auth";
import { useRouter } from "next/navigation";

const RegisterPage = ({ modalSetting, closeFunc, tokenSetter }) => {
  const router = useRouter();
  // Filled State
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [subrole, setSubRole] = useState("");

  // Condition State
  const [subSR, setSubSR] = useState([])

  // Role settings
  const staffRole = [
    "Administrative and Governance",
    "Technical and Support",
    "Others",
  ];

  // Role Handler
  const handleRoleChange = (e)  => {
    setRole(e.target.value);
  }

  const handleSubRoleChange = (e) => {
    setSubRole(e.target.value);
  }

  const RoleFetch = async (role) => {
    const RoleData = {
      "Administrative and Governance" : ["Village Head's", "Secretary", "Financial Officer", "Village Treasurer", "Administration"],
      "Technical and Support" : ["ICT", "Security", "Community Affairs", "Advisor"],
      "Others" : ["FullStack"]
    };
    return RoleData[role] || [];
  }

  useEffect(() => {
    const fetchRole = async () => {
      try {
      const fetchedRole = await RoleFetch(role);
      setSubSR(fetchedRole);
    } catch (error) {
      console.log("ERROR!");
    }
    }
    if(role) {
      fetchRole();
    }
  }, [role])

  // Email Validation
  const validateEmail = (email) => {
    // Very basic email validation, you may need a more robust solution
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const close = () => {
    closeFunc();
  };

  const handleAuth = async () => {
    if (!username || !password || !email) {
      alert("Please fill in all fields");
      return;
    }
    // Perform email format validation
    if (!validateEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }

    try {
      const userData = {
        username: username,
        password: password,
        email : email,
        role: role,
        subrole: subrole
      }
      const response = await register(userData);
      if (response){
        close();
        tokenSetter();
        router.push("admin");
      } else {
        throw new Error("Unexpected Error has happen, try again later.");
      }
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed. Please try again later.");
    }
  };

  return (
    <dialog
      className={`fixed inset-0 z-10 flex items-center justify-center rounded-2xl text-white ${
        modalSetting ? "block" : "hidden"
      }`}
      aria-modal={true}
    >
      <div className="flex flex-col bg-gray-700 p-6 rounded-lg border-white border-2">
        <div className="flex flex-row items-center justify-between">
          <p className="text-center mb-4 text-2xl font-bold">Sign Up</p>
          <button
            onClick={close}
            className="mb-2 py-1 px-2 cursor-pointer rounded border-none w-8 h-8 font-bold bg-red-600 text-white"
          >
            x
          </button>
        </div>
        <p>Username *</p>
        <input
          type="text"
          id="username"
          placeholder="name"
          className="rounded-md p-1 mb-2 mt-1 text-black"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="username"
          required
        />
        <p>Email Address *</p>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-md p-1 mb-2 mt-1 text-black"
          placeholder="myexample@gmail.com"
          id="email"
          value={email}
          autoComplete="email"
          required
        />
        <p>Password *</p>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-md p-1 mb-2 mt-1 text-black"
          id="password"
          placeholder="password"
          value={password}
          autoComplete="current-password"
          required
        />
        <p>Role *</p>
        <div className=" text-black">
          <select
            value={role}
            onChange={handleRoleChange}
            className="rounded-md p-1 mb-2 mt-1"
          >
            <option value="">Select Role</option>
            {staffRole.map((r, index) => (
              <option key={index} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>
        <p>Sub-Role *</p>
        <div className="text-black">
          <select
            value={subrole}
            onChange={handleSubRoleChange}
            className="rounded-md p-1 mb-2 mt-1"
          >
            <option value="">Select Sub-Role</option>
            {subSR.map((r, index) => (
              <option key={index} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={handleAuth}
          className="border mt-6 bg-slate-400 rounded-md size-fit py-1 px-4 self-center"
        >
          Sign Up
        </button>
      </div>
    </dialog>
  );
};

export default RegisterPage;
