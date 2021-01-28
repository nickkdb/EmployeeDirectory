import React from "react";
import API from '../utils/API';
import Pages from './page';
import { Table, Container, Row } from 'react-bootstrap';

class Temp extends React.Component {
    state = {
        items: [],
        filtered: null,
        sorted: null
    }

    componentDidMount() {
        API.listEmployees().then(res => {
            console.log(res.data.results);
            this.setState({items: res.data.results})
        })
    }
    
    handleChange= (event) => {
        this.setState({filtered: event.target.value})
    }

    handleClick= () => {
        const {items, sorted} = this.state;
        let result;

        if (sorted== null || sorted== true) {
            this.setState({sorted: false});
            result= items.sort(function(a,b) {
                if (a.name.first < b.name.first) {return -1;}
                if (a.name.first > b.name.first) {return 1;} 
            })
        } else if (sorted== false) {
            this.setState({sorted: true});
            result= items.sort(function(a,b) {
                if (a.name.first > b.name.first) {return -1;}
                if (a.name.first < b.name.first) {return 1;}
            })
        }

        

        this.setState({items: result});
    }

    filterData= () => {
        const {items, filtered} = this.state;
        let updated= items.filter(el => {
            if (filtered == null) {
                return el
            } else if (el.name.first.toLowerCase().includes(filtered.toLowerCase()) || 
            el.name.last.toLowerCase().includes(filtered.toLowerCase()) ||
            el.email.includes(filtered) ||
            el.phone.includes(filtered) || 
            el.dob.date.includes(filtered)) {
                return el
            }
        })
        return updated;
    }

    render() {
        const style= {
            marginTop: "10px",
            marginBottom: "25px"
        }
        const spanStyle= {
            marginLeft: "5px",
            cursor: "pointer",
            color: "firebrick"
        }
        const {filtered, items} = this.state;
        
        const searchResults= this.filterData().map(el => {
            return (
                <Pages users={el} />
            )
        })
        return (
            <div style={{textAlign: "center"}}>
                <input placeholder= {"Search for Employee"}style={style}onChange={(event) => this.handleChange(event)} />
                <Container>
                    <Row>

                        <Table variant="dark">
                            <thead>
                                <tr>
                                <th>Image</th>
                                <th>Name<span onClick={this.handleClick}style={spanStyle}>↕</span></th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>DOB</th>
                                </tr>
                            </thead>

                            <tbody>                               
                                {searchResults}                               
                            </tbody>
                        </Table>

                    </Row>
                </Container>
            </div>
        )
    }
}

export default Temp;