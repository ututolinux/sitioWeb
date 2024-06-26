import PropTypes from "prop-types";
import { Box, Button } from "@chakra-ui/react";
import { FaDesktop, FaHeart } from 'react-icons/fa'

const ActionButtons = ({ responsive }) => {

    const mobileDisplay = { base: 'flex', lg: 'none' };
    const desktopDisplay = { base: 'none', lg: 'flex' };

    const display = responsive ? mobileDisplay : desktopDisplay;

    return (
        <Box display={display} gap={{base:2, lg:5}} justifyContent={'center'} borderTop={{ base: '1px solid #F0EDE7', lg: 'none' }} pt={{ base: 3, lg: 0 }} mx={{ base: 8, lg: 0 }}>

            <Button color={'#BBA126'} size={'sm'} borderRadius={15}>
                <FaHeart style={{ margin: '0 3px 0 0' }} />
                Colaborar
            </Button>
            <Button size={'sm'} borderRadius={15}>
                <FaDesktop style={{ margin: '0 3px 0 0' }} />
                <a href="https://ututo.org" target="_blank">Ututo Legacy</a>
            </Button>

        </Box>
    )
}
export default ActionButtons





ActionButtons.propTypes = {
    responsive: PropTypes.bool
}