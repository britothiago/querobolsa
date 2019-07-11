import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

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

    .close {
      width: 100%;
      position: flex;
      flex-direction: row;

      .btn-add,
      .btn-cancel {
        float: right;
        font-size: 55%;
        font-weight: bold;
        height: 30px;
        padding: 8px 10px;
        margin-right: 10px;
        margin-bottom: 15px;
      }

      .btn-cancel {
        background: #fff;
        border: 1px solid #007a8d;
        border-radius: 2px;
        color: #007a8d;
      }

      .btn-add {
        background: #fdcb13;
        border: 1px solid #de9e1f;
        border-radius: 2px;
        color: #1f2d30;
      }
    }
  }
`;

class Modal extends Component {
  state = {
    courses: [],
    courses_filter: [],
    cities: [],
    courses_name: [],
    type_course: [],
    min_price: 0,
    max_price: 0,
    middle_price: 0,
    courses_choose: []
  };

  componentDidMount = async () => {
    const courses = await axios.get(
      "https://testapi.io/api/redealumni/scholarships"
    );
    this.setState({ courses: courses.data });
    this.setState({ courses_filter: courses.data });

    const cities_list = [];
    const courses_list = [];
    const prices_list = [];

    courses.data.map(item => cities_list.push(item.campus.city));
    courses.data.map(item => courses_list.push(item.course.name));
    courses.data.map(item => prices_list.push(item.full_price));

    const cities = cities_list.filter(
      (city, i) => cities_list.indexOf(city) === i
    );
    const courses_name = courses_list.filter(
      (name, i) => courses_list.indexOf(name) === i
    );

    this.setState({ cities: cities.sort() });
    this.setState({ courses_name: courses_name.sort() });
    this.setState({
      min_price: Math.min(...prices_list),
      max_price: Math.max(...prices_list)
    });
  };

  handleCity = e => {
    if (e.target.value !== "") {
      const courses = [];
      this.state.courses.map(item => {
        if (item.campus.city === e.target.value) {
          courses.push(item);
        }
        return false;
      });
      this.setState({ courses_filter: courses.sort() });
    } else {
      this.componentDidMount();
    }
  };

  handleCourseName = e => {
    const courses = [];
    this.state.courses_filter.map(item => {
      if (item.course.name === e.target.value) {
        courses.push(item);
      }
      return false;
    });
    this.setState({ courses_filter: courses });
  };

  handleCourseType = e => {
    const courses = [];
    this.state.courses_filter.map(item => {
      if (item.course.kind === e.target.value) {
        courses.push(item);
      }
      return false;
    });
    this.setState({ courses_filter: courses });
  };

  handleMarkCourse = item => {
    this.setState({
      courses_choose: [...this.state.courses_choose, item]
    });
  };

  render() {
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
              <select onChange={this.handleCity}>
                <option />
                {this.state.cities.map(item => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>
            <div className="city">
              <span>Selecione o curso de sua preferência</span>
              <select onChange={this.handleCourseName}>
                <option />
                {this.state.courses_name.map(item => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="section-field">
            <div className="field-title">
              <span>Como você quer estudar?</span>

              <div className="options-modal">
                <div>
                  <input
                    type="checkbox"
                    value="Presencial"
                    onClick={this.handleCourseType}
                  />
                  <span>Presencial</span>
                </div>
                <div>
                  <input
                    type="checkbox"
                    value="EaD"
                    onClick={this.handleCourseType}
                  />
                  <span>A distância</span>
                </div>
              </div>
            </div>

            <div className="field-title">
              <span>Até quando você pode pagar?</span>
              <span>{this.state.middle_price}</span>
              <input
                className="range"
                type="range"
                name="price"
                min={this.state.min_price}
                max={this.state.max_price}
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
              {this.state.courses_filter.map(item => (
                <li key={Math.ceil(Math.random() * Math.pow(10, 10))}>
                  <div className="course">
                    <div className="checkbox-course">
                      <input
                        type="checkbox"
                        name="course-name"
                        onClick={() => {
                          this.setState({
                            courses_choose: [...this.state.courses_choose, item]
                          });
                        }}
                      />
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
                        Bolsa de&nbsp;
                        <strong>{item.discount_percentage}%</strong>
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
            <button
              className="btn-add"
              onClick={() => {
                this.props.courses(this.state.courses_choose);
              }}
            >
              Adicionar bolsa(s)
            </button>
            <button className="btn-cancel" onClick={this.props.modal}>
              Cancelar
            </button>
          </div>
        </div>
      </Box>
    );
  }
}

export default Modal;
