


function totalCalculation({items}){
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return(
    <>
        <h3>Total Cost:{total}</h3>
    </>)
}
export default totalCalculation;