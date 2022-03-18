import { useState, MouseEvent } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import useFetchClassDetail from '../../hooks/useFetchClassDetail';

import './styles.scss';

const Detail = () => {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const params = useParams<Record<string, string | undefined>>();
  const { data } = useFetchClassDetail(Number(params.id || ''));

  const toggleForm = () => setShowForm((prev) => !prev);

  const handleNegativeClick = () => navigate('/');

  const handlePositiveClick = () => toggleForm();

  const handleFormInputChange = (type = '', value = '') => {
    setFormData((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const handleSubmitForm = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('form', formData);
  };

  return (
    <div className="detail page">
      <div className="mb-4 p-2 border-bottom">
        <small className="text-danger" onClick={handleNegativeClick} role="presentation">go back</small>
      </div>
      <div className="px-2 mb-4">
        <p className="title">
          {data.name}
        </p>
        <p className="description">{data.description}</p>
      </div>
      <div className="px-2 mb-4">
        <p className="title">
          Mentors
        </p>
        <p className="description">{data.mentors.map((mentor) => mentor.name).join(', ')}</p>
      </div>
      <hr />
      {
        !showForm
          ? (
            <div className="d-grid px-2">
              <h4 className="mb-2">Do you want to enroll ?</h4>
              <Button variant="primary" className="mb-3" onClick={handlePositiveClick}> Yes, I want to enroll!</Button>
              <Button variant="outline-secondary" onClick={handleNegativeClick}> No, I want to check another classes</Button>
            </div>
          ) : (
            <div className="form px-2">
              <Form.Group className="mb-3" controlId="formFullName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter full name" onChange={(e) => handleFormInputChange('name', e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e) => handleFormInputChange('email', e.target.value)} />
              </Form.Group>

              <Button variant="primary" type="button" onClick={handleSubmitForm}>
                Enroll
              </Button>
            </div>
          )
      }
    </div>
  );
};

export default Detail;
