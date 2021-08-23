/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
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
    Col,
    Button,
    UncontrolledTooltip,
  } from "reactstrap";
  // core components
  import Header from "components/Headers/HeaderBlank.js";

  import { connect } from 'react-redux';
import { Component } from "react";
  
  //const CustomerList = () => {
class QuoteList extends Component {
    render(){
      //console.log(this.props)
      const { quotes } = this.props;
      
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
                  <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Quotes</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Create
                    </Button>
                  </Col>
                </Row>

                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Quote No.</th>                      
                      <th scope="col">Forename</th>
                      <th scope="col">Surname</th>
                      <th scope="col">Email</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                      {quotes.map(quote => {
                          return[
                            <tr>
                            <td>{quote.documentNo}</td>                              
                            <td>{quote.forename}</td>
                            <td>{quote.surname}</td>
                            <td>{quote.email}</td>
                            <td className="text-right">
                                <UncontrolledDropdown>
                                <DropdownToggle
                                    className="btn-icon-only text-light"
                                    href="#pablo"
                                    role="button"
                                    size="sm"
                                    color=""
                                    onClick={(e) => e.preventDefault()}
                                >
                                    <i className="fas fa-ellipsis-v" />
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu-arrow" right>
                                    <DropdownItem
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                    >
                                    Edit
                                    </DropdownItem>
                                    <DropdownItem
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                    >
                                    Delete
                                    </DropdownItem>
                                    <DropdownItem
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                    >
                                    Something else here
                                    </DropdownItem>
                                </DropdownMenu>
                                </UncontrolledDropdown>
                            </td>
                            </tr>
                ]; })}
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
                          onClick={(e) => e.preventDefault()}
                          tabIndex="-1"
                        >
                          <i className="fas fa-angle-left" />
                          <span className="sr-only">Previous</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem className="active">
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          2 <span className="sr-only">(current)</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          3
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
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
      </Container>
      </>
    );
  }};

  const mapStateToProps = (state) =>{
    return{
        quotes: state.other.quotes
    }
  }

  export default connect(mapStateToProps)(QuoteList);
  