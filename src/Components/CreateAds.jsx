import React, { useState } from 'react';
import Navbar1 from './Navbar1';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import createAds from './createAds.jpg';


const CreateAds = () => {
    const [checkbox1, setCheckbox1] = useState(false);
    const [checkbox2, setCheckbox2] = useState(false);

    const handleCheckboxChange = (checkbox) => {
        if (checkbox === 'checkbox1') {
            setCheckbox1(!checkbox1);
            setCheckbox2(false);
        } else if (checkbox === 'checkbox2') {
            setCheckbox2(!checkbox2);
            setCheckbox1(false);
        }
    };
    const handleNextClick = () => {
        if (checkbox1 && checkbox2) {
            alert('Please select only one checkbox.');
        } else if (checkbox1) {
            window.location.href = '/src/Components/TextAds.jsx';
        } else if (checkbox2) {
            window.location.href = '/src/Components/MediaAds.jsx';
        } else {
            alert('Please select at least one checkbox.');
        }
    };
    return (
        <div>
            <Navbar1 />
            <h2 style={{ marginRight: "1400px", marginTop: "50px" }}>Create Ads</h2><label>
                <input style={{ transform: "scale(3)" }}
                    type="checkbox"
                    checked={checkbox1}
                    onChange={() => handleCheckboxChange('checkbox1')}
                />
                <img src={createAds} alt='' style={{ width: "130%", height: "130%", marginTop: "50px" }} />
            </label>

            <label>
                <input style={{ transform: "scale(3)" }}
                    type="checkbox"
                    checked={checkbox2}
                    onChange={() => handleCheckboxChange('checkbox2')}
                />
            </label>
            <button style={{ marginLeft: "400px", backgroundColor: "#3B71CA", width: "130px", height: "50px" }} onClick={handleNextClick}><span style={{ fontSize: "25px" }}>Next</span></button>
        </div>
    );
};
export default CreateAds;


