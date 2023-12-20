import React, { useEffect, useState } from "react";
import { getAllOrgService, getAllUserService } from "../apiServices";
import { orgTable, userTable } from "../constants/dashboard.constant";
import TableM from "../components/Table";
import { Card, Container } from "react-bootstrap";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [users, setUsers] = useState([]);
  const [organization, setOrganization] = useState([]);

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("userData")));
  }, []);

  useEffect(() => {
    (async () => {
      if (userData && userData.role === "admin") {
        setOrganization((await getAllOrgService()).data.data);
      }
      setUsers((await getAllUserService()).data.data);
    })();
  }, [userData]);
  return (
    <div>
      <Container>
        <h2 className="text-capitalize text-primary my-5 text-center">
          Welcome {userData?.name ? userData?.name : "user"}
        </h2>
        {userData?.role === "user" && (
          <Card>
            <Card.Body>
              <div>
                <p>{userData.mobile}</p>
                <p>{userData.email}</p>
              </div>
            </Card.Body>
          </Card>
        )}
        {userData?.role === "admin" && (
          <>
            <h5 className="text-center">Users</h5>
            <TableM
              tableHeadings={userTable}
              role={userData?.role}
              data={users}
            />
          </>
        )}
        {userData?.role === "admin" && (
          <>
            <h5 className="text-center">Organizations</h5>
            <TableM
              tableHeadings={orgTable}
              role={userData?.role}
              data={organization}
            />
          </>
        )}
      </Container>
    </div>
  );
};

export default Dashboard;
