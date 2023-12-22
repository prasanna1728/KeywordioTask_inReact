import React, { useState } from 'react';
import Navbar1 from './Navbar1';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const TextAds = () => {
    const [formData, setFormData] = useState({
        Heading01: '',
        Description1: '',
        Heading02: '',
        Heading03: '',
        Heading04: '',
        Heading05: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
    //  print all the data in console and get alert msg form submitted.
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        alert('Form submitted in console');
    };

    return (
        <>
            <Navbar1 />
            <div>
                <h2 style={{ marginTop: "30px", marginRight: "1200px" }}>Create Text & Media</h2><br />
                <form onSubmit={handleSubmit}>
                    <Container>
                        <Row>
                            <Col>
                                {/* Heading1 */}
                                <label style={{ marginRight: "1200px" }} htmlFor="Heading01"><b>Heading 01</b></label><br />
                                <input style={{ width: "600px", height: "30px", marginRight: "1200px" }}
                                    type="text"
                                    id="Heading01"
                                    name="Heading01"
                                    placeholder='Add a heading that would make user interested'
                                    value={formData.Heading01}
                                    onChange={handleChange}
                                    required
                                />
                            </Col>
                            <br />
                            <br />
                            <br />
                            <br />
                            <Col>
                                {/* Heading2 */}
                                <label style={{ marginRight: "1200px" }} htmlFor="Heading02"><b>Heading 02</b></label><br />
                                <input style={{ width: "600px", height: "30px", marginRight: "1200px" }}
                                    type="text"
                                    id="Heading02"
                                    name="Heading02"
                                    placeholder='Add a heading that would make user interested'
                                    value={formData.Heading02}
                                    onChange={handleChange}
                                    required
                                />
                            </Col>
                            <Col>
                                {/* Description 01 */}
                                <label style={{ marginLeft: "800px" }} htmlFor="Description1"><b>Description 01</b></label><br />
                                <input style={{ width: "800px", height: "160px", marginLeft: "800px" }}
                                    type="text"
                                    id="Description1"
                                    name="Description1"
                                    placeholder='Add primary text to help users understand more about your product services or offers'
                                    value={formData.Description1}
                                    onChange={handleChange}
                                    required
                                />
                            </Col>
                        </Row>
                    </Container>
                    <br />
                    <br />
                    <br />
                    <br />
                    <Container>
                        <Row>
                            <Col>
                                <label style={{ marginRight: "400px" }} htmlFor="Heading03"><b>Business Name</b></label><br />
                                <input style={{ width: "100%", height: "50px" }}
                                    type="text"
                                    id="Heading03"
                                    name="Heading03"
                                    placeholder='Add your business name'
                                    value={formData.Heading03}
                                    onChange={handleChange}
                                    required
                                />
                            </Col>
                            <Col>
                                <label style={{ marginRight: "400px" }} htmlFor="Heading04"><b>Button Label</b></label><br />
                                <input style={{ width: "100%", height: "50px" }}
                                    type="text"
                                    id="Heading04"
                                    name="Heading04"
                                    placeholder='Select a label that that best suits your ad'
                                    value={formData.Heading04}
                                    onChange={handleChange}
                                    required
                                />
                            </Col>
                        </Row>
                    </Container>
                    <br />
                    <br />
                    <Container>
                        <Row>
                            <Col>
                                <label style={{ marginRight: "1200px" }} htmlFor="Heading05"><b>Website URL</b></label><br />
                                <input style={{ width: "100%", height: "50px" }}
                                    type="link"
                                    id="Heading05"
                                    name="Heading05"
                                    placeholder='Add THE URL of the landing page you want to redirect users to'
                                    value={formData.Heading05}
                                    onChange={handleChange}
                                    required
                                />
                            </Col>
                        </Row>
                    </Container>
                    <br />
                    {/* Submit Button */}
                    <input style={{ backgroundColor: "blueviolet", width: "100px" }} type="submit" value="Submit" />
                </form>
            </div>
        </>
    );
};
export default TextAds;
