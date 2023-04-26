import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Diseases.css';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

const DiseasesList = () => {
  const [diseases, setDiseases] = useState([]);

  useEffect(() => {
    axios.get('/communicable_diseases')
      .then(response => {
        setDiseases(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container">
      <h2 className="mt-3 mb-3">Most Prevalent Communicable Diseases</h2>
      <div className="row">
        {diseases.map(disease => (
          <div key={disease.id} className="col-md-4 mb-4">
            <Card>
              <CardImg top width="100%" src={disease.image_url} alt={disease.name} />
              <CardBody>
                <CardTitle tag="h5">{disease.name}</CardTitle>
                <CardText>{disease.description}</CardText>
                <CardText><strong>Symptoms:</strong> {disease.symptoms}</CardText>
                <CardText><strong>Prevention measures:</strong> {disease.prevention_measures}</CardText>
                <CardText><strong>Most Prevalent:</strong> {disease.most_prevalent ? 'Yes' : 'No'}</CardText>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiseasesList;
