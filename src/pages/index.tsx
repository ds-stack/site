import React, { FC, useState } from 'react';
import {
  EuiTabs,
  EuiTab,
  EuiToolTip,
  EuiLink,
  EuiText,
} from '@elastic/eui';
import { EuiStepsHorizontal } from '../components/eui-overrides/steps_horizontal';

const euiStyles = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: 60,
};

const tabs = [
  {
    id: 'backend',
    name: 'Back-end',
    disabled: false,
  },
  {
    id: 'frontend',
    name: 'Front-end',
    disabled: false,
  },
  {
    id: 'devops',
    name: 'DevOps',
    disabled: false,
  },
];

const careerTabs = [
  {
    id: 'professional',
    name: 'Full-Time',
    disabled: false,
  },
  {
    id: 'contract',
    name: 'Contract',
    disabled: false,
  },
  {
    id: 'other',
    name: 'Other',
    disabled: false,
  },
];

const CareerCompanyImage = ({ src, children }: { src?: string, children?: any }) => (
  <>
    <div className="logo logo-career">
      <a href="/">
        <EuiToolTip position="top" content="Here is some tooltip text">
          <img src={src} alt=" " className="img-fluid" />
        </EuiToolTip>
      </a>
      {children}
    </div>
  </>
);

const careerSteps = [
  {
    title: 'Reccode',
    isComplete: true,
    onClick: () => undefined,
    render: () =>  <CareerCompanyImage src={'https://media-exp1.licdn.com/dms/image/C510BAQGcI5ac4iR8MQ/company-logo_200_200/0/1519910708977?e=1636588800&v=beta&t=tA9gUEq3KbzM1GdODkb1dRYqv-YP47HOOgvnNjmSZ1o'} />,
  },
  {
    title: 'Cubes',
    isComplete: true,
    onClick: () => undefined,
    render: () =>  <CareerCompanyImage src={'http://cubes.rs/wp-content/uploads/2018/12/logo-cube.png'} />,
  },
  {
    title: 'Telenor',
    isComplete: true,
    onClick: () => undefined,
    render: () =>  <CareerCompanyImage src={'https://www.telenor.rs/assets/img/logos/telenor-logo.png'} />,
  },
  {
    title: 'Ragebite',
    isComplete: true,
    onClick: () => undefined,
    render: () => <CareerCompanyImage src={'https://pbs.twimg.com/profile_images/1405147287202897923/z6URuPuU_400x400.jpg'} />
  },
  {
    title: 'Endava',
    isComplete: true,
    onClick: () => undefined,
    isSelected: true,
    render: () => <CareerCompanyImage src={'https://www.agile-serbia.rs/wp-content/uploads/2017/10/Endava-logo-site.png'} />
  },
  {
    title: 'Holycode',
    isComplete: true,
    onClick: () => undefined,
    isSelected: true,
    render: () => <CareerCompanyImage src={'https://media.itkonekt.com/2018/02/logoandslogan-holycode-vektorski-1-1.png'} />
  },
];

const Index: FC = () => {
  const [selectedTabId, setSelectedTabId] = useState('backend');
  const [selectedCareerTabId, setSelectedCareerTabId] = useState('professional');

  const onSelectedTabChanged = (id: string) => setSelectedTabId(id);
  const renderTabs = () => tabs.map((tab, index) => (
    <EuiTab
      onClick={() => onSelectedTabChanged(tab.id)}
      isSelected={tab.id === selectedTabId}
      disabled={tab.disabled}
      key={index}>
      {tab.name}
    </EuiTab>
  ));

  const renderCareerTabs = () => careerTabs.map((tab, index) => (
    <EuiTab
      onClick={() => setSelectedCareerTabId(tab.id)}
      isSelected={tab.id === selectedCareerTabId}
      disabled={tab.disabled}
      key={index}>
      {tab.name}
    </EuiTab>
  ));

  return (
    <>
      <div className="dialog-overlay is-hidden"/>
      <div className="mobile-nav-backdrop">
        <div className="mobile-nav">
          <a className="mobile-nav-logo" href="https://www.djordjes.com" title="Djordje Stojiljkovic">Djordje<br/>Stojiljkovic</a>
          <button className="mobile-nav-close"/>
          <nav className="mobile-nav-links">
            <a className="mobile-nav-link" href="/" title="Home"><span>Home</span></a>
            <a className="mobile-nav-link" href="/" title="About"><span>About</span></a>
            <a className="mobile-nav-link" href="/" title="Reviews"><span>Reviews</span></a>
            <a className="mobile-nav-link" href="/" title="Art"><span>Art</span></a>
            <a className="mobile-nav-link" href="/" title="Blog"><span>Blog</span></a>
            <a className="mobile-nav-link" href="/" title="Contact"><span>Contact</span></a>
          </nav>
        </div>
      </div>
      <header className="header is-transparent">
        <div className="container">
          <a className="header-logo" href="https://www.djordjes.com" title="Djordje Stojiljkovic">Djordje
            Stojiljkovic</a>
          <nav className="header-nav">
            <a className="header-nav-link" href="/" title="Home"><span>Home</span></a>
            <a className="header-nav-link" href="/" title="About"><span>About</span></a>
            <a className="header-nav-link" href="/" title="Reviews"><span>Reviews</span></a>
            <a className="header-nav-link" href="/" title="Art"><span>Art</span></a>
            <a className="header-nav-link" href="/" title="Blog"><span>Blog</span></a>
            <a className="header-nav-link" href="/" title="Contact"><span>Contact</span></a>
          </nav>
          <div className="header-right">
            <a className="header-contact"
               href="https://www.djordjes.com/cdn-cgi/l/email-protection#84ece1e8e8ebc4eee1f7f7e1f2e5eae0ebf6e1eaaae7ebe9"
               title="Get in touch">Get in touch</a>
          </div>
          <button className="header-hamburger"/>
        </div>
      </header>
      <div className="hero">
        <div className="container">
          <div className="hero-intro">
            <h5>Hello!</h5>
            <h4>I&#x27;m Djordje Stojiljkovic</h4>
            <p>Full Stack Software Developer. Passionate about clean code, software: architecture, design practices,
              principles, paradigms & concepts.
            </p>
          </div>
          <div className="hero-media">
            <h5>Sharon Hershon, Sr. Computer Scientist at Adobe:</h5>
            <h4>&quot;Djordje wrangled our UI requirements with minimal guidance and didn't hesitate to jump into
              server-side work. His designs were always elegant and creative. Djordje is naturally curious, takes pride
              in
              his work and is fearless, all traits that exemplify the best engineers. I wholeheartedly recommend Djordje
              and would not hesitate to hire him for the most challenging projects.&quot;</h4>
          </div>
        </div>
      </div>
      <div className="quote">
        <div className="container">
          <span className="quote-scroll">Scroll</span>
          <h2>A constant tendency for improving, both in hard and soft skills, especially the ones useful for the
            improvement of the team and the company I am working for.</h2>
        </div>
      </div>
      <div className="homepage-main">
        <div className="homepage-articles">
          <div className="container is-small is-m">
            <p className="lead margin50">Curious about what I do?</p>
            <div className="about-h5">
              <p className="about-p">Full Stack Software Developer with 7+ years of experience in the industry, doing
                photography for 8 years now, adrenaline junkie, music addict.</p>
              <div style={euiStyles}>
                <EuiTabs display="condensed">{renderTabs()}</EuiTabs>
              </div>
              <div className="jsx-2202876063 logos">
                <div className="jsx-2202876063 logo"><a
                  href="/elasticon/conf/2016/sf/dude-where-are-my-messages-message-analytics-at-netflix?elektra=home&amp;storm=logo-bar"><img
                  src="https://static-www.elastic.co/v3/assets/bltefdd0b53724fa2ce/blt0be4c202c53a151b/5f32ba7a48d3b57cb9749aa9/logohome-netflix.svg"
                  alt="Netflix Logo" className="jsx-2202876063 img-fluid"/></a></div>
                <div className="jsx-2202876063 logo"><a
                  href="/elasticon/conf/2017/sf/powering-uber-marketplace-real-time-data-needs-with-elasticsearch?elektra=home&amp;storm=logo-bar"><img
                  src="https://static-www.elastic.co/v3/assets/bltefdd0b53724fa2ce/blt807449107d226e2c/5f32ba88d9a24d7c67e50819/logohome-uber.svg"
                  alt="Uber Logo" className="jsx-2202876063 img-fluid"/></a></div>
                <div className="jsx-2202876063 logo"><a
                  href="/elasticon/conf/2017/sf/security-at-slack?elektra=home&amp;storm=logo-bar"><img
                  src="https://static-www.elastic.co/v3/assets/bltefdd0b53724fa2ce/blt377031d153fa9bbd/5f32ba90327a6201d7ebae22/logohome-slack.svg"
                  alt="Slack Logo" className="jsx-2202876063 img-fluid"/></a></div>
                <div className="jsx-2202876063 logo"><a href="/customers/twilio?elektra=home&amp;storm=logo-bar"><img
                  src="https://static-www.elastic.co/v3/assets/bltefdd0b53724fa2ce/blt3b5ac9082fc8cdb7/5f32ba979af97004e7f64138/logohome-twilio.svg"
                  alt="Twilio Logo" className="jsx-2202876063 img-fluid"/></a></div>
                <div className="jsx-2202876063 logo"><a
                  href="/elasticon/conf/2018/sf/monitor-your-cloud-environment-with-the-logstash-azure-monitoring-module?elektra=home&amp;?storm=logo-bar"><img
                  src="https://static-www.elastic.co/v3/assets/bltefdd0b53724fa2ce/bltadbe0f2aa60f3388/5f32baa07ca22b018aed88f1/logohome-microsoft.svg"
                  alt="Microsoft Logo" className="jsx-2202876063 img-fluid"/></a></div>
              </div>
            </div>

            <p className="lead margin50">Curious about my career?</p>
            <div className="about-h5">
              <p className="about-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum non magna et ultrices. Sed sapien sem, semper id dignissim non, blandit ut sem. Cras scelerisque est vel enim elementum gravida. Aenean blandit felis ut magna rutrum, nec efficitur eros efficitur. Cras dapibus tellus nec pellentesque feugiat. Morbi mollis convallis massa, eu laoreet lorem interdum vitae. Donec ex risus, dapibus sed molestie in, sagittis non urna. Ut efficitur pharetra tellus vitae gravida. Mauris dapibus metus ac sapien vehicula fermentum sed quis nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi porttitor arcu ac pretium faucibus.</p>
              <div style={euiStyles}>
                <EuiTabs display="condensed">{renderCareerTabs()}</EuiTabs>
              </div>
              <div style={euiStyles}>
                <EuiStepsHorizontal style={{ width: 1170 }} steps={careerSteps} />
              </div>
            </div>
            <div className="container">
              <div className="category-items-slider">
                <div className="category-items js-slider" data-slider="1">
                  <a className="category-item is-yellow" href="rank-higher-on-google/index.html"
                     title="Rank Higher on Google">
                    <h6 className="item-subtitle">Mar 28, 2020</h6>
                    <h5 className="item-name">Rank Higher on Google</h5>
                    <span className="item-view">View article</span>
                  </a>
                  <a className="category-item is-yellow" href="what-is-a-hackathon/index.html"
                     title="What is a Hackathon? The Meaning and Two Practical Examples.">
                    <h6 className="item-subtitle">Mar 28, 2020</h6>
                    <h5 className="item-name">What is a Hackathon? The Meaning and Two Practical Examples.</h5>
                    <span className="item-view">View article</span>
                  </a>
                  <a className="category-item is-yellow" href="brainstorming-methods/index.html"
                     title="Learn all the brainstorming methods to organize a brainstorming session">
                    <h6 className="item-subtitle">Mar 25, 2020</h6>
                    <h5 className="item-name">Learn all the brainstorming methods to organize a brainstorming
                      session</h5>
                    <span className="item-view">View article</span>
                  </a>
                </div>
              </div>
              <div className="slider-dots js-slider-dots" data-slider="1"/>
            </div>
          </div>
          <div className="contact">
            <div className="container is-small">
              <h2 className="contact-title">
                Get in touch
                <a className="contact-email"
                   href="https://www.djordjes.com/cdn-cgi/l/email-protection#7a121f1616153a101f09091f0c1b141e15081f1454191517"><span>hello@djordjes.com</span></a>
              </h2>
              <p className="contact-intro">Get in touch through social media, email me or complete this form and I will
                reach out.</p>
              <form className="contact-form js-contact-form" method="post" action="https://api.djordjes.com/contact">
                <div className="contact-form-row">
                  <div className="contact-form-field">
                    <input className="contact-form-input" type="text" name="name" placeholder="Name"/>
                    <span className="contact-form-message">Please enter your name</span>
                  </div>
                  <div className="contact-form-field">
                    <input className="contact-form-input" type="email" name="email" placeholder="Email"/>
                    <span className="contact-form-message">Email address is invalid, please correct</span>
                  </div>
                </div>
                <div className="contact-form-field">
                  <textarea className="contact-form-input" name="message" placeholder="Message"/>
                  <span className="contact-form-message">Please enter your message</span>
                </div>
                <div className="contact-form-actions">
                  <input className="footer-input" type="hidden" name="origin_url" value="https://www.djordjes.com/"/>
                  <button className="contact-form-submit">Submit</button>
                  <div className="contact-form-social">
                    <a className="contact-form-social-link is-facebook"
                       href="https://facebook.com/djordjestojilljkovic.39" title="Facebook" target="_blank"/>
                    <a className="contact-form-social-link is-twitter" href="https://twitter.com/djordjes"
                       title="Twitter" target="_blank"/>
                    <a className="contact-form-social-link is-skype" href="skype:djordjes?chat" title="Skype"
                       target="_blank"/>
                    <a className="contact-form-social-link is-linkedin" href="https://linkedin.com/in/djordjes"
                       title="LinkedIn" target="_blank"/>
                  </div>
                  <a className="contact-email"
                     href="https://www.djordjes.com/cdn-cgi/l/email-protection#6e060b0202012e040b1d1d0b180f000a011c0b00400d0103">
                    <span>hello@djordjes.com</span>
                  </a>
                </div>
              </form>
            </div>
            <div className="contact-popup js-contact-popup">
              <div className="contact-popup-body">
                <h2 className="contact-popup-title">Thank you!</h2>
                <p className="contact-popup-text">I have received your message and will be in touch very soon, thank you
                  for your interest.</p>
                <button className="contact-popup-button js-contact-popup-close">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="container is-small">
          <div className="footer-left">
            <h2>Social</h2>
            <div className="footer-social-links">
              <a className="footer-social-link is-facebook" href="https://facebook.com/djordjes.39" title="Facebook"
                 target="_blank"><span>Facebook</span></a>
              <a className="footer-social-link is-skype" href="skype:djordjes?chat" title="Skype"
                 target="_blank"><span>Skype</span></a>
              <a className="footer-social-link is-twitter" href="https://twitter.com/djordjes" title="Twitter"
                 target="_blank"><span>Twitter</span></a>
              <a className="footer-social-link is-linkedin" href="https://linkedin.com/in/djordjes" title="LinkedIn"
                 target="_blank"><span>LinkedIn</span></a>
            </div>
            <h2>Contact</h2>
            <p className="is-contact">
              <a href="https://www.djordjes.com/cdn-cgi/l/email-protection"
                 className="__cf_email__">hello@djordjes.com</a><br/>
              Serbia<br/>11000 Belgrade
            </p>
          </div>
          <div className="footer-right">
            <h2>Join my email list</h2>
            <p>Would you like to stay informed about new content, ideas and engagements? Sign up for my email list!</p>
            <form className="footer-form js-newsletter-form" method="post" action="https://api.djordjes.com/newsletter">
              <span className="footer-message js-message">Please enter a valid email address</span>
              <input className="footer-input" type="hidden" name="origin_url" value="https://www.djordjes.com/"/>
              <input className="footer-input" type="email" name="email" placeholder="Your email address"/>
              <button className="footer-submit">Submit</button>
            </form>
            <h2>Partner with me</h2>
            <p>I&#x27;m always excited to discuss new opportunities for growth or business partnership. Feel free to
              reach out!</p>
            <a className="footer-link"
               href="https://www.djordjes.com/cdn-cgi/l/email-protection#d9b1bcb5b5b699b3bcaaaabcafb8b7bdb6abbcb7f7bab6b4"
               title="Get in touch">Get in touch</a>
          </div>
        </div>
        <div className="footer-popup js-newsletter-popup">
          <div className="footer-popup-body">
            <h2 className="footer-popup-title">Thank you!</h2>
            <p className="footer-popup-text">Your email has been added to my list and I will keep you informed about
              industry news.</p>
            <button className="footer-popup-button js-newsletter-popup-close">Close</button>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Index;
