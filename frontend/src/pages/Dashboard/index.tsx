import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="GitHub Explorer Logo"/>
      <Title>explore repositórios no github</Title>

      <Form action="">
        <input placeholder="Digite o nome do seu repositório"/>
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="">
          <img src="https://avatars0.githubusercontent.com/u/62737540?s=460&u=09e9ee790a8aa4fddae19edd23e6c2c604390eae&v=4" alt="Foto Perfil Github"/>
          <div>
            <strong>ogawaluan/SearchForm</strong>
            <p>Criando uma pesquisa para um desafio</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="">
          <img src="https://avatars0.githubusercontent.com/u/62737540?s=460&u=09e9ee790a8aa4fddae19edd23e6c2c604390eae&v=4" alt="Foto Perfil Github"/>
          <div>
            <strong>ogawaluan/SearchForm</strong>
            <p>Criando uma pesquisa para um desafio</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="">
          <img src="https://avatars0.githubusercontent.com/u/62737540?s=460&u=09e9ee790a8aa4fddae19edd23e6c2c604390eae&v=4" alt="Foto Perfil Github"/>
          <div>
            <strong>ogawaluan/SearchForm</strong>
            <p>Criando uma pesquisa para um desafio</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  )
};

export default Dashboard;