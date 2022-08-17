import React from 'react';


// generate random engagement name in name property
const data = [
    {
        name: "Swoogo - t4i-Event Registration",
        requestID: "2886-5849512",
        mechanism: "",
        status: "",
    },
    {
        name: "SalesLoft.Marketing.SalesEngagementPlatform",
        requestID: "2886-5383512",
        mechanism: "",
        status: "",
    },
    {
        name: "LookBack.CG.UserRecordedResearch [RA1]",
        requestID: "2886-5383512",
        mechanism: "",
        status: "",
    },
    {
        name: "Swoogo - t4i-Event Registration",
        requestID: "2886-5849512",
        mechanism: "",
        status: "",
    },
    {
        name: "SalesLoft.Marketing.SalesEngagementPlatform",
        requestID: "2886-5383512",
        mechanism: "",
        status: "",
    },
    {
        name: "LookBack.CG.UserRecordedResearch [RA1]",
        requestID: "2886-5383512",
        mechanism: "",
        status: "",
    },
    {
        name: "Swoogo - t4i-Event Registration",
        requestID: "2886-5849512",
        mechanism: "",
        status: "",
    },
    {
        name: "SalesLoft.Marketing.SalesEngagementPlatform",
        requestID: "2886-5383512",
        mechanism: "",
        status: "",
    },
    {
        name: "LookBack.CG.UserRecordedResearch [RA1]",
        requestID: "2886-5383512",
        mechanism: "",
        status: "",
    },
]

const Table = () => {
    return (
        <div className="table__container">
            <table className='table'>
                <thead>
                    <tr>
                        <th>
                            <input type="checkbox" />
                        </th>
                        <th>
                            <div className="th__inner">
                                <span>Engagement Type</span>
                                <span className='icon'>
                                    <ion-icon name="caret-up-outline"></ion-icon>
                                    <ion-icon name="caret-down-outline"></ion-icon>
                                </span>
                            </div>
                        </th>
                        <th>
                            <div className="th__inner">
                                <span>Vendor Request ID</span>
                                <span className='icon'>
                                    <ion-icon name="caret-up-outline"></ion-icon>
                                    <ion-icon name="caret-down-outline"></ion-icon>
                                </span>
                            </div>
                        </th>
                        <th>
                            <div className="th__inner">
                                <span>Mechanism</span>
                                <span className='icon'>
                                    <ion-icon name="caret-up-outline"></ion-icon>
                                    <ion-icon name="caret-down-outline"></ion-icon>
                                </span>
                            </div>
                        </th>
                        <th>
                            <div className="th__inner">
                                <span>Status</span>
                                <span className='icon'>
                                    <ion-icon name="caret-up-outline"></ion-icon>
                                    <ion-icon name="caret-down-outline"></ion-icon>
                                </span>
                            </div>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>{item.name}</td>
                            <td className='requestID'>{item.requestID}</td>
                            <td>{item.mechanism || "------"}</td>
                            <td>{item.status || "------"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;