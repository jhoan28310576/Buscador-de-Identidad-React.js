import React from 'react';
import { Table } from 'react-bootstrap';

const PersonasTabla = ({ personas }) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Cargo</th>
                    <th>Empresa</th>
                    <th>Habilidades</th>
                    <th>Salario</th>
                </tr>
            </thead>
            <tbody>
                {personas.map((persona, index) => (
                    <tr key={index}>
                        <td>{persona.nombre}</td>
                        <td>{persona.apellido}</td>
                        <td>{persona.cargo}</td>
                        <td>{persona.empresa}</td>
                        <td>{persona.habilidades}</td>
                        <td>{persona.salario}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default PersonasTabla;
