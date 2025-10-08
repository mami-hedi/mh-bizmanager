import { Button, Result } from 'antd';

import useLanguage from '@/locale/useLanguage';

const About = () => {
  const translate = useLanguage();
  return (
    <Result
      status="info"
      title={'MH Digital Solution'}
      subTitle={translate('Souhaitez-vous de l’aide pour personnaliser cette application ?')}
      extra={
        <>
          <p>
            Website : <a href="https://www.mh-digital-solution.com/">www.mh-digital-solution.com</a>{' '}
          </p>
          <p>
            GitHub :{' '}
            <a href="https://github.com/mami-hedi/mh-bizmanager/">
              https://github.com/mami-hedi/mh-bizmanager/
            </a>
          </p>
          <Button
            type="primary"
            onClick={() => {
              window.open(`https://www.mh-digital-solution.com/contact/`);
            }}
          >
            {translate('Contact us')}
          </Button>
        </>
      }
    />
  );
};

export default About;
