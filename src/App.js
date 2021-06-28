import React, {useState} from 'react';
import {AppBody, Button, Header, HeaderText} from "./styles";
import {getMockedData} from "./dataService";

const App = () => {
    const [data, setData] = useState({});
    const [isDataLoading, setLoading] = useState(false);

    async function getData() {
        const options = {
            setData,
            setLoading
        }
        await getMockedData(options);
    }

    return (
        <AppBody>
            <Header>
                <HeaderText>Aplicação de teste</HeaderText>
                <Button onClick={getData}>Pesquisar</Button>
            </Header>

        </AppBody>
    );
}

export default App;

