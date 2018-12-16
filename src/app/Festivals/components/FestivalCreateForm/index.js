import React from 'react';
import { Button, Form, Input, Row, Col } from 'reactstrap';

class ArtistCreateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title: ''};
    }

    handleChange = (props) => (event) => {
        this.setState({[props]: event.target.value});
    };

    onSubmit = () => {
        if (this.state.title) {
            this.props.onCreate(this.state);
            this.setState({title: ''});
        }
    };

    render() {
        return (
            <Form>
                <Row form>
                    <Col md={10}>
                        <Input type="text" bsSize="sm" placeholder="Title"
                               value={this.state.title}
                               onChange={this.handleChange('title')}
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
