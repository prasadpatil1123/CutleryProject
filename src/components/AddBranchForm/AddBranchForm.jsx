import React, { useState } from "react";
import "./AddBranchForm.css";

const AddBranchForm = () => {
  const [branchData, setBranchData] = useState({
    branchName: "",
    address: "",
    taluka: "",
    district: "",
    personName: "",
    phoneNo: "",
    personEmail: "",
    password: "",
  });
  const [records, setRecords] = useState([]);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setBranchData({
      ...branchData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = { ...branchData, id: new Date().getTime().toString() };
    setRecords([...records, newRecord]);
    setBranchData({ branchName: "",address: "",
    taluka: "",
    district: "",
    personName: "",
    phoneNo: "",
    personEmail: "",
    password: "" });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="add-branch-form">
        <h2 className="titleTag">
          Add Branch
        </h2>
        <div className="form-group">
          <label htmlFor="branchName" className="label">
            Branch Name:
          </label>
          <input
            type="text"
            id="branchName"
            name="branchName"
            value={branchData.branchName}
            onChange={handleChange}
            required
            className="input"
            autoComplete="off"
          />
        </div>

        <div className="form-group">
          <label htmlFor="branchName" className="label">
            Address :
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={branchData.address}
            onChange={handleChange}
            required
            className="input"
            autoComplete="off"
          />
        </div>

        <div className="form-group">
          <label htmlFor="branchName" className="label">
            Taluka:
          </label>
          <input
            type="text"
            id="taluka"
            name="taluka"
            value={branchData.taluka}
            onChange={handleChange}
            required
            className="input"
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <label htmlFor="branchName" className="label">
            District:
          </label>
          <input
            type="text"
            id="district"
            name="district"
            value={branchData.district}
            onChange={handleChange}
            required
            className="input"
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <label htmlFor="branchName" className="label">
            Person Name :
          </label>
          <input
            type="text"
            id="personName"
            name="personName"
            value={branchData.personName}
            onChange={handleChange}
            required
            className="input"
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <label htmlFor="branchName" className="label">
            Phone No:
          </label>
          <input
            type="text"
            id="phoneNo"
            name="phoneNo"
            value={branchData.phoneNo}
            onChange={handleChange}
            required
            className="input"
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <label htmlFor="branchName" className="label">
            Person Email:
          </label>
          <input
            type="text"
            id="personEmail"
            name="personEmail"
            value={branchData.personEmail}
            onChange={handleChange}
            required
            className="input"
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <label htmlFor="branchName" className="label">
            Password :
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={branchData.password}
            onChange={handleChange}
            required
            className="input"
            autoComplete="off"
          />
        </div>

        <div className="form-buttons">
          <button onClick={handleSubmit}>save</button>
          <button>cancel</button>
        </div>
      </form>

      <div>
        {records.map((curElm) => {
          const {
            branchName,
            address,
            taluka,
            district,
            personName,
            phoneNo,
            personEmail,
            password,
          } = curElm;
          return (
            <div key={curElm.id}>
              <ul>
                <li>branchName: {branchName} </li>
                <li>address: {address},</li>
                <li>taluka: {taluka}</li>
                <li>district: {district}</li>
                <li> personName: {personName}</li>
                <li>phoneNo: {phoneNo}</li>
                <li> personEmail: {personEmail}</li>
                <li>password: {password}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AddBranchForm;
