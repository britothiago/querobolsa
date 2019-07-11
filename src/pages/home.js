import React, { Component } from "react";
import styled from "styled-components";
import logo from "../assets/img/querobolsa.png";
import Modal from "./modal";

const All = styled.div`
  font-family: "Open Sans", sans-serif;
  font-size: 20px;
  position: relative;

  header {
    .container {
      margin-left: 20px;
      font-size: 65%;
      font-weight: bold;
      height: 60px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      color: #007a8d;
      padding-top: 10px;

      .col {
        width: 33%;
        display: flex;
        flex-direction: row;
        justify-content: center;

        .info {
          border-right: 3px solid rgba(100, 100, 100, 0.2);
          padding-right: 10px;
          height: 30px;
          margin-top: 3px;
        }

        .contact {
          width: 40%;
          margin-left: 15px;
        }

        .info,
        .contact {
          display: flex;
          flex-direction: row;
          text-align: center;
          vertical-align: middle;
          padding-top: 12px;

          .contact-info {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            margin-top: -5px;

            span {
              font-size: 80%;
            }
          }
        }

        img {
          margin-top: -10px;
          width: 110px;
        }

        .whats {
          color: #0fa866;
        }
      }

      .user-login {
        font-weight: bold;
        margin-top: 15px;

        div {
          margin-left: 10px;
        }
      }

      i {
        font-size: 160%;
        margin-right: 7px;
      }
    }

    .sub-container {
      background: #18acc4;
      color: #fff;
      display: flex;
      flex-direction: row;
      padding-left: 80px;

      div {
        width: 10%;
        height: 27px;
        font-size: 70%;
        justify-content: center;
      }

      .my-account {
        font-weight: bold;
        font-size: 75%;
      }

      .my-account,
      .favourite,
      .pre {
        font-weight: bold;
        padding-top: 8px;
        height: 30px;
      }

      .favourite,
      .pre {
        font-size: 60%;
        padding-top: 10px;
      }

      .favourite {
        background: #007a8d;
        padding-left: 25px;
      }
    }
  }

  main {
    padding-left: 80px;

    section {
      margin-bottom: 30px;
    }

    .breadcrumb {
      font-size: 65%;
      color: #007a8d;
      font-weight: bold;
      margin-top: 20px;

      span {
        margin-left: 8px;
      }

      .active {
        color: #1f2d30;
      }
    }

    .info-main {
      h1 {
        font-weight: bold;
        font-size: 150%;
      }

      p {
        font-size: 75%;
      }
    }

    .all-groups {
      display: flex;
      flex-direction: row;
      float: right;
      font-size: 65%;
      margin-right: 100px;
      margin-top: 20px;
      color: #007a8d;
      font-weight: bold;

      div {
        border: 1px solid #007a8d;
        padding: 5px 15px;
      }

      .all {
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
        background: #007a8d;
        color: #fff;
      }

      .all-1 {
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
      }
    }

    .add-course {
      border: 1px solid #fff;
      box-shadow: 1px 1px 6px #ddd;
      width: 20%;
      height: 350px;
      margin-top: 120px;
      margin-bottom: 120px;
      background: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 75%;
      text-align: center;

      .add-course-icon {
        font-size: 400%;
        margin-bottom: 10px;
        color: #18acc4;
      }

      .new-course {
        font-weight: bold;
      }

      .new-course-info {
        margin-top: 10px;
        font-size: 70%;
      }
    }
  }

  footer {
    margin-top: 200px;
    width: 100%;
    color: #fff;

    .footer {
      height: 100px;
      background: #007a8d;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      i {
        font-size: 200%;
      }

      .contact-choice {
        margin: 0 40px;
        display: flex;
        flex-direction: row;
      }

      .text-footer {
        margin-left: 10px;
        font-size: 70%;
        font-weight: bold;
        display: flex;
        flex-direction: column;
      }

      .secondary-text-footer {
        font-size: 80%;
      }
    }

    .subfooter {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      height: 100px;
      background: #18acc4;

      .developed-by {
        font-size: 55%;
        font-weight: bold;
      }
    }
  }
`;

class Home extends Component {
  state = {
    showModal: false,
    courses: []
  };

  openModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  handleCourses = courses => {
    this.setState({ showModal: false });
    this.setState({ courses });
  };

  render() {
    console.log(this.state.courses);
    return (
      <All>
        {this.state.showModal && (
          <Modal modal={this.closeModal} courses={this.handleCourses} />
        )}

        <header>
          <div className="container">
            <div className="col">
              <div className="col info">
                <i className="fas fa-info-circle" /> Como funciona
              </div>
              <div className="col contact">
                <div className="whats">
                  <i className="fab fa-whatsapp" />
                </div>
                <div className="contact-info">
                  <span>0800 123 2222</span>
                  <span>Envie mensagem ou ligue</span>
                </div>
              </div>
            </div>
            <div className="col">
              <img src={logo} alt="" />
            </div>
            <div className="col user-login">
              <div>Nome Sobrenome</div>
              <div>
                <i className="far fa-user-circle" />
              </div>
            </div>
          </div>
          <div className="sub-container">
            <div className="my-account">
              <span>Minha conta</span>
            </div>
            <div className="pre">Pré-matrículas</div>
            <div className="favourite">Bolsas favoritas</div>
          </div>
        </header>
        <main>
          <section className="breadcrumb">
            <span>Home</span>
            <span>/</span>
            <span>Minha conta</span>
            <span>/</span>
            <span className="active">Bolsas favoritas</span>
          </section>
          <section className="info-main">
            <h1>Bolsas favoritas</h1>
            <p>
              Adicione bolsas de cursos e faculdades do seu interesse e receba
              atualizações com as melhores ofertas disponíveis.
            </p>
          </section>
          <section className="all-groups">
            <div className="all">
              <span>Todos os semestres</span>
            </div>
            <div className="all-2">
              <span>2º semestre de 2019</span>
            </div>
            <div className="all-1">
              <span>1º semestre de 2020</span>
            </div>
          </section>

          <section>
            <div className="add-course">
              <div className="add-course-icon">
                <i className="fas fa-plus-circle" onClick={this.openModal} />
              </div>
              <div className="new-course">
                <span>Adicionar bolsa</span>
              </div>
              <div className="new-course-info">
                Clique aqui para adicionar bolsas de
                <br />
                curso de seu interesse
              </div>
            </div>
          </section>
        </main>
        <footer>
          <div className="footer">
            <div className="contact-choice">
              <div className="icon-footer">
                <i className="fab fa-whatsapp" />
              </div>
              <div className="text-footer">
                <span>0800 123 2222</span>
                <span className="secondary-text-footer">Seg - Sex 8h-22h</span>
              </div>
            </div>

            <div className="contact-choice">
              <div className="icon-footer">
                <i className="far fa-comments" />
              </div>
              <div className="text-footer">
                <span>Chat ao vivo</span>
                <span className="secondary-text-footer">Seg - Sex 8h-22h</span>
              </div>
            </div>
            <div className="contact-choice">
              <div className="icon-footer">
                <i className="far fa-envelope" />
              </div>
              <div className="text-footer">
                <span>Mande um e-mail</span>
                <span className="secondary-text-footer">
                  Respondemos rapidinho
                </span>
              </div>
            </div>
            <div className="contact-choice">
              <div className="icon-footer">
                <i className="fas fa-info-circle" />
              </div>
              <div className="text-footer">
                <span>Central de ajuda</span>
                <span className="secondary-text-footer">
                  Encontre todas as respostas
                </span>
              </div>
            </div>
          </div>
          <div className="subfooter">
            <span className="developed-by">
              Feito com <i className="far fa-heart" /> pela Quero Educação
            </span>
          </div>
        </footer>
      </All>
    );
  }
}
export default Home;
