import React from 'react'

const Questao01A = ({N, S, C}) => {
    N = 'Yara'
    S = 'Paula'
    C = 'Sistemas de Informação'
    return (
        <div>
            <h3>Aluno</h3>
            <h4> Nome: {N} </h4> 
            <h4> Sobrenome: {S} </h4>
            <h4> Curso: {C} </h4> 
        </div>
    )
}

export default Questao01A;