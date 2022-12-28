import React from "react";
import "./FormStyle.css";

import {
  Container,
  Row,
  Col,
  Input,
  Form,
  FormGroup,
  Label,
  Button,
} from "reactstrap";

const Form_field = () => {
  return (
    <Container fluid style={{ padding: "2.6rem" }}>
      <h1 className="main__heading">Own a franchise</h1>
      <p className="main__paragraph">
        With Years of franchising expertise we are able to offer comprehensive
        support for our Master Franchisees all over Pakistan.
        <br /> just fill this form and we will get back to you
      </p>

      <Form>
        {/* Row 1*/}
        <Row className="row__input">
          <Col>
            <div>
              <Input placeholder="Full Name *" type="text" />
            </div>
          </Col>
          <Col>
            <div>
              <Input placeholder="Company Name (if any)" type="text" />
            </div>
          </Col>
        </Row>
        {/* Row 2*/}
        <Row className="row__input">
          <Col>
            <div>
              <Input placeholder="Landline" type="number" />
            </div>
          </Col>
          <Col>
            <div>
              <Input placeholder="Cell Phone *" type="number" />
            </div>
          </Col>
        </Row>
        {/* Row 3*/}
        <Row className="row__input">
          <Col>
            <div>
              <Input placeholder="Email *" type="email" />
            </div>
          </Col>
          <Col>
            <div>
              <Input
                placeholder="What line of business are you currently in. *"
                type="text"
              />
            </div>
          </Col>
        </Row>

        {/* Row 4*/}
        <Row className="row__input">
          <Col>
            <div>
              <Input placeholder="Address *" type="text" />
            </div>
          </Col>
        </Row>

        {/* Row 5 */}
        <Row className="row__input">
          <Col>
            <div>
              <Input placeholder="City *" type="text" />
            </div>
          </Col>
          <Col>
            <div>
              <Input placeholder="State/Province *" type="text" />
            </div>
          </Col>
        </Row>

        {/* Row 6*/}
        <Row className="row__input">
          <FormGroup tag="fieldset">
            <Label className="text__bold">
              Do you own property at this location ?*
            </Label>
            <FormGroup check>
              <Input name="radio1" type="radio" />
              <Label check className="text__bold">
                Yes
              </Label>
            </FormGroup>
            <FormGroup check>
              <Input name="radio1" type="radio" />{" "}
              <Label check className="text__bold">
                No
              </Label>
            </FormGroup>
          </FormGroup>
        </Row>

        {/* Row 7 */}
        <Row className="row__input">
          <Col>
            <FormGroup>
              <Label className="text__bold">How did you hear about us ?</Label>
              <Input type="textarea" />
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Form_field;
