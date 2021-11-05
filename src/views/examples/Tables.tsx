/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
} from "reactstrap";
// core components
import Header from "../../components/Headers/Header";
import { withFadeIn } from "../../components/HOC/withFadeIn";

class Tables extends React.PureComponent {
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          {/* Table */}
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Card tables</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Project</th>
                      <th scope="col">Budget</th>
                      <th scope="col">Status</th>
                      <th scope="col">Users</th>
                      <th scope="col">Completion</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <a
                            className="avatar rounded-circle mr-3"
                            href="#pablo"
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <img
                              alt="..."
                              /* eslint-disable global-require */
                              src={require("../../assets/img/theme/bootstrap.jpg")}
                              /* eslint-enable global-require */
                            />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">
                              Argon Design System
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>$2,500 USD</td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-warning" />
                          pending
                        </Badge>
                      </td>
                      <td>
                        <div className="avatar-group">
                          <a
                            className="avatar avatar-sm"
                            href="#pablo"
                            id="tooltip742438047"
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <img
                              alt="..."
                              className="rounded-circle"
                              /* eslint-disable global-require */
                              src={require("../../assets/img/theme/team-1-800x800.jpg")}
                              /* eslint-enable global-require */
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip742438047"
                          >
                            Ryan Tompson
                          </UncontrolledTooltip>
                          <a
                            className="avatar avatar-sm"
                            href="#pablo"
                            id="tooltip941738690"
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <img
                              alt="..."
                              className="rounded-circle"
                              /* eslint-disable global-require */
                              src={require("../../assets/img/theme/team-2-800x800.jpg")}
                              /* eslint-enable global-require */
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip941738690"
                          >
                            Romina Hadid
                          </UncontrolledTooltip>
                          <a
                            className="avatar avatar-sm"
                            href="#pablo"
                            id="tooltip804044742"
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <img
                              alt="..."
                              className="rounded-circle"
                              /* eslint-disable global-require */
                              src={require("../../assets/img/theme/team-3-800x800.jpg")}
                              /* eslint-enable global-require */
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip804044742"
                          >
                            Alexander Smith
                          </UncontrolledTooltip>
                          <a
                            className="avatar avatar-sm"
                            href="#pablo"
                            id="tooltip996637554"
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <img
                              alt="..."
                              className="rounded-circle"
                              /* eslint-disable global-require */
                              src={require("../../assets/img/theme/team-4-800x800.jpg")}
                              /* eslint-enable global-require */
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip996637554"
                          >
                            Jessica Doe
                          </UncontrolledTooltip>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">60%</span>
                          <div>
                            <Progress
                              max="100"
                              value="60"
                              barClassName="bg-danger"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#pablo"
<<<<<<< HEAD
                              onClick={(e) => e.preventDefault()}
=======
                              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                            >
                              Action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
<<<<<<< HEAD
                              onClick={(e) => e.preventDefault()}
=======
                              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                            >
                              Another action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
<<<<<<< HEAD
                              onClick={(e) => e.preventDefault()}
=======
                              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                            >
                              Something else here
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <a
                            className="avatar rounded-circle mr-3"
                            href="#pablo"
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <img
                              alt="..."
                              /* eslint-disable global-require */
                              src={require("../../assets/img/theme/angular.jpg")}
                              /* eslint-enable global-require */
                            />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">
                              Angular Now UI Kit PRO
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>$1,800 USD</td>
                      <td>
                        <Badge color="" className="badge-dot">
                          <i className="bg-success" />
                          completed
                        </Badge>
                      </td>
                      <td>
                        <div className="avatar-group">
                          <a
                            className="avatar avatar-sm"
                            href="#pablo"
                            id="tooltip746418347"
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <img
                              alt="..."
                              className="rounded-circle"
                              /* eslint-disable global-require */
                              src={require("../../assets/img/theme/team-1-800x800.jpg")}
                              /* eslint-enable global-require */
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip746418347"
                          >
                            Ryan Tompson
                          </UncontrolledTooltip>
                          <a
                            className="avatar avatar-sm"
                            href="#pablo"
                            id="tooltip102182364"
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <img
                              alt="..."
                              className="rounded-circle"
                              /* eslint-disable global-require */
                              src={require("../../assets/img/theme/team-2-800x800.jpg")}
                              /* eslint-enable global-require */
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip102182364"
                          >
                            Romina Hadid
                          </UncontrolledTooltip>
                          <a
                            className="avatar avatar-sm"
                            href="#pablo"
                            id="tooltip406489510"
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <img
                              alt="..."
                              className="rounded-circle"
                              /* eslint-disable global-require */
                              src={require("../../assets/img/theme/team-3-800x800.jpg")}
                              /* eslint-enable global-require */
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip406489510"
                          >
                            Alexander Smith
                          </UncontrolledTooltip>
                          <a
                            className="avatar avatar-sm"
                            href="#pablo"
                            id="tooltip476840018"
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <img
                              alt="..."
                              className="rounded-circle"
                              /* eslint-disable global-require */
                              src={require("../../assets/img/theme/team-4-800x800.jpg")}
                              /* eslint-enable global-require */
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip476840018"
                          >
                            Jessica Doe
                          </UncontrolledTooltip>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">100%</span>
                          <div>
                            <Progress
                              max="100"
                              value="100"
                              barClassName="bg-success"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#pablo"
<<<<<<< HEAD
                              onClick={(e) => e.preventDefault()}
=======
                              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                            >
                              Action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
<<<<<<< HEAD
                              onClick={(e) => e.preventDefault()}
=======
                              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                            >
                              Another action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
<<<<<<< HEAD
                              onClick={(e) => e.preventDefault()}
=======
                              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                            >
                              Something else here
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <a
                            className="avatar rounded-circle mr-3"
                            href="#pablo"
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <img
                              alt="..."
                              /* eslint-disable global-require */
                              src={require("../../assets/img/theme/sketch.jpg")}
                              /* eslint-enable global-require */
                            />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">
                              Black Dashboard
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>$3,150 USD</td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-danger" />
                          delayed
                        </Badge>
                      </td>
                      <td>
                        <div className="avatar-group">
                          <a
                            className="avatar avatar-sm"
                            href="#pablo"
                            id="tooltip753056318"
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <img
                              alt="..."
                              className="rounded-circle"
                              /* eslint-disable global-require */
                              src={require("../../assets/img/theme/team-1-800x800.jpg")}
                              /* eslint-enable global-require */
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip753056318"
                          >
                            Ryan Tompson
                          </UncontrolledTooltip>
                          <a
                            className="avatar avatar-sm"
                            href="#pablo"
                            id="tooltip441753266"
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <img
                              alt="..."
                              className="rounded-circle"
                              /* eslint-disable global-require */
                              src={require("../../assets/img/theme/team-2-800x800.jpg")}
                              /* eslint-enable global-require */
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip441753266"
                          >
                            Romina Hadid
                          </UncontrolledTooltip>
                          <a
                            className="avatar avatar-sm"
                            href="#pablo"
                            id="tooltip188462246"
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <img
                              alt="..."
                              className="rounded-circle"
                              /* eslint-disable global-require */
                              src={require("../../assets/img/theme/team-3-800x800.jpg")}
                              /* eslint-enable global-require */
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip188462246"
                          >
                            Alexander Smith
                          </UncontrolledTooltip>
                          <a
                            className="avatar avatar-sm"
                            href="#pablo"
                            id="tooltip621168444"
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <img
                              alt="..."
                              className="rounded-circle"
                              /* eslint-disable global-require */
                              src={require("../../assets/img/theme/team-4-800x800.jpg")}
                              /* eslint-enable global-require */
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip621168444"
                          >
                            Jessica Doe
                          </UncontrolledTooltip>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">72%</span>
                          <div>
                            <Progress
                              max="100"
                              value="72"
                              barClassName="bg-danger"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#pablo"
<<<<<<< HEAD
                              onClick={(e) => e.preventDefault()}
=======
                              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                            >
                              Action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
<<<<<<< HEAD
                              onClick={(e) => e.preventDefault()}
=======
                              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                            >
                              Another action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
<<<<<<< HEAD
                              onClick={(e) => e.preventDefault()}
=======
                              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                            >
                              Something else here
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <a
                            className="avatar rounded-circle mr-3"
                            href="#pablo"
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <img
                              alt="..."
                              /* eslint-disable global-require */
                              src={require("../../assets/img/theme/react.jpg")}
                              /* eslint-enable global-require */
                            />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">
                              React Material Dashboard
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>$4,400 USD</td>
                      <td>
                        <Badge color="" className="badge-dot">
                          <i className="bg-info" />
                          on schedule
                        </Badge>
                      </td>
                      <td>
                        <div className="avatar-group">
                          <a
                            className="avatar avatar-sm"
                            href="#pablo"
                            id="tooltip875258217"
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <img
                              alt="..."
                              className="rounded-circle"
                              /* eslint-disable global-require */
                              src={require("../../assets/img/theme/team-1-800x800.jpg")}
                              /* eslint-enable global-require */
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip875258217"
                          >
                            Ryan Tompson
                          </UncontrolledTooltip>
                          <a
                            className="avatar avatar-sm"
                            href="#pablo"
                            id="tooltip834416663"
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <img
                              alt="..."
                              className="rounded-circle"
                              /* eslint-disable global-require */
                              src={require("../../assets/img/theme/team-2-800x800.jpg")}
                              /* eslint-enable global-require */
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip834416663"
                          >
                            Romina Hadid
                          </UncontrolledTooltip>
                          <a
                            className="avatar avatar-sm"
                            href="#pablo"
                            id="tooltip372449339"
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <img
                              alt="..."
                              className="rounded-circle"
                              /* eslint-disable global-require */
                              src={require("../../assets/img/theme/team-3-800x800.jpg")}
                              /* eslint-enable global-require */
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip372449339"
                          >
                            Alexander Smith
                          </UncontrolledTooltip>
                          <a
                            className="avatar avatar-sm"
                            href="#pablo"
                            id="tooltip108714769"
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <img
                              alt="..."
                              className="rounded-circle"
                              /* eslint-disable global-require */
                              src={require("../../assets/img/theme/team-4-800x800.jpg")}
                              /* eslint-enable global-require */
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip108714769"
                          >
                            Jessica Doe
                          </UncontrolledTooltip>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">90%</span>
                          <div>
                            <Progress
                              max="100"
                              value="90"
                              barClassName="bg-info"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#pablo"
<<<<<<< HEAD
                              onClick={(e) => e.preventDefault()}
=======
                              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                            >
                              Action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
<<<<<<< HEAD
                              onClick={(e) => e.preventDefault()}
=======
                              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                            >
                              Another action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
<<<<<<< HEAD
                              onClick={(e) => e.preventDefault()}
=======
                              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                            >
                              Something else here
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <a
                            className="avatar rounded-circle mr-3"
                            href="#pablo"
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <img
                              alt="..."
                              /* eslint-disable global-require */
                              src={require("../../assets/img/theme/vue.jpg")}
                              /* eslint-enable global-require */
                            />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">
                              Vue Paper UI Kit PRO
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>$2,200 USD</td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-success" />
                          completed
                        </Badge>
                      </td>
                      <td>
                        <div className="avatar-group">
                          <a
                            className="avatar avatar-sm"
                            href="#pablo"
                            id="tooltip664029969"
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <img
                              alt="..."
                              className="rounded-circle"
                              /* eslint-disable global-require */
                              src={require("../../assets/img/theme/team-1-800x800.jpg")}
                              /* eslint-enable global-require */
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip664029969"
                          >
                            Ryan Tompson
                          </UncontrolledTooltip>
                          <a
                            className="avatar avatar-sm"
                            href="#pablo"
                            id="tooltip806693074"
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <img
                              alt="..."
                              className="rounded-circle"
                              /* eslint-disable global-require */
                              src={require("../../assets/img/theme/team-2-800x800.jpg")}
                              /* eslint-enable global-require */
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip806693074"
                          >
                            Romina Hadid
                          </UncontrolledTooltip>
                          <a
                            className="avatar avatar-sm"
                            href="#pablo"
                            id="tooltip844096937"
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <img
                              alt="..."
                              className="rounded-circle"
                              /* eslint-disable global-require */
                              src={require("../../assets/img/theme/team-3-800x800.jpg")}
                              /* eslint-enable global-require */
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip844096937"
                          >
                            Alexander Smith
                          </UncontrolledTooltip>
                          <a
                            className="avatar avatar-sm"
                            href="#pablo"
                            id="tooltip757459971"
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <img
                              alt="..."
                              className="rounded-circle"
                              /* eslint-disable global-require */
                              src={require("../../assets/img/theme/team-4-800x800.jpg")}
                              /* eslint-enable global-require */
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip757459971"
                          >
                            Jessica Doe
                          </UncontrolledTooltip>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">100%</span>
                          <div>
                            <Progress
                              max="100"
                              value="100"
                              barClassName="bg-success"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#pablo"
<<<<<<< HEAD
                              onClick={(e) => e.preventDefault()}
=======
                              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                            >
                              Action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
<<<<<<< HEAD
                              onClick={(e) => e.preventDefault()}
=======
                              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                            >
                              Another action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
<<<<<<< HEAD
                              onClick={(e) => e.preventDefault()}
=======
                              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                            >
                              Something else here
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <CardFooter className="py-4">
                  <nav aria-label="...">
                    <Pagination
                      className="pagination justify-content-end mb-0"
                      listClassName="justify-content-end mb-0"
                    >
                      <PaginationItem className="disabled">
                        <PaginationLink
                          href="#pablo"
<<<<<<< HEAD
                          onClick={(e) => e.preventDefault()}
=======
                          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          tabIndex={0}
                        >
                          <i className="fas fa-angle-left" />
                          <span className="sr-only">Previous</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem className="active">
                        <PaginationLink
                          href="#pablo"
<<<<<<< HEAD
                          onClick={(e) => e.preventDefault()}
=======
                          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
<<<<<<< HEAD
                          onClick={(e) => e.preventDefault()}
=======
                          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                        >
                          2
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
<<<<<<< HEAD
                          onClick={(e) => e.preventDefault()}
=======
                          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                        >
                          3
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
<<<<<<< HEAD
                          onClick={(e) => e.preventDefault()}
=======
                          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                        >
                          <i className="fas fa-angle-right" />
                          <span className="sr-only">Next</span>
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </nav>
                </CardFooter>
              </Card>
            </div>
          </Row>
          {/* Dark table */}
          <Row className="mt-5">
            <div className="col">
              <Card className="bg-default shadow">
                <CardHeader className="bg-transparent border-0">
                  <h3 className="text-white mb-0">Card tables</h3>
                </CardHeader>
                <Table
                  className="align-items-center table-dark table-flush"
                  responsive
                >
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Project</th>
                      <th scope="col">Budget</th>
                      <th scope="col">Status</th>
                      <th scope="col">Users</th>
                      <th scope="col">Completion</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <a
                            className="avatar rounded-circle mr-3"
                            href="#pablo"
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <img
                              alt="..."
                              /* eslint-disable global-require */
                              src={require("../../assets/img/theme/bootstrap.jpg")}
                              /* eslint-enable global-require */
                            />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">
                              Argon Design System
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>$2,500 USD</td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-warning" />
                          pending
                        </Badge>
                      </td>
                      <td>
                        <div className="avatar-group">
                          <a
                            className="avatar avatar-sm"
                            href="#pablo"
                            id="tooltip731399078"
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <img
                              alt="..."
                              className="rounded-circle"
                              /* eslint-disable global-require */
                              src={require("../../assets/img/theme/team-1-800x800.jpg")}
                              /* eslint-enable global-require */
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip731399078"
                          >
                            Ryan Tompson
                          </UncontrolledTooltip>
                          <a
                            className="avatar avatar-sm"
                            href="#pablo"
                            id="tooltip491083084"
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <img
                              alt="..."
                              className="rounded-circle"
                              /* eslint-disable global-require */
                              src={require("../../assets/img/theme/team-2-800x800.jpg")}
                              /* eslint-enable global-require */
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip491083084"
                          >
                            Romina Hadid
                          </UncontrolledTooltip>
                          <a
                            className="avatar avatar-sm"
                            href="#pablo"
                            id="tooltip528540780"
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <img
                              alt="..."
                              className="rounded-circle"
                              /* eslint-disable global-require */
                              src={require("../../assets/img/theme/team-3-800x800.jpg")}
                              /* eslint-enable global-require */
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip528540780"
                          >
                            Alexander Smith
                          </UncontrolledTooltip>
                          <a
                            className="avatar avatar-sm"
                            href="#pablo"
                            id="tooltip237898869"
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <img
                              alt="..."
                              className="rounded-circle"
                              /* eslint-disable global-require */
                              src={require("../../assets/img/theme/team-4-800x800.jpg")}
                              /* eslint-enable global-require */
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip237898869"
                          >
                            Jessica Doe
                          </UncontrolledTooltip>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">60%</span>
                          <div>
                            <Progress
                              max="100"
                              value="60"
                              barClassName="bg-warning"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#pablo"
<<<<<<< HEAD
                              onClick={(e) => e.preventDefault()}
=======
                              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                            >
                              Action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
<<<<<<< HEAD
                              onClick={(e) => e.preventDefault()}
=======
                              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                            >
                              Another action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
<<<<<<< HEAD
                              onClick={(e) => e.preventDefault()}
=======
                              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                            >
                              Something else here
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <a
                            className="avatar rounded-circle mr-3"
                            href="#pablo"
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <img
                              alt="..."
                              /* eslint-disable global-require */
                              src={require("../../assets/img/theme/angular.jpg")}
                              /* eslint-enable global-require */
                            />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">
                              Angular Now UI Kit PRO
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>$1,800 USD</td>
                      <td>
                        <Badge color="" className="badge-dot">
                          <i className="bg-success" />
                          completed
                        </Badge>
                      </td>
                      <td>
                        <div className="avatar-group">
                          <a
                            className="avatar avatar-sm"
                            href="#pablo"
                            id="tooltip188614932"
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <img
                              alt="..."
                              className="rounded-circle"
                              /* eslint-disable global-require */
                              src={require("../../assets/img/theme/team-1-800x800.jpg")}
                              /* eslint-enable global-require */
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip188614932"
                          >
                            Ryan Tompson
                          </UncontrolledTooltip>
                          <a
                            className="avatar avatar-sm"
                            href="#pablo"
                            id="tooltip66535734"
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <img
                              alt="..."
                              className="rounded-circle"
                              /* eslint-disable global-require */
                              src={require("../../assets/img/theme/team-2-800x800.jpg")}
                              /* eslint-enable global-require */
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip66535734"
                          >
                            Romina Hadid
                          </UncontrolledTooltip>
                          <a
                            className="avatar avatar-sm"
                            href="#pablo"
                            id="tooltip427561578"
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <img
                              alt="..."
                              className="rounded-circle"
                              /* eslint-disable global-require */
                              src={require("../../assets/img/theme/team-3-800x800.jpg")}
                              /* eslint-enable global-require */
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip427561578"
                          >
                            Alexander Smith
                          </UncontrolledTooltip>
                          <a
                            className="avatar avatar-sm"
                            href="#pablo"
                            id="tooltip904098289"
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <img
                              alt="..."
                              className="rounded-circle"
                              /* eslint-disable global-require */
                              src={require("../../assets/img/theme/team-4-800x800.jpg")}
                              /* eslint-enable global-require */
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip904098289"
                          >
                            Jessica Doe
                          </UncontrolledTooltip>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">100%</span>
                          <div>
                            <Progress
                              max="100"
                              value="100"
                              barClassName="bg-success"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#pablo"
<<<<<<< HEAD
                              onClick={(e) => e.preventDefault()}
=======
                              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                            >
                              Action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
<<<<<<< HEAD
                              onClick={(e) => e.preventDefault()}
=======
                              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                            >
                              Another action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
<<<<<<< HEAD
                              onClick={(e) => e.preventDefault()}
=======
                              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                            >
                              Something else here
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <a
                            className="avatar rounded-circle mr-3"
                            href="#pablo"
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <img
                              alt="..."
                              /* eslint-disable global-require */
                              src={require("../../assets/img/theme/sketch.jpg")}
                              /* eslint-enable global-require */
                            />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">
                              Black Dashboard
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>$3,150 USD</td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-danger" />
                          delayed
                        </Badge>
                      </td>
                      <td>
                        <div className="avatar-group">
                          <a
                            className="avatar avatar-sm"
                            href="#pablo"
                            id="tooltip707904950"
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <img
                              alt="..."
                              className="rounded-circle"
                              /* eslint-disable global-require */
                              src={require("../../assets/img/theme/team-1-800x800.jpg")}
                              /* eslint-enable global-require */
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip707904950"
                          >
                            Ryan Tompson
                          </UncontrolledTooltip>
                          <a
                            className="avatar avatar-sm"
                            href="#pablo"
                            id="tooltip353988222"
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <img
                              alt="..."
                              className="rounded-circle"
                              /* eslint-disable global-require */
                              src={require("../../assets/img/theme/team-2-800x800.jpg")}
                              /* eslint-enable global-require */
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip353988222"
                          >
                            Romina Hadid
                          </UncontrolledTooltip>
                          <a
                            className="avatar avatar-sm"
                            href="#pablo"
                            id="tooltip467171202"
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <img
                              alt="..."
                              className="rounded-circle"
                              /* eslint-disable global-require */
                              src={require("../../assets/img/theme/team-3-800x800.jpg")}
                              /* eslint-enable global-require */
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip467171202"
                          >
                            Alexander Smith
                          </UncontrolledTooltip>
                          <a
                            className="avatar avatar-sm"
                            href="#pablo"
                            id="tooltip362118155"
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <img
                              alt="..."
                              className="rounded-circle"
                              /* eslint-disable global-require */
                              src={require("../../assets/img/theme/team-4-800x800.jpg")}
                              /* eslint-enable global-require */
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip362118155"
                          >
                            Jessica Doe
                          </UncontrolledTooltip>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">72%</span>
                          <div>
                            <Progress
                              max="100"
                              value="72"
                              barClassName="bg-danger"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#pablo"
<<<<<<< HEAD
                              onClick={(e) => e.preventDefault()}
=======
                              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                            >
                              Action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
<<<<<<< HEAD
                              onClick={(e) => e.preventDefault()}
=======
                              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                            >
                              Another action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
<<<<<<< HEAD
                              onClick={(e) => e.preventDefault()}
=======
                              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                            >
                              Something else here
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <a
                            className="avatar rounded-circle mr-3"
                            href="#pablo"
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <img
                              alt="..."
                              /* eslint-disable global-require */
                              src={require("../../assets/img/theme/react.jpg")}
                              /* eslint-enable global-require */
                            />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">
                              React Material Dashboard
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>$4,400 USD</td>
                      <td>
                        <Badge color="" className="badge-dot">
                          <i className="bg-info" />
                          on schedule
                        </Badge>
                      </td>
                      <td>
                        <div className="avatar-group">
                          <a
                            className="avatar avatar-sm"
                            href="#pablo"
                            id="tooltip226319315"
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <img
                              alt="..."
                              className="rounded-circle"
                              /* eslint-disable global-require */
                              src={require("../../assets/img/theme/team-1-800x800.jpg")}
                              /* eslint-enable global-require */
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip226319315"
                          >
                            Ryan Tompson
                          </UncontrolledTooltip>
                          <a
                            className="avatar avatar-sm"
                            href="#pablo"
                            id="tooltip711961370"
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <img
                              alt="..."
                              className="rounded-circle"
                              /* eslint-disable global-require */
                              src={require("../../assets/img/theme/team-2-800x800.jpg")}
                              /* eslint-enable global-require */
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip711961370"
                          >
                            Romina Hadid
                          </UncontrolledTooltip>
                          <a
                            className="avatar avatar-sm"
                            href="#pablo"
                            id="tooltip216246707"
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <img
                              alt="..."
                              className="rounded-circle"
                              /* eslint-disable global-require */
                              src={require("../../assets/img/theme/team-3-800x800.jpg")}
                              /* eslint-enable global-require */
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip216246707"
                          >
                            Alexander Smith
                          </UncontrolledTooltip>
                          <a
                            className="avatar avatar-sm"
                            href="#pablo"
                            id="tooltip638048561"
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <img
                              alt="..."
                              className="rounded-circle"
                              /* eslint-disable global-require */
                              src={require("../../assets/img/theme/team-4-800x800.jpg")}
                              /* eslint-enable global-require */
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip638048561"
                          >
                            Jessica Doe
                          </UncontrolledTooltip>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">90%</span>
                          <div>
                            <Progress
                              max="100"
                              value="90"
                              barClassName="bg-info"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#pablo"
<<<<<<< HEAD
                              onClick={(e) => e.preventDefault()}
=======
                              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                            >
                              Action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
<<<<<<< HEAD
                              onClick={(e) => e.preventDefault()}
=======
                              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                            >
                              Another action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
<<<<<<< HEAD
                              onClick={(e) => e.preventDefault()}
=======
                              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                            >
                              Something else here
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <a
                            className="avatar rounded-circle mr-3"
                            href="#pablo"
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <img
                              alt="..."
                              /* eslint-disable global-require */
                              src={require("../../assets/img/theme/vue.jpg")}
                              /* eslint-enable global-require */
                            />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">
                              Vue Paper UI Kit PRO
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>$2,200 USD</td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-success" />
                          completed
                        </Badge>
                      </td>
                      <td>
                        <div className="avatar-group">
                          <a
                            className="avatar avatar-sm"
                            href="#pablo"
                            id="tooltip781594051"
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <img
                              alt="..."
                              className="rounded-circle"
                              /* eslint-disable global-require */
                              src={require("../../assets/img/theme/team-1-800x800.jpg")}
                              /* eslint-enable global-require */
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip781594051"
                          >
                            Ryan Tompson
                          </UncontrolledTooltip>
                          <a
                            className="avatar avatar-sm"
                            href="#pablo"
                            id="tooltip840372212"
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <img
                              alt="..."
                              className="rounded-circle"
                              /* eslint-disable global-require */
                              src={require("../../assets/img/theme/team-2-800x800.jpg")}
                              /* eslint-enable global-require */
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip840372212"
                          >
                            Romina Hadid
                          </UncontrolledTooltip>
                          <a
                            className="avatar avatar-sm"
                            href="#pablo"
                            id="tooltip497647175"
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <img
                              alt="..."
                              className="rounded-circle"
                              /* eslint-disable global-require */
                              src={require("../../assets/img/theme/team-3-800x800.jpg")}
                              /* eslint-enable global-require */
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip497647175"
                          >
                            Alexander Smith
                          </UncontrolledTooltip>
                          <a
                            className="avatar avatar-sm"
                            href="#pablo"
                            id="tooltip951447946"
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <img
                              alt="..."
                              className="rounded-circle"
                              /* eslint-disable global-require */
                              src={require("../../assets/img/theme/team-4-800x800.jpg")}
                              /* eslint-enable global-require */
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip951447946"
                          >
                            Jessica Doe
                          </UncontrolledTooltip>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">100%</span>
                          <div>
                            <Progress
                              max="100"
                              value="100"
                              barClassName="bg-danger"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
<<<<<<< HEAD
                            onClick={(e) => e.preventDefault()}
=======
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#pablo"
<<<<<<< HEAD
                              onClick={(e) => e.preventDefault()}
=======
                              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                            >
                              Action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
<<<<<<< HEAD
                              onClick={(e) => e.preventDefault()}
=======
                              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                            >
                              Another action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
<<<<<<< HEAD
                              onClick={(e) => e.preventDefault()}
=======
                              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
>>>>>>> f915198f8e15267e7f344869d74596ec52ea7a53
                            >
                              Something else here
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default withFadeIn(Tables);
