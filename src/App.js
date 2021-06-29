import React, {useState} from 'react';
import {AppBody, Button, Header, HeaderText} from "./styles";
import {getMockedData} from "./dataService";
import TableAG from "./TableAGGrid/TableAG";

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

            <br/>
            <TableAG data={data} loading={isDataLoading} height={"250px"} totalFooter/>
        </AppBody>
    );
}

export default App;

