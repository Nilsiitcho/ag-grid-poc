import mockData from "./mockData";

export async function getMockedData({setData, setLoading}) {
    try {
        setLoading(true);
        const data = getServerData();
        setData(data);
    } catch (e) {
        console.error("Falha ao buscar dados: ");
        console.error(e);
    } finally {
        setLoading(false);
    }

    async function getServerData() {
        const data = mockData;
        console.log(data);
        return data;
    }
}
