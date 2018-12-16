import React from 'react';
import { Button, Form, Input, Row, Col } from 'reactstrap';

class FestivalAddArtistForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {uuid: ''};
    }

    handleChange = (props) => (event) => {
        this.setState({[props]: event.target.value});
    };

    onSubmit = () => {
        if (this.state.uuid) {
            this.props.addArtist(this.state.uuid);
            this.setState({uuid: ''});
        }
    };

    render() {
        const {artists} = this.props;
        const options = artists.map((item) => (<option key={item.uuid} value={item.uuid}>{`${item.first_name} ${item.last_name}`}</option>));
        return (
            <Form>
                <Row form>
                    <Col md={10}>
                        <Input type="select" name="select"
                               value={this.state.title}
                               onChange={this.handleChange('uuid')} >
                            <option value="">Select artist</option>
                            {options}
                        </Input>
                    </Col>
                    <Col md={2} className="text-center">
                        <Button color="primary" size="sm" block onClick={this.onSubmit}>Add artist</Button>
                    </Col>
                </Row>
            </Form>
        )
    };
}

export default FestivalAddArtistForm;
