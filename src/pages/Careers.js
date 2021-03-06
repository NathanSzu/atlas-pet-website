import React, { useState, useEffect, useContext } from 'react';
import jobData from "../utils/JobListings";
import JobCard from '../components/CardJob.js';
import FormSignup from '../components/FormSignup.js';
import FormLogin from '../components/FormLogin.js';
import { AuthContext } from '../utils/AuthContext';
import { Redirect } from 'react-router-dom';

export default function Careers({ Helmet }) {
    let currentPositions = [];
    let currentPositionsBlaine = [];
    let currentPositionsStillwater = [];
    const [signup, setSignup] = useState(true)
    const { currentUser } = useContext(AuthContext);
   

    useEffect(() => {
        for (let i = 0; i < jobData.alljobs.length; i++) {
            if (jobData.alljobs[i].available === true) {
                currentPositions.push(jobData.alljobs[i])
                if (jobData.alljobs[i].location === "Blaine") {
                    currentPositionsBlaine.push(jobData.alljobs[i])
                } else if (jobData.alljobs[i].location === "Stillwater") {
                    currentPositionsStillwater.push(jobData.alljobs[i])
                }
            }
        }
        setJobState({
            all: currentPositions,
            Blaine: currentPositionsBlaine,
            Stillwater: currentPositionsStillwater
        })
        setJobs(currentPositions)
    }, [])

    const [jobState, setJobState] = useState({
        all: [],
        Blaine: [],
        Stillwater: []
    })

    const toggleForm = () => {
        if (signup === true) {
            setSignup(false)
        } else {
            setSignup(true)
        }
    }

    const [jobs, setJobs] = useState([])

    const handleLocationChange = (e) => {
        if (e.target.value === "Blaine") {
            setJobs(jobState.Blaine)
        } else if (e.target.value === "Stillwater") {
            setJobs(jobState.Stillwater)
        } else {
            setJobs(jobState.all)
        }
    }

    return (currentUser ? <Redirect to="User-Page" /> :
        <main>
            <Helmet>
                <title>Careers | Atlas Pet</title>
            </Helmet>

            <div className="row">
                <div className="col-md-6 job-section hide-on-small">
                    <div className="job-section-overlay"></div>

                    <div className="row">
                        <div className="col-md-12 text-center job-header">
                            <h1 className="section-title">Available Positions</h1>
                        </div>
                        <div className="col-md-12 text-center">
                            <button type="button" className="btn btn-light btn-filter" onClick={handleLocationChange} value="all">All Locations</button>
                            <button type="button" className="btn btn-light btn-filter" onClick={handleLocationChange} value="Blaine">Blaine</button>
                            <button type="button" className="btn btn-light btn-filter" onClick={handleLocationChange} value="Stillwater">Stillwater</button>
                        </div>
                    </div>

                    <div className="row">
                        {jobs.map((job) => (
                            <div className="col-lg-6" key={job.id}>
                            <JobCard
                                job={job}
                            />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="form-wrapper">
                    {(signup) ? <FormSignup toggleForm={toggleForm} /> : <FormLogin toggleForm={toggleForm} />}
                </div>
            </div>
        </main>
    )

}
