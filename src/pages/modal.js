import React from "react";
import styled from "styled-components";

const Box = styled.div`
  background: rgba(0, 0, 0, 0.4);
  height: 100%;
  width: 100%;
  position: absolute;
  position: fixed;
  padding-top: 50px;
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

    .result-university {
      font-size: 55%;
      font-weight: bold;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      span {
        margin-left: 5px;
      }

      .university-name {
        color: #007a8d;
      }
    }

    .result-field {
      border-bottom: 1px solid #333;
    }

    .close {
      margin-top: 50px;
    }

    .courses-scroll {
      overflow: auto;

      ul {
        list-style: none;

        li {
          margin-bottom: 30px;
        }
      }

      .course {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-size: 62%;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);

        .checkbox-course {
          margin-left: -40px;
          width: 10%;
        }

        .logo-course {
          width: 25%;
          img {
            width: 80px;
          }
        }

        .info-course {
          width: 45%;
          display: flex;
          flex-direction: column;

          .title-course {
            color: #007a8d;
            font-weight: bold;
            margin-top: -10px;
            font-size: 100%;
          }

          span {
            font-size: 80%;
          }
        }

        .payment-course {
          display: flex;
          flex-direction: column;
          float: right;
          justify-content: center;
          align-items: center;
          width: 20%;
          font-size: 90%;
          margin-top: -20px;
          margin-left: 30px;

          .discounts {
            display: flex;
            flex-direction: row;

            strong {
              color: #0fa866;
            }
          }

          .price-course {
            color: #0fa866;
            font-weight: bold;
          }
        }
      }
    }
  }
`;

const Modal = ({ modal, courses }) => {
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
              <option value="" />
            </select>
          </div>
          <div className="city">
            <span>Selecione o curso de sua preferência</span>
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

        <div className="section-field result-field">
          <div className="result">
            <span>Resultado:</span>
          </div>
          <div className="result-university">
            <span>Ordenar por</span>{" "}
            <span className="university-name">
              <b>Nome da Faculdade</b>
            </span>
          </div>
        </div>

        <div className="section courses-scroll">
          <ul>
            {courses.data.map(item => (
              <li key={Math.ceil(Math.random() * Math.pow(10, 10))}>
                <div className="course">
                  <div className="checkbox-course">
                    <input type="checkbox" name="course-name" />
                  </div>
                  <div className="logo-course">
                    <img
                      src={item.university.logo_url}
                      alt={item.university.name}
                    />
                  </div>
                  <div className="info-course">
                    <span className="title-course">{item.course.name} </span>
                    <span>{item.course.level}</span>
                  </div>

                  <div className="payment-course">
                    <span className="discounts">
                      Bolsa de&nbsp;<strong>{item.discount_percentage}%</strong>
                    </span>
                    <span className="price-course">
                      R$<strong>{item.price_with_discount}</strong>/mês
                    </span>
                  </div>

                  <hr />
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="section close">
          <button className="btn-info" onClick={modal}>
            cancelar
          </button>
        </div>
      </div>
    </Box>
  );
};

export default Modal;
