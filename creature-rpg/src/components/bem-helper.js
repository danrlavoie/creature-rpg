import BEMHelper from 'react-bem-helper';

const NAMESPACE = 'crpg';

const createBEMHelper = ({ name, outputIsString }) => {
    return new BEMHelper({
      prefix: `${NAMESPACE}_c_`,
      name,
      outputIsString,
    });
  };
  
  export default createBEMHelper;
