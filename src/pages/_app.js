import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import ContractContext from "../context/ContractContext.jsx"
import App from 'next/app';


class MyApp extends App {
  componentDidMount() {
    // Your initialization code here
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <ContractContext>
        <Component {...pageProps} />
      </ContractContext>
    );
  }
}
export default MyApp;
