import { Container } from 'reactstrap';
import DisplayList from '../features/display/DisplayList';
import SubHeader from '../components/SubHeader';

const HomePage = () => {
    return (
        <Container>
            <SubHeader current='home' detail={true} />
            <DisplayList />
        </Container>
    );
};

export default HomePage;