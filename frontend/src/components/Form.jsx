import React, { useState } from 'react'

export default function Form() {

    // let arr = [4];


    let [arr, setArr] = useState([0]);

    console.log("arr length", arr.length)
    return (
        <div className="container">
            <div className="row d-flex justify-content-center py-4">
                {/* Left col */}
                <div className="col-4">
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1" className="font-weight-bold text-uppercase">Name:</label>
                            <input placeholder="Enter your name" type="email" className="form-control" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <select placeholder="Total Subject" className="custom-select mr-sm-2" id="inlineFormCustomSelect" onChange={(e) => {
                                console.log(console.log("Selected value", e.target.value))

                                const val = e.target.value;

                                if (!isNaN(val)) {

                                    setArr(Array.from(Array(parseInt(val)).keys()))
                                }

                                console.log("On change function", e.target.value)
                            }
                            }>
                                <option value={1}>One</option>
                                <option value={2}>Two</option>
                                <option value={3}>Three</option>
                            </select>
                        </div>
                    </form>
                    {/* Left column closing tag */}
                </div>
                {/* Right column */}
                <div className="col-8">
                    <form onSubmit="">
                        {arr.map((obj, ind) =>
                            <div className="form-group d-flex align-items-center">
                                <label htmlFor="exampleInputEmail1" className="font-weight-bold">Subject {ind + 1 + " :"}</label>
                                <input placeholder="Enter subject name" type="email" className="mx-4 form-control" aria-describedby="emailHelp" />
                                <input placeholder="Marks Obtained" type="number" max="100" className="form-control mr-4" aria-describedby="emailHelp" />
                            </div>
                        )
                        }
                        <button type="submit" className="btn btn-block btn-warning font-weight-bold text-uppercase">Submit</button>
                    </form>
                </div>
            </div>
            <hr />
            {/* Row 2 server */}
            <div className="row">
                <div className="col-12">
                    <form>
                        <div className="form-group d-flex align-items-center">
                            <label htmlFor="exampleInputEmail1" className="font-weight-bold">Maximum Marks Subject:</label>
                            <input value="English" disabled className="mx-4 form-control" />
                            <input value="45" className="form-control mr-4" disabled />
                        </div>
                        <div className="form-group d-flex align-items-center">
                            <label htmlFor="exampleInputEmail1" className="font-weight-bold">Minimum Marks Subject:</label>
                            <input value="English" disabled className="mx-4 form-control" />
                            <input value="45" className="form-control mr-4" disabled />
                        </div>
                        <div className="form-group d-flex align-items-center">
                            <h5 className="font-weight-bold">Total Percentage:</h5>
                            <h5 className="ml-2">80%</h5>
                        </div>
                    </form>
                </div>
            </div>
            {/* Container closing tag */}
        </div >
    )
}