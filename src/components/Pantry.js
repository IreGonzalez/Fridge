const Pantry = () => {
    const ingredient = [
        {
            "id": "1",
            "name": "Pasta",
            "fresh": false,
            "unity": "kg"
        },
        {
            "id": "2",
            "name": "Arroz",
            "fresh": false,
            "unity": "kg"
        },
        {
            "id": "3",
            "name": "Tomate frito",
            "fresh": false,
            "unity": "l"
        },
        {
            "id": "4",
            "name": "Tomate",
            "fresh": true,
            "unity": "kg"
        },
        {
            "id": "5",
            "name": "Ajo",
            "fresh": true,
            "unity": "ud"
        },
        {
            "id": "6",
            "name": "Pan",
            "fresh": false,
            "unity": "kg"
        },
        {
            "id": "7",
            "name": "Atún",
            "fresh": true,
            "unity": "ud"
        },
        {
            "id": "8",
            "name": "Huevo",
            "fresh": true,
            "unity": "ud"
        }
    ];

    return (
        <section className="section__pantry">
            <h2 className="section__title">Tu despensa</h2>
            <div>
                <form className="pantry__form">
                    <select className="pantry__form--input" type="text" placeholder="Ingrediente" >
                        <option value=""></option>
                    </select>
                    {/* <input className="pantry__form--input" type="number" placeholder="Cantidad" />
                    <select className="pantry__form--input" name="unit" id="unit">
                        <option className="pantry__form--input" value="u">unidad</option>
                        <option className="pantry__form--input" value="kg">Kilogramos</option>
                        <option className="pantry__form--input" value="l">Litros</option>
                    </select>
                    <input className="pantry__form--input" type="date" name="date" id="date" placeholder="fecha de compra" /> */}
                    <input className="pantry__form--input" type="submit" value="Añadir" />
                </form>
                <table className="pantry__usually">
                    <tr className="pantry__usually--type">
                        <td>
                            Consumo
                        </td>
                        <td >
                            Ingrediente
                        </td>
                        <td>
                            Fecha
                        </td>
                    </tr>
                    <tr className="pantry__usually--element">
                    </tr>
                </table>
            </div>
        </section>
    );
};

export default Pantry;