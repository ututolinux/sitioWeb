import PropTypes from "prop-types";
import { Box, Button } from "@chakra-ui/react";
import { FaDesktop, FaHeart } from 'react-icons/fa'

const ActionButtons = ({responsive}) => {

    const mobileDisplay = ['flex', 'none'];
    const desktopDisplay = ['none', 'flex'];

    const display = responsive ? mobileDisplay : desktopDisplay;

    return (
        <Box display={display} gap={[2, 5]} justifyContent={'center'} borderTop={['1px solid #F0EDE7', 'none']} pt={[3, 0]} mx={[8, 0]}>

            <Button color={'#BBA126'} size={'sm'} borderRadius={15}>
                <FaHeart style={{ margin: '0 3px 0 0' }} />
                Colaborar
            </Button>
            <Button size={'sm'} borderRadius={15}>
                <FaDesktop style={{ margin: '0 3px 0 0' }} />
                <a href="https://ututo.org" target="_blank">Proyecto Ututo</a>
            </Button>

        </Box>
    )
}
export default ActionButtons





ActionButtons.propTypes = {
    responsive: PropTypes.bool
}