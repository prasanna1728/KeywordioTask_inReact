import Navbar1 from "./Navbar1";
import React, { useState } from 'react';
import './Table.css';
import { Container, Row, Col } from "react-bootstrap";
import AdsInsights from "./AdsInsights";

const Dashboard = () => {
    const [data, setData] = useState([
        { Campaigns: 'Cosmetica', clicks: 712, Cost: 4272, Conversions: 8, Revenue: 16568 },
        { Campaigns: 'Serums', clicks: 3961, Cost: 27331, Conversions: 115, Revenue: 362526 },
        { Campaigns: 'Facewash', clicks: 9462, Cost: 76831, Conversions: 123, Revenue: 266800 },
        { Campaigns: 'Shampoos', clicks: 439, Cost: 2151, Conversions: 5, Revenue: 11029 },
        { Campaigns: 'Conditioners', clicks: 1680, Cost: 3864, Conversions: 49, Revenue: 175245 },
        { Campaigns: 'Facewash2', clicks: 4978, Cost: 29370, Conversions: 189, Revenue: 623106 },
        { Campaigns: 'Total', clicks: 26510, Cost: 143819, Conversions: 489, Revenue: 1573563 }
    ]);
    const [sortOrder, setSortOrder] = useState('asc'); // 'asc' for low to high, 'desc' for high to low
    const [sortBy, setSortBy] = useState('age'); // Default sorting by age
    const handleSort = (key) => {
        setSortBy(key);
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };
    const sortedData = [...data].sort((a, b) => {
        if (sortOrder === 'asc') {
            return a[sortBy] - b[sortBy];
        } else {
            return b[sortBy] - a[sortBy];
        }
    });
    return (
        <>
            <div>
                <Navbar1 />
                <Container>
                    <Row>
                        <Col>
                            <table>
                                <thead>
                                    <tr>Ad Insights</tr>
                                    <tr>
                                        <th onClick={() => handleSort('Campaigns')}>Campaigns</th>
                                        <th onClick={() => handleSort('clicks')}>clicks</th>
                                        <th onClick={() => handleSort('Cost')}>Cost</th>
                                        <th onClick={() => handleSort('Conversions')}>Conversions</th>
                                        <th onClick={() => handleSort('Revenue')}>Revenue</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* plz click on row name....  click, cost and conversion */}
                                    {sortedData.map((row) => (
                                        <tr key={row.id}>
                                            <td>{row.Campaigns}</td>
                                            <td>{row.clicks}</td>
                                            <td>{row.Cost}</td>
                                            <td>{row.Conversions}</td>
                                            <td>{row.Revenue}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </Col>

                        <Col>
                            <AdsInsights />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}
export default Dashboard;