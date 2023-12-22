import React, { useState } from 'react';
import Navbar1 from './Navbar1';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const MediaAds = () => {
  const [formData, setFormData] = useState({
    Heading1: '',
    Description: '',
    Heading2: '',
    Heading3: '',
    Heading4: '',
    Heading5: '',
    Heading6: '',
    Heading7: '',
    Heading8: '',
    Heading9: ''
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
                <label style={{ marginRight: "1200px" }} htmlFor="Heading1"><b>Heading 01</b></label><br />
                <input style={{ width: "600px", height: "30px", marginRight: "1200px" }}
                  type="text"
                  id="Heading1"
                  name="Heading1"
                  placeholder='Add a heading that would make user interested'
                  value={formData.Heading1}
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
                <label style={{ marginRight: "1200px" }} htmlFor="Heading1"><b>Heading 02</b></label><br />
                <input style={{ width: "600px", height: "30px", marginRight: "1200px" }}
                  type="text"
                  id="Heading2"
                  name="Heading2"
                  placeholder='Add a heading that would make user interested'
                  value={formData.Heading2}
                  onChange={handleChange}
                  required
                />
              </Col>
              <Col>
                {/* Description 01 */}
                <label style={{ marginLeft: "800px" }} htmlFor="Description"><b>Description 01</b></label><br />
                <input style={{ width: "800px", height: "160px", marginLeft: "800px" }}
                  type="text"
                  id="Description"
                  name="Description"
                  placeholder='Add primary text to help users understand more about your product services or offers'
                  value={formData.Description}
                  onChange={handleChange}
                  required
                />
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col>
                <label htmlFor="Heading3"><b>Landscape Marketing Image (1.9.1)</b></label><br />
                <input style={{ width: "400px", height: "50px" }}
                  type="link"
                  id="Heading3"
                  name="Heading3"
                  placeholder='Add the Url of the image you want to use for the ad'
                  value={formData.Heading3}
                  onChange={handleChange}
                  required
                />
              </Col>
              <Col>
                <label htmlFor="Heading4"><b>Portrait Marketing Image (4.5)</b></label><br />
                <input style={{ width: "400px", height: "50px" }}
                  type="link"
                  id="Heading4"
                  name="Heading4"
                  placeholder='Add the URL of the image you want to use for the ad'
                  value={formData.Heading4}
                  onChange={handleChange}
                  required
                />
              </Col>
              <Col>
                <label htmlFor="Heading5"><b>Square Marketing Image (1.1)</b></label><br />
                <input style={{ width: "400px", height: "50px" }}
                  type="link"
                  id="Heading5"
                  name="Heading5"
                  placeholder='Add the URL of the image you want to use for the ad'
                  value={formData.Heading5}
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
                <label style={{ marginRight: "1200px" }} htmlFor="Heading6"><b>Video URL</b></label><br />
                <input style={{ width: "100%", height: "50px" }}
                  type="link"
                  id="Heading6"
                  name="Heading6"
                  placeholder='Add the URL of the video you want to use for the ad'
                  value={formData.Heading6}
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
                <label style={{ marginRight: "400px" }} htmlFor="Heading7"><b>Business Name</b></label><br />
                <input style={{ width: "100%", height: "50px" }}
                  type="text"
                  id="Heading7"
                  name="Heading7"
                  placeholder='Add your business name'
                  value={formData.Heading7}
                  onChange={handleChange}
                  required
                />
              </Col>
              <Col>
                <label style={{ marginRight: "400px" }} htmlFor="Heading8"><b>Button Label</b></label><br />
                <input style={{ width: "100%", height: "50px" }}
                  type="text"
                  id="Heading8"
                  name="Heading8"
                  placeholder='Select a label that that best suits your ad'
                  value={formData.Heading8}
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
                <label style={{ marginRight: "1200px" }} htmlFor="Heading9"><b>Website URL</b></label><br />
                <input style={{ width: "100%", height: "50px" }}
                  type="link"
                  id="Heading9"
                  name="Heading9"
                  placeholder='Add THE URL of the landing page you want to redirect users to'
                  value={formData.Heading9}
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
export default MediaAds;
