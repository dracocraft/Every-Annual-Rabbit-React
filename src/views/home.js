import React from 'react'

import { Helmet } from 'react-helmet'

import FeatureCard from '../components/feature-card'
import Question1 from '../components/question1'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Every Annual Rabbit</title>
        <meta property="og:title" content="Every Annual Rabbit" />
      </Helmet>
      <div className="home-header">
        <header
          data-thq="thq-navbar"
          className="navbarContainer home-navbar-interactive"
        >
          <span className="logo">VORTEXHOST</span>
          <div data-thq="thq-navbar-nav" className="home-desktop-menu">
            <nav className="home-links"></nav>
            <div className="home-buttons">
              <button disabled="true" className="home-login buttonFlat">
                Login
              </button>
              <button disabled="true" className="home-register buttonFilled">
                Register
              </button>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon socialIcons">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div
            data-thq="thq-mobile-menu"
            className="home-mobile-menu1 mobileMenu"
          >
            <div className="home-nav">
              <div className="home-top">
                <span className="logo">VORTEXHOST</span>
                <div data-thq="thq-close-menu" className="home-close-menu">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="home-icon02 socialIcons"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="home-links1">
                <span className="home-nav12 bodySmall">Inicio</span>
                <span className="home-nav22 bodySmall">Características</span>
                <span className="home-nav32 bodySmall">Planes</span>
                <span className="home-nav42 bodySmall">Equipo</span>
                <span className="home-nav52 bodySmall">Blog</span>
              </nav>
              <div className="home-buttons1">
                <button className="buttonFlat">Login</button>
                <button className="buttonFilled">Register</button>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="home-icon04 socialIcons"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="home-icon06 socialIcons"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="home-icon08 socialIcons"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="home-hero">
        <div className="heroContainer home-hero1">
          <div className="home-container01">
            <h1 className="home-hero-heading heading1">VortexHost</h1>
            <span className="home-hero-sub-heading bodyLarge">
              <span>
                <span>
                  <span>Tu mejor opción en hosting de servidores</span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
              <span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
            </span>
            <div className="home-btn-group">
              <a href="#Pricing" className="home-hero-button1 buttonFilled">
                Ver planes de hosting
              </a>
              <a href="#Faq" className="home-hero-button2 buttonFlat">
                Aprende más ➡️
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="home-features">
        <div className="featuresContainer">
          <div className="home-features1">
            <div className="home-container02">
              <span className="overline">
                <span>features</span>
                <br></br>
              </span>
              <h2 className="home-features-heading heading2">
                Características destacadas de VortexHost
              </h2>
              <span className="home-features-sub-heading bodyLarge">
                <span>
                  <span>
                    <span>
                      Descubre por qué VortexHost es la mejor opción para tu
                      servidor de juegos
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <div className="home-container03">
              <FeatureCard
                heading="Alta velocidad y rendimiento"
                subHeading="Servidores potentes para una experiencia de juego fluida"
              ></FeatureCard>
              <FeatureCard
                heading="Soporte técnico 24/7"
                subHeading="Equipo de soporte disponible en todo momento para resolver tus dudas"
              ></FeatureCard>
              <FeatureCard
                heading="Panel de control intuitivo"
                subHeading="Fácil gestión de tu servidor a través de un panel sencillo y completo"
              ></FeatureCard>
              <FeatureCard
                heading="Seguridad garantizada"
                subHeading="Protección avanzada para mantener tu servidor seguro en todo momento"
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>
      <div className="home-pricing">
        <div className="pricingContainer">
          <div id="Pricing" className="home-container04">
            <span className="overline">
              <span>PRECIO</span>
              <br></br>
            </span>
            <h2 className="heading2">
              Elige el plan que se adapte a tus necesidades
            </h2>
            <span className="home-pricing-sub-heading bodyLarge">
              <span>
                <span>
                  Potencia tu proyecto con nuestros planes flexibles y
                  escalables
                </span>
              </span>
            </span>
          </div>
          <div className="home-container05">
            <div className="home-pricing-card freePricingCard">
              <div className="home-container06">
                <span className="home-text36 heading3">GRATIS</span>
                <span className="bodySmall">
                  Plan ideal para empezar con tu proyecto
                </span>
              </div>
              <div className="home-container07">
                <span className="home-text37">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home-free-plan-price">0</span>
              </div>
              <div className="home-container08">
                <div className="home-container09">
                  <span className="home-text40">✔</span>
                  <span className="bodySmall">1 GB de RAM</span>
                </div>
                <div className="home-container10">
                  <span className="home-text41">✔</span>
                  <span className="bodySmall">Almacenamiento ilimitado</span>
                </div>
                <div className="home-container11">
                  <span className="home-text42">✔</span>
                  <span className="bodySmall">Soporte técnico básico</span>
                </div>
                <div className="home-container12">
                  <span className="home-text43">✔</span>
                  <span className="bodySmall">Acceso a panel de control</span>
                </div>
              </div>
              <a
                href="https://discord.gg/Y8ZDt647dY"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link buttonOutline"
              >
                <span>
                  <span>Continuar con el GRATIS</span>
                  <br></br>
                </span>
              </a>
            </div>
            <div className="basicPricingCard home-pricing-card1">
              <div className="home-container13">
                <span className="home-text47 heading3">BASICO</span>
                <span className="bodySmall">
                  Plan perfecto para proyectos pequeños
                </span>
              </div>
              <div className="home-container14">
                <span className="home-text48">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home-basic-plan-pricing">5</span>
                <span className="home-text51">/ mes</span>
              </div>
              <div className="home-container15">
                <div className="home-container16">
                  <span className="home-text52">✔</span>
                  <span>Todas las funciones del plan GRATIS</span>
                </div>
                <div className="home-container17">
                  <span className="home-text54">✔</span>
                  <span className="bodySmall">4GB de RAM</span>
                </div>
                <div className="home-container18">
                  <span className="home-text55">✔</span>
                  <span className="bodySmall">Almacenamiento ilimitado</span>
                </div>
                <div className="home-container19">
                  <span className="home-text56">✔</span>
                  <span className="bodySmall">Soporte técnico prioritario</span>
                </div>
                <div className="home-container20">
                  <span className="home-text57">✔</span>
                  <span className="bodySmall">
                    Acceso a panel de control avanzado
                  </span>
                </div>
              </div>
              <a
                href="https://tienda.dracocraft.xyz"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link1 buttonFilledSecondary"
              >
                <span>
                  <span>Probar el plan BASICO</span>
                  <br></br>
                </span>
              </a>
            </div>
            <div className="home-pricing-card2 proPricingCard">
              <div className="home-container21">
                <span className="home-text61 heading3">
                  <span>PRO</span>
                  <br></br>
                </span>
                <span className="bodySmall">
                  Plan avanzado para proyectos exigentes
                </span>
              </div>
              <div className="home-container22">
                <span className="home-text64">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home-pro-plan-pricing">8</span>
                <span className="home-text67">/ mes</span>
              </div>
              <div className="home-container23">
                <div className="home-container24">
                  <span className="home-text68">✔</span>
                  <span className="bodySmall">
                    Todas las funciones del plan BASICO
                  </span>
                </div>
                <div className="home-container25">
                  <span className="home-text70">✔</span>
                  <span className="bodySmall">7GB de RAM</span>
                </div>
                <div className="home-container26">
                  <span className="home-text71">✔</span>
                  <span className="bodySmall">Almacenamiento ilimitado</span>
                </div>
                <div className="home-container27">
                  <span className="home-text72">✔</span>
                  <span className="bodySmall">
                    Soporte técnico premium 24/7
                  </span>
                </div>
                <div className="home-container28">
                  <span className="home-text73">✔</span>
                  <span className="bodySmall">
                    Acceso root y personalización completa
                  </span>
                </div>
              </div>
              <a
                href="https://tienda.dracocraft.xyz"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link2 buttonFilledSecondary"
              >
                Probar el plan PRO
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="home-banner">
        <div className="bannerContainer home-banner1">
          <h1 className="home-banner-heading heading2">
            Servidores potentes y confiables para tu proyecto
          </h1>
          <span className="home-banner-sub-heading bodySmall">
            <span>
              <span>
                <span>
                  En VortexHost ofrecemos soluciones de hosting de servidores de
                  alta calidad, con un rendimiento excepcional y un soporte
                  técnico dedicado. Ya sea para un servidor de juegos, un
                  servidor web o cualquier otra aplicación, tenemos la
                  infraestructura que necesitas para tener éxito. Descubre
                  nuestros planes y comienza hoy mismo.
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
            <span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
          </span>
          <a href="#Pricing" className="home-banner-button buttonFilled">
            <span>
              <span>Ver precios</span>
              <br></br>
            </span>
          </a>
        </div>
      </div>
      <div className="home-faq">
        <div className="faqContainer">
          <div id="Faq" className="home-faq1">
            <div className="home-container29">
              <span className="overline">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="home-text94">Pregunas comunes</h2>
              <span className="home-text95 bodyLarge">
                <span>
                  Aqui estan algunas de las preguntas mas comunes que nos hacen
                </span>
                <br></br>
              </span>
            </div>
            <div className="home-container30">
              <Question1
                answer="Aceptamos pagos a través de PayPal y tarjetas de crédito/débito y cryptomonedas."
                question="¿Cuáles son los métodos de pago aceptados?"
              ></Question1>
              <Question1
                answer="Una vez completado el pago, tu servidor se activará en cuestión de minutos y lo tendrás que pedir en el discord."
                question="¿Cuánto tiempo tarda en activarse mi servidor una vez realizado el pago?"
              ></Question1>
              <Question1
                answer="Sí, nuestro equipo de soporte técnico está disponible las 24 horas del día, los 7 días de la semana."
                question="¿Ofrecen soporte técnico las 24 horas del día?"
              ></Question1>
              <Question1
                answer="Sí, puedes cambiar de plan de hosting en cualquier momento a través de discord."
                question="¿Puedo cambiar de plan de hosting una vez contratado?"
              ></Question1>
              <Question1
                answer="Contamos con medidas de seguridad avanzadas, como copias de seguridad automáticas y protección DDoS, para garantizar la seguridad de tus datos."
                question="¿Qué medidas de seguridad tienen para proteger mis datos?"
              ></Question1>
            </div>
          </div>
        </div>
      </div>
      <div className="home-footer">
        <footer className="footerContainer home-footer1">
          <div className="home-container31">
            <span className="logo">VORTEXHOST</span>
            <nav className="home-nav1">
              <span className="bodySmall">Inicio</span>
              <span className="home-nav221 bodySmall">Características</span>
              <span className="home-nav321 bodySmall">Planes</span>
              <span className="home-nav421 bodySmall">Equipo</span>
            </nav>
          </div>
          <div className="home-separator"></div>
          <div className="home-container32">
            <span className="bodySmall home-text98">
              © 2024 VortexHost, Todos los derechos reservados.
            </span>
            <div className="home-icon-group1">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="home-icon10 socialIcons"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="home-icon12 socialIcons"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="home-icon14 socialIcons"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home
