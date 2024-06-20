import PropTypes from "prop-types";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Box } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Box minH={"50vh"}>{children}</Box>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
