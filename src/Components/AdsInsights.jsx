import React, { useState } from 'react';
import DoughnutChart from './DoughnutChart';

function AdsInsights() {
    const [showChart, setShowChart] = useState(true);

    const TableView = () => {
        setShowChart(!showChart);
    };

    return (
        <>
            <div>
                {showChart ? (
                    <DoughnutChart />
                ) : (
                    <div>
                        <h2>Table View</h2>

                        <table>
                            <tr>Ad Insights</tr>
                            <tr>
                                <th>Group</th>
                                <th>Clicks</th>
                                <th>Cost</th>
                                <th>Conversions</th>
                                <th>Revenue</th>
                            </tr>
                            <tr>
                                <td>Cosmetics</td>
                                <td>712</td>
                                <td>USD 4,272</td>
                                <td>8</td>
                                <td>USD 16,568</td>
                            </tr>
                            <tr>
                                <td>Serums</td>
                                <td>3,961</td>
                                <td>USD 27,331</td>
                                <td>115</td>
                                <td>USD 362,526</td>
                            </tr>
                            <tr>
                                <td>FaceWash</td>
                                <td>9,462</td>
                                <td>USD 76,831</td>
                                <td>123</td>
                                <td>USD 266,800</td>
                            </tr>
                            <tr>
                                <td>Shampoos</td>
                                <td>439</td>
                                <td>USD 2,151</td>
                                <td>5</td>
                                <td>USD 11,029</td>
                            </tr>
                            <tr>
                                <td>Conditioners</td>
                                <td>1,680</td>
                                <td>USD 3,864</td>
                                <td>49</td>
                                <td>USD 175,245</td>
                            </tr>
                            <tr>
                                <td>Facewash 2</td>
                                <td>4,978</td>
                                <td>USD 29,370</td>
                                <td>189</td>
                                <td>USD 623,106</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>26,510</td>
                                <td>USD 1,43,819</td>
                                <td>189</td>
                                <td>USD 15,73,563</td>
                            </tr>
                        </table>

                    </div>
                )}<br /><br />
                <button onClick={TableView}>TableView</button>
            </div>
        </>
    );
}
export default AdsInsights;
