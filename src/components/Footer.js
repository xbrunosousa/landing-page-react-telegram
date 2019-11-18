import React from 'react';

export default () => (
  <div className='footerApp'>
    <div className='container'>
      <div className='row'>
        <div className='col-sm-4 offset-sm-1'>
          <p className='footerApp--tg-logo'>
            <i className='fab fa-telegram'></i> telegram
          </p>
          <span className='footerApp--tg-logo__descript'>
            Telegram é um aplicativo de mensagens baseado em nuvem com foco em
            segurança e velocidade.
          </span>
        </div>

        <div className='col-sm-2'>
          <p className='footerApp--title'>Sobre</p>
          <div className='footerApp--links'>
            <span>Sobre</span>
            <span>Blog</span>
            <span>FAQ</span>
            <span>Contacte-nos</span>
          </div>
        </div>
        <div className='col-sm-2'>
          <p className='footerApp--title'>Download</p>
          <div className='footerApp--links'>
            <span>iPhone/iPad</span>
            <span>Android</span>
            <span>Windows Phone</span>
            <span>Pc/Mac/Linux</span>
          </div>
        </div>
        <div className='col-sm-2'>
          <p className='footerApp--title'>Plataforma</p>

          <div className='footerApp--links'>
            <span>Telegram API</span>
            <span>Protocolo</span>
            <span>Telegram Bots</span>
            <span>Help</span>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='footerApp--bottom'>
          <hr />
          <span className='telegram-inc'>
            © {new Date().getFullYear()} telegram Inc.
          </span>
          <span className='footerApp--author'>
            Desenvolvido por{' '}
            <a
              href='https://brunosousa.dev'
              target='_blank'
              rel='noopener noreferrer'
            >
              Bruno Sousa
            </a>
            .
          </span>
        </div>
      </div>
    </div>
  </div>
);
