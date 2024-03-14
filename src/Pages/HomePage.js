import React from 'react';
import './HomePage.css'; // Asegúrate de crear este archivo CSS
import '../Components/HeaderContent';

const HomePage = () => {
 return (
    <div className="home-page">'
    <header className="header">
      <h1>Hello Health</h1>
      <p>Rastreabilidad de Medicamentos en la Cadena de Suministro</p>
    </header>
      <main className="main-content">
        <section className="intro">
          <h2>Bienvenido a Hello Health</h2>
          <p>
            Somos una plataforma innovadora que utiliza la tecnología blockchain para mejorar la rastreabilidad de medicamentos. Nuestro sistema permite a los usuarios seguir el estado de los medicamentos, desde su fabricación hasta su entrega final, asegurando la calidad y seguridad de los productos farmacéuticos.
          </p>
        </section>
        <section className="features">
          <h2>Características Principales</h2>
          <ul>
            <li>Rastreo en tiempo real de medicamentos</li>
            <li>Alertas de caducidad</li>
            <li>Integración con blockchain para garantizar la autenticidad</li>
            <li>Acceso a información detallada de cada medicamento</li>
          </ul>
        </section>
      </main>
    </div>
 );
}

export default HomePage;