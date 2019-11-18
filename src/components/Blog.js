import React, { Component } from 'react';
import API from 'services/api';
import { CardImg, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import format from 'date-fns/format';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: []
    };
  }

  componentDidMount = () => {
    this.setState({ isLoading: true });
    this.getPosts();
  };

  getPosts = () => {
    API.get('/posts?search=telegram').then(res => {
      this.setState({ post: [res.data], isLoading: false });
    });
  };

  getImgWithRegex = text => {
    let regexRule = new RegExp(/\b(https?:\/\/\S+(?:png|jpe?g|gif)\S*)\b/);
    let results = regexRule.exec(text);
    if (results) return results[0];
    return 'https://via.placeholder.com/400';
  };

  render = () => {
    let dateFormat = 'DD/MM/YYYY - HH:MM'; // Date output format
    const page = this.state.post.map((post, key) => {
      return (
        <div className='blog' key={key}>
          <p className='blog--section--title'>Blog</p>
          <span className='blog--section--subtitle'>
            Novidades e notícias sobre o Telegram
          </span>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-4'>
                <div className='blog--card'>
                  <div className='blog--card__front'>
                    <div className='card'>
                      <CardImg
                        top
                        width='100%'
                        src={this.getImgWithRegex(post[0].content.rendered)}
                        alt='Imagem do Post'
                      />
                      <div className='card-body'>
                        <CardSubtitle className='blog--date'>
                          <span>{format(post[0].date, dateFormat)}</span>
                        </CardSubtitle>

                        <CardTitle className='blog--postname'>
                          <span>
                            {post[0].title.rendered.replace('&#8211;', '–')}
                          </span>
                        </CardTitle>
                      </div>
                    </div>
                  </div>
                  <div className='blog--card__back'>
                    <p className='blog--post--descript'>
                      {post[0].excerpt.rendered.substr(3, 160) + '...'}
                    </p>
                    <a
                      target='_blank'
                      rel='noopener noreferrer'
                      href={post[0].guid.rendered}
                    >
                      <Button size='sm'>Continuar lendo</Button>
                    </a>
                    <div className='blog--social'>
                      <span className='blog--social__icon'>
                        <i className='fab fa-telegram'></i>Compartilhar
                      </span>
                      <span className='blog--social__icon'>
                        <i className='fab fa-twitter'></i>Tweet
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-sm-4'>
                <div className='blog--card'>
                  <div className='blog--card__front'>
                    <div className='card'>
                      <CardImg
                        top
                        width='100%'
                        src={this.getImgWithRegex(post[1].content.rendered)}
                        alt='Imagem do Post'
                      />
                      <CardBody>
                        <CardSubtitle className='blog--date'>
                          <span>{format(post[1].date, dateFormat)}</span>
                        </CardSubtitle>
                        <CardTitle className='blog--postname'>
                          {post[1].title.rendered.replace('&#8211;', '–')}
                        </CardTitle>
                      </CardBody>
                    </div>
                  </div>
                  <div className='blog--card__back'>
                    <p className='blog--post--descript'>
                      {post[1].excerpt.rendered.substr(3, 160) + '...'}
                    </p>
                    <a
                      target='_blank'
                      rel='noopener noreferrer'
                      href={post[1].guid.rendered}
                    >
                      <Button size='sm'>Continuar lendo</Button>
                    </a>
                    <div className='blog--social'>
                      <span className='blog--social__icon'>
                        <i className='fab fa-telegram'></i>Compartilhar
                      </span>
                      <span className='blog--social__icon'>
                        <i className='fab fa-twitter'></i>Tweet
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-sm-4'>
                <div className='blog--card'>
                  <div className='blog--card__front'>
                    <div className='card'>
                      <CardImg
                        top
                        width='100%'
                        src={this.getImgWithRegex(post[2].content.rendered)}
                        alt='Imagem do Post'
                      />
                      <CardBody>
                        <CardSubtitle className='blog--date'>
                          <span>{format(post[2].date, dateFormat)}</span>
                        </CardSubtitle>
                        <CardTitle className='blog--postname'>
                          {post[2].title.rendered.replace('&#8211;', '–')}
                        </CardTitle>
                      </CardBody>
                    </div>
                  </div>
                  <div className='blog--card__back'>
                    <p className='blog--post--descript'>
                      {post[2].excerpt.rendered.substr(3, 160) + '...'}
                    </p>
                    <a
                      target='_blank'
                      rel='noopener noreferrer'
                      href={post[2].guid.rendered}
                    >
                      <Button size='sm'>Continuar lendo</Button>
                    </a>
                    <div className='blog--social'>
                      <span className='blog--social__icon'>
                        <i className='fab fa-telegram'></i>Compartilhar
                      </span>
                      <span className='blog--social__icon'>
                        <i className='fab fa-twitter'></i>Tweet
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return page;
  };
}

export default Blog;
