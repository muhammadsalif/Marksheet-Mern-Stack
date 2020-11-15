import React from 'react'

export default function Form() {
    return (
        <div className="container">
            <div className="row d-flex justify-content-center py-4">
                {/* Left col */}
                <div className="col-4">
                    <form>
                        <div className="form-group">
                            <label for="exampleInputEmail1" className="font-weight-bold text-uppercase">Name:</label>
                            <input placeholder="Enter your name" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                <option selected>Total Subjects</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>

                        <button type="submit" className="btn btn-block btn-warning font-weight-bold text-uppercase">Submit</button>
                    </form>
                    {/* Left column closing tag */}
                </div>


                {/* Right column */}
                <div className="col-8">
                    <form>
                        <div className="form-group d-flex align-items-center">
                            <label for="exampleInputEmail1" className="font-weight-bold">Subject 1:</label>
                            <input placeholder="Enter subject name" type="email" className="mx-4 form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <input placeholder="Marks Obtained" type="number" max="100" className="form-control mr-4" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>

                        <button type="submit" className="btn btn-block btn-warning font-weight-bold text-uppercase">Submit</button>
                    </form>
                </div>
            </div>

            {/* Row 2 server */}
            <div className="row border border-dark">
                <div className="col-12">server here</div>




            </div>






            {/* Container closing tag */}
        </div >
    )
}