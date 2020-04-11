import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import User from './User';
import users from '../data/users';

class UserList extends Component {

    constructor() {
        super()
        this.onSearchInputChange = this.onSearchInputChange.bind(this)
        this.getFilteredUsers = this.getFilteredUsers.bind(this)

        this.state = {
            users: users.results
        }
    }

    onSearchInputChange = (event) => {
        if (event.target.value) {
            this.getFilteredUsers(event.target.value)
        } else {
            this.setState({ users: users.results })
        }
    }

    getFilteredUsers(searchString) {
        var filteredUsers = users.results.filter(function (item) {
            return item.name.first.match(searchString) || item.name.last.match(searchString)
        });
        this.setState({ users: filteredUsers })
    }

    render() {
        return (
            <div>
                {this.state.users ? (
                    <div>
                        <Container>
                            <Row className="justify-content-md-center">
                                <Col md={{ span: 4 }}>
                                    <Form.Control type="text" id="searchInput" placeholder="Search for Users" onChange={this.onSearchInputChange} />
                                </Col>

                            </Row>
                            {this.state.users.map(currentUser => (
                                <Row className="justify-content-md-center">
                                    <User user={currentUser} />
                                </Row>
                            ))}
                        </Container>
                    </div>
                ) : "No users found"}
            </div>
        )
    }
}

export default UserList;