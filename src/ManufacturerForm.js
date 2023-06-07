import React, { useState } from "react";

function ManufacturerForm(props) {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};
        data.name = name;

        const url = "http://localhost:8100/api/manufacturers/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        };

        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            setName('');
        }
    }
    const [name, setName] = useState('');
        const handlNameChange = (event) => {
            const value = event.target.value;
            setName(value)
        }
    return (
        <div className="shadow p-4 mt-4">
            <h1>Create Manufacturer</h1>
            <form onSubmit={handleSubmit} id="create-manufacturer-form">
            <div className="form-floating mb-3">
                <input onChange={handlNameChange} placeholder="Name" required type="text" name="name" id="name" className="form-control"/>
                <label htmlFor="fabric">Name</label>
            </div>
            <button className="btn btn-primary">Create</button>
            </form>
        </div>
        );
    };

export default ManufacturerForm;







    // const fetchData = async () => {
    //     const url = "http://localhost:8100/api/manufacturers/";
    //     const response = await fetch(url);
    //     if (response.ok) {
    //         const data = await response.json();
    //         setName(data.name);
    //     }
