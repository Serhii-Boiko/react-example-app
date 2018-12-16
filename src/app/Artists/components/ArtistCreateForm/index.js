import React from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

class ArtistCreateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {first_name: '', last_name: ''};
    }

    handleChange = (props) => (event) => {
        this.setState({[props]: event.target.value});
    };


    onSubmit = () => {
        if (this.state.first_name && this.state.last_name) {
            this.props.onCreate(this.state);
            this.setState({first_name: '', last_name: ''});
        }
    };

    render() {
        return (
            <Form>
                <Row form>
                    <Col md={5}>
                        <Input type="text" bsSize="sm" placeholder="First name"
                               value={this.state.first_name}
                               onChange={this.handleChange('first_name')}
                        />
                    </Col>
                    <Col md={5}>
                        <Input type="text" bsSize="sm" placeholder="Last name"
                               value={this.state.last_name}
                               onChange={this.handleChange('last_name')}
                        />
                    </Col>
                    <Col md={2} className="text-center">
                        <Button color="primary" size="sm" block onClick={this.onSubmit}>Add</Button>
                    </Col>
                </Row>
            </Form>
        )
    };
}

export default ArtistCreateForm;
