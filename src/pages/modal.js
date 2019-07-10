import React from "react";
import styled from "styled-components";

const Box = styled.div`
  background: rgba(0, 0, 0, 0.4);
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .modal {
    border: 1px solid #fff;
    border-radius: 5px;
    margin-top: -100px;
    width: 500px;
    height: 600px;
    background: #fff;
    display: flex;
    flex-direction: column;
    padding: 0 30px;

    .section-intro {
      h2 {
        font-size: 120%;
        font-weight: 700;
      }

      p {
        margin-top: -20px;
        font-size: 70%;
      }
    }

    .section-field {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-top: 20px;

      .result {
        font-size: 110%;
      }
    }

    .city,
    .field-title {
      text-transform: uppercase;
    }

    .city,
    .field-title,
    .result {
      display: flex;
      flex-direction: column;
      width: 50%;
      padding: 5px;

      .options-modal {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-transform: none;
        color: rgba(0, 0, 0, 0.7);

        span {
          font-size: 65%;
          margin-top: -10px;
        }

        div {
          margin: 10px;
        }
      }

      .range {
        margin-top: 10px;
      }

      span {
        font-size: 50%;
        font-weight: bold;
      }

      select {
        height: 30px;
        border-radius: 3px;
        padding: 5px;
        color: rgba(0, 0, 0, 0.7);
      }
    }
  }
`;

const Modal = ({ modal }) => {
  return (
    <Box>
      <div className="modal" id="modal">
        <div className="section-intro">
          <h2>Adicionar bolsa</h2>
          <p>Filtre e adicione as bolsas de seu interesse</p>
        </div>

        <div className="section-field">
          <div className="city">
            <span>Selecione sua cidade</span>
            <select>
              <option>São José dos Campos</option>
            </select>
          </div>
          <div className="city">
            <span>Selecione sua cidade</span>
            <select>
              <option />
            </select>
          </div>
        </div>

        <div className="section-field">
          <div className="field-title">
            <span>Como você quer estudar?</span>

            <div className="options-modal">
              <div>
                <input type="checkbox" />
                <span>Presencial</span>
              </div>
              <div>
                <input type="checkbox" />
                <span>A distância</span>
              </div>
            </div>
          </div>
          <div className="field-title">
            <span>Até quando você pode pagar?</span>
            <input
              className="range"
              type="range"
              name="points"
              min="0"
              max="10000"
            />
          </div>
        </div>

        <div className="section-field">
          <div className="result">
            <span>Resultado:</span>
          </div>
          <div className="result">
            <span>Ordenar por</span>{" "}
            <span className="university-name">Nome da Faculdade</span>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Modal;
