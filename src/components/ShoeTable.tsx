import "../cipostilus.css";

interface ShoeTableProps {
    model: string
    brand: string
    isLimitedEdition: boolean
    releaseYear: number
    sports: string[]
}

function ShoeTable(props: ShoeTableProps) {
    return <>
        <tr id="ciposor" style={{
            backgroundColor: props.isLimitedEdition ? "#ffd700" : "#000",
            color: props.isLimitedEdition ? "#f2f2f2" : "#333"
        }}>
            <td>{props.model}</td>
            <td className="kiemelt">{props.brand}</td>
            <td>{props.isLimitedEdition ? "Ez egy limitált kiadású modell." : "Ez egy általánosan elérhető modell."}</td>
            <td>{props.releaseYear}</td>
            <td>{props.sports.join(", ")}</td>
        </tr>
    </>
}

export default ShoeTable