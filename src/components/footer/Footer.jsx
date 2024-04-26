import { Flex, Link, Text } from '@chakra-ui/react'

const Footer = () => {
    const originalDsaSheetLink ='https://github.com/kulprb/DSA-analyzer-and-tracker.git'
    const originalAuthorLinkedInLink = "https://www.linkedin.com/in/vishnu-patel-535961205?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    const originalAuthorLinkedInLink = "https://www.linkedin.com/in/arnav-seth-902a2626a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    const originalAuthorLinkedInLink = "https://www.linkedin.com/in/prabal-jain-579ab8179/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BJKRaq2fwS5KKa0fkVJUFLA%3D%3D"   
    const gitHubLink = 'https://dsa-analyzer-and-tracker.vercel.app/'

    return (
        <Flex
            className={'footer'}
            bg={'footerBg'}
            w={'100vw'}
            px={4}
            py={1}
            flexGrow={'0'}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            userSelect={'none'}
        >
            <Text
                fontWeight={'md'}
                fontSize={'xs'}
                fontFamily={'customFamily'}
                fontStyle={'normal'}
                color={'secondaryColor'}
                textAlign={'center'}
            >
                A Personal web-based progress tracker based on{' '}
                {
                    <a
                        href={originalDsaSheetLink}
                        target={'_blank'}
                        rel="noreferrer"
                    >
                        <b>A2Z DSA Sheet</b>
                    </a>
                }{' '}
                by{' '}
                {
                    <a
                        href={originalAuthorLinkedInLink}
                        target={'_blank'}
                        rel="noreferrer"
                    >
                        <b>Striver</b>
                    </a>
                }
                .
            </Text>

            <Link
                href={gitHubLink}
                target={'_blank'}
                _hover={{}}
                display={{ base: 'none', md: 'flex' }}
            >
                <Text
                    w={'fit-content'}
                    h={'fit-content'}
                    px={4}
                    py={1}
                    bg={'secondaryColor'}
                    borderRadius={'16px'}
                    fontWeight={'lg'}
                    fontSize={'xs'}
                    fontFamily={'customFamily'}
                    fontStyle={'normal'}
                    color={'defaultColor'}
                >
                    This Project
                </Text>
            </Link>
        </Flex>
    )
}

export default Footer
